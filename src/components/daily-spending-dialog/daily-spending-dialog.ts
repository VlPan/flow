import { Component, computed, inject, signal } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { BalanceService } from '../../services/balance/balance.service';
import { BalanceSettingsService } from '../../services/balance-settings/balance-settings.service';

@Component({
  selector: 'app-daily-spending-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, DecimalPipe],
  template: `
    <h2 mat-dialog-title>Daily Spending Log</h2>
    <mat-dialog-content>
      <p class="date-label">{{ today }}</p>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Essential spending ({{ settings.currencySymbol() }}, food, transport, etc.)</mat-label>
        <input
          matInput
          type="number"
          [ngModel]="basicSpending()"
          (ngModelChange)="basicSpending.set(+$event)"
          min="0"
        />
        <mat-hint>{{ settings.basicSpendingDiscount() }}% discount applied</mat-hint>
      </mat-form-field>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Non-essential ({{ settings.currencySymbol() }}, entertainment, snacks, etc.)</mat-label>
        <input
          matInput
          type="number"
          [ngModel]="nonEssentialSpending()"
          (ngModelChange)="nonEssentialSpending.set(+$event)"
          min="0"
        />
        <mat-hint>No discount</mat-hint>
      </mat-form-field>

      <div class="total-row">
        <span>Total deduction</span>
        <strong>{{ totalDeducted() | number: '1.2-2' }} {{ settings.currencySymbol() }}</strong>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions class="spending-actions">
      <button mat-button (click)="skip()">
        Skip {{ skipDays }} Day{{ skipDays === 1 ? '' : 's' }}
      </button>
      <button mat-flat-button (click)="log()">Log</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .date-label {
      font: var(--mat-sys-body-medium);
      color: var(--mat-sys-on-surface-variant);
      margin: 0 0 16px;
    }
    .full-width {
      width: 100%;
      margin-bottom: 8px;
    }
    .total-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0 4px;
      font: var(--mat-sys-body-large);
      border-top: 1px solid var(--mat-sys-outline-variant);
    }
    .spending-actions {
      display: flex;
      justify-content: space-between;
    }
  `],
})
export class DailySpendingDialog {
  private readonly dialogRef = inject(MatDialogRef<DailySpendingDialog>);
  private readonly balanceService = inject(BalanceService);
  protected readonly settings = inject(BalanceSettingsService);

  protected readonly basicSpending = signal(0);
  protected readonly nonEssentialSpending = signal(0);

  protected readonly totalDeducted = computed(() => {
    const discount = this.settings.basicSpendingDiscount();
    return this.nonEssentialSpending() + this.basicSpending() * (discount / 100);
  });

  protected readonly today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  protected readonly skipDays = this.balanceService.daysSinceLastLog();

  protected skip(): void {
    this.balanceService.skipDailyLogs(this.skipDays);
    this.dialogRef.close();
  }

  protected log(): void {
    this.balanceService.logDailySpending(this.basicSpending(), this.nonEssentialSpending());
    this.dialogRef.close();
  }
}
