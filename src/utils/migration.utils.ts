import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { flowVectorsSchema } from '../models/flow-vector.model';
import { Project, ProjectTask } from '../models/project.model';
import { toLocalDateString } from './date.utils';

/**
 * Runs all data migrations needed to transition from flow-vectors/destinations
 * to the projects/tasks model. Safe to run multiple times (idempotent).
 */
export function runMigrations(): void {
  migrateFlowVectorsToProjects();
  migrateSessionsProjectId();
  migratePlanningRowsProjectId();
}

function migrateFlowVectorsToProjects(): void {
  if (localStorage.getItem('projects') !== null) return; // already migrated

  const raw = localStorage.getItem('flowVectors');
  if (!raw) {
    localStorage.setItem('projects', JSON.stringify([]));
    localStorage.setItem('taskClaimRecords', JSON.stringify([]));
    return;
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    localStorage.setItem('projects', JSON.stringify([]));
    localStorage.setItem('taskClaimRecords', JSON.stringify([]));
    return;
  }

  const result = flowVectorsSchema.safeParse(parsed);
  if (!result.success) {
    localStorage.setItem('projects', JSON.stringify([]));
    localStorage.setItem('taskClaimRecords', JSON.stringify([]));
    return;
  }

  const today = toLocalDateString(new Date());

  const projects: Project[] = result.data.map((vector, index) => {
    const allDests = [
      ...vector.destinations,
      ...vector.finalDestinations,
    ];

    const tasks: ProjectTask[] = allDests.map((dest, taskIndex) => ({
      id: dest.id || uuidv4(),
      projectId: vector.id,
      name: dest.name,
      minPoints: 50,
      maxPoints: 150,
      claimed: dest.completed,
      claimedPoints: dest.completed ? 100 : null,
      order: taskIndex,
    }));

    return {
      id: vector.id,
      name: vector.name,
      icon: vector.icon,
      color: vector.color,
      categoryId: vector.categoryId ?? null,
      startDate: today,
      endDate: null,
      status: 'unset' as const,
      important: index < 3 && !vector.deleted, // first 3 non-deleted become important
      archived: false,
      deleted: vector.deleted,
      tasks,
    };
  });

  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('taskClaimRecords', JSON.stringify([]));
}

function migrateSessionsProjectId(): void {
  const raw = localStorage.getItem('sessionRecords');
  if (!raw) return;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return;
  }

  if (!Array.isArray(parsed)) return;

  const migrated = parsed.map((record: Record<string, unknown>) => {
    if ('projectId' in record) return record; // already migrated
    if ('flowVectorId' in record) {
      const { flowVectorId, ...rest } = record;
      return { ...rest, projectId: flowVectorId };
    }
    return record;
  });

  localStorage.setItem('sessionRecords', JSON.stringify(migrated));

  // Migrate active session too
  const activeRaw = localStorage.getItem('activeSession');
  if (activeRaw) {
    try {
      const active = JSON.parse(activeRaw) as Record<string, unknown>;
      if (active && 'flowVectorId' in active && !('projectId' in active)) {
        const { flowVectorId, ...rest } = active;
        localStorage.setItem('activeSession', JSON.stringify({ ...rest, projectId: flowVectorId }));
      }
    } catch {
      // ignore
    }
  }
}

function migratePlanningRowsProjectId(): void {
  const raw = localStorage.getItem('planningRows');
  if (!raw) return;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return;
  }

  if (!Array.isArray(parsed)) return;

  const migrated = parsed.map((row: Record<string, unknown>) => {
    if ('projectId' in row) return row; // already migrated
    if ('flowVectorId' in row) {
      const { flowVectorId, ...rest } = row;
      return { ...rest, projectId: flowVectorId };
    }
    return row;
  });

  localStorage.setItem('planningRows', JSON.stringify(migrated));
}

// Zod schema for raw migration validation
const _rawSessionSchema = z.object({ flowVectorId: z.string().optional(), projectId: z.string().optional() });
void _rawSessionSchema; // suppress unused warning
