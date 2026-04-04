import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { FlowVectorPlaceholder } from './flow-vector-placeholder';

describe('FlowVectorPlaceholder', () => {
  let fixture: ComponentFixture<FlowVectorPlaceholder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowVectorPlaceholder],
      providers: [provideNoopAnimations()],
    }).compileComponents();
    fixture = TestBed.createComponent(FlowVectorPlaceholder);
  });

  afterEach(() => TestBed.resetTestingModule());

  it('renders a mat-icon with "add"', async () => {
    await fixture.whenStable();
    const icon = fixture.nativeElement.querySelector('mat-icon');
    expect(icon).toBeTruthy();
    expect(icon.textContent.trim()).toBe('add');
  });

  it('renders the placeholder container element', async () => {
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.placeholder-container')).toBeTruthy();
  });
});
