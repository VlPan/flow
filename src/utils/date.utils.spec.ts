import { describe, it, expect } from 'vitest';
import { getWeekStart, isSameDay, isPastDay } from './date.utils';

describe('getWeekStart', () => {
  it('returns Monday when given a Monday', () => {
    const monday = new Date('2025-03-17'); // known Monday
    const result = getWeekStart(monday);
    expect(result.getDay()).toBe(1);
    expect(result.getDate()).toBe(17);
  });

  it('returns the previous Monday when given a Wednesday', () => {
    const wednesday = new Date('2025-03-19');
    const result = getWeekStart(wednesday);
    expect(result.getDay()).toBe(1);
    expect(result.getDate()).toBe(17);
  });

  it('returns the previous Monday when given a Sunday', () => {
    const sunday = new Date('2025-03-23');
    const result = getWeekStart(sunday);
    expect(result.getDay()).toBe(1);
    expect(result.getDate()).toBe(17);
  });

  it('returns the previous Monday when given a Saturday', () => {
    const saturday = new Date('2025-03-22');
    const result = getWeekStart(saturday);
    expect(result.getDay()).toBe(1);
    expect(result.getDate()).toBe(17);
  });

  it('sets time to midnight (00:00:00.000)', () => {
    const date = new Date('2025-03-19T15:30:45.000');
    const result = getWeekStart(date);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });

  it('does not mutate the input date', () => {
    const date = new Date('2025-03-19');
    const original = date.getTime();
    getWeekStart(date);
    expect(date.getTime()).toBe(original);
  });
});

describe('isSameDay', () => {
  it('returns true for identical Date objects', () => {
    const d = new Date('2025-03-19');
    expect(isSameDay(d, d)).toBe(true);
  });

  it('returns true for same calendar day at different times', () => {
    const a = new Date('2025-03-19T08:00:00');
    const b = new Date('2025-03-19T23:59:59');
    expect(isSameDay(a, b)).toBe(true);
  });

  it('returns false for different days in the same month', () => {
    const a = new Date('2025-03-19');
    const b = new Date('2025-03-20');
    expect(isSameDay(a, b)).toBe(false);
  });

  it('returns false for same day in different months', () => {
    const a = new Date('2025-03-19');
    const b = new Date('2025-04-19');
    expect(isSameDay(a, b)).toBe(false);
  });

  it('returns false for same day in different years', () => {
    const a = new Date('2024-03-19');
    const b = new Date('2025-03-19');
    expect(isSameDay(a, b)).toBe(false);
  });
});

describe('isPastDay', () => {
  const today = new Date('2025-03-19T12:00:00');

  it('returns true for a day before today', () => {
    const yesterday = new Date('2025-03-18');
    expect(isPastDay(yesterday, today)).toBe(true);
  });

  it('returns false for today', () => {
    const sameDay = new Date('2025-03-19T00:00:00');
    expect(isPastDay(sameDay, today)).toBe(false);
  });

  it('returns false for a future day', () => {
    const tomorrow = new Date('2025-03-20');
    expect(isPastDay(tomorrow, today)).toBe(false);
  });

  it('returns true for a day one year in the past', () => {
    const lastYear = new Date('2024-03-19');
    expect(isPastDay(lastYear, today)).toBe(true);
  });

  it('does not treat today as past even when today has a later time', () => {
    const todayMidnight = new Date('2025-03-19T00:00:00');
    const todayNoon = new Date('2025-03-19T12:00:00');
    expect(isPastDay(todayMidnight, todayNoon)).toBe(false);
  });
});
