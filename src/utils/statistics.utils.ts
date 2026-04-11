import { EChartsCoreOption } from 'echarts/core';
import { SessionRecord } from '../models/session.model';
import { Project, TaskClaimRecord, DEFAULT_PROJECT_COLOR } from '../models/project.model';
import { Category, DEFAULT_CATEGORY_COLOR, OTHERS_CATEGORY_ID } from '../models/category.model';
import { HabitCompletion } from '../models/habit.model';
import { calculateSessionScore } from './scoring.utils';
import { getWeekStart, toLocalDateString } from './date.utils';
import { getHabitPointsPerDay } from './habit.utils';

export type TimeRange = '7d' | '30d' | '100d' | 'all';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface Bucket {
  key: string;
  label: string;
  score: number;
  habitPts: number;
  minutesByVector: Record<string, number>;
  minutesByCategory: Record<string, number>;
}

export interface ChartData {
  buckets: Bucket[];
  activeProjects: Project[];
  activeCategories: Category[];
  isWeekly: boolean;
  filteredRecords: SessionRecord[];
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

function calcBucket(
  records: SessionRecord[],
  projectToCategoryId: Record<string, string>,
): Pick<Bucket, 'score' | 'minutesByVector' | 'minutesByCategory'> {
  const minutesByVector: Record<string, number> = {};
  const minutesByCategory: Record<string, number> = {};
  let score = 0;
  for (const r of records) {
    score += calculateSessionScore(r.sessionMinutes, r.flowScore);
    minutesByVector[r.projectId] = (minutesByVector[r.projectId] ?? 0) + r.sessionMinutes;
    const catId = projectToCategoryId[r.projectId] ?? OTHERS_CATEGORY_ID;
    minutesByCategory[catId] = (minutesByCategory[catId] ?? 0) + r.sessionMinutes;
  }
  return { score: Math.round(score), minutesByVector, minutesByCategory };
}

function buildDailyBuckets(
  records: SessionRecord[],
  start: Date,
  end: Date,
  showWeekday: boolean,
  habitPtsPerDay: Record<string, number>,
  vectorToCategoryId: Record<string, string>,
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
    const { score, minutesByVector, minutesByCategory } = calcBucket(byDate.get(key) ?? [], vectorToCategoryId);
    const habitPts = habitPtsPerDay[key] ?? 0;
    buckets.push({ key, label: formatDayLabel(cur, showWeekday), score, habitPts, minutesByVector, minutesByCategory });
    cur = addDays(cur, 1);
  }
  return buckets;
}

function buildWeeklyBuckets(
  records: SessionRecord[],
  start: Date,
  end: Date,
  habitPtsPerDay: Record<string, number>,
  vectorToCategoryId: Record<string, string>,
): Bucket[] {
  const buckets: Bucket[] = [];
  let weekStart = normDate(getWeekStart(start));
  const endNorm = normDate(end);

  while (weekStart <= endNorm) {
    const weekEnd = addDays(weekStart, 6);
    const wsStr = toLocalDateString(weekStart);
    const weStr = toLocalDateString(weekEnd);
    const weekRecs = records.filter(r => r.startDate >= wsStr && r.startDate <= weStr);
    const { score, minutesByVector, minutesByCategory } = calcBucket(weekRecs, vectorToCategoryId);
    const label = `${MONTHS[weekStart.getMonth()]} ${weekStart.getDate()}`;
    const habitPts = Object.entries(habitPtsPerDay)
      .filter(([d]) => d >= wsStr && d <= weStr)
      .reduce((sum, [, pts]) => sum + pts, 0);
    buckets.push({ key: wsStr, label, score, habitPts, minutesByVector, minutesByCategory });
    weekStart = addDays(weekStart, 7);
  }
  return buckets;
}

// ── Public API ────────────────────────────────────────────────────────────────

