import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateService } from '../../services/date/date.service';
import { WeeklyDatePicker } from '../weekly-date-picker/weekly-date-picker';

@Component({
  selector: 'app-flow-planning',
  standalone: true,
  imports: [DatePipe, WeeklyDatePicker],
  templateUrl: './flow-planning.html',
})
export class FlowPlanning {
  protected readonly dateService = inject(DateService);
}
