import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Habit, HabitGroup } from '../../models/habit.model';
import { HabitsService } from '../../services/habits/habits.service';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';

export interface HabitFormData {
  habit: Habit | null;
  groups: HabitGroup[];
  defaultGroupId?: string;
}

@Component({
  selector: 'app-habit-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  templateUrl: './habit-form.html',
  styles: [`.toggle-row { padding: 4px 0 12px; }`],
})
export class HabitForm {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<HabitForm>);
  private readonly matDialog = inject(MatDialog);
  private readonly habitsService = inject(HabitsService);
  protected readonly data = inject<HabitFormData>(MAT_DIALOG_DATA);

  protected readonly isEditMode = !!this.data.habit;
  protected readonly groups = this.data.groups;

  protected readonly form = this.fb.group({
    name: [this.data.habit?.name ?? '', Validators.required],
    emoji: [this.data.habit?.emoji ?? ''],
    groupId: [this.data.habit?.groupId ?? this.data.defaultGroupId ?? this.groups[0]?.id ?? '', Validators.required],
    basePoints: [
      this.data.habit?.basePoints ?? 10,
      [Validators.required, Validators.min(1)],
    ],
    frequency: [
      this.data.habit?.frequency ?? 3,
      [Validators.required, Validators.min(1), Validators.max(7)],
    ],
    masteryRewardPoints: [
      this.data.habit?.masteryRewardPoints ?? 100,
      [Validators.required, Validators.min(1)],
    ],
    withCompletionScore: [this.data.habit?.withCompletionScore ?? false],
  });

  protected save(): void {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    this.dialogRef.close({
      name: raw.name!,
      emoji: raw.emoji || undefined,
      groupId: raw.groupId!,
      basePoints: raw.basePoints!,
      frequency: raw.frequency!,
      masteryRewardPoints: raw.masteryRewardPoints!,
      withCompletionScore: raw.withCompletionScore ?? false,
    });
  }

  protected cancel(): void {
    this.dialogRef.close(undefined);
  }

  protected resetProgress(): void {
    this.matDialog
      .open(ConfirmDialog, {
        data: {
          message: `Reset all progress for "${this.data.habit!.name}"? All completions will be deleted.`,
          confirmLabel: 'Reset',
        },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.habitsService.resetProgress(this.data.habit!.id);
      });
  }
}
