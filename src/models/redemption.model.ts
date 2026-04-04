import { z } from 'zod';

export const redemptionSchema = z.object({
  id: z.string(),
  rewardName: z.string(),
  cost: z.number(),
  date: z.string(), // ISO timestamp
});

export const redemptionsSchema = z.array(redemptionSchema);
export type Redemption = z.infer<typeof redemptionSchema>;
