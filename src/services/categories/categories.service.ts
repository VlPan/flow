import { Injectable, computed, inject, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Category, DEFAULT_CATEGORY_COLOR, OTHERS_CATEGORY } from '../../models/category.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private readonly storage = inject(LocalStorageService);
  private readonly _categories = signal<Category[]>(this.storage.get('categories') ?? []);

  readonly categories = computed(() => this._categories().filter(c => !c.deleted));
  readonly categoriesIncludingOthers = computed(() => [OTHERS_CATEGORY, ...this._categories().filter(c => !c.deleted)]);
  readonly allCategoriesIncludingDeleted = computed(() => [OTHERS_CATEGORY, ...this._categories()]);

  create(data: Omit<Category, 'id' | 'deleted'>): void {
    const category: Category = {
      ...data,
      id: uuidv4(),
      color: data.color || DEFAULT_CATEGORY_COLOR,
      deleted: false,
    };
    this._categories.update(all => [...all, category]);
    this.sync();
  }

  update(id: string, data: Partial<Omit<Category, 'id' | 'deleted'>>): void {
    this._categories.update(all =>
      all.map(c => (c.id === id ? { ...c, ...data } : c))
    );
    this.sync();
  }

  softDelete(id: string): void {
    this._categories.update(all =>
      all.map(c => (c.id === id ? { ...c, deleted: true } : c))
    );
    this.sync();
  }

  private sync(): void {
    this.storage.set('categories', this._categories());
  }
}
