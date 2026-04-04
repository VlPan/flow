import { TestBed } from '@angular/core/testing';
import { DateService } from './date.service';
import { TODAY_DATE } from './date.tokens';
import { getWeekStart, isSameDay } from '../../utils/date.utils';

// Fixed "today" for deterministic tests (a Wednesday)
const CONTROLLED_TODAY = new Date('2025-03-19T00:00:00');
const CONTROLLED_WEEK_START = getWeekStart(CONTROLLED_TODAY);

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: TODAY_DATE, useValue: new Date(CONTROLLED_TODAY) }],
    });
    service = TestBed.inject(DateService);
  });

  it('should initialize selectedDay to today at midnight', () => {
    expect(isSameDay(service.selectedDay(), CONTROLLED_TODAY)).toBe(true);
    expect(service.selectedDay().getHours()).toBe(0);
  });

  it('should initialize currentWeekStart to Monday of current week', () => {
    const start = service.currentWeekStart();
    expect(start.getDay()).toBe(1); // Monday
    expect(start.getHours()).toBe(0);
  });

  it('should return exactly 7 days in weekDays', () => {
    expect(service.weekDays().length).toBe(7);
  });

  it('should return weekDays starting on Monday', () => {
    expect(service.weekDays()[0].getDay()).toBe(1);
  });

  it('canGoPrev should be true on the current week', () => {
    expect(service.canGoPrev()).toBe(true);
  });

  it('canGoNext should be true on the current week', () => {
    expect(service.canGoNext()).toBe(true);
  });

  it('canGoPrev should be false at -2 weeks', () => {
    service.goToPrevWeek();
    service.goToPrevWeek();
    expect(service.canGoPrev()).toBe(false);
  });

  it('canGoNext should be false at +2 weeks', () => {
    service.goToNextWeek();
    service.goToNextWeek();
    expect(service.canGoNext()).toBe(false);
  });

  it('goToToday should reset selectedDay to today', () => {
    service.goToNextWeek();
    service.selectDay(service.weekDays()[3]);
    service.goToToday();
    expect(isSameDay(service.selectedDay(), CONTROLLED_TODAY)).toBe(true);
  });

  it('goToToday should reset currentWeekStart to current week', () => {
    service.goToNextWeek();
    service.goToToday();
    expect(isSameDay(service.currentWeekStart(), CONTROLLED_WEEK_START)).toBe(true);
  });

  it('navigating weeks does not change selectedDay', () => {
    const original = service.selectedDay();
    service.goToNextWeek();
    expect(isSameDay(service.selectedDay(), original)).toBe(true);
    service.goToPrevWeek();
    expect(isSameDay(service.selectedDay(), original)).toBe(true);
  });

  it('selectDay updates selectedDay signal', () => {
    const nextWeek = new Date(CONTROLLED_TODAY);
    nextWeek.setDate(nextWeek.getDate() + 7);
    service.selectDay(nextWeek);
    expect(isSameDay(service.selectedDay(), nextWeek)).toBe(true);
  });

  it('weekDays covers Mon through Sun (7 consecutive days)', () => {
    const days = service.weekDays();
    for (let i = 1; i < days.length; i++) {
      const diff = days[i].getTime() - days[i - 1].getTime();
      expect(diff).toBe(24 * 60 * 60 * 1000); // exactly one day apart
    }
    expect(days[6].getDay()).toBe(0); // last day is Sunday
  });

  it('goToNextWeek shifts weekDays forward by 7 days', () => {
    service.goToNextWeek();
    const expected = new Date(CONTROLLED_WEEK_START);
    expected.setDate(expected.getDate() + 7);
    expect(isSameDay(service.currentWeekStart(), expected)).toBe(true);
  });

  it('goToPrevWeek shifts weekDays backward by 7 days', () => {
    const expected = new Date(CONTROLLED_WEEK_START);
    expected.setDate(expected.getDate() - 7);
    service.goToPrevWeek();
    expect(isSameDay(service.currentWeekStart(), expected)).toBe(true);
  });

  it('goToPrevWeek does nothing when already at -2 weeks', () => {
    service.goToPrevWeek();
    service.goToPrevWeek();
    const stuckAt = service.currentWeekStart().getTime();
    service.goToPrevWeek(); // should be a no-op
    expect(service.currentWeekStart().getTime()).toBe(stuckAt);
  });

  it('goToNextWeek does nothing when already at +2 weeks', () => {
    service.goToNextWeek();
    service.goToNextWeek();
    const stuckAt = service.currentWeekStart().getTime();
    service.goToNextWeek(); // should be a no-op
    expect(service.currentWeekStart().getTime()).toBe(stuckAt);
  });
});
