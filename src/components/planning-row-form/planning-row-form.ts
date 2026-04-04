import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { PlanningRow } from '../../models/planning-row.model';
import { FlowVectorsService } from '../../services/flow-vectors/flow-vectors.service';

@Component({
  selector: 'app-planning-row-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './planning-row-form.html',
  styleUrl: './planning-row-form.css',
})
export class PlanningRowForm {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<PlanningRowForm>);
  protected readonly data = inject<PlanningRow | null>(MAT_DIALOG_DATA);
  private readonly flowVectorsService = inject(FlowVectorsService);

  protected readonly isEditMode = !!this.data;
  protected readonly vectors = this.flowVectorsService.vectors;

  protected readonly form = this.fb.group({
    flowVectorId: [this.data?.flowVectorId ?? '', Validators.required],
    shortDescription: [this.data?.shortDescription ?? ''],
  });

  protected save(): void {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    this.dialogRef.close({
      flowVectorId: raw.flowVectorId!,
      shortDescription: raw.shortDescription ?? '',
    });
  }

  protected cancel(): void {
    this.dialogRef.close(undefined);
  }
}
