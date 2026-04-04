import { z } from 'zod';

export const rewardSchema = z.object({
  id: z.string(),
  name: z.string(),
  cost: z.number(),
  emoji: z.string().optional(),
});

export const rewardsSchema = z.array(rewardSchema);
export type Reward = z.infer<typeof rewardSchema>;
