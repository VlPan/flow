import { Component, inject } from '@angular/core';
import { AngularSplitModule, SplitGutterInteractionEvent } from 'angular-split';
import { UiService } from '../../services/ui/ui.service';
import { FlowPlanning } from '../../components/flow-planning/flow-planning';
import { FlowCompleted } from '../../components/flow-completed/flow-completed';

@Component({
  selector: 'app-flow-page',
  standalone: true,
  imports: [AngularSplitModule, FlowPlanning, FlowCompleted],
  templateUrl: './flow.page.html',
})
export class FlowPage {
  protected readonly uiService = inject(UiService);

  protected onDragEnd(event: SplitGutterInteractionEvent): void {
    this.uiService.setFlowSplitSizes(event.sizes as [number, number]);
  }
}
