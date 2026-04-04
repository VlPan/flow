import { sortByCompleted } from './sort.utils';

describe('sortByCompleted', () => {
  it('returns an empty array unchanged', () => {
    expect(sortByCompleted([])).toEqual([]);
  });

  it('puts incomplete items before completed ones', () => {
    const items = [
      { id: 1, completed: true },
      { id: 2, completed: false },
    ];
    const result = sortByCompleted(items);
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
  });

  it('preserves relative order among incomplete items', () => {
    const items = [
      { id: 1, completed: false },
      { id: 2, completed: true },
      { id: 3, completed: false },
    ];
    expect(sortByCompleted(items).map(i => i.id)).toEqual([1, 3, 2]);
  });

  it('returns all items when none are completed', () => {
    const items = [
      { id: 1, completed: false },
      { id: 2, completed: false },
    ];
    expect(sortByCompleted(items)).toEqual(items);
  });

  it('returns all items when all are completed', () => {
    const items = [
      { id: 1, completed: true },
      { id: 2, completed: true },
    ];
    expect(sortByCompleted(items)).toEqual(items);
  });

  it('does not mutate the original array', () => {
    const items = [{ id: 1, completed: true }, { id: 2, completed: false }];
    sortByCompleted(items);
    expect(items[0].id).toBe(1);
  });
});
