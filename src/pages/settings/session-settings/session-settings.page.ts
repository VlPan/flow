import { Component, inject } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SessionSettingsService } from '../../../services/session-settings/session-settings.service';

@Component({
  selector: 'app-session-settings-page',
  standalone: true,
  imports: [MatSliderModule, MatSlideToggleModule],
  templateUrl: './session-settings.page.html',
  styleUrl: './session-settings.page.css',
})
export class SessionSettingsPage {
  protected readonly settingsService = inject(SessionSettingsService);
}