export function buildChartData(
  records: SessionRecord[],
  allProjects: Project[],
  allCategories: Category[],
  range: TimeRange,
  today: Date,
  habitCompletions: HabitCompletion[] = [],
): ChartData {
  const todayNorm = normDate(today);
  let startDate: Date;
  let isWeekly = false;

  const projectToCategoryId: Record<string, string> = Object.fromEntries(
    allProjects.map(p => [p.id, p.categoryId ?? OTHERS_CATEGORY_ID]),
  );

  if (range === '7d') {
    startDate = addDays(todayNorm, -6);
  } else if (range === '30d') {
    startDate = addDays(todayNorm, -29);
  } else if (range === '100d') {
    startDate = addDays(todayNorm, -99);
  } else {
    if (records.length === 0 && habitCompletions.length === 0) {
      return { buckets: [], activeProjects: [], activeCategories: [], isWeekly: false, filteredRecords: [] };
    }
    const allDates = [
      ...records.map(r => r.startDate),
      ...habitCompletions.map(c => c.date),
    ];
    const earliestStr = allDates.reduce((min, d) => (d < min ? d : min), allDates[0]);
    startDate = normDate(new Date(earliestStr));
    const spanDays = Math.ceil((todayNorm.getTime() - startDate.getTime()) / 86_400_000) + 1;
    isWeekly = spanDays > 60;
  }

  const startStr = toLocalDateString(startDate);
  const endStr = toLocalDateString(todayNorm);
  const rangeRecords = records.filter(r => r.startDate >= startStr && r.startDate <= endStr);

  const habitPtsPerDay = getHabitPointsPerDay(habitCompletions, startStr, endStr);

  const buckets = isWeekly
    ? buildWeeklyBuckets(rangeRecords, startDate, todayNorm, habitPtsPerDay, projectToCategoryId)
    : buildDailyBuckets(rangeRecords, startDate, todayNorm, range === '7d', habitPtsPerDay, projectToCategoryId);

  // Only include projects that have at least 1 minute in this range
  const usedProjectIds = new Set<string>(
    buckets.flatMap(b => Object.keys(b.minutesByVector).filter(id => b.minutesByVector[id] > 0)),
  );
  const activeProjects = allProjects.filter(p => usedProjectIds.has(p.id));

  // Only include categories that have at least 1 minute in this range
  const usedCategoryIds = new Set<string>(
    buckets.flatMap(b => Object.keys(b.minutesByCategory).filter(id => b.minutesByCategory[id] > 0)),
  );
  const activeCategories = allCategories.filter(c => usedCategoryIds.has(c.id));

  return { buckets, activeProjects, activeCategories, isWeekly, filteredRecords: rangeRecords };
}

export function toPtsOptions(data: ChartData): EChartsCoreOption {
  const { buckets } = data;
  return {
    grid: { left: 56, right: 16, top: 16, bottom: 64 },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: (params: any[]) => {
        const lines = params
          .filter((p: any) => p.value > 0)
          .map((p: any) => `${p.marker}${p.seriesName}: <b>${p.value} pts</b>`);
        const total = params.reduce((s: number, p: any) => s + (p.value as number), 0);
        return `${params[0].axisValue}<br/>${lines.join('<br/>')}<br/>Total: <b>${total} pts</b>`;
      },
    },
    xAxis: {
      type: 'category',
      data: buckets.map(b => b.label),
      axisLabel: { rotate: 40, fontSize: 11 },
    },
    yAxis: { type: 'value', name: 'pts', nameTextStyle: { fontSize: 11 } },
    legend: { bottom: 0, type: 'scroll', textStyle: { fontSize: 11 } },
    series: [
      {
        name: 'Flow pts',
        type: 'bar',
        stack: 'pts',
        data: buckets.map(b => b.score),
        barMinHeight: 1,
        itemStyle: { color: '#4FC3F7' },
      },
      {
        name: 'Habit pts',
        type: 'bar',
        stack: 'pts',
        data: buckets.map(b => b.habitPts),
        barMinHeight: 1,
        itemStyle: { color: '#81C784' },
      },
    ],
  };
}

export function toTimeOptions(data: ChartData): EChartsCoreOption {
  const { buckets, activeCategories } = data;
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
    series: activeCategories.map(c => ({
      name: c.name,
      type: 'bar',
      stack: 'time',
      data: buckets.map(b => b.minutesByCategory[c.id] ?? 0),
      itemStyle: { color: c.color || DEFAULT_CATEGORY_COLOR },
    })),
  };
}

