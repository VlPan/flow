import { Injectable, computed, signal, inject } from '@angular/core';
import { getWeekStart } from '../../utils/date.utils';
import { TODAY_DATE } from './date.tokens';

@Injectable({ providedIn: 'root' })
export class DateService {
  readonly today: Date = inject(TODAY_DATE);
  private readonly todayWeekStart: Date = getWeekStart(this.today);

  readonly selectedDay = signal<Date>(new Date(this.today));
  readonly currentWeekStart = signal<Date>(new Date(this.todayWeekStart));

  readonly weekDays = computed<Date[]>(() => {
    const start = this.currentWeekStart();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      return d;
    });
  });

  readonly canGoPrev = computed<boolean>(() => {
    const minWeekStart = new Date(this.todayWeekStart);
    minWeekStart.setDate(minWeekStart.getDate() - 14);
    return this.currentWeekStart() > minWeekStart;
  });

  readonly canGoNext = computed<boolean>(() => {
    const maxWeekStart = new Date(this.todayWeekStart);
    maxWeekStart.setDate(maxWeekStart.getDate() + 14);
    return this.currentWeekStart() < maxWeekStart;
  });

  selectDay(date: Date): void {
    this.selectedDay.set(date);
  }

  goToPrevWeek(): void {
    if (!this.canGoPrev()) return;
    const prev = new Date(this.currentWeekStart());
    prev.setDate(prev.getDate() - 7);
    this.currentWeekStart.set(prev);
  }

  goToNextWeek(): void {
    if (!this.canGoNext()) return;
    const next = new Date(this.currentWeekStart());
    next.setDate(next.getDate() + 7);
    this.currentWeekStart.set(next);
  }

  goToToday(): void {
    this.selectedDay.set(new Date(this.today));
    this.currentWeekStart.set(new Date(this.todayWeekStart));
  }
}
