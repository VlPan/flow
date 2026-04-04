import { SessionRecord } from '../models/session.model';

/**
 * Calculates the score for a single session.
 * Formula: (minutes × (flowScore × 10) / 100) × depth_bonus
 * depth_bonus = minutes < 45 ? 1 : 1 + log₂(minutes / 45) × 0.167
 */
export function calculateSessionScore(sessionMinutes: number, flowScore: number): number {
  const quality = flowScore * 10;
  const base = (sessionMinutes * quality) / 100;
  const depthBonus =
    sessionMinutes < 45 ? 1 : 1 + Math.log2(sessionMinutes / 45) * 0.167;
  return base * depthBonus;
}

/**
 * Calculates the total daily score from a list of session records.
 * Returns the sum of all session scores, rounded to the nearest integer.
 */
export function calculateDailyScore(records: SessionRecord[]): number {
  const total = records.reduce(
    (sum, r) => sum + calculateSessionScore(r.sessionMinutes, r.flowScore),
    0
  );
  return Math.round(total);
}
