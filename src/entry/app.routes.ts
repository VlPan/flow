import { Routes } from '@angular/router';
import { Shell } from '../components/shell/shell';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', redirectTo: 'flow', pathMatch: 'full' },
      { path: 'flow', loadComponent: () => import('../pages/flow/flow.page').then(m => m.FlowPage) },
      { path: 'habits', loadComponent: () => import('../pages/habits/habits.page').then(m => m.HabitsPage) },
      { path: 'balance', loadComponent: () => import('../pages/balance/balance.page').then(m => m.BalancePage) },
      { path: 'statistics', loadComponent: () => import('../pages/statistics/statistics.page').then(m => m.StatisticsPage) },
      { path: 'settings', loadComponent: () => import('../pages/settings/settings.page').then(m => m.SettingsPage) },
    ],
  },
];
