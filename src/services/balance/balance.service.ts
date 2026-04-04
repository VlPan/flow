import { Injectable, inject, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { BalanceSettingsService } from '../balance-settings/balance-settings.service';
import { Reward } from '../../models/reward.model';
import { ExchangeRecord } from '../../models/exchange-record.model';
import { DailySpendingLog } from '../../models/daily-spending-log.model';
import { Redemption } from '../../models/redemption.model';
import { toLocalDateString } from '../../utils/date.utils';

@Injectable({ providedIn: 'root' })
export class BalanceService {
  private readonly storage = inject(LocalStorageService);
  private readonly settings = inject(BalanceSettingsService);

  // --- Snapshots (single source of truth for balances) ---
  private readonly _pointsEarned = signal<number>(
    this.storage.get('pointsEarned') ?? 0
  );
  private readonly _currencyBalance = signal<number>(
    this.storage.get('currencyBalance') ?? 0
  );

  // --- Audit trail (stored for history, not used for balance computation) ---
  private readonly _rewards = signal<Reward[]>(this.storage.get('rewards') ?? []);
  private readonly _exchangeRecords = signal<ExchangeRecord[]>(
    this.storage.get('exchangeRecords') ?? []
  );
  private readonly _dailySpendingLogs = signal<DailySpendingLog[]>(
    this.storage.get('dailySpendingLogs') ?? []
  );
  private readonly _redemptions = signal<Redemption[]>(
    this.storage.get('redemptions') ?? []
  );

  readonly rewards = this._rewards.asReadonly();
  readonly pointsBalance = this._pointsEarned.asReadonly();
  readonly currencyBalance = this._currencyBalance.asReadonly();

  readonly lastDailyLogDate = signal<string | null>(
    this.storage.get('lastDailyLogDate') ?? null
  );

  // --- Rewards ---

  addReward(data: Omit<Reward, 'id'>): void {
    const reward: Reward = { ...data, id: uuidv4() };
    this._rewards.update(all => [...all, reward]);
    this.storage.set('rewards', this._rewards());
  }

  updateReward(id: string, data: Partial<Omit<Reward, 'id'>>): void {
    this._rewards.update(all => all.map(r => (r.id === id ? { ...r, ...data } : r)));
    this.storage.set('rewards', this._rewards());
  }

  deleteReward(id: string): void {
    this._rewards.update(all => all.filter(r => r.id !== id));
    this.storage.set('rewards', this._rewards());
  }

  redeemReward(reward: Reward): void {
    this.adjustCurrencySnapshot(-reward.cost);
    this._redemptions.update(all => [
      ...all,
      { id: uuidv4(), rewardName: reward.name, cost: reward.cost, date: new Date().toISOString() },
    ]);
    this.storage.set('redemptions', this._redemptions());
    this.deleteReward(reward.id);
  }

  rewardFillPercent(reward: Reward): number {
    const balance = this._currencyBalance();
    if (balance <= 0 || reward.cost <= 0) return 0;
    return Math.min((balance / reward.cost) * 100, 100);
  }

  // --- Exchange ---

  exchange(points: number): void {
    const rate = this.settings.exchangeRate();
    const currencyReceived = points * rate;
    this.adjustPointsSnapshot(-points);
    this.adjustCurrencySnapshot(currencyReceived);
    this._exchangeRecords.update(all => [
      ...all,
      { id: uuidv4(), pointsExchanged: points, currencyReceived, rate, date: new Date().toISOString() },
    ]);
    this.storage.set('exchangeRecords', this._exchangeRecords());
  }

  // --- Session Points ---

  addSessionPoints(pts: number): void {
    this.adjustPointsSnapshot(Math.round(pts));
  }

  removeSessionPoints(pts: number): void {
    this.adjustPointsSnapshot(-Math.round(pts));
  }

  // --- Manual Adjustments ---

  adjustPoints(amount: number): void {
    this.adjustPointsSnapshot(amount);
  }

  adjustCurrency(amount: number): void {
    this.adjustCurrencySnapshot(amount);
  }

  // --- Daily Spending ---

  logDailySpending(basicSpending: number, nonEssentialSpending: number): void {
    const discount = this.settings.basicSpendingDiscount();
    const totalDeducted = nonEssentialSpending + basicSpending * (discount / 100);
    const today = toLocalDateString(new Date());
    this.adjustCurrencySnapshot(-totalDeducted);
    this._dailySpendingLogs.update(all => [
      ...all,
      { id: uuidv4(), date: today, basicSpending, nonEssentialSpending, totalDeducted, skipped: false },
    ]);
    this.storage.set('dailySpendingLogs', this._dailySpendingLogs());
    this.updateLastLogDate(today);
  }

  skipDailyLogs(daysCount: number): void {
    const today = toLocalDateString(new Date());
    const logs: DailySpendingLog[] = [];
    for (let i = daysCount - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      logs.push({
        id: uuidv4(),
        date: toLocalDateString(date),
        basicSpending: 0,
        nonEssentialSpending: 0,
        totalDeducted: 0,
        skipped: true,
      });
    }
    this._dailySpendingLogs.update(all => [...all, ...logs]);
    this.storage.set('dailySpendingLogs', this._dailySpendingLogs());
    this.updateLastLogDate(today);
  }

  needsDailyLog(): boolean {
    const lastDate = this.lastDailyLogDate();
    return !lastDate || lastDate < toLocalDateString(new Date());
  }

  daysSinceLastLog(): number {
    const lastDate = this.lastDailyLogDate();
    if (!lastDate) return 1;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const last = new Date(lastDate + 'T00:00:00');
    last.setHours(0, 0, 0, 0);
    return Math.max(1, Math.round((today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)));
  }

  // --- Private helpers ---

  private adjustPointsSnapshot(delta: number): void {
    const newVal = this._pointsEarned() + delta;
    this._pointsEarned.set(newVal);
    this.storage.set('pointsEarned', newVal);
  }

  private adjustCurrencySnapshot(delta: number): void {
    const newVal = this._currencyBalance() + delta;
    this._currencyBalance.set(newVal);
    this.storage.set('currencyBalance', newVal);
  }

  private updateLastLogDate(date: string): void {
    this.lastDailyLogDate.set(date);
    this.storage.set('lastDailyLogDate', date);
  }
}
