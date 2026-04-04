import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HabitGroup } from '../../models/habit.model';

@Component({
  selector: 'app-habit-group-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './habit-group-form.html',
})
export class HabitGroupForm {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<HabitGroupForm>);
  protected readonly data = inject<HabitGroup | null>(MAT_DIALOG_DATA);

  protected readonly isEditMode = !!this.data;

  protected readonly form = this.fb.group({
    name: [this.data?.name ?? '', Validators.required],
  });

  protected save(): void {
    if (this.form.invalid) return;
    this.dialogRef.close({ name: this.form.getRawValue().name! });
  }

  protected cancel(): void {
    this.dialogRef.close(undefined);
  }
}
