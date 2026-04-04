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

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      console.error(`[LocalStorage] Failed to parse JSON for key "${key}":`, e);
      return null;
    }

    const result = (STORAGE_REGISTRY[key] as ZodType).safeParse(parsed);
    if (!result.success) {
      console.error(`[LocalStorage] Schema validation failed for key "${key}":`, result.error.issues);
      return null;
    }

    return result.data as StorageValue<K>;
  }

  set<K extends StorageKey>(key: K, value: StorageValue<K>): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: StorageKey): void {
    localStorage.removeItem(key);
  }
}
