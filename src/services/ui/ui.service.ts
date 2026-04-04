import { Injectable, inject, signal } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class UiService {
  private readonly storage = inject(LocalStorageService);

  readonly isSidenavExpanded = signal<boolean>(
    this.storage.get('sidenavExpanded') ?? true
  );

  readonly flowSplitSizes = signal<[number, number]>(
    this.storage.get('flowSplitSizes') ?? [70, 30]
  );

  toggleSidenav(): void {
    const next = !this.isSidenavExpanded();
    this.isSidenavExpanded.set(next);
    this.storage.set('sidenavExpanded', next);
  }

  setFlowSplitSizes(sizes: [number, number]): void {
    this.flowSplitSizes.set(sizes);
    this.storage.set('flowSplitSizes', sizes);
  }
}
