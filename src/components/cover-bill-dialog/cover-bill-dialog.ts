import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DecimalPipe } from '@angular/common';
import { Bill } from '../../models/bill.model';
import { BalanceSettingsService } from '../../services/balance-settings/balance-settings.service';

export interface CoverBillDialogData {
  bill: Bill;
}

@Component({
  selector: 'app-cover-bill-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DecimalPipe,
  ],
  templateUrl: './cover-bill-dialog.html',
  styles: [`
    .full-width { width: 100%; }
  `],
})
export class CoverBillDialog {
  private readonly dialogRef = inject(MatDialogRef<CoverBillDialog>);
  protected readonly data = inject<CoverBillDialogData>(MAT_DIALOG_DATA);
  protected readonly settings = inject(BalanceSettingsService);

  protected readonly isFixed = this.data.bill.cost !== null;
  protected readonly bill = this.data.bill;

  // For fixed bills: raw amount is the bill cost
  // For unfixed bills: user enters raw amount
  protected rawAmount = signal<number | null>(this.isFixed ? this.data.bill.cost : null);

  protected readonly deduction = computed(() => {
    const raw = this.rawAmount();
    if (raw === null || raw <= 0) return null;
    const discount = this.settings.basicSpendingDiscount();
    return this.bill.isBasicNecessity ? raw * (discount / 100) : raw;
  });

  protected readonly billDisplayName = computed(() =>
    this.bill.emoji ? `${this.bill.emoji} ${this.bill.name}` : this.bill.name
  );

  protected onAmountChange(value: string): void {
    const parsed = parseFloat(value);
    this.rawAmount.set(isNaN(parsed) || parsed <= 0 ? null : parsed);
  }

  protected cover(): void {
    const raw = this.rawAmount();
    if (raw === null || raw <= 0) return;
    this.dialogRef.close(raw);
  }

  protected cancel(): void {
    this.dialogRef.close(undefined);
  }
}
