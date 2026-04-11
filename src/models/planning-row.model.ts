import { z } from 'zod';

export const planningRowSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  shortDescription: z.string(),
  createdDate: z.string(), // YYYY-MM-DD
});

export const planningRowsSchema = z.array(planningRowSchema);

export type PlanningRow = z.infer<typeof planningRowSchema>;
