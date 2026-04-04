import { z } from 'zod';

export const billSchema = z.object({
  id: z.string(),
  name: z.string(),
  emoji: z.string().optional(),
  cost: z.number().nullable(), // null = unfixed price
  isBasicNecessity: z.boolean(),
  lastCoveredAt: z.string().nullable(), // ISO timestamp or null
});

export const billsSchema = z.array(billSchema);
export type Bill = z.infer<typeof billSchema>;
