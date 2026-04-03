import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { UiService } from './ui.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

describe('UiService', () => {
  let service: UiService;
  let mockGet: ReturnType<typeof vi.fn>;
  let mockSet: ReturnType<typeof vi.fn>;

  function setup(storedValue: boolean | null): void {
    mockGet = vi.fn().mockReturnValue(storedValue);
    mockSet = vi.fn();

    TestBed.configureTestingModule({
      providers: [
        UiService,
        {
          provide: LocalStorageService,
          useValue: { get: mockGet, set: mockSet, remove: vi.fn() },
        },
      ],
    });

    service = TestBed.inject(UiService);
  }

  afterEach(() => TestBed.resetTestingModule());

  describe('isSidenavExpanded initialization', () => {
    it('defaults to true when nothing is stored', () => {
      setup(null);
      expect(service.isSidenavExpanded()).toBe(true);
    });

    it('reads true from storage', () => {
      setup(true);
      expect(service.isSidenavExpanded()).toBe(true);
    });

    it('reads false from storage', () => {
      setup(false);
      expect(service.isSidenavExpanded()).toBe(false);
    });
  });

  describe('toggleSidenav()', () => {
    it('flips true to false', () => {
      setup(true);
      service.toggleSidenav();
      expect(service.isSidenavExpanded()).toBe(false);
    });

    it('flips false to true', () => {
      setup(false);
      service.toggleSidenav();
      expect(service.isSidenavExpanded()).toBe(true);
    });

    it('persists the new value to storage when toggling off', () => {
      setup(true);
      service.toggleSidenav();
      expect(mockSet).toHaveBeenCalledWith('sidenavExpanded', false);
    });

    it('persists the new value to storage when toggling on', () => {
      setup(false);
      service.toggleSidenav();
      expect(mockSet).toHaveBeenCalledWith('sidenavExpanded', true);
    });
  });
});
