---
name: utils-extraction
description: >
  Enforces a disciplined utils extraction pattern when writing or reviewing code.
  Use this skill whenever Claude Code is writing new feature code, refactoring existing code,
  or reviewing code for quality. It ensures that logic repeated two or more times is extracted
  into a reusable pure function placed in src/utils, and that Claude never recreates a utility
  that already exists. Trigger this skill proactively whenever writing more than one function,
  touching multiple files, or when the user says things like "write the feature", "implement",
  "refactor", "clean up the code", "add utils", or "don't repeat yourself".
---

# Utils Extraction Skill

This skill enforces a clean utils discipline: **extract repeated logic into pure functions in `src/utils`**, but only when a pattern appears two or more times. Always scan existing utils before creating new ones.

---

## Core Rules

1. **Two-or-more rule**: Only extract to utils if the logic appears (or will appear) in 2+ places. Do not prematurely extract one-off logic.
2. **Scan first**: Before writing any utility function, scan `src/utils` to check if equivalent functionality already exists. Reuse or extend it instead of duplicating.
3. **Pure functions only**: Utils must be pure — no side effects, no imports of app state, services, or singletons. Input → output only.
4. **Generic naming**: Utils should be named generically (not tied to a specific feature). E.g. `groupById` not `groupUsersById`.
5. **One concern per file**: Each util file should cover a single concern (e.g. `array.ts`, `string.ts`, `date.ts`, `object.ts`). Add to an existing file if it fits.

---

## Workflow

### Step 1 — Scan existing utils

Before writing any code, run:

```bash
find src/utils -type f | sort
```

Then read the relevant util files to understand what already exists. Focus on:
- Function names and signatures
- What each function does (read JSDoc/TSDoc if present)

Build a mental map: **"What utilities already exist?"**

### Step 2 — Analyze the feature for repeated patterns

As you plan or write the feature code, identify logic that:
- Appears more than once across files or within the same file
- Is self-contained (no side effects)
- Could be useful in other contexts

Common candidates: data transformations, filtering, sorting, formatting, mapping, validation, parsing.

### Step 3 — Decide: extract or inline

| Situation | Decision |
|-----------|----------|
| Logic used in 1 place only | Inline it — do not extract |
| Logic used in 2+ places | Extract to `src/utils` |
| Equivalent util already exists | Reuse it, import from existing file |
| Similar util exists but needs extension | Extend the existing function or add an overload |

### Step 4 — Write the util function

Place it in the appropriate file under `src/utils/`:
- `array.ts` — array manipulation (grouping, chunking, deduplication, filtering)
- `string.ts` — string formatting, parsing, truncation
- `object.ts` — object transforms, pick/omit, deep merge
- `date.ts` — date formatting, comparison, range helpers
- `number.ts` — rounding, clamping, formatting
- Create a new file only if no existing file fits the concern

**Function template:**

```ts
/**
 * Brief description of what the function does.
 * @param input - description
 * @returns description
 */
export function myUtil(input: SomeType): OutputType {
  // pure logic only
}
```

### Step 5 — Import in feature code

Use named imports from the utils file:

```ts
import { myUtil } from '@/utils/array';
```

Do not re-implement logic that is now in utils.

---

## What NOT to do

- ❌ Do not create utils for logic used only once
- ❌ Do not create a util if one already exists for the same purpose
- ❌ Do not put stateful logic, API calls, or service calls in utils
- ❌ Do not name utils after features (`processUserCart` → use `groupByKey` instead)
- ❌ Do not create a `utils/index.ts` barrel that re-exports everything — import directly from the specific file

---

## Example

**Bad** — logic duplicated inline:

```ts
// file A
const active = users.filter(u => u.status === 'active' && !u.deleted);

// file B
const active = members.filter(m => m.status === 'active' && !m.deleted);
```

**Good** — extracted once, since pattern appears 2+ times:

```ts
// src/utils/array.ts
export function filterActive<T extends { status: string; deleted: boolean }>(
  items: T[]
): T[] {
  return items.filter(i => i.status === 'active' && !i.deleted);
}

// file A
import { filterActive } from '@/utils/array';
const active = filterActive(users);

// file B
import { filterActive } from '@/utils/array';
const active = filterActive(members);
```

---

## Checklist before finishing

- [ ] Scanned `src/utils` before writing any new util
- [ ] No util created for logic that appears only once
- [ ] No duplicate of an already-existing utility
- [ ] All utils are pure functions with no side effects
- [ ] Utils are named generically, not tied to a feature
- [ ] Feature code imports from utils instead of inlining repeated logic