import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DateService } from '../../services/date/date.service';
import { VacationService } from '../../services/vacation/vacation.service';
import { isSameDay, isPastDay, toLocalDateString } from '../../utils/date.utils';

@Component({
  selector: 'app-weekly-date-picker',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './weekly-date-picker.html',
  styleUrl: './weekly-date-picker.css',
})
export class WeeklyDatePicker {
  readonly isSessionActive = input<boolean>(false);

  protected readonly dateService = inject(DateService);
  protected readonly vacationService = inject(VacationService);
  protected readonly today = this.dateService.today;

  protected isSameDay = isSameDay;
  protected isPastDay = isPastDay;

  protected getDayLetter(date: Date): string {
    return date.toLocaleDateString('en-US', { weekday: 'narrow' });
  }

  protected isVacationDay(date: Date): boolean {
    return this.vacationService.isVacationDay(toLocalDateString(date));
  }
}
