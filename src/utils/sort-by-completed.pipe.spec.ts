import { SortByCompletedPipe } from './sort-by-completed.pipe';

describe('SortByCompletedPipe', () => {
  const pipe = new SortByCompletedPipe();

  it('returns incomplete items before completed ones', () => {
    const items = [
      { id: 1, completed: true },
      { id: 2, completed: false },
    ];
    const result = pipe.transform(items);
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
  });

  it('does not mutate the original array', () => {
    const items = [{ completed: true }, { completed: false }];
    pipe.transform(items);
    expect(items[0].completed).toBe(true);
  });

  it('returns empty array unchanged', () => {
    expect(pipe.transform([])).toEqual([]);
  });
});
