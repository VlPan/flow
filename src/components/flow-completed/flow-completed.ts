import { Component, computed, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateService } from '../../services/date/date.service';
import { SessionService } from '../../services/session/session.service';
import { ProjectsService } from '../../services/projects/projects.service';
import { BalanceService } from '../../services/balance/balance.service';
import { FlowCompletedRow } from '../flow-completed-row/flow-completed-row';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import {
  SessionCompleteDialog,
  SessionCompleteDialogData,
  SessionCompleteDialogResult,
} from '../session-complete-dialog/session-complete-dialog';
import {
  DeleteSessionDialog,
  DeleteSessionDialogResult,
} from '../delete-session-dialog/delete-session-dialog';
import { SessionRecord } from '../../models/session.model';
import { BREAK_VECTOR, BREAK_VECTOR_ID } from '../../models/flow-vector.model';
import { toLocalDateString } from '../../utils/date.utils';
import { calculateDailyScore, calculateSessionScore } from '../../utils/scoring.utils';

@Component({
  selector: 'app-flow-completed',
  standalone: true,
  imports: [FlowCompletedRow],
  templateUrl: './flow-completed.html',
  styleUrl: './flow-completed.css',
})
export class FlowCompleted {
  private readonly sessionService = inject(SessionService);
  private readonly projectsService = inject(ProjectsService);
  private readonly dateService = inject(DateService);
  private readonly balanceService = inject(BalanceService);
  private readonly dialog = inject(MatDialog);

  private readonly projectsMap = computed(() => {
    const map = new Map<string, { name: string; icon: string; color: string }>();
    map.set(BREAK_VECTOR_ID, { name: BREAK_VECTOR.name, icon: BREAK_VECTOR.icon, color: BREAK_VECTOR.color });
    for (const p of this.projectsService.allProjectsIncludingDeleted()) {
      map.set(p.id, { name: p.name, icon: p.icon, color: p.color });
    }
    return map;
  });

  protected readonly todayRecords = computed(() => {
    const date = toLocalDateString(this.dateService.selectedDay());
    return this.sessionService.records().filter(
      r => r.startDate === date && this.projectsMap().has(r.projectId)
    );
  });

  protected readonly dailyScore = computed(() =>
    calculateDailyScore(this.todayRecords())
  );

  protected projectFor(record: SessionRecord): { name: string; icon: string; color: string } {
    return this.projectsMap().get(record.projectId)!;
  }

  protected onEdit(record: SessionRecord): void {
    const project = this.projectFor(record);
    this.dialog
      .open(SessionCompleteDialog, {
        width: '480px',
        data: {
          sessionMinutes: record.sessionMinutes,
          flowScore: record.flowScore,
          shortDescription: record.shortDescription,
          vectorName: project.name,
          vectorIcon: project.icon,
          isEdit: true,
        } satisfies SessionCompleteDialogData,
      })
      .afterClosed()
      .subscribe((result?: SessionCompleteDialogResult) => {
        if (!result) return;
        this.sessionService.updateRecord(record.id, result);
      });
  }

  protected onDelete(record: SessionRecord): void {
    const sessionPoints = calculateSessionScore(record.sessionMinutes, record.flowScore);
    this.dialog
      .open(DeleteSessionDialog, {
        width: '400px',
        data: { sessionPoints },
      })
      .afterClosed()
      .subscribe((result: DeleteSessionDialogResult | undefined) => {
        if (!result) return;
        if (result === 'remove-points') {
          this.balanceService.removeSessionPoints(sessionPoints);
        }
        this.sessionService.deleteRecord(record.id);
      });
  }
}
