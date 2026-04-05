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

  readonly hideActiveBanner = signal<boolean>(
    this.storage.get('sessionHideActiveBanner') ?? false
  );

  setHidePassedTime(value: boolean): void {
    this.hidePassedTime.set(value);
    this.storage.set('sessionHidePassedTime', value);
  }

  setGoodSessionMinutes(value: number): void {
    this.goodSessionMinutes.set(value);
    this.storage.set('sessionGoodMinutes', value);
  }

  setHideActiveBanner(value: boolean): void {
    this.hideActiveBanner.set(value);
    this.storage.set('sessionHideActiveBanner', value);
  }
}
