import { Injectable } from '@angular/core';
import { ZodType } from 'zod';
import {
  STORAGE_REGISTRY,
  StorageKey,
  StorageValue,
} from './storage-registry';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  get<K extends StorageKey>(key: K): StorageValue<K> | null {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;

    try {
      const parsed = (STORAGE_REGISTRY[key] as ZodType).safeParse(JSON.parse(raw));
      return parsed.success ? (parsed.data as StorageValue<K>) : null;
    } catch {
      return null;
    }
  }

  set<K extends StorageKey>(key: K, value: StorageValue<K>): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: StorageKey): void {
    localStorage.removeItem(key);
  }
}
