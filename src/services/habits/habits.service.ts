import { Injectable, computed, inject, signal } from '@angular/core';
import { EChartsCoreOption } from 'echarts/core';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { BalanceService } from '../balance/balance.service';
import { Habit, HabitCompletion, HabitGroup } from '../../models/habit.model';
import {
  calculateMasteryProgress,
  calculateSticks,
  getCompletionScoreMultiplier,
  getHabitPointsPerDay,
  getLastNDays,
} from '../../utils/habit.utils';
import { getWeekStart, toLocalDateString } from '../../utils/date.utils';

export const OTHERS_GROUP_ID = 'others';

const OTHERS_GROUP: HabitGroup = {
  id: OTHERS_GROUP_ID,
  name: 'Others',
  createdDate: '2000-01-01',
};

@Injectable({ providedIn: 'root' })
export class HabitsService {
  private readonly storage = inject(LocalStorageService);
  private readonly balance = inject(BalanceService);

  private readonly _groups = signal<HabitGroup[]>(this.storage.get('habitGroups') ?? []);
  private readonly _habits = signal<Habit[]>(this.storage.get('habits') ?? []);
  private readonly _completions = signal<HabitCompletion[]>(
    this.storage.get('habitCompletions') ?? [],
  );

  readonly groups = this._groups.asReadonly();
  readonly habits = this._habits.asReadonly();
  readonly completions = this._completions.asReadonly();

  readonly activeHabits = computed(() => this._habits().filter(h => !h.isMastered && !h.isArchived));
  readonly masteredHabits = computed(() => this._habits().filter(h => h.isMastered && !h.isArchived));
  readonly archivedHabits = computed(() => this._habits().filter(h => h.isArchived));

  readonly habitsByGroup = computed(() => {
    const map: Record<string, Habit[]> = {};
    for (const h of this.activeHabits()) {
      if (!map[h.groupId]) map[h.groupId] = [];
      map[h.groupId].push(h);
    }
    return map;
  });

  readonly archivedHabitsByGroup = computed(() => {
    const map: Record<string, Habit[]> = {};
    for (const h of this.archivedHabits()) {
      if (!map[h.groupId]) map[h.groupId] = [];
      map[h.groupId].push(h);
    }
    return map;
  });

