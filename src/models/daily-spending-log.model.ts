import { z } from 'zod';

export const dailySpendingLogSchema = z.object({
  id: z.string(),
  date: z.string(), // YYYY-MM-DD
  basicSpending: z.number(),
  nonEssentialSpending: z.number(),
  totalDeducted: z.number(),
  skipped: z.boolean(),
});

export const dailySpendingLogsSchema = z.array(dailySpendingLogSchema);
export type DailySpendingLog = z.infer<typeof dailySpendingLogSchema>;
