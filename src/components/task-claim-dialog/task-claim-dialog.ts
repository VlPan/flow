import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProjectTask } from '../../models/project.model';

export interface TaskClaimDialogData {
  task: ProjectTask;
}

export interface TaskClaimDialogResult {
  points: number;
}

@Component({
  selector: 'app-task-claim-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogModule, MatButtonModule, MatSliderModule, MatFormFieldModule, MatInputModule],
  templateUrl: './task-claim-dialog.html',
})
export class TaskClaimDialog {
  private readonly dialogRef = inject(MatDialogRef<TaskClaimDialog>);
  protected readonly data = inject<TaskClaimDialogData>(MAT_DIALOG_DATA);

  protected points = this.data.task.minPoints;

  protected get min(): number { return this.data.task.minPoints; }
  protected get max(): number { return this.data.task.maxPoints; }

  protected onSliderChange(value: number): void {
    this.points = value;
  }

  protected onInputChange(value: string): void {
    const n = parseInt(value, 10);
    if (!isNaN(n)) {
      this.points = Math.min(this.max, Math.max(this.min, n));
    }
  }

  protected claim(): void {
    this.dialogRef.close({ points: this.points } satisfies TaskClaimDialogResult);
  }

  protected cancel(): void {
    this.dialogRef.close(undefined);
  }
}
