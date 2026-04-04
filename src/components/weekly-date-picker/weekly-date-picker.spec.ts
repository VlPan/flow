import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { signal } from '@angular/core';
import { vi } from 'vitest';
import { WeeklyDatePicker } from './weekly-date-picker';
import { DateService } from '../../services/date/date.service';

function makeWeekAround(anchor: Date): Date[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(anchor);
    d.setDate(d.getDate() + i);
    return d;
  });
}

describe('WeeklyDatePicker', () => {
  let fixture: ComponentFixture<WeeklyDatePicker>;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // A week: [yesterday, today, tomorrow, +2, +3, +4, +5]
  const testWeek: Date[] = [
    yesterday,
    today,
    tomorrow,
    ...Array.from({ length: 4 }, (_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() + i + 2);
      return d;
    }),
  ];

  function setup(opts: {
    weekDays?: Date[];
    selectedDay?: Date;
    canGoPrev?: boolean;
    canGoNext?: boolean;
  } = {}) {
    const {
      weekDays = makeWeekAround(today),
      selectedDay = today,
      canGoPrev = true,
      canGoNext = true,
    } = opts;

    const mockService = {
      today,
      weekDays: signal(weekDays),
      selectedDay: signal(selectedDay),
      canGoPrev: signal(canGoPrev),
      canGoNext: signal(canGoNext),
      goToPrevWeek: vi.fn(),
      goToNextWeek: vi.fn(),
      selectDay: vi.fn(),
      goToToday: vi.fn(),
    };

    TestBed.configureTestingModule({
      imports: [WeeklyDatePicker],
      providers: [
        provideNoopAnimations(),
        { provide: DateService, useValue: mockService },
      ],
    });

    fixture = TestBed.createComponent(WeeklyDatePicker);
    fixture.detectChanges();

    return { mockService };
  }

  afterEach(() => TestBed.resetTestingModule());

  describe('rendering', () => {
    it('creates the component', () => {
      const { } = setup();
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('renders exactly 7 day buttons', () => {
      setup();
      const buttons = fixture.debugElement.queryAll(By.css('.day-btn'));
      expect(buttons).toHaveLength(7);
    });

    it('displays the date number inside each day button', () => {
      setup({ weekDays: testWeek });
      const numbers = fixture.debugElement.queryAll(By.css('.day-number'));
      const rendered = numbers.map(n => Number(n.nativeElement.textContent.trim()));
      const expected = testWeek.map(d => d.getDate());
      expect(rendered).toEqual(expected);
    });
  });

  describe('CSS state classes', () => {
    it('applies is-selected to the selected day', () => {
      setup({ weekDays: testWeek, selectedDay: today });
      const buttons = fixture.debugElement.queryAll(By.css('.day-btn'));
      const selectedBtn = buttons[1]; // today is index 1 in testWeek
      expect(selectedBtn.nativeElement.classList).toContain('is-selected');
    });

    it('does not apply is-selected to non-selected days', () => {
      setup({ weekDays: testWeek, selectedDay: today });
      const buttons = fixture.debugElement.queryAll(By.css('.day-btn'));
      expect(buttons[0].nativeElement.classList).not.toContain('is-selected');
      expect(buttons[2].nativeElement.classList).not.toContain('is-selected');
    });

    it('applies is-today to today\'s button', () => {
      setup({ weekDays: testWeek, selectedDay: yesterday });
      const buttons = fixture.debugElement.queryAll(By.css('.day-btn'));
      expect(buttons[1].nativeElement.classList).toContain('is-today'); // index 1 = today
    });

    it('does not apply is-today to non-today buttons', () => {
      setup({ weekDays: testWeek });
      const buttons = fixture.debugElement.queryAll(By.css('.day-btn'));
      expect(buttons[0].nativeElement.classList).not.toContain('is-today');
      expect(buttons[2].nativeElement.classList).not.toContain('is-today');
    });

    it('applies is-past to past day buttons', () => {
      setup({ weekDays: testWeek, selectedDay: today });
      const buttons = fixture.debugElement.queryAll(By.css('.day-btn'));
      expect(buttons[0].nativeElement.classList).toContain('is-past'); // yesterday
    });

    it('does not apply is-past to today or future buttons', () => {
      setup({ weekDays: testWeek, selectedDay: today });
      const buttons = fixture.debugElement.queryAll(By.css('.day-btn'));
      expect(buttons[1].nativeElement.classList).not.toContain('is-past'); // today
      expect(buttons[2].nativeElement.classList).not.toContain('is-past'); // tomorrow
    });
  });

  describe('day selection', () => {
    it('calls selectDay with the clicked day', () => {
      const { mockService } = setup({ weekDays: testWeek, selectedDay: today });
      const buttons = fixture.debugElement.queryAll(By.css('.day-btn'));
      buttons[2].nativeElement.click();
      expect(mockService.selectDay).toHaveBeenCalledWith(testWeek[2]);
    });

    it('calls selectDay with the correct day when clicking any button', () => {
      const { mockService } = setup({ weekDays: testWeek, selectedDay: today });
      const buttons = fixture.debugElement.queryAll(By.css('.day-btn'));
      buttons[0].nativeElement.click();
      expect(mockService.selectDay).toHaveBeenCalledWith(testWeek[0]);
    });
  });

  describe('week navigation', () => {
    it('calls goToPrevWeek when prev arrow is clicked', () => {
      const { mockService } = setup();
      const prevBtn = fixture.debugElement.queryAll(By.css('button[mat-icon-button]'))[0];
      prevBtn.nativeElement.click();
      expect(mockService.goToPrevWeek).toHaveBeenCalledOnce();
    });

    it('calls goToNextWeek when next arrow is clicked', () => {
      const { mockService } = setup();
      const nextBtn = fixture.debugElement.queryAll(By.css('button[mat-icon-button]'))[1];
      nextBtn.nativeElement.click();
      expect(mockService.goToNextWeek).toHaveBeenCalledOnce();
    });

    it('disables prev arrow when canGoPrev is false', () => {
      setup({ canGoPrev: false });
      const prevBtn = fixture.debugElement.queryAll(By.css('button[mat-icon-button]'))[0];
      expect(prevBtn.nativeElement.disabled).toBe(true);
    });

    it('disables next arrow when canGoNext is false', () => {
      setup({ canGoNext: false });
      const nextBtn = fixture.debugElement.queryAll(By.css('button[mat-icon-button]'))[1];
      expect(nextBtn.nativeElement.disabled).toBe(true);
    });

    it('enables prev arrow when canGoPrev is true', () => {
      setup({ canGoPrev: true });
      const prevBtn = fixture.debugElement.queryAll(By.css('button[mat-icon-button]'))[0];
      expect(prevBtn.nativeElement.disabled).toBe(false);
    });

    it('enables next arrow when canGoNext is true', () => {
      setup({ canGoNext: true });
      const nextBtn = fixture.debugElement.queryAll(By.css('button[mat-icon-button]'))[1];
      expect(nextBtn.nativeElement.disabled).toBe(false);
    });
  });

  describe('today chip', () => {
    it('is invisible (visibility: hidden) when today is selected', () => {
      setup({ selectedDay: today });
      const chip = fixture.debugElement.query(By.css('.today-chip-row'));
      expect(chip).not.toBeNull(); // always in DOM
      expect(chip.nativeElement.style.visibility).toBe('hidden');
    });

    it('is visible when a different day is selected', () => {
      setup({ selectedDay: yesterday });
      const chip = fixture.debugElement.query(By.css('.today-chip-row'));
      expect(chip.nativeElement.style.visibility).toBe('visible');
    });

    it('calls goToToday when clicked', () => {
      const { mockService } = setup({ selectedDay: yesterday });
      const chipBtn = fixture.debugElement.query(By.css('.today-chip-row button'));
      chipBtn.nativeElement.click();
      expect(mockService.goToToday).toHaveBeenCalledOnce();
    });
  });
});
