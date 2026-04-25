import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BalanceService } from '../services/balance/balance.service';
import { VacationService } from '../services/vacation/vacation.service';
import { DailySpendingDialog } from '../components/daily-spending-dialog/daily-spending-dialog';
import { VacationFeedbackDialog } from '../components/vacation-feedback-dialog/vacation-feedback-dialog';
import { VacationRewardDialog } from '../components/vacation-reward-dialog/vacation-reward-dialog';
import { VacationRecord } from '../models/vacation.model';
import { runMigrations } from '../utils/migration.utils';
import { SimpleTrackService } from '../services/simple-track/simple-track.service';
import { SimpleTrackScoreDialog } from '../components/simple-track-score-dialog/simple-track-score-dialog';
import { SimpleTrackRecord } from '../models/simple-track.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly dialog = inject(MatDialog);
  private readonly balanceService = inject(BalanceService);
  private readonly vacationService = inject(VacationService);
  private readonly simpleTrackService = inject(SimpleTrackService);

  protected readonly title = signal('flow');

  constructor() {
    effect(() => {
      if (this.vacationService.randomRewardPending()) {
        this.dialog.open(VacationRewardDialog, {
          width: '380px',
          data: { type: 'random' },
          panelClass: 'vacation-reward-panel',
        }).afterClosed().subscribe(() => {
          this.vacationService.clearRandomReward();
        });
      }
    });
  }

  ngOnInit(): void {
    runMigrations();

    // Move any vacation records whose end date has passed to 'feedback_pending'
    this.vacationService.processPendingStatuses();

    // Show simple track dialogs first, then vacation feedbacks
    const simpleTrackFeedbacks = this.simpleTrackService.pendingFeedbacks();
    if (simpleTrackFeedbacks.length > 0) {
      this.showSimpleTrackFeedbacksSequentially([...simpleTrackFeedbacks], () => this.checkVacationFeedbacks());
    } else {
      this.checkVacationFeedbacks();
    }
  }

  private showSimpleTrackFeedbacksSequentially(records: SimpleTrackRecord[], onDone: () => void): void {
    if (records.length === 0) {
      onDone();
      return;
    }
    const [first, ...rest] = records;
    this.dialog
      .open(SimpleTrackScoreDialog, {
        width: '420px',
        data: { record: first },
        disableClose: true,
      })
      .afterClosed()
      .subscribe((result?: number) => {
        if (result !== undefined) {
          this.simpleTrackService.scoreDay(first.id, result);
        }
        this.showSimpleTrackFeedbacksSequentially(rest, onDone);
      });
  }

  private checkVacationFeedbacks(): void {
    const pendingFeedbacks = this.vacationService.pendingFeedbacks();
    if (pendingFeedbacks.length > 0) {
      this.showFeedbackDialogsSequentially([...pendingFeedbacks], () => this.checkSundayAndSpending());
    } else {
      this.checkSundayAndSpending();
    }
  }

  private showFeedbackDialogsSequentially(
    records: VacationRecord[],
    onDone: () => void,
  ): void {
    if (records.length === 0) {
      onDone();
      return;
    }
    const [first, ...rest] = records;
    this.dialog
      .open(VacationFeedbackDialog, {
        width: '420px',
        data: { record: first },
        disableClose: false,
      })
      .afterClosed()
      .subscribe(() => {
        this.showFeedbackDialogsSequentially(rest, onDone);
      });
  }

  private checkSundayAndSpending(): void {
    if (this.vacationService.needsSundayReward()) {
      this.vacationService.claimSundayReward();
      this.dialog
        .open(VacationRewardDialog, {
          width: '380px',
          data: { type: 'streak' },
          panelClass: 'vacation-reward-panel',
        })
        .afterClosed()
        .subscribe(() => this.checkSpending());
    } else {
      this.checkSpending();
    }
  }

  private checkSpending(): void {
    if (this.balanceService.needsDailyLog()) {
      this.dialog.open(DailySpendingDialog, {
        width: '480px',
        disableClose: true,
      });
    }
  }
}
