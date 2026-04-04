import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateService } from '../../services/date/date.service';
import { WeeklyDatePicker } from '../../components/weekly-date-picker/weekly-date-picker';

@Component({
  selector: 'app-flow-page',
  standalone: true,
  imports: [DatePipe, WeeklyDatePicker],
  templateUrl: './flow.page.html',
})
export class FlowPage {
  protected readonly dateService = inject(DateService);
}
