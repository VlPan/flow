import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { PlanningRow } from '../../models/planning-row.model';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-flow-planning-row',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, CdkDragHandle],
  templateUrl: './flow-planning-row.html',
  styleUrl: './flow-planning-row.css',
})
export class FlowPlanningRow {
  readonly row = input.required<PlanningRow>();
  readonly project = input.required<Project>();
  readonly isActive = input<boolean>(false);
  readonly isAnySessionActive = input<boolean>(false);
  readonly isVacationDay = input<boolean>(false);
  readonly isSimpleTrackDay = input<boolean>(false);
  readonly fillPercent = input<number>(0);
  readonly isPaused = input<boolean>(false);

  readonly startRequested = output<void>();
  readonly pauseRequested = output<void>();
  readonly resumeRequested = output<void>();
  readonly completeRequested = output<void>();
  readonly editRequested = output<void>();
  readonly deleteRequested = output<void>();
}
