import { EChartsCoreOption } from 'echarts/core';
import { SessionRecord } from '../models/session.model';
import { FlowVector, DEFAULT_VECTOR_COLOR } from '../models/flow-vector.model';
import { calculateSessionScore } from './scoring.utils';
import { getWeekStart, toLocalDateString } from './date.utils';

export type TimeRange = '7d' | '30d' | '100d' | 'all';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface Bucket {
  key: string;
  label: string;
  score: number;
  minutesByVector: Record<string, number>;
}

export interface ChartData {
  buckets: Bucket[];
  activeVectors: FlowVector[];
  isWeekly: boolean;
}

// ── Internal helpers ──────────────────────────────────────────────────────────

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function normDate(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDayLabel(date: Date, showWeekday: boolean): string {
  const m = MONTHS[date.getMonth()];
  const d = date.getDate();
  return showWeekday ? `${WEEKDAYS[date.getDay()]} ${m} ${d}` : `${m} ${d}`;
}

function calcBucket(records: SessionRecord[]): Pick<Bucket, 'score' | 'minutesByVector'> {
  const minutesByVector: Record<string, number> = {};
  let score = 0;
  for (const r of records) {
    score += calculateSessionScore(r.sessionMinutes, r.flowScore);
    minutesByVector[r.flowVectorId] = (minutesByVector[r.flowVectorId] ?? 0) + r.sessionMinutes;
  }
  return { score: Math.round(score), minutesByVector };
}

function buildDailyBuckets(
  records: SessionRecord[],
  start: Date,
  end: Date,
  showWeekday: boolean,
): Bucket[] {
  const byDate = new Map<string, SessionRecord[]>();
  for (const r of records) {
    const arr = byDate.get(r.startDate) ?? [];
    arr.push(r);
    byDate.set(r.startDate, arr);
  }

  const buckets: Bucket[] = [];
  let cur = normDate(start);
  const endNorm = normDate(end);

  while (cur <= endNorm) {
    const key = toLocalDateString(cur);
    const { score, minutesByVector } = calcBucket(byDate.get(key) ?? []);
    buckets.push({ key, label: formatDayLabel(cur, showWeekday), score, minutesByVector });
    cur = addDays(cur, 1);
  }
  return buckets;
}

function buildWeeklyBuckets(records: SessionRecord[], start: Date, end: Date): Bucket[] {
  const buckets: Bucket[] = [];
  let weekStart = normDate(getWeekStart(start));
  const endNorm = normDate(end);

  while (weekStart <= endNorm) {
    const weekEnd = addDays(weekStart, 6);
    const wsStr = toLocalDateString(weekStart);
    const weStr = toLocalDateString(weekEnd);
    const weekRecs = records.filter(r => r.startDate >= wsStr && r.startDate <= weStr);
    const { score, minutesByVector } = calcBucket(weekRecs);
    const label = `${MONTHS[weekStart.getMonth()]} ${weekStart.getDate()}`;
    buckets.push({ key: wsStr, label, score, minutesByVector });
    weekStart = addDays(weekStart, 7);
  }
  return buckets;
}

// ── Public API ────────────────────────────────────────────────────────────────

export function buildChartData(
  records: SessionRecord[],
  allVectors: FlowVector[],
  range: TimeRange,
  today: Date,
): ChartData {
  const todayNorm = normDate(today);
  let startDate: Date;
  let isWeekly = false;

  if (range === '7d') {
    startDate = addDays(todayNorm, -6);
  } else if (range === '30d') {
    startDate = addDays(todayNorm, -29);
  } else if (range === '100d') {
    startDate = addDays(todayNorm, -99);
  } else {
    if (records.length === 0) return { buckets: [], activeVectors: [], isWeekly: false };
    const earliestStr = records.reduce(
      (min, r) => (r.startDate < min ? r.startDate : min),
      records[0].startDate,
    );
    startDate = normDate(new Date(earliestStr));
    const spanDays = Math.ceil((todayNorm.getTime() - startDate.getTime()) / 86_400_000) + 1;
    isWeekly = spanDays > 60;
  }

  const startStr = toLocalDateString(startDate);
  const endStr = toLocalDateString(todayNorm);
  const rangeRecords = records.filter(r => r.startDate >= startStr && r.startDate <= endStr);

  const buckets = isWeekly
    ? buildWeeklyBuckets(rangeRecords, startDate, todayNorm)
    : buildDailyBuckets(rangeRecords, startDate, todayNorm, range === '7d');

  // Only include vectors that have at least 1 minute in this range
  const usedIds = new Set<string>(
    buckets.flatMap(b => Object.keys(b.minutesByVector).filter(id => b.minutesByVector[id] > 0)),
  );
  const activeVectors = allVectors.filter(v => usedIds.has(v.id));

  return { buckets, activeVectors, isWeekly };
}

export function toPtsOptions(data: ChartData): EChartsCoreOption {
  const { buckets } = data;
  return {
    grid: { left: 56, right: 16, top: 16, bottom: 64 },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any[]) =>
        `${params[0].axisValue}<br/>Score: <b>${params[0].value} pts</b>`,
    },
    xAxis: {
      type: 'category',
      data: buckets.map(b => b.label),
      axisLabel: { rotate: 40, fontSize: 11 },
    },
    yAxis: { type: 'value', name: 'pts', nameTextStyle: { fontSize: 11 } },
    series: [
      {
        type: 'bar',
        data: buckets.map(b => b.score),
        barMinHeight: 1,
        itemStyle: { color: '#4FC3F7' },
      },
    ],
  };
}

export function toTimeOptions(data: ChartData): EChartsCoreOption {
  const { buckets, activeVectors } = data;
  return {
    grid: { left: 56, right: 16, top: 16, bottom: 64 },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: (params: any[]) => {
        const lines = params
          .filter((p: any) => p.value > 0)
          .map((p: any) => `${p.marker}${p.seriesName}: <b>${p.value} min</b>`);
        const total = params.reduce((s: number, p: any) => s + (p.value as number), 0);
        return `${params[0].axisValue}<br/>${lines.join('<br/>')}<br/>Total: <b>${total} min</b>`;
      },
    },
    xAxis: {
      type: 'category',
      data: buckets.map(b => b.label),
      axisLabel: { rotate: 40, fontSize: 11 },
    },
    yAxis: { type: 'value', name: 'min', nameTextStyle: { fontSize: 11 } },
    legend: {
      bottom: 0,
      type: 'scroll',
      textStyle: { fontSize: 11 },
    },
    series: activeVectors.map(v => ({
      name: `${v.icon} ${v.name}`,
      type: 'bar',
      stack: 'time',
      data: buckets.map(b => b.minutesByVector[v.id] ?? 0),
      itemStyle: { color: v.color || DEFAULT_VECTOR_COLOR },
    })),
  };
}
