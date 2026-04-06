import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { DecimalPipe } from '@angular/common';
import { CdkDropList, CdkDrag, CdkDragHandle, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HabitsService, OTHERS_GROUP_ID } from '../../services/habits/habits.service';
import { ConfirmDialog } from '../../components/confirm-dialog/confirm-dialog';
import { HabitGroupForm } from '../../components/habit-group-form/habit-group-form';
import { HabitForm } from '../../components/habit-form/habit-form';
import {
  DeleteHabitDialog,
  DeleteHabitDialogResult,
} from '../../components/delete-habit-dialog/delete-habit-dialog';
import { ClaimMasteryDialog } from '../../components/claim-mastery-dialog/claim-mastery-dialog';
import { CompletionScoreDialog } from '../../components/completion-score-dialog/completion-score-dialog';
import { Habit, HabitGroup } from '../../models/habit.model';
import { getCompletionScoreEmoji, getLastNDays } from '../../utils/habit.utils';

@Component({
  selector: 'app-habits-page',
  standalone: true,
  imports: [
    DecimalPipe,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
  ],
  templateUrl: './habits.page.html',
  styleUrl: './habits.page.css',
})
export class HabitsPage {
  protected readonly habits = inject(HabitsService);
  private readonly dialog = inject(MatDialog);

  protected readonly othersGroupId = OTHERS_GROUP_ID;
  protected readonly reorderingGroupId = signal<string | null>(null);

  protected readonly last7Days = computed(() => getLastNDays(new Date(), 7));
  protected readonly today = computed(() => getLastNDays(new Date(), 1)[0]);
  protected readonly yesterday = computed(() => getLastNDays(new Date(), 2)[0]);

  // Others group always last
  protected readonly sortedGroups = computed(() => {
    const all = this.habits.groups();
    return [...all.filter(g => g.id !== OTHERS_GROUP_ID), ...all.filter(g => g.id === OTHERS_GROUP_ID)];
  });

  protected readonly sortedGroupsForArchive = computed(() =>
    this.sortedGroups().filter(g => (this.habits.archivedHabitsByGroup()[g.id] ?? []).length > 0),
  );

  protected dayLabel(dateStr: string): string {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en', { weekday: 'short' }) + ' ' + date.getDate();
  }

  protected dayInitial(dateStr: string): string {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en', { weekday: 'narrow' });
  }

  protected habitsForGroup(groupId: string): Habit[] {
    return this.habits.habitsByGroup()[groupId] ?? [];
  }

  protected archivedHabitsForGroup(groupId: string): Habit[] {
    return this.habits.archivedHabitsByGroup()[groupId] ?? [];
  }

  protected masteryPercent(habit: Habit): number {
    return this.habits.getMasteryProgress(habit).percent;
  }

  protected scoreEmojiForDate(habitId: string, date: string): string | null {
    const c = this.habits.getCompletion(habitId, date);
    if (!c?.completionScore) return null;
    return getCompletionScoreEmoji(c.completionScore);
  }

  protected toggleHabitCompletion(habit: Habit, date: string): void {
    if (this.habits.isCompleted(habit.id, date)) {
      this.habits.toggleCompletion(habit.id, date);
      return;
    }
    if (!habit.withCompletionScore) {
      this.habits.toggleCompletion(habit.id, date);
      return;
    }
    this.dialog
      .open(CompletionScoreDialog, { width: '480px' })
      .afterClosed()
      .subscribe((score: number | undefined) => {
        if (score !== undefined) {
          this.habits.completeWithScore(habit.id, date, score);
        }
      });
  }

  private totalHabitPoints(habitId: string): number {
    return this.habits
      .completions()
      .filter(c => c.habitId === habitId)
      .reduce((sum, c) => sum + c.pointsEarned, 0);
  }

  // ── Reorder ──────────────────────────────────────────────────────────────────

  protected startReorder(groupId: string): void {
    this.reorderingGroupId.set(groupId);
  }

