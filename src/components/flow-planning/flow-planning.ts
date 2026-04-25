import { Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DateService } from '../../services/date/date.service';
import { WeeklyDatePicker } from '../weekly-date-picker/weekly-date-picker';
import { FlowPlanningRow } from '../flow-planning-row/flow-planning-row';
import { PlanningRowForm } from '../planning-row-form/planning-row-form';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import {
  SessionCompleteDialog,
  SessionCompleteDialogData,
  SessionCompleteDialogResult,
} from '../session-complete-dialog/session-complete-dialog';
import { PlanningRowService } from '../../services/planning-row/planning-row.service';
import { ProjectsService } from '../../services/projects/projects.service';
import { SessionService } from '../../services/session/session.service';
import { SessionSettingsService } from '../../services/session-settings/session-settings.service';
import { BalanceService } from '../../services/balance/balance.service';
import { VacationService } from '../../services/vacation/vacation.service';
import {
  DeclareVacationDialog,
  DeclareVacationDialogResult,
} from '../declare-vacation-dialog/declare-vacation-dialog';
import { SimpleTrackService } from '../../services/simple-track/simple-track.service';
import { SimpleTrackScoreDialog } from '../simple-track-score-dialog/simple-track-score-dialog';
import { PlanningRow } from '../../models/planning-row.model';
import { Project, TaskClaimRecord } from '../../models/project.model';
import { BREAK_VECTOR } from '../../models/flow-vector.model';
import { SessionRecord } from '../../models/session.model';
import { HabitCompletion } from '../../models/habit.model';
import { toLocalDateString } from '../../utils/date.utils';
import { calculateSessionScore } from '../../utils/scoring.utils';

@Component({
  selector: 'app-flow-planning',
  standalone: true,
  imports: [DatePipe, WeeklyDatePicker, FlowPlanningRow, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, CdkDropList, CdkDrag],
  templateUrl: './flow-planning.html',
  styleUrl: './flow-planning.css',
})
export class FlowPlanning {
  protected readonly dateService = inject(DateService);
  protected readonly sessionService = inject(SessionService);
  protected readonly sessionSettings = inject(SessionSettingsService);
  private readonly planningRowService = inject(PlanningRowService);
  private readonly projectsService = inject(ProjectsService);
  private readonly balanceService = inject(BalanceService);
  readonly vacationService = inject(VacationService);
  readonly simpleTrackService = inject(SimpleTrackService);
  private readonly dialog = inject(MatDialog);

  private readonly projectsMap = computed(() => {
    const map = new Map<string, Project>();
    for (const p of this.projectsService.projects()) {
      map.set(p.id, p);
    }
    return map;
  });

  protected readonly todayRows = computed(() => {
    const date = toLocalDateString(this.dateService.selectedDay());
    const rows = this.planningRowService.rows().filter(
      r => r.createdDate === date && this.projectsMap().has(r.projectId)
    );
    const activeRowId = this.sessionService.activeSession()?.planningRowId;
    if (!activeRowId) return rows;
    return [...rows].sort((a, b) => {
      if (a.id === activeRowId) return -1;
      if (b.id === activeRowId) return 1;
      return 0;
    });
  });

  protected readonly isSelectedDayToday = computed(() =>
    toLocalDateString(this.dateService.selectedDay()) === toLocalDateString(this.dateService.today)
  );

  protected readonly isSelectedDayVacation = computed(() =>
    this.vacationService.isVacationDay(toLocalDateString(this.dateService.selectedDay()))
  );

  protected readonly isSelectedDaySimpleTrack = computed(() =>
    this.simpleTrackService.isSimpleTrackDay(toLocalDateString(this.dateService.selectedDay()))
  );

