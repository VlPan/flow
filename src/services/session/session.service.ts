import { Injectable, OnDestroy, computed, inject, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ActiveSession, SessionRecord } from '../../models/session.model';
import { PlanningRow } from '../../models/planning-row.model';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { toLocalDateString } from '../../utils/date.utils';

@Injectable({ providedIn: 'root' })
export class SessionService implements OnDestroy {
  private readonly storage = inject(LocalStorageService);

  private readonly _activeSession = signal<ActiveSession | null>(
    this.storage.get('activeSession') ?? null
  );
  private readonly _records = signal<SessionRecord[]>(
    this.storage.get('sessionRecords') ?? []
  );

  // Increments every second to drive reactive time computations
  private readonly _tick = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  readonly activeSession = this._activeSession.asReadonly();
  readonly records = this._records.asReadonly();

  readonly elapsedMs = computed(() => {
    this._tick(); // re-run on every tick
    const session = this._activeSession();
    if (!session) return 0;
    if (session.pausedAt) {
      return (
        new Date(session.pausedAt).getTime() -
        new Date(session.startedAt).getTime() -
        session.pausedDuration
      );
    }
    return Date.now() - new Date(session.startedAt).getTime() - session.pausedDuration;
  });

  readonly elapsedMinutes = computed(() => Math.floor(this.elapsedMs() / 60000));

  readonly fillPercent = computed(() =>
    Math.min((this.elapsedMs() / (90 * 60 * 1000)) * 100, 100)
  );

  readonly isPaused = computed(() => !!this._activeSession()?.pausedAt);

  constructor() {
    // Resume ticking if a non-paused session was restored from storage
    if (this._activeSession() && !this.isPaused()) {
      this.startTicking();
    }
  }

  ngOnDestroy(): void {
    this.stopTicking();
  }

  start(row: PlanningRow): void {
    const session: ActiveSession = {
      planningRowId: row.id,
      flowVectorId: row.flowVectorId,
      shortDescription: row.shortDescription,
      startedAt: new Date().toISOString(),
      pausedAt: null,
      pausedDuration: 0,
    };
    this._activeSession.set(session);
    this.syncSession();
    this.startTicking();
  }

  pause(): void {
    const session = this._activeSession();
    if (!session || session.pausedAt) return;
    this._activeSession.set({ ...session, pausedAt: new Date().toISOString() });
    this.syncSession();
    this.stopTicking();
  }

  resume(): void {
    const session = this._activeSession();
    if (!session || !session.pausedAt) return;
    const additionalPause = Date.now() - new Date(session.pausedAt).getTime();
    this._activeSession.set({
      ...session,
      pausedAt: null,
      pausedDuration: session.pausedDuration + additionalPause,
    });
    this.syncSession();
    this.startTicking();
  }

  complete(sessionMinutes: number, flowScore: number, shortDescription: string): void {
    const session = this._activeSession();
    if (!session) return;
    const record: SessionRecord = {
      id: uuidv4(),
      planningRowId: session.planningRowId,
      flowVectorId: session.flowVectorId,
      shortDescription,
      sessionMinutes,
      flowScore,
      startedAt: session.startedAt,
      finishedAt: new Date().toISOString(),
      startDate: toLocalDateString(new Date(session.startedAt)),
    };
    this._records.update(all => [...all, record]);
    this._activeSession.set(null);
    this.stopTicking();
    this.syncSession();
    this.syncRecords();
  }

  updateRecord(
    id: string,
    data: Partial<Pick<SessionRecord, 'sessionMinutes' | 'flowScore' | 'shortDescription'>>
  ): void {
    this._records.update(all => all.map(r => (r.id === id ? { ...r, ...data } : r)));
    this.syncRecords();
  }

  deleteRecord(id: string): void {
    this._records.update(all => all.filter(r => r.id !== id));
    this.syncRecords();
  }

  private startTicking(): void {
    if (this.intervalId !== null) return;
    this.intervalId = setInterval(() => this._tick.update(n => n + 1), 1000);
  }

  private stopTicking(): void {
    if (this.intervalId === null) return;
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  private syncSession(): void {
    this.storage.set('activeSession', this._activeSession());
  }

  private syncRecords(): void {
    this.storage.set('sessionRecords', this._records());
  }
}