// ── New charts ────────────────────────────────────────────────────────────────

export function toFlowScoreTrendOptions(data: ChartData): EChartsCoreOption {
  const { buckets, filteredRecords, isWeekly } = data;

  const scoresByDate = new Map<string, number[]>();
  for (const r of filteredRecords) {
    const arr = scoresByDate.get(r.startDate) ?? [];
    arr.push(r.flowScore);
    scoresByDate.set(r.startDate, arr);
  }

  const windowSize = isWeekly ? 4 : 7;
  const trendData = buckets.map((b, i) => {
    const windowBuckets = buckets.slice(Math.max(0, i - windowSize + 1), i + 1);
    const scores: number[] = windowBuckets.flatMap(wb => scoresByDate.get(wb.key) ?? []);
    return scores.length > 0
      ? +(scores.reduce((a, s) => a + s, 0) / scores.length).toFixed(1)
      : null;
  });

  const windowLabel = isWeekly ? '4-week' : '7-day';
  return {
    grid: { left: 48, right: 16, top: 16, bottom: 64 },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any[]) => {
        const val = params[0].value;
        return val != null
          ? `${params[0].axisValue}<br/>Avg flow score (${windowLabel}): <b>${val}</b>`
          : `${params[0].axisValue}<br/>No data`;
      },
    },
    xAxis: {
      type: 'category',
      data: buckets.map(b => b.label),
      axisLabel: { rotate: 40, fontSize: 11 },
    },
    yAxis: { type: 'value', name: 'score', min: 0, max: 10, nameTextStyle: { fontSize: 11 } },
    series: [{
      type: 'line',
      data: trendData,
      smooth: true,
      connectNulls: false,
      itemStyle: { color: '#ab47bc' },
      areaStyle: { color: 'rgba(171,71,188,0.1)' },
      lineStyle: { width: 2 },
      symbol: 'circle',
      symbolSize: 4,
    }],
  };
}

export function toProjectDonutOptions(data: ChartData): EChartsCoreOption {
  const { buckets, activeProjects } = data;

  const totalByProject: Record<string, number> = {};
  for (const b of buckets) {
    for (const [id, mins] of Object.entries(b.minutesByVector)) {
      totalByProject[id] = (totalByProject[id] ?? 0) + mins;
    }
  }

  const pieData = activeProjects
    .filter(p => (totalByProject[p.id] ?? 0) > 0)
    .map(p => ({
      name: `${p.icon} ${p.name}`,
      value: totalByProject[p.id],
      itemStyle: { color: p.color || DEFAULT_PROJECT_COLOR },
    }));

  return {
    tooltip: {
      trigger: 'item',
      formatter: (p: any) => `${p.name}<br/><b>${p.value} min</b> (${p.percent}%)`,
    },
    legend: { bottom: 0, type: 'scroll', textStyle: { fontSize: 11 } },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '44%'],
      data: pieData,
      label: { show: false },
      emphasis: { label: { show: true, fontSize: 13, fontWeight: 'bold' } },
    }],
  };
}

