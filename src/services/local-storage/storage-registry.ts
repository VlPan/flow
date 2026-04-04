import { z, ZodType } from 'zod';
import { flowVectorsSchema } from '../../models/flow-vector.model';
import { planningRowsSchema } from '../../models/planning-row.model';
import { activeSessionSchema, sessionRecordsSchema } from '../../models/session.model';

// Register all localStorage keys and their schemas here.
// To add a new key: add an entry to this object.
export const STORAGE_REGISTRY = {
  sidenavExpanded: z.boolean(),
  flowVectors: flowVectorsSchema,
  flowSplitSizes: z.tuple([z.number(), z.number()]),
  planningRows: planningRowsSchema,
  activeSession: activeSessionSchema.nullable(),
  sessionRecords: sessionRecordsSchema,
  sessionHidePassedTime: z.boolean(),
  sessionGoodMinutes: z.number(),
} satisfies Record<string, ZodType>;

export type StorageRegistry = typeof STORAGE_REGISTRY;
export type StorageKey = keyof StorageRegistry;
export type StorageValue<K extends StorageKey> = z.infer<StorageRegistry[K]>;
