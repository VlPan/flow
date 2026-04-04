import { z } from 'zod';

export const activeSessionSchema = z.object({
  planningRowId: z.string(),
  flowVectorId: z.string(),
  shortDescription: z.string(),
  startedAt: z.string(),      // ISO timestamp
  pausedAt: z.string().nullable(),
  pausedDuration: z.number(), // accumulated pause ms
});

export const sessionRecordSchema = z.object({
  id: z.string(),
  planningRowId: z.string(),
  flowVectorId: z.string(),
  shortDescription: z.string(),
  sessionMinutes: z.number(),
  flowScore: z.number(),
  startedAt: z.string(),   // ISO timestamp
  finishedAt: z.string(),  // ISO timestamp
  startDate: z.string(),   // YYYY-MM-DD (local date from startedAt)
});

export const sessionRecordsSchema = z.array(sessionRecordSchema);

export type ActiveSession = z.infer<typeof activeSessionSchema>;
export type SessionRecord = z.infer<typeof sessionRecordSchema>;
