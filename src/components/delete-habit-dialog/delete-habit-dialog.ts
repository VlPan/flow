import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DecimalPipe } from '@angular/common';

export interface DeleteHabitDialogData {
  habitName: string;
  pointsEarned: number;
}

export type DeleteHabitDialogResult = 'remove-points' | 'keep-points';

@Component({
  selector: 'app-delete-habit-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, DecimalPipe],
  template: `
    <h2 mat-dialog-title>Delete Habit</h2>
    <mat-dialog-content>
      <p>
        Delete <strong>{{ data.habitName }}</strong>?
      </p>
      @if (data.pointsEarned > 0) {
        <p>
          This habit has earned
          <strong>{{ data.pointsEarned | number: '1.0-0' }} pts</strong> in total.
          What would you like to do with them?
        </p>
      }
    </mat-dialog-content>
    <mat-dialog-actions class="delete-actions">
      <button mat-button (click)="dialogRef.close()">Cancel</button>
      <button mat-button (click)="dialogRef.close('keep-points')">Keep Points</button>
      <button mat-flat-button color="warn" (click)="dialogRef.close('remove-points')">
        Delete & Remove Points
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .delete-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
  `],
})
export class DeleteHabitDialog {
  protected readonly dialogRef = inject(MatDialogRef<DeleteHabitDialog>);
  protected readonly data = inject<DeleteHabitDialogData>(MAT_DIALOG_DATA);
}
