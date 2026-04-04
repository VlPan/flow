import { Habit, HabitCompletion } from '../models/habit.model';
import { getWeekStart, toLocalDateString } from './date.utils';

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

/**
 * Calculates the current stick count for a habit.
 * Sticks = individual completions in the current streak chain, capped at 7.
 * A chain breaks when a completed Mon–Sun week has fewer completions than frequency.
 */
export function calculateSticks(
  habitId: string,
  completions: HabitCompletion[],
  habit: Habit,
  today: Date,
): number {
  const habitCompletions = completions.filter(c => c.habitId === habitId);
  if (habitCompletions.length === 0) return 0;

  const todayStr = toLocalDateString(today);
  const currentWeekStart = getWeekStart(today);
  const currentWeekStartStr = toLocalDateString(currentWeekStart);

  // Count completions in current (in-progress) week
  let sticks = habitCompletions.filter(
    c => c.date >= currentWeekStartStr && c.date <= todayStr,
  ).length;

  // Walk backwards through completed weeks
  let weekStart = addDays(currentWeekStart, -7);

  while (sticks < 7) {
    const weekEnd = addDays(weekStart, 6);
    const weekStartStr = toLocalDateString(weekStart);
    const weekEndStr = toLocalDateString(weekEnd);

    // Stop if this week is entirely before the habit was created
    if (weekEndStr < habit.createdDate) break;

    const weekCompletions = habitCompletions.filter(
      c => c.date >= weekStartStr && c.date <= weekEndStr,
    ).length;

    if (weekCompletions < habit.frequency) break; // chain broken

    sticks += weekCompletions;
    weekStart = addDays(weekStart, -7);
  }

  return Math.min(sticks, 7);
}

/**
 * Calculates mastery progress for a habit.
 * Window: last 120 days or since creation, whichever is shorter.
 * Mastered when actual completions >= frequency × (windowDays / 7) × 0.9
 */
export function calculateMasteryProgress(
  habit: Habit,
  completions: HabitCompletion[],
  today: Date,
): { percent: number; isMastered: boolean } {
  const todayStr = toLocalDateString(today);
  const createdDate = new Date(habit.createdDate + 'T00:00:00');

  const todayMidnight = new Date(today);
  todayMidnight.setHours(0, 0, 0, 0);

  const daysSinceCreation = Math.floor(
    (todayMidnight.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const windowDays = Math.min(daysSinceCreation, 120);
  if (windowDays <= 0) return { percent: 0, isMastered: false };

  const windowStart = addDays(todayMidnight, -windowDays);
  const windowStartStr = toLocalDateString(windowStart);

  const expected = habit.frequency * (windowDays / 7);
  const threshold = expected * 0.9;

  const actual = completions.filter(
    c => c.habitId === habit.id && c.date >= windowStartStr && c.date <= todayStr,
  ).length;

  const percent = threshold > 0 ? Math.min((actual / threshold) * 100, 100) : 0;

  return { percent: Math.round(percent), isMastered: actual >= threshold };
}

/**
 * Returns a map of date → total habit points earned on that date.
 */
export function getHabitPointsPerDay(
  completions: HabitCompletion[],
  startDate: string,
  endDate: string,
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const c of completions) {
    if (c.date >= startDate && c.date <= endDate) {
      result[c.date] = (result[c.date] ?? 0) + c.pointsEarned;
    }
  }
  return result;
}

/**
 * Returns the last N days as YYYY-MM-DD strings, ending with today.
 */
export function getLastNDays(today: Date, n: number): string[] {
  const days: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    days.push(toLocalDateString(addDays(today, -i)));
  }
  return days;
}
