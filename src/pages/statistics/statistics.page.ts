import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { StatisticsService } from '../../services/statistics/statistics.service';
import { TimeRange } from '../../utils/statistics.utils';

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [MatButtonToggleModule, NgxEchartsDirective],
  providers: [
    provideEchartsCore({ echarts: () => import('echarts') }),
  ],
  templateUrl: './statistics.page.html',
})
export class StatisticsPage {
  protected readonly stats = inject(StatisticsService);

  setRange(range: TimeRange): void {
    this.stats.selectedRange.set(range);
  }
}
