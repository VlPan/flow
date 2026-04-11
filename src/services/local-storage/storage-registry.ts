import { z, ZodType } from 'zod';
import { flowVectorsSchema } from '../../models/flow-vector.model';
import { projectsSchema, taskClaimRecordsSchema } from '../../models/project.model';
import { categoriesSchema } from '../../models/category.model';
import { planningRowsSchema } from '../../models/planning-row.model';
import { activeSessionSchema, sessionRecordsSchema } from '../../models/session.model';
import { rewardsSchema } from '../../models/reward.model';
import { exchangeRecordsSchema } from '../../models/exchange-record.model';
import { dailySpendingLogsSchema } from '../../models/daily-spending-log.model';
import { redemptionsSchema } from '../../models/redemption.model';
import { billsSchema } from '../../models/bill.model';
import { habitGroupsSchema, habitsSchema, habitCompletionsSchema } from '../../models/habit.model';

// Register all localStorage keys and their schemas here.
// To add a new key: add an entry to this object.
export const STORAGE_REGISTRY = {
  sidenavExpanded: z.boolean(),
  flowVectors: flowVectorsSchema,
  projects: projectsSchema,
  taskClaimRecords: taskClaimRecordsSchema,
  categories: categoriesSchema,
  flowSplitSizes: z.tuple([z.number(), z.number()]),
  planningRows: planningRowsSchema,
  activeSession: activeSessionSchema.nullable(),
  sessionRecords: sessionRecordsSchema,
  sessionHidePassedTime: z.boolean(),
  sessionGoodMinutes: z.number(),
  sessionHideActiveBanner: z.boolean(),
  // Balance snapshots
  pointsEarned: z.number(),
  currencyBalance: z.number(),
  // Balance audit trail (not used for computation)
  rewards: rewardsSchema,
  exchangeRecords: exchangeRecordsSchema,
  dailySpendingLogs: dailySpendingLogsSchema,
  redemptions: redemptionsSchema,
  lastDailyLogDate: z.string().nullable(),
  // Balance settings
  balanceCurrencySymbol: z.string(),
  balanceExchangeRate: z.number(),
  balanceBasicDiscount: z.number(),
  // Bills
  bills: billsSchema,
  // Habits
  habitGroups: habitGroupsSchema,
  habits: habitsSchema,
  habitCompletions: habitCompletionsSchema,
  // Statistics
  statsGoal: z.object({ startDate: z.string(), endDate: z.string(), points: z.number() }).nullable(),
} satisfies Record<string, ZodType>;

export type StorageRegistry = typeof STORAGE_REGISTRY;
export type StorageKey = keyof StorageRegistry;
export type StorageValue<K extends StorageKey> = z.infer<StorageRegistry[K]>;
