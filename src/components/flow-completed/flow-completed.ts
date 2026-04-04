import { Component, computed, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateService } from '../../services/date/date.service';
import { SessionService } from '../../services/session/session.service';
import { FlowVectorsService } from '../../services/flow-vectors/flow-vectors.service';
import { FlowCompletedRow } from '../flow-completed-row/flow-completed-row';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import {
  SessionCompleteDialog,
  SessionCompleteDialogData,
  SessionCompleteDialogResult,
} from '../session-complete-dialog/session-complete-dialog';
import { SessionRecord } from '../../models/session.model';
import { FlowVector } from '../../models/flow-vector.model';
import { toLocalDateString } from '../../utils/date.utils';

@Component({
  selector: 'app-flow-completed',
  standalone: true,
  imports: [FlowCompletedRow],
  templateUrl: './flow-completed.html',
  styleUrl: './flow-completed.css',
})
export class FlowCompleted {
  private readonly sessionService = inject(SessionService);
  private readonly flowVectorsService = inject(FlowVectorsService);
  private readonly dateService = inject(DateService);
  private readonly dialog = inject(MatDialog);

  private readonly vectorsMap = computed(() => {
    const map = new Map<string, FlowVector>();
    for (const v of this.flowVectorsService.vectorsIncludingBreak()) {
      map.set(v.id, v);
    }
    return map;
  });

  protected readonly todayRecords = computed(() => {
    const date = toLocalDateString(this.dateService.selectedDay());
    return this.sessionService.records().filter(
      r => r.startDate === date && this.vectorsMap().has(r.flowVectorId)
    );
  });

  protected vectorFor(record: SessionRecord): FlowVector {
    return this.vectorsMap().get(record.flowVectorId)!;
  }

  protected onEdit(record: SessionRecord): void {
    const vector = this.vectorFor(record);
    this.dialog
      .open(SessionCompleteDialog, {
        width: '480px',
        data: {
          sessionMinutes: record.sessionMinutes,
          flowScore: record.flowScore,
          shortDescription: record.shortDescription,
          vectorName: vector.name,
          vectorIcon: vector.icon,
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
    this.dialog
      .open(ConfirmDialog, {
        width: '360px',
        data: { message: 'Delete this session record?' },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.sessionService.deleteRecord(record.id);
      });
  }
}
