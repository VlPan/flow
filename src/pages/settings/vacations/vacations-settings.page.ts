import { Component, inject } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { VacationService } from '../../../services/vacation/vacation.service';

@Component({
  selector: 'app-vacations-settings-page',
  standalone: true,
  imports: [
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
  ],
  templateUrl: './vacations-settings.page.html',
  styleUrl: './vacations-settings.page.css',
})
export class VacationsSettingsPage {
  protected readonly vacationService = inject(VacationService);
}
