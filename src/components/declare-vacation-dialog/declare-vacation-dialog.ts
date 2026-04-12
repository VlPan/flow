import { Component, computed, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { VacationService } from '../../services/vacation/vacation.service';
import { toLocalDateString } from '../../utils/date.utils';

export interface DeclareVacationDialogData {
  defaultDate: Date;
}

export interface DeclareVacationDialogResult {
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-declare-vacation-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    FormsModule,
  ],
  template: `
    <h2 mat-dialog-title>
      <mat-icon style="vertical-align:middle;margin-right:8px;color:#9575CD">beach_access</mat-icon>
      Declare Vacation
    </h2>
    <mat-dialog-content>
      <p class="balance-info">
        <span class="balance-label">Available vacation days:</span>
        <strong>{{ vacationService.vacationBalance() }}</strong>
      </p>

      <div class="date-row">
        <mat-form-field appearance="outline">
          <mat-label>Start date</mat-label>
          <input matInput [matDatepicker]="startPicker" [ngModel]="startDate()" (ngModelChange)="onStartChange($event)" [max]="today" />
          <mat-datepicker-toggle matIconSuffix [for]="startPicker" />
          <mat-datepicker #startPicker />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>End date</mat-label>
          <input matInput [matDatepicker]="endPicker" [ngModel]="endDate()" (ngModelChange)="onEndChange($event)" [min]="startDate()" [max]="today" />
          <mat-datepicker-toggle matIconSuffix [for]="endPicker" />
          <mat-datepicker #endPicker />
        </mat-form-field>
      </div>

      <div class="cost-summary">
        <div class="cost-row">
          <span>Days selected:</span>
          <strong>{{ daysCount() }}</strong>
        </div>
        <div class="cost-row">
          <span>Avg pts/day (last 30 days):</span>
          <strong>{{ avgPts() }} pts</strong>
        </div>
        <div class="cost-row">
          <span>Total pts to earn:</span>
          <strong style="color:#9575CD">+{{ totalPts() }} pts</strong>
        </div>
        <div class="cost-row">
          <span>Vacation days to spend:</span>
          <strong style="color:#e53935">-{{ daysCount() }}</strong>
        </div>
        @if (insufficientBalance()) {
          <p class="error">Not enough vacation days (need {{ daysCount() }}, have {{ vacationService.vacationBalance() }})</p>
        }
        @if (hasActivityOnDays()) {
          <p class="error">Some selected days already have tracked activity and cannot be declared as vacation.</p>
        }
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Cancel</button>
      <button
        mat-flat-button
        style="background-color:#9575CD;color:white"
        (click)="confirm()"
        [disabled]="insufficientBalance() || hasActivityOnDays() || daysCount() <= 0"
      >
        Declare Vacation
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content { display: flex; flex-direction: column; gap: 16px; min-width: 360px; }
    .balance-info { display: flex; gap: 8px; align-items: center; margin: 0; padding: 10px 12px; background: rgba(149,117,205,0.1); border-radius: 8px; }
    .balance-label { color: #666; }
    .date-row { display: flex; gap: 16px; flex-wrap: wrap; }
    .date-row mat-form-field { flex: 1; min-width: 140px; }
    .cost-summary { display: flex; flex-direction: column; gap: 6px; padding: 12px; background: rgba(0,0,0,0.03); border-radius: 8px; }
    .cost-row { display: flex; justify-content: space-between; font-size: 14px; }
    .error { color: #e53935; font-size: 13px; margin: 4px 0 0; }
  `],
})
export class DeclareVacationDialog {
  protected readonly dialogRef = inject(MatDialogRef<DeclareVacationDialog>);
  protected readonly data = inject<DeclareVacationDialogData>(MAT_DIALOG_DATA);
  protected readonly vacationService = inject(VacationService);

  protected readonly today = new Date();
  protected readonly startDate = signal<Date>(this.data.defaultDate);
  protected readonly endDate = signal<Date>(this.data.defaultDate);

  private readonly _avgPts = this.vacationService.avgPtsPerDay30();
  protected readonly avgPts = signal(this._avgPts);

  protected readonly daysCount = computed(() => {
    const s = this.startDate();
    const e = this.endDate();
    if (!s || !e) return 0;
    const start = new Date(s); start.setHours(0,0,0,0);
    const end = new Date(e); end.setHours(0,0,0,0);
    return Math.max(0, Math.round((end.getTime() - start.getTime()) / 86400000) + 1);
  });

  protected readonly totalPts = computed(() => this.avgPts() * this.daysCount());

  protected readonly insufficientBalance = computed(() =>
    this.daysCount() > this.vacationService.vacationBalance()
  );

  protected readonly hasActivityOnDays = computed(() => {
    const s = this.startDate();
    const e = this.endDate();
    if (!s || !e) return false;
    const sessionRecords: any[] = (this.vacationService as any)['storage'].get('sessionRecords') ?? [];
    const habitCompletions: any[] = (this.vacationService as any)['storage'].get('habitCompletions') ?? [];
    const claimRecords: any[] = (this.vacationService as any)['storage'].get('taskClaimRecords') ?? [];
    const startStr = toLocalDateString(s);
    const endStr = toLocalDateString(e);
    const hasSessions = sessionRecords.some((r: any) => r.startDate >= startStr && r.startDate <= endStr);
    const hasHabits = habitCompletions.some((c: any) => c.date >= startStr && c.date <= endStr);
    const hasTasks = claimRecords.some((r: any) => r.date >= startStr && r.date <= endStr);
    return hasSessions || hasHabits || hasTasks;
  });

  protected onStartChange(date: Date | null): void {
    if (!date) return;
    this.startDate.set(date);
    if (date > this.endDate()) this.endDate.set(date);
  }

  protected onEndChange(date: Date | null): void {
    if (!date) return;
    this.endDate.set(date);
  }

  protected confirm(): void {
    if (this.insufficientBalance() || this.hasActivityOnDays() || this.daysCount() <= 0) return;
    this.dialogRef.close({
      startDate: toLocalDateString(this.startDate()),
      endDate: toLocalDateString(this.endDate()),
    } satisfies DeclareVacationDialogResult);
  }
}