  protected readonly todayPoints = computed(() => {
    const todayStr = toLocalDateString(this.dateService.today);
    
    // Sessions
    const sessions = this.sessionService.records().filter((r: SessionRecord) => r.startDate === todayStr);
    const sessionPts = sessions.reduce((sum, s) => sum + calculateSessionScore(s.sessionMinutes, s.flowScore), 0);
    
    // Habits
    const habitsStorage = (this.vacationService as any)['storage'].get('habitCompletions') ?? [];
    const habitPts = habitsStorage.filter((c: HabitCompletion) => c.date === todayStr).reduce((sum: number, c: HabitCompletion) => sum + c.pointsEarned, 0);

    // Tasks
    const claimsStorage = (this.vacationService as any)['storage'].get('taskClaimRecords') ?? [];
    const taskPts = claimsStorage.filter((c: TaskClaimRecord) => c.date === todayStr).reduce((sum: number, c: TaskClaimRecord) => sum + c.points, 0);

    return Math.round(sessionPts) + habitPts + taskPts;
  });

  protected readonly quickPickProjects = computed(() => {
    if (this.sessionService.activeSession()) return [];
    return this.projectsService.projects();
  });

  protected readonly canDeclareVacation = computed(() =>
    this.vacationService.vacationBalance() > 0
  );

  protected openDeclareVacationDialog(): void {
    this.dialog
      .open(DeclareVacationDialog, {
        width: '480px',
        data: { defaultDate: this.dateService.selectedDay() },
      })
      .afterClosed()
      .subscribe((result?: DeclareVacationDialogResult) => {
        if (!result) return;
        this.vacationService.declareVacation(result.startDate, result.endDate);
      });
  }

  protected startSimpleTrackDay(): void {
    const pts = this.todayPoints();
    const message = pts > 0
      ? `Are you sure you want to switch to Simple Track mode for today? This will reset your ${pts} points earned today and disable detailed tracking.`
      : 'Are you sure you want to switch to Simple Track mode for today? Detailed tracking will be disabled.';

    this.dialog
      .open(ConfirmDialog, {
        width: '400px',
        data: {
          message,
          confirmLabel: 'Start Simple Track',
          cancelLabel: 'Cancel',
        },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (!confirmed) return;
        this.simpleTrackService.startSimpleTrackDay(toLocalDateString(this.dateService.today), pts);
      });
  }

  protected scoreSimpleTrackDay(): void {
    const todayStr = toLocalDateString(this.dateService.today);
    const record = this.simpleTrackService.simpleTrackRecords().find(r => r.date === todayStr);
    if (!record) return;

    this.dialog
      .open(SimpleTrackScoreDialog, {
        width: '420px',
        data: { record },
      })
      .afterClosed()
      .subscribe((result?: number) => {
        if (result !== undefined) {
          this.simpleTrackService.scoreDay(record.id, result);
        }
      });
  }

  protected moveToNextDay(): void {
    const selected = this.dateService.selectedDay();
    const next = new Date(selected);
    next.setDate(next.getDate() + 1);
    this.planningRowService.moveToDate(toLocalDateString(selected), toLocalDateString(next));
  }

  protected moveToToday(): void {
    this.planningRowService.moveToDate(
      toLocalDateString(this.dateService.selectedDay()),
      toLocalDateString(this.dateService.today)
    );
  }

  protected quickAdd(project: Project): void {
    this.planningRowService.create({
      projectId: project.id,
      shortDescription: '',
      createdDate: toLocalDateString(this.dateService.selectedDay()),
    });
  }

  protected readonly activeBannerProject = computed(() => {
    const session = this.sessionService.activeSession();
    if (!session) return null;
    return this.projectsMap().get(session.projectId) ?? null;
  });

