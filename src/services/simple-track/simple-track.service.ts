import { Injectable, computed, inject, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SimpleTrackRecord } from '../../models/simple-track.model';
import { toLocalDateString } from '../../utils/date.utils';
import { BalanceService } from '../balance/balance.service';
import { VacationService } from '../vacation/vacation.service';

@Injectable({ providedIn: 'root' })
export class SimpleTrackService {
  private readonly storage = inject(LocalStorageService);
  private readonly balanceService = inject(BalanceService);
  private readonly vacationService = inject(VacationService);

  private readonly _records = signal<SimpleTrackRecord[]>(
    this.storage.get('simpleTrackRecords') ?? []
  );

  readonly simpleTrackRecords = this._records.asReadonly();

  readonly simpleTrackDays = computed<Set<string>>(() => {
    const days = new Set<string>();
    for (const r of this._records()) {
      days.add(r.date);
    }
    return days;
  });

  readonly isSimpleTrackDay = (date: string) => this.simpleTrackDays().has(date);

  readonly pendingFeedbacks = computed<SimpleTrackRecord[]>(() => {
    const todayStr = toLocalDateString(new Date());
    return this._records().filter(r => r.date < todayStr && r.score === null);
  });

  startSimpleTrackDay(date: string, pointsToDeduct: number): void {
    // 1. Deduct points earned today
    if (pointsToDeduct > 0) {
      this.balanceService.removeSessionPoints(pointsToDeduct);
    }

    // 2. Delete today's logs
    const sessionRecords = this.storage.get('sessionRecords') ?? [];
    this.storage.set('sessionRecords', sessionRecords.filter(r => r.startDate !== date));

    const habitCompletions = this.storage.get('habitCompletions') ?? [];
    this.storage.set('habitCompletions', habitCompletions.filter(c => c.date !== date));

    const claimRecords = this.storage.get('taskClaimRecords') ?? [];
    this.storage.set('taskClaimRecords', claimRecords.filter(c => c.date !== date));

    // Force reloading feature services state could be needed, but a page reload happens or we can just trigger them by injecting them.
    // To avoid circular deps, we can just reload the page or we will inject them.
    // Actually, the simplest is to have a method in each service or just inject the services.
    // Let's inject them directly, Angular handles it fine unless it's a real cycle.
    // SimpleTrackService does not need to be injected into those services.
    
    // 3. Create record
    const avgPts = this.vacationService.avgPtsPerDay30();
    const record: SimpleTrackRecord = {
      id: uuidv4(),
      date,
      avgPtsUsed: avgPts,
      score: null,
      awardedPts: null,
      declaredAt: new Date().toISOString(),
    };
    
    this._records.update(all => [...all, record]);
    this.storage.set('simpleTrackRecords', this._records());
    
    // Hard refresh to re-sync all services
    window.location.reload();
  }

  scoreDay(id: string, score: number): void {
    const record = this._records().find(r => r.id === id);
    if (!record) return;

    // Linear score 0.1 to 1.0 (where 10 = 1.0, 1 = 0.1)
    const factor = score / 10;
    const awardedPts = Math.round(record.avgPtsUsed * factor);

    this.updateRecord(id, {
      score,
      awardedPts,
    });

    this.balanceService.addSessionPoints(awardedPts);
    this.vacationService.checkRandomChance(awardedPts);
  }
  
  private updateRecord(id: string, patch: Partial<SimpleTrackRecord>): void {
    this._records.update(all =>
      all.map(r => (r.id === id ? { ...r, ...patch } : r))
    );
    this.storage.set('simpleTrackRecords', this._records());
  }
}
