# Flow — Claude Code Guide

## Project Overview

**Flow** is a self-efficiency and motivation app focused on time control and deep work. Users start "flow sessions" — timed blocks of deep concentration on a task — and receive a score at the end of each session. Over time, scores provide insight into productivity patterns and motivate consistent focused work.

Built as an Angular 21 SPA scaffolded with Angular CLI 21.2.6.

## Tech Stack

- **Framework**: Angular 21.2.x (standalone components)
- **UI Components**: Angular Material 21.2.x (Material 3, `@angular/material`)
- **Icons**: Google Material Icons (via Google Fonts CDN)
- **Styling**: Tailwind CSS 4.x (via `@tailwindcss/postcss`)
- **Testing**: Vitest 4.x (`ng test, npm run test`)
- **Validation**: Zod 4.x
- **Language**: TypeScript 5.9.x

## Key Commands

```bash
npm start        # dev server on port 5022
npm run build    # production build → dist/
npm test         # Vitest unit tests
ng generate component <name>   # scaffold a component
```

## Project Structure

```text
src/
  entry/         # root app module (app.ts, app.config.ts, app.routes.ts)
  index.html
  main.ts
  styles.css     # global styles (Tailwind base)
```

## Architecture

### Components

Split into two categories:

- **`pages/`** — smart components, one per route. Own data fetching, inject services, handle user interactions.
- **`components/static/`** — generic, reusable presentational components. No service injection, input/output only.
- **`components/`** — All other components.

### State Management

- State lives in services as Angular signals
- Persistent state is stored in `localStorage` (temporary — to be migrated to a backend database later)
- Services expose signals as readonly; mutations go through explicit methods

### Services

Follow **SOLID** and **GRASP** principles:

- Single Responsibility: one service per domain concern (e.g. `SessionService`, `ScoringService`)
- Depend on abstractions where testability matters
- Use Angular's `inject()` and `providedIn: 'root'` unless scoped to a feature

### Utils

Pure, reusable, side-effect-free functions live in `src/utils/`. No Angular dependencies — plain TypeScript.

## Conventions

- App entry files live in `src/entry/` (not the default `src/app/`)
- Prefer signals for reactivity
- Use Zod schemas for runtime data validation
- Use Angular Material components for UI; import per-component modules (e.g. `MatButtonModule`, `MatIconModule`) in standalone components
- Use `<mat-icon>` for icons (Google Material Icons)
- Theme defined in `src/material-theme.scss` (Material 3, azure/blue palette)
