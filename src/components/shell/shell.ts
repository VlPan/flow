import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UiService } from '../../services/ui/ui.service';
import { SessionService } from '../../services/session/session.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
  animations: [
    trigger('sidenavWidth', [
      state('expanded', style({ width: '220px' })),
      state('collapsed', style({ width: '60px' })),
      transition('expanded <=> collapsed', animate('200ms ease')),
    ]),
  ],
})
export class Shell {
  protected readonly ui = inject(UiService);
  private readonly sessionService = inject(SessionService);

  protected readonly hasActiveSession = computed(() => !!this.sessionService.activeSession());

  protected readonly navItems: NavItem[] = [
    { label: 'Flow', route: '/flow', icon: 'hourglass_empty' },
    { label: 'Habits', route: '/habits', icon: 'repeat' },
    { label: 'Balance', route: '/balance', icon: 'balance' },
    { label: 'Statistics', route: '/statistics', icon: 'bar_chart' },
    { label: 'Settings', route: '/settings', icon: 'settings' },
  ];
}