export function toTimeOfDayHeatmapOptions(data: ChartData): EChartsCoreOption {
  const { filteredRecords } = data;

  // dayIdx: 0=Mon..6=Sun, hourIdx: 0..23
  const minuteGrid: number[][] = Array.from({ length: 7 }, () => new Array(24).fill(0));

  for (const r of filteredRecords) {
    const date = new Date(r.startedAt);
    const dayIdx = (date.getDay() + 6) % 7;
    const hourIdx = date.getHours();
    minuteGrid[dayIdx][hourIdx] += r.sessionMinutes;
  }

  const heatData: [number, number, number][] = [];
  for (let d = 0; d < 7; d++) {
    for (let h = 0; h < 24; h++) {
      heatData.push([d, h, minuteGrid[d][h]]);
    }
  }

  const maxVal = Math.max(...heatData.map(item => item[2]), 1);

  return {
    tooltip: {
      formatter: (p: any) => {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        return `${days[p.data[0]]} ${p.data[1]}:00<br/><b>${p.data[2]} min</b>`;
      },
    },
    grid: { left: 48, right: 80, top: 8, bottom: 32 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      splitArea: { show: true },
      axisLabel: { fontSize: 11 },
    },
    yAxis: {
      type: 'category',
      data: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      splitArea: { show: true },
      inverse: true,
      axisLabel: { fontSize: 10 },
    },
    visualMap: {
      min: 0,
      max: maxVal,
      calculable: true,
      orient: 'vertical',
      right: 0,
      top: 'center',
      textStyle: { fontSize: 10 },
      inRange: { color: ['#e3f2fd', '#0277bd'] },
    },
    series: [{
      type: 'heatmap',
      data: heatData,
      label: { show: false },
      emphasis: { itemStyle: { shadowBlur: 6, shadowColor: 'rgba(0,0,0,0.3)' } },
    }],
  };
}

export function toDayOfWeekOptions(data: ChartData): EChartsCoreOption {
  const { filteredRecords } = data;
  const minutesByDay: number[] = new Array(7).fill(0);

  for (const r of filteredRecords) {
    const [y, m, d] = r.startDate.split('-').map(Number);
    const dayIdx = (new Date(y, m - 1, d).getDay() + 6) % 7;
    minutesByDay[dayIdx] += r.sessionMinutes;
  }

  return {
    grid: { left: 56, right: 16, top: 16, bottom: 40 },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any[]) => `${params[0].axisValue}<br/><b>${params[0].value} min</b>`,
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: { fontSize: 11 },
    },
    yAxis: { type: 'value', name: 'min', nameTextStyle: { fontSize: 11 } },
    series: [{
      type: 'bar',
      data: minutesByDay.map((value, index) => ({
        value,
        itemStyle: { color: index >= 5 ? '#ff8a65' : '#42a5f5' },
      })),
      barMinHeight: 1,
    }],
  };
}

const DURATION_BUCKETS = [
  { label: '<15 min', min: 0, max: 15 },
  { label: '15–30 min', min: 15, max: 30 },
  { label: '30–45 min', min: 30, max: 45 },
  { label: '45–60 min', min: 45, max: 60 },
  { label: '60–90 min', min: 60, max: 90 },
  { label: '90+ min', min: 90, max: Infinity },
];

export function toSessionLengthDistOptions(data: ChartData): EChartsCoreOption {
  const { filteredRecords } = data;

  const counts = DURATION_BUCKETS.map(b =>
    filteredRecords.filter(r => r.sessionMinutes >= b.min && r.sessionMinutes < b.max).length,
  );

  return {
    grid: { left: 48, right: 16, top: 16, bottom: 40 },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any[]) => `${params[0].axisValue}<br/><b>${params[0].value} sessions</b>`,
    },
    xAxis: {
      type: 'category',
      data: DURATION_BUCKETS.map(b => b.label),
      axisLabel: { fontSize: 11 },
    },
    yAxis: { type: 'value', name: 'sessions', minInterval: 1, nameTextStyle: { fontSize: 11 } },
    series: [{
      type: 'bar',
      data: counts,
      barMinHeight: 1,
      itemStyle: { color: '#66bb6a' },
    }],
  };
}

