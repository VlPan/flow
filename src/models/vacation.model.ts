import { z } from 'zod';

export const vacationRecordSchema = z.object({
  id: z.string(),
  startDate: z.string(),          // YYYY-MM-DD
  endDate: z.string(),            // YYYY-MM-DD
  daysCount: z.number(),          // number of calendar days in range
  ptsAwarded: z.number(),         // total pts credited (avgPts * daysCount)
  avgPtsUsed: z.number(),         // snapshot of avg pts/day used at declaration time
  status: z.enum(['pending', 'feedback_pending', 'completed', 'cancelled']),
  feedbackScore: z.number().nullable(),       // 1–10
  feedbackAdjustment: z.number().nullable(), // pts delta applied after feedback
  declaredAt: z.string(),         // ISO timestamp
});

export const vacationTransactionSchema = z.object({
  id: z.string(),
  date: z.string(),    // ISO timestamp
  type: z.enum(['earned_streak', 'earned_random', 'spent', 'manual_add', 'manual_remove', 'returned']),
  amount: z.number(), // positive = add, negative = spend
  note: z.string().optional(),
  relatedRecordId: z.string().optional(), // for 'spent' and 'returned'
});

export const vacationRecordsSchema = z.array(vacationRecordSchema);
export const vacationTransactionsSchema = z.array(vacationTransactionSchema);

export type VacationRecord = z.infer<typeof vacationRecordSchema>;
export type VacationTransaction = z.infer<typeof vacationTransactionSchema>;
