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
      { path: 'bills', loadComponent: () => import('../pages/bills/bills.page').then(m => m.BillsPage) },
      { path: 'statistics', loadComponent: () => import('../pages/statistics/statistics.page').then(m => m.StatisticsPage) },
      {
        path: 'settings',
        loadComponent: () => import('../pages/settings/settings.page').then(m => m.SettingsPage),
        children: [
          { path: '', redirectTo: 'flow-vectors', pathMatch: 'full' },
          { path: 'flow-vectors', loadComponent: () => import('../pages/settings/flow-vectors/flow-vectors-settings.page').then(m => m.FlowVectorsSettingsPage) },
          { path: 'session-settings', loadComponent: () => import('../pages/settings/session-settings/session-settings.page').then(m => m.SessionSettingsPage) },
          { path: 'balance-settings', loadComponent: () => import('../pages/settings/balance-settings/balance-settings.page').then(m => m.BalanceSettingsPage) },
          { path: 'categories', loadComponent: () => import('../pages/settings/categories/categories-settings.page').then(m => m.CategoriesSettingsPage) },
          { path: 'data', loadComponent: () => import('../pages/settings/data/data-settings.page').then(m => m.DataSettingsPage) },
        ],
      },
    ],
  },
];
