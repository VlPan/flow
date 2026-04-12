import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

export interface AdjustVacationDialogData {
  mode: 'add' | 'remove';
}

export interface AdjustVacationDialogResult {
  count: number;
  note: string;
}

@Component({
  selector: 'app-adjust-vacation-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  template: `
    <h2 mat-dialog-title>{{ data.mode === 'add' ? 'Add Vacation Days' : 'Remove Vacation Days' }}</h2>
    <mat-dialog-content>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Days</mat-label>
        <input matInput type="number" min="1" step="1" [ngModel]="count()" (ngModelChange)="count.set(+$event)" />
      </mat-form-field>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Note (optional)</mat-label>
        <input matInput [ngModel]="note()" (ngModelChange)="note.set($event)" />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Cancel</button>
      <button mat-flat-button (click)="confirm()" [disabled]="count() < 1">Apply</button>
    </mat-dialog-actions>
  `,
  styles: [`.full-width { width: 100%; }`],
})
export class AdjustVacationDialog {
  protected readonly dialogRef = inject(MatDialogRef<AdjustVacationDialog>);
  protected readonly data = inject<AdjustVacationDialogData>(MAT_DIALOG_DATA);
  protected readonly count = signal(1);
  protected readonly note = signal('');

  protected confirm(): void {
    if (this.count() < 1) return;
    this.dialogRef.close({ count: this.count(), note: this.note() } satisfies AdjustVacationDialogResult);
  }
}
