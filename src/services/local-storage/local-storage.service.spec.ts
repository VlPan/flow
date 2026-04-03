import { TestBed } from '@angular/core/testing';
import { z, ZodType } from 'zod';
import { STORAGE_REGISTRY } from './storage-registry';
import { LocalStorageService } from './local-storage.service';

const TEST_KEY = '__test__';
const testSchema = z.object({ label: z.string(), score: z.number() });

// todo: fix that when keys are registered
// Bypass StorageKey type constraints — registry is empty until keys are registered
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyStorageService = { get: any; set: any; remove: any };

describe('LocalStorageService', () => {
  let service: AnyStorageService;

  beforeEach(() => {
    (STORAGE_REGISTRY as Record<string, ZodType>)[TEST_KEY] = testSchema;
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
    delete (STORAGE_REGISTRY as Record<string, ZodType>)[TEST_KEY];
  });

  describe('get', () => {
    it('returns null when key does not exist in localStorage', () => {
      expect(service.get(TEST_KEY)).toBeNull();
    });

    it('returns parsed value when data matches schema', () => {
      const data = { label: 'coding', score: 8 };
      localStorage.setItem(TEST_KEY, JSON.stringify(data));
      expect(service.get(TEST_KEY)).toEqual(data);
    });

    it('returns null when stored data fails schema validation', () => {
      localStorage.setItem(TEST_KEY, JSON.stringify({ invalid: true }));
      expect(service.get(TEST_KEY)).toBeNull();
    });

    it('returns null when stored data is malformed JSON', () => {
      localStorage.setItem(TEST_KEY, 'not-valid-json');
      expect(service.get(TEST_KEY)).toBeNull();
    });
  });

  describe('set', () => {
    it('serializes and stores the value in localStorage', () => {
      const data = { label: 'reading', score: 9 };
      service.set(TEST_KEY, data);
      expect(localStorage.getItem(TEST_KEY)).toBe(JSON.stringify(data));
    });

    it('overwrites an existing value', () => {
      service.set(TEST_KEY, { label: 'first', score: 1 });
      service.set(TEST_KEY, { label: 'second', score: 2 });
      expect(service.get(TEST_KEY)).toEqual({ label: 'second', score: 2 });
    });
  });

  describe('remove', () => {
    it('removes the key from localStorage', () => {
      localStorage.setItem(TEST_KEY, JSON.stringify({ label: 'x', score: 1 }));
      service.remove(TEST_KEY);
      expect(localStorage.getItem(TEST_KEY)).toBeNull();
    });

    it('does not throw when key does not exist', () => {
      expect(() => service.remove(TEST_KEY)).not.toThrow();
    });
  });
});
