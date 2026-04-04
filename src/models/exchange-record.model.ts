import { z } from 'zod';

export const exchangeRecordSchema = z.object({
  id: z.string(),
  pointsExchanged: z.number(),
  currencyReceived: z.number(),
  rate: z.number(),
  date: z.string(), // ISO timestamp
});

export const exchangeRecordsSchema = z.array(exchangeRecordSchema);
export type ExchangeRecord = z.infer<typeof exchangeRecordSchema>;
