import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { BalanceService } from '../../services/balance/balance.service';
import { BalanceSettingsService } from '../../services/balance-settings/balance-settings.service';
import { VacationService } from '../../services/vacation/vacation.service';
import { RewardForm } from '../../components/reward-form/reward-form';
import { ExchangeDialog } from '../../components/exchange-dialog/exchange-dialog';
import { AdjustBalanceDialog } from '../../components/adjust-balance-dialog/adjust-balance-dialog';
import { AdjustVacationDialog, AdjustVacationDialogResult } from '../../components/adjust-vacation-dialog/adjust-vacation-dialog';
import { ConfirmDialog } from '../../components/confirm-dialog/confirm-dialog';
import { Reward } from '../../models/reward.model';

@Component({
  selector: 'app-balance-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, DecimalPipe, DatePipe],
  templateUrl: './balance.page.html',
  styleUrl: './balance.page.css',
})
export class BalancePage {
  protected readonly balanceService = inject(BalanceService);
  protected readonly settings = inject(BalanceSettingsService);
  protected readonly vacationService = inject(VacationService);
  private readonly dialog = inject(MatDialog);

  protected openExchangeDialog(): void {
    this.dialog
      .open(ExchangeDialog, {
        data: { availablePoints: this.balanceService.pointsBalance() },
        width: '420px',
      })
      .afterClosed()
      .subscribe((points: number | undefined) => {
        if (points && points > 0) this.balanceService.exchange(points);
      });
  }

  protected adjustPoints(mode: 'add' | 'remove'): void {
    this.dialog
      .open(AdjustBalanceDialog, {
        data: { title: mode === 'add' ? 'Add Points' : 'Remove Points', mode },
        width: '320px',
      })
      .afterClosed()
      .subscribe((amount: number | undefined) => {
        if (amount !== undefined) this.balanceService.adjustPoints(amount);
      });
  }

  protected adjustCurrency(mode: 'add' | 'remove'): void {
    const sym = this.settings.currencySymbol();
    this.dialog
      .open(AdjustBalanceDialog, {
        data: {
          title: mode === 'add' ? `Add ${sym}` : `Remove ${sym}`,
          mode,
        },
        width: '320px',
      })
      .afterClosed()
      .subscribe((amount: number | undefined) => {
        if (amount !== undefined) this.balanceService.adjustCurrency(amount);
      });
  }

  protected addReward(): void {
    this.dialog
      .open(RewardForm, { data: null, width: '420px' })
      .afterClosed()
      .subscribe(result => {
        if (result) this.balanceService.addReward(result);
      });
  }

  protected editReward(reward: Reward): void {
    this.dialog
      .open(RewardForm, { data: reward, width: '420px' })
      .afterClosed()
      .subscribe(result => {
        if (result) this.balanceService.updateReward(reward.id, result);
      });
  }

  protected deleteReward(reward: Reward): void {
    this.dialog
      .open(ConfirmDialog, {
        data: { message: `Delete reward "${reward.name}"?` },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.balanceService.deleteReward(reward.id);
      });
  }

  protected adjustVacation(mode: 'add' | 'remove'): void {
    this.dialog
      .open(AdjustVacationDialog, {
        data: { mode },
        width: '360px',
      })
      .afterClosed()
      .subscribe((result: AdjustVacationDialogResult | undefined) => {
        if (!result) return;
        if (mode === 'add') {
          this.vacationService.addVacationDays(result.count, result.note || undefined);
        } else {
          this.vacationService.removeVacationDays(result.count, result.note || undefined);
        }
      });
  }

  protected undoVacation(recordId: string): void {
    this.dialog
      .open(ConfirmDialog, {
        data: { message: 'Undo this vacation? The points will be withdrawn and the vacation day returned to your balance.', confirmLabel: 'Undo' },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.vacationService.undoVacation(recordId);
      });
  }

  protected transactionLabel(type: string): string {
    const labels: Record<string, string> = {
      earned_streak: 'Weekly streak reward',
      earned_random: 'Lucky reward',
      spent: 'Vacation declared',
      manual_add: 'Manually added',
      manual_remove: 'Manually removed',
      returned: 'Vacation undone',
    };
    return labels[type] ?? type;
  }

  protected transactionColor(amount: number): string {
    return amount > 0 ? '#2e7d32' : '#c62828';
  }

  protected redeemReward(reward: Reward): void {
    this.dialog
      .open(ConfirmDialog, {
        data: {
          message: `Redeem "${reward.name}" for ${reward.cost} ${this.settings.currencySymbol()}? This will deduct the cost from your balance and remove the reward.`,
          confirmLabel: 'Redeem',
        },
      })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        if (confirmed) this.balanceService.redeemReward(reward);
      });
  }
}
