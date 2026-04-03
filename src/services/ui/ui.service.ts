import { Injectable, inject, signal } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class UiService {
  private readonly storage = inject(LocalStorageService);

  readonly isSidenavExpanded = signal<boolean>(
    this.storage.get('sidenavExpanded') ?? true
  );

  toggleSidenav(): void {
    const next = !this.isSidenavExpanded();
    this.isSidenavExpanded.set(next);
    this.storage.set('sidenavExpanded', next);
  }
}
