import { Injectable, computed, inject, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { BalanceService } from '../balance/balance.service';
import { VacationRecord, VacationTransaction } from '../../models/vacation.model';
import { toLocalDateString } from '../../utils/date.utils';
import { calculateSessionScore } from '../../utils/scoring.utils';
import { sessionRecordsSchema } from '../../models/session.model';
import { habitCompletionsSchema } from '../../models/habit.model';
import { taskClaimRecordsSchema } from '../../models/project.model';

@Injectable({ providedIn: 'root' })
export class VacationService {
  private readonly storage = inject(LocalStorageService);
  private readonly balance = inject(BalanceService);

  // ── State ───────────────────────────────────────────────────────────────────

  private readonly _balance = signal<number>(
    this.storage.get('vacationBalance') ?? 0,
  );
  private readonly _records = signal<VacationRecord[]>(
    this.storage.get('vacationRecords') ?? [],
  );
  private readonly _transactions = signal<VacationTransaction[]>(
    this.storage.get('vacationTransactions') ?? [],
  );

  readonly vacationBalance = this._balance.asReadonly();
  readonly vacationRecords = this._records.asReadonly();
  readonly vacationTransactions = this._transactions.asReadonly();

  /** Set of all YYYY-MM-DD strings that are active vacation days */
  readonly vacationDays = computed<Set<string>>(() => {
    const days = new Set<string>();
    for (const r of this._records()) {
      if (r.status === 'cancelled') continue;
      let cur = new Date(r.startDate + 'T00:00:00');
      const end = new Date(r.endDate + 'T00:00:00');
      while (cur <= end) {
        days.add(toLocalDateString(cur));
        cur.setDate(cur.getDate() + 1);
      }
    }
    return days;
  });

  readonly isVacationDay = (date: string) => this.vacationDays().has(date);

  /** Records that are pending feedback (end date passed, not yet reviewed) */
  readonly pendingFeedbacks = computed<VacationRecord[]>(() =>
    this._records().filter(r => r.status === 'feedback_pending'),
  );

  /** Records that are still pending (end date not yet passed — can be undone) */
  readonly pendingRecords = computed<VacationRecord[]>(() =>
    this._records().filter(r => r.status === 'pending'),
  );

  // ── Settings ────────────────────────────────────────────────────────────────

  readonly chanceDivisor = signal<number>(
    this.storage.get('vacationChanceDivisor') ?? 10000,
  );
  readonly maxChancePct = signal<number>(
    this.storage.get('vacationMaxChancePct') ?? 5,
  );
  readonly streakEnabled = signal<boolean>(
    this.storage.get('vacationStreakEnabled') ?? true,
  );

  setChanceDivisor(v: number): void {
    this.chanceDivisor.set(v);
    this.storage.set('vacationChanceDivisor', v);
  }
  setMaxChancePct(v: number): void {
    this.maxChancePct.set(v);
    this.storage.set('vacationMaxChancePct', v);
  }
  setStreakEnabled(v: boolean): void {
    this.streakEnabled.set(v);
    this.storage.set('vacationStreakEnabled', v);
  }

  /**
   * Set to true when a random vacation day is earned during a completion.
   * Components can effect(() => ...) on this to show the reward dialog.
   */
  readonly randomRewardPending = signal(false);

  clearRandomReward(): void {
    this.randomRewardPending.set(false);
  }

  // ── Avg pts/day (last 30 non-zero days) ─────────────────────────────────────

  avgPtsPerDay30(): number {
    const today = toLocalDateString(new Date());

    // Read raw data directly from storage to avoid circular service deps
    const sessionRecords = this.storage.get('sessionRecords') ?? [];
    const habitCompletions = this.storage.get('habitCompletions') ?? [];
    const claimRecords = this.storage.get('taskClaimRecords') ?? [];

    // Build a map of date → total pts
    const ptsPerDay: Record<string, number> = {};

    for (const r of sessionRecords) {
      const dateStr: string = (r as any).startDate;
      if (!dateStr) continue;
      const pts = calculateSessionScore((r as any).sessionMinutes, (r as any).flowScore);
      ptsPerDay[dateStr] = (ptsPerDay[dateStr] ?? 0) + Math.round(pts);
    }
    for (const c of habitCompletions) {
      const dateStr: string = (c as any).date;
      if (!dateStr) continue;
      ptsPerDay[dateStr] = (ptsPerDay[dateStr] ?? 0) + ((c as any).pointsEarned ?? 0);
    }
    for (const r of claimRecords) {
      const dateStr: string = (r as any).date;
      if (!dateStr) continue;
      ptsPerDay[dateStr] = (ptsPerDay[dateStr] ?? 0) + ((r as any).points ?? 0);
    }

    // Also count vacation days
    for (const rec of this._records()) {
      if (rec.status === 'cancelled') continue;
      let cur = new Date(rec.startDate + 'T00:00:00');
      const end = new Date(rec.endDate + 'T00:00:00');
      while (cur <= end) {
        const d = toLocalDateString(cur);
        ptsPerDay[d] = (ptsPerDay[d] ?? 0) + (rec.avgPtsUsed ?? 0);
        cur.setDate(cur.getDate() + 1);
      }
    }

    // Take the last 30 non-zero days up to and including today
    const nonZeroDays = Object.entries(ptsPerDay)
      .filter(([d, pts]) => d <= today && pts > 0)
      .sort(([a], [b]) => (a < b ? 1 : -1))
      .slice(0, 30);

    if (nonZeroDays.length === 0) return 0;
    const total = nonZeroDays.reduce((s, [, pts]) => s + pts, 0);
    return Math.round(total / nonZeroDays.length);
  }

  // ── Declare / Undo ───────────────────────────────────────────────────────────

  /**
   * Declare vacation days. Spends vacationBalance, adds avg pts per day.
   * Returns false if insufficient balance.
   */
  declareVacation(startDate: string, endDate: string): boolean {
    const daysCount = this.countDays(startDate, endDate);
    if (this._balance() < daysCount) return false;

    const avg = this.avgPtsPerDay30();
    const ptsAwarded = avg * daysCount;

    const record: VacationRecord = {
      id: uuidv4(),
      startDate,
      endDate,
      daysCount,
      ptsAwarded,
      avgPtsUsed: avg,
      status: 'pending',
      feedbackScore: null,
      feedbackAdjustment: null,
      declaredAt: new Date().toISOString(),
    };

    this._records.update(all => [...all, record]);
    this.saveRecords();

    // Spend vacation days
    this.addTransaction({
      type: 'spent',
      amount: -daysCount,
      relatedRecordId: record.id,
    });
    this.adjustBalance(-daysCount);

    // Award points
    this.balance.adjustPoints(ptsAwarded);

    return true;
  }

  /**
   * Undo a pending vacation (before feedback dialog).
   * Reverses points and returns vacation days to balance.
   */
  undoVacation(recordId: string): void {
    const record = this._records().find(r => r.id === recordId);
    if (!record || record.status !== 'pending') return;

    // Reverse points
    this.balance.adjustPoints(-record.ptsAwarded);

    // Return vacation days
    this.addTransaction({
      type: 'returned',
      amount: record.daysCount,
      relatedRecordId: recordId,
    });
    this.adjustBalance(record.daysCount);

    this._records.update(all => all.filter(r => r.id !== recordId));
    this.saveRecords();
  }

  /**
   * Cancel vacation from within the feedback dialog.
   * Reverses original pts + any pending adjustment.
   */
  cancelVacation(recordId: string): void {
    const record = this._records().find(r => r.id === recordId);
    if (!record || record.status !== 'feedback_pending') return;

    this.balance.adjustPoints(-record.ptsAwarded);

    this.addTransaction({
      type: 'returned',
      amount: record.daysCount,
      relatedRecordId: recordId,
    });
    this.adjustBalance(record.daysCount);

    this.updateRecord(recordId, { status: 'cancelled' });
  }

  /**
   * Submit vacation feedback (score 1–10).
   * Each point above/below 5 adds/removes 10% of ptsAwarded.
   */
  submitFeedback(recordId: string, score: number): void {
    const record = this._records().find(r => r.id === recordId);
    if (!record || record.status !== 'feedback_pending') return;

    const adjustment = Math.round(record.ptsAwarded * (score - 5) * 0.1);
    if (adjustment !== 0) {
      this.balance.adjustPoints(adjustment);
    }

    this.updateRecord(recordId, {
      status: 'completed',
      feedbackScore: score,
      feedbackAdjustment: adjustment,
    });
  }

  /**
   * Call on app start: move records whose end date has passed to 'feedback_pending'.
   */
  processPendingStatuses(): void {
    const today = toLocalDateString(new Date());
    let changed = false;
    const updated = this._records().map(r => {
      if (r.status === 'pending' && r.endDate < today) {
        changed = true;
        return { ...r, status: 'feedback_pending' as const };
      }
      return r;
    });
    if (changed) {
      this._records.set(updated);
      this.saveRecords();
    }
  }

  // ── Manual balance adjustments ───────────────────────────────────────────────

  addVacationDays(count: number, note?: string): void {
    this.addTransaction({ type: 'manual_add', amount: count, note });
    this.adjustBalance(count);
  }

  removeVacationDays(count: number, note?: string): void {
    this.addTransaction({ type: 'manual_remove', amount: -count, note });
    this.adjustBalance(-count);
  }

  // ── Earning vacation days ────────────────────────────────────────────────────

  earnVacationDay(type: 'earned_streak' | 'earned_random', note?: string): void {
    this.addTransaction({ type, amount: 1, note });
    this.adjustBalance(1);
  }

  /**
   * Rolls a random chance to earn a vacation day based on points earned.
   * Returns true if earned (caller should show reward dialog).
   */
  checkRandomChance(pointsEarned: number): boolean {
    const divisor = this.chanceDivisor();
    const maxPct = this.maxChancePct();
    const chance = Math.min(pointsEarned / divisor, maxPct / 100);
    if (Math.random() < chance) {
      this.earnVacationDay('earned_random');
      this.randomRewardPending.set(true);
      return true;
    }
    return false;
  }

  // ── Sunday streak check ──────────────────────────────────────────────────────

  /**
   * Returns true if today is Sunday, streak is enabled, the user has not already
   * been rewarded this week, and Mon–Sat has at least 5 days with points.
   */
  needsSundayReward(): boolean {
    if (!this.streakEnabled()) return false;
    const today = new Date();
    if (today.getDay() !== 0) return false; // 0 = Sunday

    const lastReward = this.storage.get('vacationLastSundayRewardDate');
    const todayStr = toLocalDateString(today);
    if (lastReward === todayStr) return false;

    return this.checkWeekStreak(today);
  }

  claimSundayReward(): void {
    const todayStr = toLocalDateString(new Date());
    this.storage.set('vacationLastSundayRewardDate', todayStr);
    this.earnVacationDay('earned_streak', 'Mon–Sat streak reward');
  }

  private checkWeekStreak(sunday: Date): boolean {
    const sessionRecords = this.storage.get('sessionRecords') ?? [];
    const habitCompletions = this.storage.get('habitCompletions') ?? [];
    const claimRecords = this.storage.get('taskClaimRecords') ?? [];

    // Mon = sunday - 6, Sat = sunday - 1
    const monDate = new Date(sunday);
    monDate.setDate(monDate.getDate() - 6);
    const satDate = new Date(sunday);
    satDate.setDate(satDate.getDate() - 1);

    const monStr = toLocalDateString(monDate);
    const satStr = toLocalDateString(satDate);

    const ptsPerDay: Record<string, number> = {};

    for (const r of sessionRecords) {
      const d: string = (r as any).startDate;
      if (d >= monStr && d <= satStr) {
        ptsPerDay[d] = (ptsPerDay[d] ?? 0) + 1;
      }
    }
    for (const c of habitCompletions) {
      const d: string = (c as any).date;
      if (d >= monStr && d <= satStr) {
        ptsPerDay[d] = (ptsPerDay[d] ?? 0) + 1;
      }
    }
    for (const r of claimRecords) {
      const d: string = (r as any).date;
      if (d >= monStr && d <= satStr) {
        ptsPerDay[d] = (ptsPerDay[d] ?? 0) + 1;
      }
    }

    // Also count vacation days as active days
    for (const rec of this._records()) {
      if (rec.status === 'cancelled') continue;
      let cur = new Date(rec.startDate + 'T00:00:00');
      const end = new Date(rec.endDate + 'T00:00:00');
      while (cur <= end) {
        const d = toLocalDateString(cur);
        if (d >= monStr && d <= satStr) {
          ptsPerDay[d] = (ptsPerDay[d] ?? 0) + 1;
        }
        cur.setDate(cur.getDate() + 1);
      }
    }

    const daysWithActivity = Object.keys(ptsPerDay).filter(d => d >= monStr && d <= satStr).length;
    return daysWithActivity >= 5;
  }

  // ── Private helpers ──────────────────────────────────────────────────────────

  private countDays(startDate: string, endDate: string): number {
    const start = new Date(startDate + 'T00:00:00');
    const end = new Date(endDate + 'T00:00:00');
    return Math.round((end.getTime() - start.getTime()) / 86400000) + 1;
  }

  private adjustBalance(delta: number): void {
    const newVal = Math.max(0, this._balance() + delta);
    this._balance.set(newVal);
    this.storage.set('vacationBalance', newVal);
  }

  private addTransaction(data: Omit<VacationTransaction, 'id' | 'date'>): void {
    const tx: VacationTransaction = {
      id: uuidv4(),
      date: new Date().toISOString(),
      ...data,
    };
    this._transactions.update(all => [...all, tx]);
    this.storage.set('vacationTransactions', this._transactions());
  }

  private updateRecord(id: string, patch: Partial<VacationRecord>): void {
    this._records.update(all => all.map(r => (r.id === id ? { ...r, ...patch } : r)));
    this.saveRecords();
  }

  private saveRecords(): void {
    this.storage.set('vacationRecords', this._records());
  }
}
