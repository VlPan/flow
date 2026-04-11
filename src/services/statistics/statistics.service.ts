import { Injectable, computed, inject, signal } from '@angular/core';
import { EChartsCoreOption } from 'echarts/core';
import { SessionService } from '../session/session.service';
import { ProjectsService } from '../projects/projects.service';
import { HabitsService } from '../habits/habits.service';
import { CategoriesService } from '../categories/categories.service';
import {
  TimeRange,
  buildChartData,
  toPtsOptions,
  toTimeOptions,
  toFlowScoreTrendOptions,
  toProjectDonutOptions,
  toTimeOfDayHeatmapOptions,
  toDayOfWeekOptions,
  toSessionLengthDistOptions,
  toScoreVsLengthOptions,
  toTaskClaimsOptions,
} from '../../utils/statistics.utils';

@Injectable({ providedIn: 'root' })
export class StatisticsService {
  private readonly sessionService = inject(SessionService);
  private readonly projectsService = inject(ProjectsService);
  private readonly habitsService = inject(HabitsService);
  private readonly categoriesService = inject(CategoriesService);

  readonly selectedRange = signal<TimeRange>('30d');

  private readonly today = new Date();

  private readonly _data = computed(() =>
    buildChartData(
      this.sessionService.records(),
      this.projectsService.allProjectsIncludingDeleted(),
      this.categoriesService.allCategoriesIncludingDeleted(),
      this.selectedRange(),
      this.today,
      this.habitsService.completions(),
    ),
  );

  readonly ptsChartOptions = computed<EChartsCoreOption>(() => toPtsOptions(this._data()));
  readonly timeChartOptions = computed<EChartsCoreOption>(() => toTimeOptions(this._data()));
  readonly flowScoreTrendOptions = computed<EChartsCoreOption>(() => toFlowScoreTrendOptions(this._data()));
  readonly projectDonutOptions = computed<EChartsCoreOption>(() => toProjectDonutOptions(this._data()));
  readonly timeOfDayHeatmapOptions = computed<EChartsCoreOption>(() => toTimeOfDayHeatmapOptions(this._data()));
  readonly dayOfWeekOptions = computed<EChartsCoreOption>(() => toDayOfWeekOptions(this._data()));
  readonly sessionLengthDistOptions = computed<EChartsCoreOption>(() => toSessionLengthDistOptions(this._data()));
  readonly scoreVsLengthOptions = computed<EChartsCoreOption>(() => toScoreVsLengthOptions(this._data()));
  readonly taskClaimsOptions = computed<EChartsCoreOption>(() =>
    toTaskClaimsOptions(this.projectsService.claimRecords(), this.selectedRange(), this.today)
  );
}
