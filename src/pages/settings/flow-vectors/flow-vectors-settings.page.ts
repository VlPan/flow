import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FlowVectorsService } from '../../../services/flow-vectors/flow-vectors.service';
import { FlowVectorCard } from '../../../components/flow-vector-card/flow-vector-card';
import { FlowVectorPlaceholder } from '../../../components/flow-vector-placeholder/flow-vector-placeholder';
import { FlowVectorForm } from '../../../components/flow-vector-form/flow-vector-form';
import { ConfirmDialog } from '../../../components/confirm-dialog/confirm-dialog';
import { FlowVector, Destination, CompletionCriteria } from '../../../models/flow-vector.model';

@Component({
  selector: 'app-flow-vectors-settings-page',
  standalone: true,
  imports: [
    FlowVectorCard,
    FlowVectorPlaceholder,
    MatDialogModule,
    MatSnackBarModule,
  ],
  templateUrl: './flow-vectors-settings.page.html',
  styleUrl: './flow-vectors-settings.page.css',
})
export class FlowVectorsSettingsPage {
  private readonly flowVectorsService = inject(FlowVectorsService);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  readonly vectors = this.flowVectorsService.vectors;

  openCreateDialog(): void {
    this.dialog
      .open(FlowVectorForm, { width: '600px', data: null })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.flowVectorsService.create(result);
          this.snackBar.open('Flow vector created', 'OK', { duration: 3000 });
        }
      });
  }

  openEditDialog(vector: FlowVector): void {
    this.dialog
      .open(FlowVectorForm, { width: '600px', data: vector })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.flowVectorsService.update(vector.id, result);
          this.snackBar.open('Changes saved', 'OK', { duration: 3000 });
        }
      });
  }

  onDeleteRequested(vector: FlowVector): void {
    this.dialog
      .open(ConfirmDialog, {
        data: { message: `Delete "${vector.name}"? This cannot be undone.` },
        width: '360px',
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.flowVectorsService.softDelete(vector.id);
        }
      });
  }

  onDestinationToggleRequested(vectorId: string, payload: { dest: Destination; isFinal: boolean }): void {
    const { dest, isFinal } = payload;
    const action = dest.completed ? 'Mark as incomplete' : 'Mark as complete';
    this.dialog
      .open(ConfirmDialog, {
        data: { message: `${action}: "${dest.name}"?` },
        width: '360px',
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.flowVectorsService.toggleDestinationComplete(vectorId, dest.id, isFinal);
        }
      });
  }

  onCriteriaToggleRequested(vectorId: string, payload: { dest: Destination; criteria: CompletionCriteria; isFinal: boolean }): void {
    const { dest, criteria, isFinal } = payload;
    const action = criteria.completed ? 'Mark as incomplete' : 'Mark as complete';
    this.dialog
      .open(ConfirmDialog, {
        data: { message: `${action}: "${criteria.name}"?` },
        width: '360px',
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.flowVectorsService.toggleCriteriaComplete(vectorId, dest.id, criteria.id, isFinal);
        }
      });
  }
}