export function toScoreVsLengthOptions(data: ChartData): EChartsCoreOption {
  const { filteredRecords, activeProjects } = data;
  const projectMap = new Map(activeProjects.map(p => [p.id, p]));

  const pointsByProject = new Map<string, [number, number][]>();
  for (const r of filteredRecords) {
    const arr = pointsByProject.get(r.projectId) ?? [];
    arr.push([r.sessionMinutes, r.flowScore]);
    pointsByProject.set(r.projectId, arr);
  }

  const series = [...pointsByProject.entries()].map(([id, points]) => {
    const p = projectMap.get(id);
    return {
      name: p ? `${p.icon} ${p.name}` : id,
      type: 'scatter',
      data: points,
      symbolSize: 8,
      itemStyle: { color: p?.color || DEFAULT_PROJECT_COLOR },
    };
  });

  return {
    grid: { left: 56, right: 16, top: 16, bottom: 48 },
    tooltip: {
      trigger: 'item',
      formatter: (p: any) =>
        `${p.seriesName}<br/>Duration: <b>${p.data[0]} min</b><br/>Flow score: <b>${p.data[1]}</b>`,
    },
    legend: { bottom: 0, type: 'scroll', textStyle: { fontSize: 11 } },
    xAxis: {
      type: 'value',
      name: 'duration (min)',
      nameLocation: 'end',
      nameTextStyle: { fontSize: 11 },
    },
    yAxis: {
      type: 'value',
      name: 'flow score',
      min: 0,
      max: 10,
      nameTextStyle: { fontSize: 11 },
    },
    series,
  };
}

export function toTaskClaimsOptions(
  claimRecords: TaskClaimRecord[],
  range: TimeRange,
  today: Date,
): EChartsCoreOption {
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
    if (claimRecords.length === 0) {
      return {
        grid: { left: 56, right: 16, top: 16, bottom: 64 },
        xAxis: { type: 'category', data: [] },
        yAxis: { type: 'value', name: 'pts' },
        series: [{ type: 'bar', data: [] }],
      };
    }
    const earliestStr = claimRecords.map(c => c.date).reduce((min, d) => (d < min ? d : min));
    startDate = normDate(new Date(earliestStr));
    const spanDays = Math.ceil((todayNorm.getTime() - startDate.getTime()) / 86_400_000) + 1;
    isWeekly = spanDays > 60;
  }

  const startStr = toLocalDateString(startDate);
  const endStr = toLocalDateString(todayNorm);
  const rangeRecords = claimRecords.filter(r => r.date >= startStr && r.date <= endStr);

  if (isWeekly) {
    // Weekly buckets
    const weekBuckets: { key: string; label: string; pts: number }[] = [];
    let weekStart = normDate(getWeekStart(startDate));
    while (weekStart <= todayNorm) {
      const weekEnd = addDays(weekStart, 6);
      const wsStr = toLocalDateString(weekStart);
      const weStr = toLocalDateString(weekEnd);
      const pts = rangeRecords
        .filter(r => r.date >= wsStr && r.date <= weStr)
        .reduce((sum, r) => sum + r.points, 0);
      const label = `${MONTHS[weekStart.getMonth()]} ${weekStart.getDate()}`;
      weekBuckets.push({ key: wsStr, label, pts });
      weekStart = addDays(weekStart, 7);
    }
    return buildTaskClaimsChart(weekBuckets.map(b => b.label), weekBuckets.map(b => b.pts));
  }

  // Daily buckets
  const byDate = new Map<string, number>();
  for (const r of rangeRecords) {
    byDate.set(r.date, (byDate.get(r.date) ?? 0) + r.points);
  }

  const labels: string[] = [];
  const values: number[] = [];
  let cur = normDate(startDate);
  const showWeekday = range === '7d';
  while (cur <= todayNorm) {
    const key = toLocalDateString(cur);
    labels.push(formatDayLabel(cur, showWeekday));
    values.push(byDate.get(key) ?? 0);
    cur = addDays(cur, 1);
  }

  return buildTaskClaimsChart(labels, values);
}

function buildTaskClaimsChart(labels: string[], values: number[]): EChartsCoreOption {
  return {
    grid: { left: 56, right: 16, top: 16, bottom: 64 },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: (params: any[]) => `${params[0].axisValue}<br/>${params[0].marker}Task rewards: <b>${params[0].value} pts</b>`,
    },
    xAxis: {
      type: 'category',
      data: labels,
      axisLabel: { rotate: 40, fontSize: 11 },
    },
    yAxis: { type: 'value', name: 'pts', nameTextStyle: { fontSize: 11 } },
    series: [{
      name: 'Task rewards',
      type: 'bar',
      data: values,
      barMinHeight: 1,
      itemStyle: { color: '#ffb300' },
    }],
  };
}