  protected stopReorder(): void {
    this.reorderingGroupId.set(null);
  }

  protected onDrop(event: CdkDragDrop<unknown>, groupId: string): void {
    if (event.previousIndex === event.currentIndex) return;
    const habits = [...this.habitsForGroup(groupId)];
    moveItemInArray(habits, event.previousIndex, event.currentIndex);
    this.habits.reorder(groupId, habits.map(h => h.id));
  }

  // ── Groups ──────────────────────────────────────────────────────────────────

  protected addGroup(): void {
    this.dialog
      .open(HabitGroupForm, { data: null, width: '380px' })
      .afterClosed()
      .subscribe((result: { name: string } | undefined) => {
        if (result) this.habits.addGroup(result.name);
      });
  }

  protected editGroup(group: HabitGroup): void {
    this.dialog
      .open(HabitGroupForm, { data: group, width: '380px' })
      .afterClosed()
      .subscribe((result: { name: string } | undefined) => {
        if (result) this.habits.updateGroup(group.id, result.name);
      });
  }

  protected deleteGroup(group: HabitGroup): void {
    this.dialog
      .open(ConfirmDialog, {
        data: { message: `Delete group "${group.name}"? Habits will be moved to Others.` },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.habits.deleteGroup(group.id);
      });
  }

  // ── Habits ──────────────────────────────────────────────────────────────────

  protected addHabit(groupId: string): void {
    this.dialog
      .open(HabitForm, {
        data: { habit: null, groups: this.habits.groups(), defaultGroupId: groupId },
        width: '440px',
      })
      .afterClosed()
      .subscribe((result: any) => {
        if (result) this.habits.addHabit(result);
      });
  }

  protected editHabit(habit: Habit): void {
    this.dialog
      .open(HabitForm, {
        data: { habit, groups: this.habits.groups() },
        width: '440px',
      })
      .afterClosed()
      .subscribe((result: any) => {
        if (result) this.habits.updateHabit(habit.id, result);
      });
  }

  protected deleteHabit(habit: Habit): void {
    const pointsEarned = this.totalHabitPoints(habit.id);
    if (pointsEarned === 0) {
      this.dialog
        .open(ConfirmDialog, { data: { message: `Delete "${habit.name}"?` } })
        .afterClosed()
        .subscribe((confirmed: boolean) => {
          if (confirmed) this.habits.deleteHabit(habit.id, true);
        });
      return;
    }
    this.dialog
      .open(DeleteHabitDialog, {
        data: { habitName: habit.name, pointsEarned },
        width: '400px',
      })
      .afterClosed()
      .subscribe((result: DeleteHabitDialogResult | undefined) => {
        if (result) this.habits.deleteHabit(habit.id, result === 'keep-points');
      });
  }

  protected archiveHabit(habit: Habit): void {
    this.habits.archiveHabit(habit.id);
  }

  protected unarchiveHabit(habit: Habit): void {
    this.habits.unarchiveHabit(habit.id);
  }

  protected addHabitToArchive(): void {
    this.dialog
      .open(HabitForm, {
        data: { habit: null, groups: this.habits.groups() },
        width: '440px',
      })
      .afterClosed()
      .subscribe((result: any) => {
        if (result) this.habits.addHabit(result, true);
      });
  }

  // ── Mastery ──────────────────────────────────────────────────────────────────

  protected claimMastery(habit: Habit): void {
    this.dialog
      .open(ClaimMasteryDialog, {
        data: { habitName: habit.name, defaultPoints: habit.masteryRewardPoints },
        width: '380px',
      })
      .afterClosed()
      .subscribe((amount: number | undefined) => {
        if (amount !== undefined) this.habits.claimMasteryReward(habit.id, amount);
      });
  }

  protected unmaster(habit: Habit): void {
    this.dialog
      .open(ConfirmDialog, {
        data: { message: `Move "${habit.name}" back to active habits?`, confirmLabel: 'Un-master' },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.habits.unmaster(habit.id);
      });
  }
}
