import { z, ZodType } from 'zod';

// Register all localStorage keys and their schemas here.
// To add a new key: add an entry to this object.
export const STORAGE_REGISTRY = {
  // example: sessions: z.array(SessionSchema),
} satisfies Record<string, ZodType>;

export type StorageRegistry = typeof STORAGE_REGISTRY;
export type StorageKey = keyof StorageRegistry;
export type StorageValue<K extends StorageKey> = z.infer<StorageRegistry[K]>;
