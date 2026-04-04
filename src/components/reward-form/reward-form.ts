import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Reward } from '../../models/reward.model';

@Component({
  selector: 'app-reward-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './reward-form.html',
})
export class RewardForm {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<RewardForm>);
  protected readonly data = inject<Reward | null>(MAT_DIALOG_DATA);

  protected readonly isEditMode = !!this.data;

  protected readonly form = this.fb.group({
    name: [this.data?.name ?? '', Validators.required],
    cost: [this.data?.cost ?? (null as number | null), [Validators.required, Validators.min(0.01)]],
    emoji: [this.data?.emoji ?? ''],
  });

  protected save(): void {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    this.dialogRef.close({
      name: raw.name!,
      cost: raw.cost!,
      emoji: raw.emoji || undefined,
    });
  }

  protected cancel(): void {
    this.dialogRef.close(undefined);
  }
}
