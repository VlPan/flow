import { z } from 'zod';

export const DEFAULT_PROJECT_COLOR = '#9E9E9E';
export const DEFAULT_PROJECT_ICON = '🎯';

export const projectTaskSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  name: z.string(),
  minPoints: z.number(),
  maxPoints: z.number(),
  claimed: z.boolean(),
  claimedPoints: z.number().nullable(),
  order: z.number(),
});

export const projectStatusSchema = z.enum(['unset', 'green', 'yellow', 'red']);

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  color: z.string(),
  categoryId: z.string().nullable().optional(),
  startDate: z.string(), // YYYY-MM-DD, required
  endDate: z.string().nullable().optional(), // YYYY-MM-DD, optional
  status: projectStatusSchema,
  important: z.boolean(),
  archived: z.boolean(),
  deleted: z.boolean(),
  tasks: z.array(projectTaskSchema),
});

export const projectsSchema = z.array(projectSchema);

export const taskClaimRecordSchema = z.object({
  id: z.string(),
  taskId: z.string(),
  projectId: z.string(),
  points: z.number(),
  date: z.string(), // YYYY-MM-DD
});

export const taskClaimRecordsSchema = z.array(taskClaimRecordSchema);

export type ProjectTask = z.infer<typeof projectTaskSchema>;
export type ProjectStatus = z.infer<typeof projectStatusSchema>;
export type Project = z.infer<typeof projectSchema>;
export type TaskClaimRecord = z.infer<typeof taskClaimRecordSchema>;
