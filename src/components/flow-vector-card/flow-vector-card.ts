import { Component, computed, input, output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule, MatCheckboxChange } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlowVector, Destination, CompletionCriteria } from '../../models/flow-vector.model';
import { sortByCompleted } from '../../utils/sort.utils';
import { SortByCompletedPipe } from '../../utils/sort-by-completed.pipe';

@Component({
  selector: 'app-flow-vector-card',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    SortByCompletedPipe,
  ],
  templateUrl: './flow-vector-card.html',
  styleUrl: './flow-vector-card.css',
})
export class FlowVectorCard {
  readonly vector = input.required<FlowVector>();
  readonly edit = output<FlowVector>();
  readonly deleteRequested = output<void>();
  readonly destinationToggleRequested = output<{ dest: Destination; isFinal: boolean }>();
  readonly criteriaToggleRequested = output<{ dest: Destination; criteria: CompletionCriteria; isFinal: boolean }>();

  protected readonly sortedDestinations = computed(() => sortByCompleted(this.vector().destinations));
  protected readonly sortedFinalDestinations = computed(() => sortByCompleted(this.vector().finalDestinations));

  protected onEditClick(): void {
    this.edit.emit(this.vector());
  }

  protected onDeleteClick(): void {
    this.deleteRequested.emit();
  }

  protected onDestinationToggle(dest: Destination, isFinal: boolean): void {
    this.destinationToggleRequested.emit({ dest, isFinal });
  }

  protected onCriteriaChange(
    event: MatCheckboxChange,
    dest: Destination,
    criteria: CompletionCriteria,
    isFinal: boolean
  ): void {
    event.source.checked = !event.checked; // revert immediately — wait for confirmation
    this.criteriaToggleRequested.emit({ dest, criteria, isFinal });
  }
}
