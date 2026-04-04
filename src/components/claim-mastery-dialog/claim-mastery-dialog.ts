import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface ClaimMasteryDialogData {
  habitName: string;
  defaultPoints: number;
}

@Component({
  selector: 'app-claim-mastery-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>🏆 Habit Mastered!</h2>
    <mat-dialog-content>
      <p>
        You've mastered <strong>{{ data.habitName }}</strong>.
        Claim your reward points:
      </p>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Reward points</mat-label>
        <input
          matInput
          type="number"
          [ngModel]="amount()"
          (ngModelChange)="amount.set(+$event)"
          min="1"
          step="1"
        />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Cancel</button>
      <button mat-flat-button (click)="confirm()" [disabled]="amount() <= 0">
        Claim {{ amount() }} pts
      </button>
    </mat-dialog-actions>
  `,
  styles: [`.full-width { width: 100%; }`],
})
export class ClaimMasteryDialog {
  protected readonly dialogRef = inject(MatDialogRef<ClaimMasteryDialog>);
  protected readonly data = inject<ClaimMasteryDialogData>(MAT_DIALOG_DATA);
  protected readonly amount = signal(this.data.defaultPoints);

  protected confirm(): void {
    if (this.amount() <= 0) return;
    this.dialogRef.close(this.amount());
  }
}
