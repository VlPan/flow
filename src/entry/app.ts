import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BalanceService } from '../services/balance/balance.service';
import { DailySpendingDialog } from '../components/daily-spending-dialog/daily-spending-dialog';
import { runMigrations } from '../utils/migration.utils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly dialog = inject(MatDialog);
  private readonly balanceService = inject(BalanceService);

  protected readonly title = signal('flow');

  ngOnInit(): void {
    runMigrations();

    if (this.balanceService.needsDailyLog()) {
      this.dialog.open(DailySpendingDialog, {
        width: '480px',
        disableClose: true,
      });
    }
  }
}
