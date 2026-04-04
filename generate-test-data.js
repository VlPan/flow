// Run with: node generate-test-data.js
// Generates 105 days of test data in ./test-data/ (one JSON file per localStorage key)

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

// --- Vectors (4 active, 2 soft-deleted) ---
const flowVectors = [
  { id: 'vec-career',        name: 'Career',        color: '#2196F3', icon: '💼', destinations: [], finalDestinations: [], deleted: false },
  { id: 'vec-health',        name: 'Health',        color: '#4CAF50', icon: '🏃', destinations: [], finalDestinations: [], deleted: false },
  { id: 'vec-learning',      name: 'Learning',      color: '#FF9800', icon: '📚', destinations: [], finalDestinations: [], deleted: false },
  { id: 'vec-creative',      name: 'Creative',      color: '#E91E63', icon: '🎨', destinations: [], finalDestinations: [], deleted: false },
  { id: 'vec-relationships', name: 'Relationships', color: '#9C27B0', icon: '❤️', destinations: [], finalDestinations: [], deleted: true  },
  { id: 'vec-finance',       name: 'Finance',       color: '#FF5722', icon: '💰', destinations: [], finalDestinations: [], deleted: true  },
];

// --- Helpers ---
const TODAY = new Date(2026, 3, 4); // April 4, 2026 (month is 0-indexed)

function dateStr(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function rInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function weighted(items, weights) {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return items[i];
  }
  return items[items.length - 1];
}

// --- Session descriptions per vector ---
const descs = {
  'vec-career':        ['Deep work on project', 'Code review', 'Architecture planning', 'Feature development', 'Bug fixing', 'Documentation'],
  'vec-health':        ['Morning workout', 'Yoga session', 'Running', 'Meditation', 'Stretching'],
  'vec-learning':      ['Reading tech book', 'Online course', 'Practice coding', 'Research', 'Study notes'],
  'vec-creative':      ['Writing', 'Drawing', 'Music practice', 'Brainstorming', 'Design work'],
  'vec-relationships': ['Quality time', 'Deep conversation', 'Family activity', 'Friend meetup'],
  'vec-finance':       ['Budget review', 'Investment research', 'Financial planning', 'Tax work'],
  'break':             ['Flow Break', 'Rest', 'Coffee break'],
};

// --- Generate sessions for 105 days ---
const sessionRecords = [];

for (let dayOffset = 104; dayOffset >= 0; dayOffset--) {
  const date = addDays(TODAY, -dayOffset);
  const ds = dateStr(date);

  // ~65% of days have sessions
  if (Math.random() > 0.65) continue;

  const count = rInt(1, 4);
  let hour = 8; // sessions start from 8am

  for (let s = 0; s < count; s++) {
    // Older days (>60 days ago): 30% chance of using a soft-deleted vector
    const useDeleted = dayOffset > 60 && Math.random() < 0.30;
    let vectorId;

    if (useDeleted) {
      vectorId = Math.random() < 0.5 ? 'vec-relationships' : 'vec-finance';
    } else {
      vectorId = weighted(
        ['vec-career', 'vec-health', 'vec-learning', 'vec-creative', 'break'],
        [30, 15, 25, 15, 15]
      );
    }

    const mins  = vectorId === 'break' ? rInt(10, 20) : rInt(25, 120);
    const score = vectorId === 'break' ? 5 : rInt(4, 10);
    const startMin = rInt(0, 30);

    const startedAt = new Date(date);
    startedAt.setHours(hour, startMin, 0, 0);

    const finishedAt = new Date(startedAt);
    finishedAt.setMinutes(finishedAt.getMinutes() + mins);

    hour = finishedAt.getHours() + 1; // ~1 hour gap between sessions
    if (hour > 22) break;

    const descList = descs[vectorId];
    sessionRecords.push({
      id:               uuidv4(),
      planningRowId:    uuidv4(),
      flowVectorId:     vectorId,
      shortDescription: descList[rInt(0, descList.length - 1)],
      sessionMinutes:   mins,
      flowScore:        score,
      startedAt:        startedAt.toISOString(),
      finishedAt:       finishedAt.toISOString(),
      startDate:        ds,
    });
  }
}

// --- Write files ---
const outputDir = path.join(__dirname, 'test-data');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const files = {
  'activeSession.json':          null,
  'sessionRecords.json':         sessionRecords,
  'planningRows.json':           [],
  'flowVectors.json':            flowVectors,
  'sessionHidePassedTime.json':  false,
  'sessionGoodMinutes.json':     90,
  'sidenavExpanded.json':        true,
  'flowSplitSizes.json':         [70, 30],
};

for (const [filename, data] of Object.entries(files)) {
  fs.writeFileSync(path.join(outputDir, filename), JSON.stringify(data, null, 2));
}

console.log(`✓ Generated ${sessionRecords.length} sessions across 105 days`);
console.log(`✓ Files written to ./test-data/`);
console.log('');
console.log('To load in browser DevTools → Application → Local Storage:');
console.log('  localStorage.setItem("activeSession",          <activeSession.json content>)');
console.log('  localStorage.setItem("sessionRecords",         <sessionRecords.json content>)');
console.log('  localStorage.setItem("planningRows",           <planningRows.json content>)');
console.log('  localStorage.setItem("flowVectors",            <flowVectors.json content>)');
console.log('  localStorage.setItem("sessionHidePassedTime",  <sessionHidePassedTime.json content>)');
console.log('  localStorage.setItem("sessionGoodMinutes",     <sessionGoodMinutes.json content>)');
console.log('  localStorage.setItem("sidenavExpanded",        <sidenavExpanded.json content>)');
console.log('  localStorage.setItem("flowSplitSizes",         <flowSplitSizes.json content>)');
