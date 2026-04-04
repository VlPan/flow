import { Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DateService } from '../../services/date/date.service';
import { WeeklyDatePicker } from '../weekly-date-picker/weekly-date-picker';
import { FlowPlanningRow } from '../flow-planning-row/flow-planning-row';
import { PlanningRowForm } from '../planning-row-form/planning-row-form';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { PlanningRowService } from '../../services/planning-row/planning-row.service';
import { FlowVectorsService } from '../../services/flow-vectors/flow-vectors.service';
import { PlanningRow } from '../../models/planning-row.model';
import { FlowVector } from '../../models/flow-vector.model';
import { toLocalDateString } from '../../utils/date.utils';

@Component({
  selector: 'app-flow-planning',
  standalone: true,
  imports: [DatePipe, WeeklyDatePicker, FlowPlanningRow, MatIconModule],
  templateUrl: './flow-planning.html',
  styleUrl: './flow-planning.css',
})
export class FlowPlanning {
  protected readonly dateService = inject(DateService);
  private readonly planningRowService = inject(PlanningRowService);
  private readonly flowVectorsService = inject(FlowVectorsService);
  private readonly dialog = inject(MatDialog);

  private readonly vectorsMap = computed(() => {
    const map = new Map<string, FlowVector>();
    for (const v of this.flowVectorsService.vectors()) {
      map.set(v.id, v);
    }
    return map;
  });

  protected readonly todayRows = computed(() => {
    const date = toLocalDateString(this.dateService.selectedDay());
    return this.planningRowService.rows().filter(
      r => r.createdDate === date && this.vectorsMap().has(r.flowVectorId)
    );
  });

  protected vectorFor(row: PlanningRow): FlowVector {
    return this.vectorsMap().get(row.flowVectorId)!;
  }

  protected openAddDialog(): void {
    this.dialog.open(PlanningRowForm, { width: '480px', data: null })
      .afterClosed()
      .subscribe((result?: { flowVectorId: string; shortDescription: string }) => {
        if (!result) return;
        this.planningRowService.create({
          ...result,
          createdDate: toLocalDateString(this.dateService.selectedDay()),
        });
      });
  }

  protected onEdit(row: PlanningRow): void {
    this.dialog.open(PlanningRowForm, { width: '480px', data: row })
      .afterClosed()
      .subscribe((result?: { flowVectorId: string; shortDescription: string }) => {
        if (!result) return;
        this.planningRowService.update(row.id, result);
      });
  }

  protected onDelete(row: PlanningRow): void {
    this.dialog.open(ConfirmDialog, {
      width: '360px',
      data: { message: 'Delete this planning row?' },
    })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.planningRowService.delete(row.id);
      });
  }
}
