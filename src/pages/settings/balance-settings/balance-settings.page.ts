import { Component, inject } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BalanceSettingsService } from '../../../services/balance-settings/balance-settings.service';

@Component({
  selector: 'app-balance-settings-page',
  standalone: true,
  imports: [MatSliderModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './balance-settings.page.html',
  styleUrl: './balance-settings.page.css',
})
export class BalanceSettingsPage {
  protected readonly settingsService = inject(BalanceSettingsService);
}
