import { Injectable, inject, signal } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class SessionSettingsService {
  private readonly storage = inject(LocalStorageService);

  readonly hidePassedTime = signal<boolean>(
    this.storage.get('sessionHidePassedTime') ?? false
  );

  readonly goodSessionMinutes = signal<number>(
    this.storage.get('sessionGoodMinutes') ?? 90
  );

  setHidePassedTime(value: boolean): void {
    this.hidePassedTime.set(value);
    this.storage.set('sessionHidePassedTime', value);
  }

  setGoodSessionMinutes(value: number): void {
    this.goodSessionMinutes.set(value);
    this.storage.set('sessionGoodMinutes', value);
  }
}
