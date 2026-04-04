import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { DecimalPipe } from '@angular/common';
import { BillsService } from '../../services/bills/bills.service';
import { BalanceService } from '../../services/balance/balance.service';
import { BalanceSettingsService } from '../../services/balance-settings/balance-settings.service';
import { BillForm } from '../../components/bill-form/bill-form';
import { CoverBillDialog } from '../../components/cover-bill-dialog/cover-bill-dialog';
import { ConfirmDialog } from '../../components/confirm-dialog/confirm-dialog';
import { Bill } from '../../models/bill.model';

@Component({
  selector: 'app-bills-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCheckboxModule, MatTableModule, DecimalPipe],
  templateUrl: './bills.page.html',
  styleUrl: './bills.page.css',
})
export class BillsPage {
  protected readonly displayedColumns = ['name', 'cost', 'necessity', 'lastCovered', 'actions'];

  protected readonly billsService = inject(BillsService);
  protected readonly balanceService = inject(BalanceService);
  protected readonly settings = inject(BalanceSettingsService);
  private readonly dialog = inject(MatDialog);

  protected addBill(): void {
    this.dialog
      .open(BillForm, { data: null, width: '420px' })
      .afterClosed()
      .subscribe(result => {
        if (result) this.billsService.addBill(result);
      });
  }

  protected editBill(bill: Bill): void {
    this.dialog
      .open(BillForm, { data: bill, width: '420px' })
      .afterClosed()
      .subscribe(result => {
        if (result) this.billsService.updateBill(bill.id, result);
      });
  }

  protected deleteBill(bill: Bill): void {
    this.dialog
      .open(ConfirmDialog, {
        data: { message: `Delete bill "${bill.name}"?` },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.billsService.deleteBill(bill.id);
      });
  }

  protected coverBill(bill: Bill): void {
    this.dialog
      .open(CoverBillDialog, { data: { bill }, width: '420px' })
      .afterClosed()
      .subscribe((rawAmount: number | undefined) => {
        if (rawAmount !== undefined) this.billsService.coverBill(bill, rawAmount);
      });
  }

  protected lastCoveredLabel(bill: Bill): string {
    if (!bill.lastCoveredAt) return 'Never';
    const ms = Date.now() - new Date(bill.lastCoveredAt).getTime();
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  }
}
