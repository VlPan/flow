import { z } from 'zod';

export const DEFAULT_VECTOR_COLOR = '#9E9E9E';
export const DEFAULT_VECTOR_ICON = '⚡';

export const completionCriteriaSchema = z.object({
  id: z.string(),
  destinationId: z.string(),
  name: z.string(),
  completed: z.boolean(),
});

export const destinationSchema = z.object({
  id: z.string(),
  vectorId: z.string(),
  name: z.string(),
  completed: z.boolean(),
  completionCriteria: z.array(completionCriteriaSchema),
});

export const flowVectorSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  icon: z.string(),
  destinations: z.array(destinationSchema),
  finalDestinations: z.array(destinationSchema),
  deleted: z.boolean(),
});

export const flowVectorsSchema = z.array(flowVectorSchema);

export type CompletionCriteria = z.infer<typeof completionCriteriaSchema>;
export type Destination = z.infer<typeof destinationSchema>;
export type FlowVector = z.infer<typeof flowVectorSchema>;
