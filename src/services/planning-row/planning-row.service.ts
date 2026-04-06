import { Injectable, inject, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { PlanningRow } from '../../models/planning-row.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class PlanningRowService {
  private readonly storage = inject(LocalStorageService);
  private readonly _rows = signal<PlanningRow[]>(this.storage.get('planningRows') ?? []);

  readonly rows = this._rows.asReadonly();

  create(data: Omit<PlanningRow, 'id'>): void {
    const row: PlanningRow = { ...data, id: uuidv4() };
    this._rows.update(all => [...all, row]);
    this.sync();
  }

  update(id: string, data: Partial<Omit<PlanningRow, 'id'>>): void {
    this._rows.update(all =>
      all.map(r => (r.id === id ? { ...r, ...data } : r))
    );
    this.sync();
  }

  delete(id: string): void {
    this._rows.update(all => all.filter(r => r.id !== id));
    this.sync();
  }

  moveToDate(fromDate: string, toDate: string): void {
    this._rows.update(all =>
      all.map(r => (r.createdDate === fromDate ? { ...r, createdDate: toDate } : r))
    );
    this.sync();
  }

  reorder(orderedIds: string[]): void {
    this._rows.update(all => {
      const idSet = new Set(orderedIds);
      const byId = new Map(all.map(r => [r.id, r]));
      const reordered = orderedIds.map(id => byId.get(id)!);
      let insertionDone = false;
      const result: PlanningRow[] = [];
      for (const row of all) {
        if (!idSet.has(row.id)) {
          result.push(row);
        } else if (!insertionDone) {
          result.push(...reordered);
          insertionDone = true;
        }
      }
      if (!insertionDone) result.push(...reordered);
      return result;
    });
    this.sync();
  }

  private sync(): void {
    this.storage.set('planningRows', this._rows());
  }
}
