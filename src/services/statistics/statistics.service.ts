import { Injectable, computed, inject, signal } from '@angular/core';
import { EChartsCoreOption } from 'echarts/core';
import { SessionService } from '../session/session.service';
import { FlowVectorsService } from '../flow-vectors/flow-vectors.service';
import { TimeRange, buildChartData, toPtsOptions, toTimeOptions } from '../../utils/statistics.utils';

@Injectable({ providedIn: 'root' })
export class StatisticsService {
  private readonly sessionService = inject(SessionService);
  private readonly vectorsService = inject(FlowVectorsService);

  readonly selectedRange = signal<TimeRange>('30d');

  private readonly today = new Date();

  private readonly _data = computed(() =>
    buildChartData(
      this.sessionService.records(),
      this.vectorsService.allVectorsIncludingDeleted(),
      this.selectedRange(),
      this.today,
    ),
  );

  readonly ptsChartOptions = computed<EChartsCoreOption>(() => toPtsOptions(this._data()));
  readonly timeChartOptions = computed<EChartsCoreOption>(() => toTimeOptions(this._data()));
}
