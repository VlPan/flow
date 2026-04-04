import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

export interface SessionCompleteDialogData {
  sessionMinutes: number;
  flowScore: number;
  shortDescription: string;
  vectorName: string;
  vectorIcon: string;
  isEdit?: boolean;
  isBreak?: boolean;
}

export interface SessionCompleteDialogResult {
  sessionMinutes: number;
  flowScore: number;
  shortDescription: string;
}

@Component({
  selector: 'app-session-complete-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
  ],
  templateUrl: './session-complete-dialog.html',
  styleUrl: './session-complete-dialog.css',
})
export class SessionCompleteDialog {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<SessionCompleteDialog>);
  protected readonly data = inject<SessionCompleteDialogData>(MAT_DIALOG_DATA);

  protected readonly form = this.fb.group({
    shortDescription: [this.data.shortDescription],
    sessionMinutes: [this.data.sessionMinutes, [Validators.required, Validators.min(1)]],
    flowScore: [this.data.flowScore, [Validators.required]],
  });

  protected save(): void {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    this.dialogRef.close({
      sessionMinutes: raw.sessionMinutes!,
      flowScore: raw.flowScore!,
      shortDescription: raw.shortDescription ?? '',
    } satisfies SessionCompleteDialogResult);
  }

  protected cancel(): void {
    this.dialogRef.close(undefined);
  }
}
