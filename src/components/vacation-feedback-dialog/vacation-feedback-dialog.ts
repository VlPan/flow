import { Component, computed, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { VacationRecord } from '../../models/vacation.model';
import { VacationService } from '../../services/vacation/vacation.service';

export interface VacationFeedbackDialogData {
  record: VacationRecord;
}

export type VacationFeedbackDialogResult = 'submitted' | 'cancelled';

@Component({
  selector: 'app-vacation-feedback-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatSliderModule, MatIconModule],
  template: `
    <div class="feedback-header">
      <mat-icon class="header-icon">beach_access</mat-icon>
      <h2 mat-dialog-title>How was your vacation?</h2>
    </div>
    <mat-dialog-content>
      <p class="vacation-date">{{ dateRange }}</p>

      <div class="score-section">
        <p class="score-label">Rate your vacation</p>
        <div class="score-display">
          <span class="score-emoji">{{ scoreEmoji() }}</span>
          <span class="score-value">{{ score() }} / 10</span>
        </div>
        <mat-slider min="1" max="10" step="1" [discrete]="true" class="score-slider">
          <input matSliderThumb [value]="score()" (valueChange)="score.set($event)" />
        </mat-slider>
        <div class="score-labels">
          <span>Terrible</span>
          <span>Amazing</span>
        </div>
      </div>

      <div class="adjustment-preview" [class.positive]="adjustment() > 0" [class.negative]="adjustment() < 0">
        @if (adjustment() === 0) {
          <span>Score of 5 — no points adjustment</span>
        } @else if (adjustment() > 0) {
          <mat-icon>trending_up</mat-icon>
          <span>+{{ adjustment() }} pts bonus for a great vacation!</span>
        } @else {
          <mat-icon>trending_down</mat-icon>
          <span>{{ adjustment() }} pts — rough vacation, noted.</span>
        }
      </div>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button class="cancel-btn" (click)="cancelVacation()">
        Cancel Vacation
      </button>
      <span class="spacer"></span>
      <button mat-flat-button class="submit-btn" (click)="submit()">
        Submit
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .feedback-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 20px 24px 0;
    }
    .header-icon { color: #9575CD; font-size: 28px; width: 28px; height: 28px; }
    h2[mat-dialog-title] { margin: 0; padding: 0; }
    mat-dialog-content { min-width: 340px; display: flex; flex-direction: column; gap: 16px; }
    .vacation-date { color: #9575CD; font-weight: 500; margin: 0; font-size: 14px; }
    .score-section { display: flex; flex-direction: column; gap: 8px; }
    .score-label { margin: 0; font-size: 14px; color: #666; }
    .score-display { display: flex; align-items: center; gap: 12px; }
    .score-emoji { font-size: 32px; }
    .score-value { font-size: 24px; font-weight: 700; }
    .score-slider { width: 100%; }
    .score-labels { display: flex; justify-content: space-between; font-size: 11px; color: #999; margin-top: -4px; }
    .adjustment-preview {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 14px;
      background: rgba(0,0,0,0.04);
      color: #666;
    }
    .adjustment-preview.positive { background: rgba(129,199,132,0.15); color: #2e7d32; }
    .adjustment-preview.negative { background: rgba(229,115,115,0.15); color: #c62828; }
    mat-dialog-actions { display: flex; align-items: center; padding: 8px 16px 16px; }
    .cancel-btn { color: #999; font-size: 12px; }
    .spacer { flex: 1; }
    .submit-btn { background: #9575CD !important; color: white !important; }
  `],
})
export class VacationFeedbackDialog {
  protected readonly dialogRef = inject(MatDialogRef<VacationFeedbackDialog>);
  protected readonly data = inject<VacationFeedbackDialogData>(MAT_DIALOG_DATA);
  protected readonly vacationService = inject(VacationService);

  protected readonly score = signal(5);

  protected readonly adjustment = computed(() => {
    const s = this.score();
    return Math.round(this.data.record.ptsAwarded * (s - 5) * 0.1);
  });

  protected readonly dateRange = (() => {
    const r = this.data.record;
    if (r.startDate === r.endDate) {
      return new Date(r.startDate + 'T00:00:00').toLocaleDateString('en-US', {
        weekday: 'long', month: 'long', day: 'numeric',
      });
    }
    const start = new Date(r.startDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const end = new Date(r.endDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `${start} – ${end}`;
  })();

  protected readonly scoreEmoji = computed(() => {
    const s = this.score();
    if (s <= 2) return '😞';
    if (s <= 4) return '😕';
    if (s === 5) return '😐';
    if (s <= 7) return '😊';
    return '🤩';
  });

  protected submit(): void {
    this.vacationService.submitFeedback(this.data.record.id, this.score());
    this.dialogRef.close('submitted' as VacationFeedbackDialogResult);
  }

  protected cancelVacation(): void {
    this.vacationService.cancelVacation(this.data.record.id);
    this.dialogRef.close('cancelled' as VacationFeedbackDialogResult);
  }
}
