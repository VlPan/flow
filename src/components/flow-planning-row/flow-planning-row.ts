import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { PlanningRow } from '../../models/planning-row.model';
import { FlowVector } from '../../models/flow-vector.model';

@Component({
  selector: 'app-flow-planning-row',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './flow-planning-row.html',
  styleUrl: './flow-planning-row.css',
})
export class FlowPlanningRow {
  readonly row = input.required<PlanningRow>();
  readonly vector = input.required<FlowVector>();
  readonly isActive = input<boolean>(false);
  readonly isAnySessionActive = input<boolean>(false);
  readonly fillPercent = input<number>(0);
  readonly isPaused = input<boolean>(false);

  readonly startRequested = output<void>();
  readonly pauseRequested = output<void>();
  readonly resumeRequested = output<void>();
  readonly completeRequested = output<void>();
  readonly editRequested = output<void>();
  readonly deleteRequested = output<void>();
}