  readonly miniChartOptions = computed<EChartsCoreOption>(() => {
    const today = new Date();
    const days = getLastNDays(today, 7);
    const ptsPerDay = getHabitPointsPerDay(this._completions(), days[0], days[days.length - 1]);
    const values = days.map(d => ptsPerDay[d] ?? 0);
    const labels = days.map(d => {
      const date = new Date(d + 'T00:00:00');
      return date.toLocaleDateString('en', { weekday: 'short', day: 'numeric' });
    });

    return {
      grid: { left: 48, right: 8, top: 8, bottom: 48 },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any[]) =>
          `${params[0].axisValue}<br/>Habit pts: <b>${params[0].value}</b>`,
      },
      xAxis: {
        type: 'category',
        data: labels,
        axisLabel: { rotate: 40, fontSize: 11 },
      },
      yAxis: { type: 'value', name: 'pts', nameTextStyle: { fontSize: 11 } },
      series: [
        {
          type: 'bar',
          data: values,
          barMinHeight: 1,
          itemStyle: { color: '#81C784' },
        },
      ],
    };
  });

  constructor() {
    // Ensure "Others" group always exists
    if (!this._groups().some(g => g.id === OTHERS_GROUP_ID)) {
      const withOthers = [...this._groups(), OTHERS_GROUP];
      this._groups.set(withOthers);
      this.storage.set('habitGroups', withOthers);
    }
  }

  // ── Groups ─────────────────────────────────────────────────────────────────

  addGroup(name: string): void {
    const group: HabitGroup = { id: uuidv4(), name, createdDate: toLocalDateString(new Date()) };
    this._groups.update(all => [...all, group]);
    this.storage.set('habitGroups', this._groups());
  }

  updateGroup(id: string, name: string): void {
    this._groups.update(all => all.map(g => (g.id === id ? { ...g, name } : g)));
    this.storage.set('habitGroups', this._groups());
  }

  deleteGroup(id: string): void {
    if (id === OTHERS_GROUP_ID) return; // predefined group, cannot delete
    // Move habits from this group to "Others"
    this._habits.update(all =>
      all.map(h => (h.groupId === id ? { ...h, groupId: OTHERS_GROUP_ID } : h)),
    );
    this.storage.set('habits', this._habits());
    this._groups.update(all => all.filter(g => g.id !== id));
    this.storage.set('habitGroups', this._groups());
  }

  // ── Habits ─────────────────────────────────────────────────────────────────

  addHabit(
    data: Omit<Habit, 'id' | 'isMastered' | 'masteryRewardClaimed' | 'createdDate' | 'isArchived'>,
    isArchived = false,
  ): void {
    const habit: Habit = {
      ...data,
      id: uuidv4(),
      isMastered: false,
      masteryRewardClaimed: false,
      isArchived,
      createdDate: toLocalDateString(new Date()),
    };
    this._habits.update(all => [...all, habit]);
    this.storage.set('habits', this._habits());
  }

  updateHabit(id: string, data: Partial<Omit<Habit, 'id' | 'createdDate'>>): void {
    this._habits.update(all => all.map(h => (h.id === id ? { ...h, ...data } : h)));
    this.storage.set('habits', this._habits());
  }

  deleteHabit(id: string, keepPoints: boolean): void {
    if (!keepPoints) {
      const totalPts = this._completions()
        .filter(c => c.habitId === id)
        .reduce((sum, c) => sum + c.pointsEarned, 0);
      if (totalPts > 0) this.balance.removeSessionPoints(totalPts);
    }
    this._completions.update(all => all.filter(c => c.habitId !== id));
    this.storage.set('habitCompletions', this._completions());
    this._habits.update(all => all.filter(h => h.id !== id));
    this.storage.set('habits', this._habits());
  }

  // ── Completions ────────────────────────────────────────────────────────────

  toggleCompletion(habitId: string, date: string): void {
    const existing = this._completions().find(
      c => c.habitId === habitId && c.date === date,
    );

    if (existing) {
      // Uncheck: remove completion and deduct points
      this.balance.removeSessionPoints(existing.pointsEarned);
      this._completions.update(all => all.filter(c => c.id !== existing.id));
      this.storage.set('habitCompletions', this._completions());
      // Re-evaluate mastery after removal
      this.evaluateMastery(habitId);
    } else {
      // Check: calculate sticks and points, add completion
      const habit = this._habits().find(h => h.id === habitId);
      if (!habit || habit.isMastered) return;

      const sticks = calculateSticks(habitId, this._completions(), habit, new Date(date + 'T00:00:00'));
      const pointsEarned = Math.round(habit.basePoints * (1 + sticks * 0.1));

      const completion: HabitCompletion = { id: uuidv4(), habitId, date, pointsEarned };
      this._completions.update(all => [...all, completion]);
      this.storage.set('habitCompletions', this._completions());

      this.balance.addSessionPoints(pointsEarned);
      this.evaluateMastery(habitId);
    }
  }

  getSticks(habitId: string, referenceDate?: Date): number {
    const habit = this._habits().find(h => h.id === habitId);
    if (!habit) return 0;
    return calculateSticks(habitId, this._completions(), habit, referenceDate ?? new Date());
  }

  getMasteryProgress(habit: Habit): { percent: number; isMastered: boolean } {
    return calculateMasteryProgress(habit, this._completions(), new Date());
  }

  isCompleted(habitId: string, date: string): boolean {
    return this._completions().some(c => c.habitId === habitId && c.date === date);
  }

  getCompletion(habitId: string, date: string): HabitCompletion | undefined {
    return this._completions().find(c => c.habitId === habitId && c.date === date);
  }

  completeWithScore(habitId: string, date: string, completionScore: number): void {
    const habit = this._habits().find(h => h.id === habitId);
    if (!habit || habit.isMastered) return;
    if (this._completions().some(c => c.habitId === habitId && c.date === date)) return;

    const sticks = calculateSticks(habitId, this._completions(), habit, new Date(date + 'T00:00:00'));
    const scoreMultiplier = getCompletionScoreMultiplier(completionScore);
    const pointsEarned = Math.round(habit.basePoints * scoreMultiplier * (1 + sticks * 0.1));

    const completion: HabitCompletion = { id: uuidv4(), habitId, date, pointsEarned, completionScore };
    this._completions.update(all => [...all, completion]);
    this.storage.set('habitCompletions', this._completions());

    this.balance.addSessionPoints(pointsEarned);
    this.evaluateMastery(habitId);
  }

  weeklyCompletionCount(habitId: string): number {
    const today = new Date();
    const weekStartStr = toLocalDateString(getWeekStart(today));
    const todayStr = toLocalDateString(today);
    return this._completions().filter(
      c => c.habitId === habitId && c.date >= weekStartStr && c.date <= todayStr,
    ).length;
  }

  archiveHabit(id: string): void {
    this.updateHabit(id, { isArchived: true });
  }

  unarchiveHabit(id: string): void {
    this.updateHabit(id, { isArchived: false });
  }

  resetProgress(id: string): void {
    this._completions.update(all => all.filter(c => c.habitId !== id));
    this.storage.set('habitCompletions', this._completions());
    this.updateHabit(id, { isMastered: false });
  }

  // ── Mastery ────────────────────────────────────────────────────────────────

  claimMasteryReward(habitId: string, amount: number): void {
    this.balance.addSessionPoints(amount);
    this.updateHabit(habitId, { masteryRewardClaimed: true });
  }

  unmaster(habitId: string): void {
    this.updateHabit(habitId, { isMastered: false });
  }

  // ── Private ────────────────────────────────────────────────────────────────

  private evaluateMastery(habitId: string): void {
    const habit = this._habits().find(h => h.id === habitId);
    if (!habit || habit.isMastered) return;

    const { isMastered } = calculateMasteryProgress(habit, this._completions(), new Date());
    if (isMastered) {
      this.updateHabit(habitId, { isMastered: true });
    }
  }
}
