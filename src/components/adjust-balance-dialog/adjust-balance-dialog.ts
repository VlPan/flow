import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

export interface AdjustBalanceDialogData {
  title: string;
  mode: 'add' | 'remove';
}

@Component({
  selector: 'app-adjust-balance-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Amount</mat-label>
        <input
          matInput
          type="number"
          [ngModel]="amount()"
          (ngModelChange)="amount.set(+$event)"
          min="0.01"
          step="0.01"
        />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Cancel</button>
      <button mat-flat-button (click)="confirm()" [disabled]="amount() <= 0">Apply</button>
    </mat-dialog-actions>
  `,
  styles: [`.full-width { width: 100%; }`],
})
export class AdjustBalanceDialog {
  protected readonly dialogRef = inject(MatDialogRef<AdjustBalanceDialog>);
  protected readonly data = inject<AdjustBalanceDialogData>(MAT_DIALOG_DATA);
  protected readonly amount = signal(0);

  protected confirm(): void {
    if (this.amount() <= 0) return;
    this.dialogRef.close(this.data.mode === 'remove' ? -this.amount() : this.amount());
  }
}
