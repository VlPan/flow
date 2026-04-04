import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { FlowVectorCard } from './flow-vector-card';
import { CompletionCriteria, Destination, FlowVector } from '../../models/flow-vector.model';

function makeVector(overrides: Partial<FlowVector> = {}): FlowVector {
  return {
    id: 'v1',
    name: 'Work',
    color: '#ff0000',
    icon: '💼',
    destinations: [],
    finalDestinations: [],
    deleted: false,
    ...overrides,
  };
}

function makeDestination(overrides: Partial<Destination> = {}): Destination {
  return {
    id: 'd1',
    vectorId: 'v1',
    name: 'Draft',
    completed: false,
    completionCriteria: [],
    ...overrides,
  };
}

describe('FlowVectorCard', () => {
  let fixture: ComponentFixture<FlowVectorCard>;
  let component: FlowVectorCard;

  function setup(vector: FlowVector) {
    TestBed.configureTestingModule({
      imports: [FlowVectorCard],
      providers: [provideNoopAnimations()],
    });
    fixture = TestBed.createComponent(FlowVectorCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('vector', vector);
  }

  afterEach(() => TestBed.resetTestingModule());

  // --- Rendering ---

  it('renders the vector name', async () => {
    setup(makeVector({ name: 'Exercise' }));
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Exercise');
  });

  it('renders the vector icon', async () => {
    setup(makeVector({ icon: '🏃' }));
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('🏃');
  });

  // --- Sorting ---

  it('sortedDestinations puts incomplete items before completed ones', async () => {
    const completed = makeDestination({ id: 'd1', completed: true });
    const incomplete = makeDestination({ id: 'd2', completed: false });
    setup(makeVector({ destinations: [completed, incomplete] }));
    await fixture.whenStable();
    const sorted = (component as any).sortedDestinations();
    expect(sorted[0].id).toBe('d2');
    expect(sorted[1].id).toBe('d1');
  });

  it('sortedFinalDestinations puts incomplete items before completed ones', async () => {
    const completed = makeDestination({ id: 'd1', completed: true });
    const incomplete = makeDestination({ id: 'd2', completed: false });
    setup(makeVector({ finalDestinations: [completed, incomplete] }));
    await fixture.whenStable();
    const sorted = (component as any).sortedFinalDestinations();
    expect(sorted[0].id).toBe('d2');
    expect(sorted[1].id).toBe('d1');
  });

  // --- Edit output ---

  it('onEditClick emits the vector through the edit output', () => {
    const vector = makeVector();
    setup(vector);
    const emitted: FlowVector[] = [];
    component.edit.subscribe((v: FlowVector) => emitted.push(v));
    (component as any).onEditClick();
    expect(emitted).toHaveLength(1);
    expect(emitted[0].id).toBe('v1');
  });

  // --- Delete ---

  it('onDeleteClick emits deleteRequested', () => {
    setup(makeVector());
    let emitted = false;
    component.deleteRequested.subscribe(() => { emitted = true; });
    (component as any).onDeleteClick();
    expect(emitted).toBe(true);
  });

  // --- Destination toggle ---

  it('onDestinationToggle emits destinationToggleRequested with correct payload', () => {
    setup(makeVector({ id: 'v1' }));
    let payload: { dest: Destination; isFinal: boolean } | undefined;
    component.destinationToggleRequested.subscribe(p => { payload = p; });
    const dest = makeDestination({ id: 'd1' });
    (component as any).onDestinationToggle(dest, true);
    expect(payload).toEqual({ dest, isFinal: true });
  });

  it('onDestinationToggle passes isFinal=false for regular destinations', () => {
    setup(makeVector());
    let payload: { dest: Destination; isFinal: boolean } | undefined;
    component.destinationToggleRequested.subscribe(p => { payload = p; });
    (component as any).onDestinationToggle(makeDestination(), false);
    expect(payload?.isFinal).toBe(false);
  });

  // --- Criteria change ---

  it('onCriteriaChange reverts the checkbox state before emitting', () => {
    setup(makeVector());
    const source = { checked: true } as any;
    const criteria: CompletionCriteria = { id: 'c1', destinationId: 'd1', name: 'x', completed: false };
    (component as any).onCriteriaChange({ source, checked: true }, makeDestination(), criteria, false);
    expect(source.checked).toBe(false);
  });

  it('onCriteriaChange emits criteriaToggleRequested with correct payload', () => {
    setup(makeVector({ id: 'v1' }));
    let payload: { dest: Destination; criteria: CompletionCriteria; isFinal: boolean } | undefined;
    component.criteriaToggleRequested.subscribe(p => { payload = p; });
    const source = { checked: false } as any;
    const dest = makeDestination({ id: 'd1' });
    const criteria: CompletionCriteria = { id: 'c1', destinationId: 'd1', name: 'x', completed: false };
    (component as any).onCriteriaChange({ source, checked: false }, dest, criteria, true);
    expect(payload).toEqual({ dest, criteria, isFinal: true });
  });
});
