import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { signal } from '@angular/core';
import { vi } from 'vitest';
import { Shell } from './shell';
import { UiService } from '../../services/ui/ui.service';

describe('Shell', () => {
  let fixture: ComponentFixture<Shell>;
  let component: Shell;
  let mockUiService: {
    isSidenavExpanded: ReturnType<typeof signal<boolean>>;
    toggleSidenav: ReturnType<typeof vi.fn>;
  };

  function setup(expanded = true): void {
    mockUiService = {
      isSidenavExpanded: signal(expanded),
      toggleSidenav: vi.fn(),
    };

    TestBed.configureTestingModule({
      imports: [Shell],
      providers: [
        provideRouter([]),
        provideNoopAnimations(),
        { provide: UiService, useValue: mockUiService },
      ],
    });

    fixture = TestBed.createComponent(Shell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  afterEach(() => TestBed.resetTestingModule());

  it('creates the component', () => {
    setup();
    expect(component).toBeTruthy();
  });

  describe('navItems', () => {
    it('defines 5 navigation items', () => {
      setup();
      expect((component as any).navItems).toHaveLength(5);
    });

    it('has correct routes', () => {
      setup();
      const routes = (component as any).navItems.map((i: any) => i.route);
      expect(routes).toEqual(['/flow', '/habits', '/balance', '/statistics', '/settings']);
    });

    it('has correct labels', () => {
      setup();
      const labels = (component as any).navItems.map((i: any) => i.label);
      expect(labels).toEqual(['Flow', 'Habits', 'Balance', 'Statistics', 'Settings']);
    });

    it('has correct icons', () => {
      setup();
      const icons = (component as any).navItems.map((i: any) => i.icon);
      expect(icons).toEqual(['hourglass_empty', 'repeat', 'balance', 'bar_chart', 'settings']);
    });

    it('renders 5 nav links in the DOM', () => {
      setup();
      const links = fixture.debugElement.queryAll(By.css('a[mat-list-item]'));
      expect(links).toHaveLength(5);
    });
  });

  describe('toggle button', () => {
    it('shows chevron_left icon when expanded', () => {
      setup(true);
      const icon = fixture.debugElement.query(By.css('.toggle-btn mat-icon'));
      expect(icon.nativeElement.textContent.trim()).toBe('chevron_left');
    });

    it('shows menu icon when collapsed', () => {
      setup(false);
      const icon = fixture.debugElement.query(By.css('.toggle-btn mat-icon'));
      expect(icon.nativeElement.textContent.trim()).toBe('menu');
    });

    it('calls toggleSidenav() when clicked', () => {
      setup();
      const button = fixture.debugElement.query(By.css('.toggle-btn button'));
      button.nativeElement.click();
      expect(mockUiService.toggleSidenav).toHaveBeenCalledOnce();
    });
  });

  describe('sidenav CSS class', () => {
    it('has .expanded class when expanded', () => {
      setup(true);
      const nav = fixture.debugElement.query(By.css('nav.sidenav'));
      expect(nav.nativeElement.classList).toContain('expanded');
    });

    it('does not have .expanded class when collapsed', () => {
      setup(false);
      const nav = fixture.debugElement.query(By.css('nav.sidenav'));
      expect(nav.nativeElement.classList).not.toContain('expanded');
    });
  });
});
