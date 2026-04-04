export function sortByCompleted<T extends { completed: boolean }>(items: T[]): T[] {
  return [...items.filter(i => !i.completed), ...items.filter(i => i.completed)];
}
