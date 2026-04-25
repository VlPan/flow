import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SimpleTrackRecord } from '../../models/simple-track.model';
import { DatePipe } from '@angular/common';

export interface SimpleTrackScoreDialogData {
  record: SimpleTrackRecord;
}

@Component({
  selector: 'app-simple-track-score-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule, DatePipe],
  template: `
    <h2 mat-dialog-title>
      <mat-icon style="vertical-align:middle;margin-right:8px;color:#4DB6AC">fact_check</mat-icon>
      Score Simple Track Day
    </h2>
    <mat-dialog-content>
      <p style="margin-bottom:20px;color:#666">
        How would you score your simple track day for <strong>{{ data.record.date | date:'mediumDate' }}</strong>?
        <br>
        <span style="font-size:13px">10 = average day ({{ data.record.avgPtsUsed }} pts), 5 = half as productive.</span>
      </p>

      <div class="score-buttons">
        @for (score of scores; track score) {
          <button
            mat-stroked-button
            class="score-btn"
            [class.selected]="selectedScore() === score"
            (click)="selectedScore.set(score)"
          >
            {{ score }}
          </button>
        }
      </div>
      
      @if (selectedScore() !== null) {
        <p class="points-preview">
          You will earn <strong>+{{ calculatePoints(selectedScore()!) }} pts</strong>.
        </p>
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Cancel</button>
      <button
        mat-flat-button
        style="background-color:#4DB6AC;color:white"
        [disabled]="selectedScore() === null"
        (click)="submit()"
      >
        Submit Score
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .score-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      margin-bottom: 20px;
    }
    .score-btn {
      min-width: 44px;
      padding: 0 8px;
    }
    .score-btn.selected {
      background-color: #e0f2f1;
      border-color: #4DB6AC;
      color: #00796b;
      font-weight: bold;
    }
    .points-preview {
      text-align: center;
      margin: 0;
      padding: 12px;
      background: rgba(77, 182, 172, 0.1);
      border-radius: 8px;
      color: #00796b;
    }
  `],
})
export class SimpleTrackScoreDialog {
  protected readonly dialogRef = inject(MatDialogRef<SimpleTrackScoreDialog>);
  protected readonly data = inject<SimpleTrackScoreDialogData>(MAT_DIALOG_DATA);

  protected readonly scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  protected readonly selectedScore = signal<number | null>(this.data.record.score);

  protected calculatePoints(score: number): number {
    return Math.round(this.data.record.avgPtsUsed * (score / 10));
  }

  protected submit(): void {
    if (this.selectedScore() === null) return;
    this.dialogRef.close(this.selectedScore()!);
  }
}
