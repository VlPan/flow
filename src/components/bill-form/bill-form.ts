import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Bill } from '../../models/bill.model';

@Component({
  selector: 'app-bill-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './bill-form.html',
  styles: [`
    .full-width { width: 100%; }
    form { display: flex; flex-direction: column; gap: 4px; padding-top: 4px; }
    .necessity-checkbox { margin-top: 4px; }
  `],
})
export class BillForm {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<BillForm>);
  protected readonly data = inject<Bill | null>(MAT_DIALOG_DATA);

  protected readonly isEditMode = !!this.data;

  protected readonly form = this.fb.group({
    emoji: [this.data?.emoji ?? ''],
    name: [this.data?.name ?? '', Validators.required],
    cost: [this.data?.cost ?? (null as number | null)],
    isBasicNecessity: [this.data?.isBasicNecessity ?? false],
  });

  protected save(): void {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    this.dialogRef.close({
      emoji: raw.emoji || undefined,
      name: raw.name!,
      cost: raw.cost ?? null,
      isBasicNecessity: raw.isBasicNecessity ?? false,
    });
  }

  protected cancel(): void {
    this.dialogRef.close(undefined);
  }
}
