import { Component, computed, inject, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SessionRecord } from '../../models/session.model';
import { FlowVector } from '../../models/flow-vector.model';
import { formatSessionTime, scoreColor, scoreColorRgba } from '../../utils/time.utils';
import { SessionSettingsService } from '../../services/session-settings/session-settings.service';

@Component({
  selector: 'app-flow-completed-row',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './flow-completed-row.html',
  styleUrl: './flow-completed-row.css',
})
export class FlowCompletedRow {
  readonly record = input.required<SessionRecord>();
  readonly vector = input.required<FlowVector>();

  readonly editRequested = output<void>();
  readonly deleteRequested = output<void>();

  private readonly sessionSettings = inject(SessionSettingsService);

  protected readonly borderColor = computed(() => scoreColor(this.record().flowScore));
  protected readonly bgColor = computed(() => scoreColorRgba(this.record().flowScore));
  protected readonly formattedTime = computed(() => formatSessionTime(this.record().sessionMinutes));
  protected readonly isLongSession = computed(() =>
    this.record().sessionMinutes >= this.sessionSettings.goodSessionMinutes()
  );
}
