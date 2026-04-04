import { Injectable, inject, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { BalanceService } from '../balance/balance.service';
import { BalanceSettingsService } from '../balance-settings/balance-settings.service';
import { Bill } from '../../models/bill.model';

@Injectable({ providedIn: 'root' })
export class BillsService {
  private readonly storage = inject(LocalStorageService);
  private readonly balance = inject(BalanceService);
  private readonly settings = inject(BalanceSettingsService);

  private readonly _bills = signal<Bill[]>(this.storage.get('bills') ?? []);

  readonly bills = this._bills.asReadonly();

  addBill(data: Omit<Bill, 'id' | 'lastCoveredAt'>): void {
    const bill: Bill = { ...data, id: uuidv4(), lastCoveredAt: null };
    this._bills.update(all => [...all, bill]);
    this.storage.set('bills', this._bills());
  }

  updateBill(id: string, data: Partial<Omit<Bill, 'id'>>): void {
    this._bills.update(all => all.map(b => (b.id === id ? { ...b, ...data } : b)));
    this.storage.set('bills', this._bills());
  }

  deleteBill(id: string): void {
    this._bills.update(all => all.filter(b => b.id !== id));
    this.storage.set('bills', this._bills());
  }

  coverBill(bill: Bill, rawAmount: number): void {
    const discount = this.settings.basicSpendingDiscount();
    const deduction = bill.isBasicNecessity ? rawAmount * (discount / 100) : rawAmount;
    this.balance.adjustCurrency(-deduction);
    this.updateBill(bill.id, { lastCoveredAt: new Date().toISOString() });
  }

  computeDeduction(bill: Bill, rawAmount: number): number {
    const discount = this.settings.basicSpendingDiscount();
    return bill.isBasicNecessity ? rawAmount * (discount / 100) : rawAmount;
  }
}