  protected readonly formattedElapsed = computed(() => {
    const ms = this.sessionService.elapsedMs();
    const total = Math.floor(ms / 1000);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    if (h > 0) {
      return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  });

  protected projectFor(row: PlanningRow): Project {
    return this.projectsMap().get(row.projectId)!;
  }

  protected isRowActive(row: PlanningRow): boolean {
    return this.sessionService.activeSession()?.planningRowId === row.id;
  }

  protected onDrop(event: CdkDragDrop<PlanningRow[]>): void {
    if (event.previousIndex === event.currentIndex) return;
    const rows = [...this.todayRows()];
    moveItemInArray(rows, event.previousIndex, event.currentIndex);
    this.planningRowService.reorder(rows.map(r => r.id));
  }

  protected openAddDialog(): void {
    this.dialog
      .open(PlanningRowForm, { width: '480px', data: null })
      .afterClosed()
      .subscribe((result?: { projectId: string; shortDescription: string }) => {
        if (!result) return;
        this.planningRowService.create({
          ...result,
          createdDate: toLocalDateString(this.dateService.selectedDay()),
        });
      });
  }

  protected onEdit(row: PlanningRow): void {
    this.dialog
      .open(PlanningRowForm, { width: '480px', data: row })
      .afterClosed()
      .subscribe((result?: { projectId: string; shortDescription: string }) => {
        if (!result) return;
        this.planningRowService.update(row.id, result);
      });
  }

  protected onDelete(row: PlanningRow): void {
    this.dialog
      .open(ConfirmDialog, {
        width: '360px',
        data: { message: 'Delete this planning row?' },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.planningRowService.delete(row.id);
      });
  }

  protected onStart(row: PlanningRow): void {
    const recentRecord = this.getLastSessionWithinHour();
    if (!recentRecord) {
      this.sessionService.start(row);
      return;
    }

    const minutesAgo = Math.floor(
      (Date.now() - new Date(recentRecord.finishedAt).getTime()) / 60000
    );
    if (minutesAgo < 5) {
      this.sessionService.start(row);
      return;
    }
    this.dialog
      .open(ConfirmDialog, {
        width: '400px',
        data: {
          message: `Your last session ended ${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago. Were you on a flow break?`,
          confirmLabel: 'Yes, I was',
          cancelLabel: 'No, start fresh',
        },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (!confirmed) {
          this.sessionService.start(row);
          return;
        }
        this.openBreakDialog(recentRecord.finishedAt, new Date().toISOString(), row);
      });
  }

  private getLastSessionWithinHour(): SessionRecord | null {
    const today = toLocalDateString(new Date());
    const records = this.sessionService
      .records()
      .filter(r => r.startDate === today)
      .sort((a, b) => new Date(b.finishedAt).getTime() - new Date(a.finishedAt).getTime());
    const last = records[0];
    if (!last) return null;
    return Date.now() - new Date(last.finishedAt).getTime() < 60 * 60 * 1000 ? last : null;
  }

  private openBreakDialog(breakStartedAt: string, breakFinishedAt: string, row: PlanningRow): void {
    const sessionMinutes = Math.max(
      1,
      Math.floor((new Date(breakFinishedAt).getTime() - new Date(breakStartedAt).getTime()) / 60000)
    );
    this.dialog
      .open(SessionCompleteDialog, {
        width: '480px',
        data: {
          sessionMinutes,
          flowScore: 5,
          shortDescription: '',
          vectorName: BREAK_VECTOR.name,
          vectorIcon: BREAK_VECTOR.icon,
          isEdit: false,
          isBreak: true,
        } satisfies SessionCompleteDialogData,
      })
      .afterClosed()
      .subscribe((result?: SessionCompleteDialogResult) => {
        if (result) {
          this.sessionService.completeBreak(
            breakStartedAt,
            breakFinishedAt,
            result.sessionMinutes,
            result.flowScore,
            result.shortDescription
          );
          this.balanceService.addSessionPoints(
            calculateSessionScore(result.sessionMinutes, result.flowScore)
          );
        }
        this.sessionService.start(row);
      });
  }

  protected openCompleteDialog(): void {
    const session = this.sessionService.activeSession();
    if (!session) return;
    const project = this.projectsMap().get(session.projectId);
    this.dialog
      .open(SessionCompleteDialog, {
        width: '480px',
        data: {
          sessionMinutes: Math.max(1, this.sessionService.elapsedMinutes()),
          flowScore: 5,
          shortDescription: session.shortDescription,
          vectorName: project?.name ?? '',
          vectorIcon: project?.icon ?? '',
          isEdit: false,
        } satisfies SessionCompleteDialogData,
      })
      .afterClosed()
      .subscribe((result?: SessionCompleteDialogResult) => {
        if (!result) return;
        const rowId = session.planningRowId;
        this.sessionService.complete(result.sessionMinutes, result.flowScore, result.shortDescription);
        const sessionPts = calculateSessionScore(result.sessionMinutes, result.flowScore);
        this.balanceService.addSessionPoints(sessionPts);
        this.vacationService.checkRandomChance(Math.round(sessionPts));
        this.planningRowService.delete(rowId);
      });
  }
}
