import { z } from 'zod';

export const simpleTrackRecordSchema = z.object({
  id: z.string(),
  date: z.string(),          // YYYY-MM-DD
  avgPtsUsed: z.number(),
  score: z.number().nullable(), // 1-10
  awardedPts: z.number().nullable(), // calculated points
  declaredAt: z.string(),
});

export const simpleTrackRecordsSchema = z.array(simpleTrackRecordSchema);

export type SimpleTrackRecord = z.infer<typeof simpleTrackRecordSchema>;
