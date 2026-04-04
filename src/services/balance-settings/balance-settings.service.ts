import { Injectable, inject, signal } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class BalanceSettingsService {
  private readonly storage = inject(LocalStorageService);

  readonly currencySymbol = signal<string>(
    this.storage.get('balanceCurrencySymbol') ?? 'zł'
  );

  readonly exchangeRate = signal<number>(
    this.storage.get('balanceExchangeRate') ?? 1
  );

  readonly basicSpendingDiscount = signal<number>(
    this.storage.get('balanceBasicDiscount') ?? 50
  );

  setCurrencySymbol(value: string): void {
    this.currencySymbol.set(value);
    this.storage.set('balanceCurrencySymbol', value);
  }

  setExchangeRate(value: number): void {
    this.exchangeRate.set(value);
    this.storage.set('balanceExchangeRate', value);
  }

  setBasicSpendingDiscount(value: number): void {
    this.basicSpendingDiscount.set(value);
    this.storage.set('balanceBasicDiscount', value);
  }
}
