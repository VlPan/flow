# Flow — Claude Code Guide

## Project Overview

**Flow** is a self-efficiency and motivation app focused on time control and deep work. Users start "flow sessions" — timed blocks of deep concentration on a task — and receive a score at the end of each session. Over time, scores provide insight into productivity patterns and motivate consistent focused work.

Built as an Angular 21 SPA scaffolded with Angular CLI 21.2.6.

## Tech Stack

- **Framework**: Angular 21.2.x (standalone components, all lazily loaded)
- **UI Components**: Angular Material 21.2.x (Material 3, `@angular/material`)
- **Icons**: Google Material Icons (via Google Fonts CDN)
- **Styling**: Tailwind CSS 4.x (via `@tailwindcss/postcss`)
- **Charts**: ECharts 6.x via `ngx-echarts` (treeshaken with `provideEchartsCore`)
- **Split panes**: `angular-split` (resizable planning/completed panels on Flow page)
- **Color picker**: `ngx-color` (vector/category forms)
- **Validation**: Zod 4.x (all models + localStorage validation)
- **IDs**: `uuid` v13 (all entity IDs)
- **Testing**: Vitest 4.x (`ng test` / `npm test`)
- **Language**: TypeScript 5.9.x

## Key Commands

```bash
npm start        # dev server on port 5022
npm run build    # production build → dist/
npm test         # Vitest unit tests
npm run deploy   # build with --base-href /flow/ and publish to GitHub Pages
ng generate component <name>   # scaffold a component
```

## Project Structure

```text
src/
  entry/       # root bootstrap: app.ts, app.config.ts, app.routes.ts
  models/      # Zod schemas + z.infer<> TypeScript types
  services/    # Angular services (one subdirectory per domain)
  pages/       # Smart components, one per route
  components/  # Dialogs, forms, shared widgets, layout shell
  utils/       # Pure TypeScript helpers and pipes
```

## Routes

```
/                          → redirects to /flow
/flow                      → FlowPage
/habits                    → HabitsPage
/balance                   → BalancePage
/bills                     → BillsPage
/statistics                → StatisticsPage
/settings                  → SettingsPage (redirects to /settings/flow-vectors)
  /settings/flow-vectors        → FlowVectorsSettingsPage (default child)
  /settings/session-settings    → SessionSettingsPage
  /settings/balance-settings    → BalanceSettingsPage
  /settings/categories          → CategoriesSettingsPage
  /settings/data                → DataSettingsPage
```

All routes use `loadComponent` (lazy). Router uses `withHashLocation()` for GitHub Pages static hosting.

## Architecture

### Models

All models live in `src/models/`. Pattern: Zod schema(s) + `z.infer<>` TypeScript types. No separate `interface` files — types are always derived from Zod.

### Components

- **`pages/`** — smart components, one per route. Inject services, own data fetching, handle interactions.
- **`components/`** — everything else: dialogs, forms, shared widgets, layout shell. Most dialogs are opened via `MatDialog` and return typed results via `afterClosed()`.

### State Management

- State lives in services as Angular `signal()` / `computed()`. No NgRx, no RxJS state.
- Services expose state as `asReadonly()` signals; mutations go through explicit methods.
- Persistent state is stored in `localStorage` (temporary — future backend migration planned).

### Storage Layer

`LocalStorageService` validates every read against a Zod schema. All 28 localStorage keys and their schemas are registered in `services/local-storage/storage-registry.ts` (`STORAGE_REGISTRY`). This is the single source of truth for persisted keys — adding a new persisted field requires only touching this file. It exports `StorageKey` and `StorageValue<K>` utility types used throughout services.

### Services

Follow **SOLID** and **GRASP** principles. Single Responsibility: one service per domain concern. Use `inject()` and `providedIn: 'root'`.

Key services:
- `SessionService` — active session lifecycle (start/pause/resume/complete), elapsed time via 1s interval
- `FlowVectorsService` / `CategoriesService` — CRUD with soft-delete
- `PlanningRowService` — daily planning rows, `moveToDate`
- `BalanceService` — points/currency snapshot, exchange, rewards, daily spending logs
- `HabitsService` — habits/groups, completions, stick calculation, mastery progress
- `StatisticsService` — aggregates session + habit data into ECharts chart-option signals; time range selector
- `DateService` — weekly calendar state (selected day, week window, nav signals); uses `TODAY_DATE` injection token
- `UiService` — sidenav expanded state + split pane sizes, both persisted

### Utils

Pure, side-effect-free functions in `src/utils/`. No Angular dependencies — plain TypeScript. `SortByCompletedPipe` is the one Angular artifact here (thin wrapper over `sortByCompleted`).

## Key Patterns

**Soft-delete**: `FlowVector` and `Category` have `deleted: boolean` rather than hard deletes. Services expose a filtered (live-only) signal and a separate all-including-deleted signal for statistics.

**Sentinel records**: `BREAK_VECTOR` (id `'break'`) and `OTHERS_CATEGORY` (id `'others'`) are compile-time constants, never stored in localStorage, injected at computed-signal boundaries so all downstream code treats them uniformly.

**Balance as snapshot**: `pointsEarned` and `currencyBalance` are stored as running numeric snapshots (O(1) reads). Exchange records, redemptions, and spending logs exist as audit trail only — not used to recompute balance.

**Dialog-as-form**: All create/edit actions open `MatDialog` overlays. Destructive confirmations use the shared `ConfirmDialog`.

**Testable dates**: `TODAY_DATE` (`InjectionToken<Date>`) in `services/date/date.tokens.ts` injects midnight-normalised today into `DateService`, enabling date override in tests without mocking `Date.now()`.

**Habit sticks**: Walk backwards through completed Mon–Sun weeks; a week breaks the chain if completions < frequency. Sticks capped at 7. Points = `basePoints × (1 + sticks × 0.1)`.

**Session score**: `score = (minutes × flowScore × 10 / 100) × depthBonus` where `depthBonus = 1 + log₂(minutes/45) × 0.167` for sessions ≥ 45 min (else 1). Rewards longer deep-work super-linearly.

**Data backup**: `DataSettingsPage` provides copy-to-clipboard (JSON) and Zod-validated import-from-clipboard as a manual backup until a backend exists.

## Conventions

- App entry files live in `src/entry/` (not the default `src/app/`)
- Prefer signals for reactivity; no RxJS state patterns
- All types derived from Zod schemas — no hand-written interfaces for domain models
- Use `MatDialog` for all create/edit/confirm interactions
- Use Angular Material components for UI; import per-component (e.g. `MatButtonModule`) in standalone components
- Use `<mat-icon>` for icons (Google Material Icons)
- All entity IDs generated with `uuid`
- Week starts Monday (`getWeekStart` in `date.utils.ts`)
- Theme defined in `src/material-theme.scss` (Material 3, azure/blue palette)
