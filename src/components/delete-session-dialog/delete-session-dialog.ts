import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DecimalPipe } from '@angular/common';

export interface DeleteSessionDialogData {
  sessionPoints: number;
}

export type DeleteSessionDialogResult = 'remove-points' | 'keep-points';

@Component({
  selector: 'app-delete-session-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, DecimalPipe],
  template: `
    <h2 mat-dialog-title>Delete Session</h2>
    <mat-dialog-content>
      <p>
        This session earned
        <strong>{{ data.sessionPoints | number: '1.0-1' }} pts</strong>.
        What would you like to do with them?
      </p>
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
export class DeleteSessionDialog {
  protected readonly dialogRef = inject(MatDialogRef<DeleteSessionDialog>);
  protected readonly data = inject<DeleteSessionDialogData>(MAT_DIALOG_DATA);
}
