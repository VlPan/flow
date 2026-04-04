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
  categoryId: z.string().nullable().optional(),
});

export const flowVectorsSchema = z.array(flowVectorSchema);

export type CompletionCriteria = z.infer<typeof completionCriteriaSchema>;
export type Destination = z.infer<typeof destinationSchema>;
export type FlowVector = z.infer<typeof flowVectorSchema>;

export const BREAK_VECTOR_ID = 'break';
export const BREAK_VECTOR: FlowVector = {
  id: BREAK_VECTOR_ID,
  name: 'Flow Break',
  color: '#87CEEB',
  icon: '😎',
  destinations: [],
  finalDestinations: [],
  deleted: false,
};
