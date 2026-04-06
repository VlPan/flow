import { Component, HostListener, inject, signal } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

const SCORES: { value: number; emoji: string; label: string }[] = [
  { value: 1, emoji: '😞', label: 'Bad' },
  { value: 2, emoji: '😕', label: 'Quite bad' },
  { value: 3, emoji: '😐', label: 'Average' },
  { value: 4, emoji: '😊', label: 'Quite good' },
  { value: 5, emoji: '😁', label: 'Good' },
];

@Component({
  selector: 'app-completion-score-dialog',
  standalone: true,
  imports: [MatDialogModule],
  template: `
    <h2 mat-dialog-title>Rate your Habit</h2>
    <mat-dialog-content>
      <div class="scores-row">
        @for (s of scores; track s.value) {
          <button
            class="score-btn"
            [class.selected]="selected() === s.value"
            (click)="select(s.value)"
            [attr.aria-label]="s.label"
          >
            <span class="emoji">{{ s.emoji }}</span>
            <span class="label">{{ s.label }}</span>
          </button>
        }
      </div>
    </mat-dialog-content>
  `,
  styles: [`
    mat-dialog-content {
      overflow: visible;
    }

    .scores-row {
      display: flex;
      gap: 10px;
      justify-content: center;
      padding: 8px 0;
    }

    .score-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      padding: 10px 12px;
      background: transparent;
      border: 2px dashed #bdbdbd;
      border-radius: 12px;
      cursor: pointer;
      transition: border-color 0.15s, background 0.15s;
      outline: none;
    }

    .score-btn:hover {
      border-color: #90caf9;
      background: #f5f9ff;
    }

    .score-btn.selected {
      border-color: #1976d2;
      background: #e3f2fd;
    }

    .emoji {
      font-size: 28px;
      line-height: 1;
    }

    .label {
      font-size: 11px;
      color: #616161;
      white-space: nowrap;
    }

    .score-btn.selected .label {
      color: #1976d2;
      font-weight: 600;
    }
  `],
})
export class CompletionScoreDialog {
  protected readonly dialogRef = inject(MatDialogRef<CompletionScoreDialog>);
  protected readonly scores = SCORES;
  protected readonly selected = signal(3);

  protected select(value: number): void {
    this.selected.set(value);
    this.confirm();
  }

  protected confirm(): void {
    this.dialogRef.close(this.selected());
  }

  @HostListener('keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    const n = parseInt(event.key, 10);
    if (n >= 1 && n <= 5) {
      this.selected.set(n);
      this.confirm();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.confirm();
    }
  }
}
