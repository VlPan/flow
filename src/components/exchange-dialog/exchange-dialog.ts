import { Component, inject, signal, computed } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { BalanceSettingsService } from '../../services/balance-settings/balance-settings.service';

export interface ExchangeDialogData {
  availablePoints: number;
}

@Component({
  selector: 'app-exchange-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, DecimalPipe],
  template: `
    <h2 mat-dialog-title>Exchange Points to {{ settings.currencySymbol() }}</h2>
    <mat-dialog-content>
      <p class="rate-info">
        Rate: 1 Point = {{ settings.exchangeRate() | number: '1.0-4' }} {{ settings.currencySymbol() }}
      </p>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Points to Exchange</mat-label>
        <input
          matInput
          type="number"
          [ngModel]="amount()"
          (ngModelChange)="amount.set(+$event)"
          min="1"
          [max]="data.availablePoints"
        />
        <mat-hint>Available: {{ data.availablePoints }} P</mat-hint>
      </mat-form-field>
      @if (amount() > 0) {
        <p class="preview">
          You will receive:
          <strong>{{ amount() * settings.exchangeRate() | number: '1.2-2' }} {{ settings.currencySymbol() }}</strong>
        </p>
      }
    </mat-dialog-content>
    <mat-dialog-actions class="exchange-actions">
      <button type="button" mat-button (click)="dialogRef.close()">Cancel</button>
      <div class="right-actions">
        <button type="button" mat-button (click)="exchangeAll()">
          Exchange All ({{ data.availablePoints }} P)
        </button>
        <button type="button" mat-flat-button (click)="confirm()" [disabled]="amount() <= 0">Exchange</button>
      </div>
    </mat-dialog-actions>
  `,
  styles: [`
    .rate-info {
      margin: 0 0 16px;
      font: var(--mat-sys-body-medium);
      color: var(--mat-sys-on-surface-variant);
    }
    .full-width { width: 100%; }
    .preview {
      margin: 8px 0 0;
      font: var(--mat-sys-body-medium);
      color: var(--mat-sys-on-surface-variant);
    }
    .exchange-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .right-actions {
      display: flex;
      gap: 8px;
    }
  `],
})
export class ExchangeDialog {
  protected readonly dialogRef = inject(MatDialogRef<ExchangeDialog>);
  protected readonly data = inject<ExchangeDialogData>(MAT_DIALOG_DATA);
  protected readonly settings = inject(BalanceSettingsService);

  protected readonly amount = signal(0);

  protected exchangeAll(): void {
    this.dialogRef.close(this.data.availablePoints);
  }

  protected confirm(): void {
    const pts = Math.min(this.amount(), this.data.availablePoints);
    if (pts <= 0) return;
    this.dialogRef.close(pts);
  }
}
