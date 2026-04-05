import { z } from 'zod';

export const habitGroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdDate: z.string(), // YYYY-MM-DD
});

export const habitGroupsSchema = z.array(habitGroupSchema);
export type HabitGroup = z.infer<typeof habitGroupSchema>;

export const habitSchema = z.object({
  id: z.string(),
  name: z.string(),
  emoji: z.string().optional(),
  groupId: z.string(),
  basePoints: z.number(),
  frequency: z.number().min(1).max(7), // times per week
  masteryRewardPoints: z.number(),
  masteryRewardClaimed: z.boolean(),
  isMastered: z.boolean(),
  createdDate: z.string(), // YYYY-MM-DD
  withCompletionScore: z.boolean().optional(),
});

export const habitsSchema = z.array(habitSchema);
export type Habit = z.infer<typeof habitSchema>;

export const habitCompletionSchema = z.object({
  id: z.string(),
  habitId: z.string(),
  date: z.string(), // YYYY-MM-DD — the date the habit was performed
  pointsEarned: z.number(),
  completionScore: z.number().min(1).max(5).optional(),
});

export const habitCompletionsSchema = z.array(habitCompletionSchema);
export type HabitCompletion = z.infer<typeof habitCompletionSchema>;
