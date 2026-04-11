import { Injectable, computed, inject, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {
  Project,
  ProjectTask,
  TaskClaimRecord,
  DEFAULT_PROJECT_COLOR,
  DEFAULT_PROJECT_ICON,
} from '../../models/project.model';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { BalanceService } from '../balance/balance.service';
import { toLocalDateString } from '../../utils/date.utils';

const MAX_IMPORTANT = 3;

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly storage = inject(LocalStorageService);
  private readonly balanceService = inject(BalanceService);

  private readonly _projects = signal<Project[]>(this.storage.get('projects') ?? []);
  private readonly _claimRecords = signal<TaskClaimRecord[]>(this.storage.get('taskClaimRecords') ?? []);

  readonly projects = computed(() => this._projects().filter(p => !p.deleted && !p.archived));
  readonly archivedProjects = computed(() => this._projects().filter(p => !p.deleted && p.archived));
  readonly allProjectsIncludingDeleted = computed(() => this._projects());

  readonly claimRecords = this._claimRecords.asReadonly();

  readonly importantCount = computed(() =>
    this._projects().filter(p => !p.deleted && p.important).length
  );

  // Projects sorted: important first, then rest
  readonly sortedActiveProjects = computed(() => {
    const active = this.projects();
    return [
      ...active.filter(p => p.important),
      ...active.filter(p => !p.important),
    ];
  });

  create(data: Omit<Project, 'id' | 'deleted' | 'archived' | 'tasks'> & { tasks?: Omit<ProjectTask, 'id' | 'projectId'>[] }): void {
    const projectId = uuidv4();
    const tasks = this.assignTaskIds(data.tasks ?? [], projectId);
    const project: Project = {
      ...data,
      id: projectId,
      color: data.color || DEFAULT_PROJECT_COLOR,
      icon: data.icon || DEFAULT_PROJECT_ICON,
      deleted: false,
      archived: false,
      tasks,
    };
    this._projects.update(all => [...all, project]);
    this.syncProjects();
  }

  update(id: string, data: Partial<Omit<Project, 'id' | 'deleted' | 'archived'>>): void {
    this._projects.update(all =>
      all.map(p => {
        if (p.id !== id) return p;
        return {
          ...p,
          ...data,
          tasks: data.tasks !== undefined
            ? this.assignTaskIds(data.tasks, id)
            : p.tasks,
        };
      })
    );
    this.syncProjects();
  }

  softDelete(id: string): void {
    this._projects.update(all =>
      all.map(p => (p.id === id ? { ...p, deleted: true } : p))
    );
    this.syncProjects();
  }

  setArchived(id: string, archived: boolean): void {
    this._projects.update(all =>
      all.map(p => (p.id === id ? { ...p, archived } : p))
    );
    this.syncProjects();
  }

  setStatus(id: string, status: Project['status'], important: boolean): void {
    this._projects.update(all =>
      all.map(p => (p.id === id ? { ...p, status, important } : p))
    );
    this.syncProjects();
  }

  canMarkImportant(excludingId?: string): boolean {
    const count = this._projects().filter(
      p => !p.deleted && p.important && p.id !== excludingId
    ).length;
    return count < MAX_IMPORTANT;
  }

  claimTask(projectId: string, taskId: string, points: number): void {
    this._projects.update(all =>
      all.map(p => {
        if (p.id !== projectId) return p;
        return {
          ...p,
          tasks: p.tasks.map(t =>
            t.id === taskId
              ? { ...t, claimed: true, claimedPoints: points }
              : t
          ),
        };
      })
    );
    this.syncProjects();

    const record: TaskClaimRecord = {
      id: uuidv4(),
      taskId,
      projectId,
      points,
      date: toLocalDateString(new Date()),
    };
    this._claimRecords.update(all => [...all, record]);
    this.syncClaimRecords();

    this.balanceService.addSessionPoints(points);
  }

  completionPercent(project: Project): number {
    if (project.tasks.length === 0) return 0;
    const claimed = project.tasks.filter(t => t.claimed).length;
    return Math.round((claimed / project.tasks.length) * 100);
  }

  private assignTaskIds(tasks: Omit<ProjectTask, 'id' | 'projectId'>[], projectId: string): ProjectTask[] {
    return tasks.map((t, index) => ({
      ...t,
      id: (t as ProjectTask).id || uuidv4(),
      projectId,
      order: t.order ?? index,
    }));
  }

  private syncProjects(): void {
    this.storage.set('projects', this._projects());
  }

  private syncClaimRecords(): void {
    this.storage.set('taskClaimRecords', this._claimRecords());
  }
}
