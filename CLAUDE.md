# Flow — Claude Code Guide

## Project Overview

Angular 21 SPA scaffolded with Angular CLI 21.2.6.

## Tech Stack

- **Framework**: Angular 21.2.x (standalone components)
- **Styling**: Tailwind CSS 4.x (via `@tailwindcss/postcss`)
- **Testing**: Vitest 4.x (`ng test`)
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

```
src/
  entry/         # root app module (app.ts, app.config.ts, app.routes.ts)
  index.html
  main.ts
  styles.css     # global styles (Tailwind base)
```

## Conventions

- App entry files live in `src/entry/` (not the default `src/app/`)
- Use standalone Angular components (no NgModules)
- Prefer signals and `linkedSignal`/`resource` for reactivity
- Use Zod schemas for runtime data validation
