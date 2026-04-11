import { Component, inject, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { StatisticsService } from '../../services/statistics/statistics.service';
import { GoalConfig, TimeRange } from '../../utils/statistics.utils';
import { toLocalDateString } from '../../utils/date.utils';

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDatepickerModule, NgxEchartsDirective],
  providers: [
    provideEchartsCore({ echarts: () => import('echarts') }),
  ],
  templateUrl: './statistics.page.html',
})
export class StatisticsPage {
  protected readonly stats = inject(StatisticsService);

  private goalDraft = this.stats.goal();
  protected readonly goalStartDate = signal<Date | null>(
    this.goalDraft ? new Date(this.goalDraft.startDate + 'T00:00:00') : null
  );
  protected readonly goalEndDate = signal<Date | null>(
    this.goalDraft ? new Date(this.goalDraft.endDate + 'T00:00:00') : null
  );
  protected readonly goalPoints = signal<number | null>(this.goalDraft?.points ?? null);

  setRange(range: TimeRange): void {
    this.stats.selectedRange.set(range);
  }

  setGoalStart(date: Date | null): void {
    this.goalStartDate.set(date);
  }

  setGoalEnd(date: Date | null): void {
    this.goalEndDate.set(date);
  }

  updateGoalPoints(event: Event): void {
    const raw = (event.target as HTMLInputElement).value;
    this.goalPoints.set(raw ? Number(raw) : null);
  }

  applyGoal(): void {
    const start = this.goalStartDate();
    const end = this.goalEndDate();
    const pts = this.goalPoints();
    if (!start || !end || !pts || pts <= 0) return;
    const startDate = toLocalDateString(start);
    const endDate = toLocalDateString(end);
    if (startDate > endDate) return;
    this.stats.setGoal({ startDate, endDate, points: pts });
  }

  clearGoal(): void {
    this.stats.setGoal(null);
    this.goalStartDate.set(null);
    this.goalEndDate.set(null);
    this.goalPoints.set(null);
  }
}
