import { Component, input, output, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { Subject } from 'rxjs';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SettingsPage } from './settings.page';
import { FlowVectorsService } from '../../services/flow-vectors/flow-vectors.service';
import { FlowVectorCard } from '../../components/flow-vector-card/flow-vector-card';
import { FlowVectorPlaceholder } from '../../components/flow-vector-placeholder/flow-vector-placeholder';
import { CompletionCriteria, Destination, FlowVector } from '../../models/flow-vector.model';

// Lightweight stubs — avoid rendering the full component trees
@Component({ selector: 'app-flow-vector-card', standalone: true, template: '' })
class FlowVectorCardStub {
  readonly vector = input.required<FlowVector>();
  readonly edit = output<FlowVector>();
  readonly deleteRequested = output<void>();
  readonly destinationToggleRequested = output<{ dest: Destination; isFinal: boolean }>();
  readonly criteriaToggleRequested = output<{ dest: Destination; criteria: CompletionCriteria; isFinal: boolean }>();
}

@Component({ selector: 'app-flow-vector-placeholder', standalone: true, template: '' })
class FlowVectorPlaceholderStub {}

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

function makeCriteria(overrides: Partial<CompletionCriteria> = {}): CompletionCriteria {
  return {
    id: 'c1',
    destinationId: 'd1',
    name: 'Review',
    completed: false,
    ...overrides,
  };
}

describe('SettingsPage', () => {
  let fixture: ComponentFixture<SettingsPage>;
  let component: SettingsPage;
  let mockCreate: ReturnType<typeof vi.fn>;
  let mockUpdate: ReturnType<typeof vi.fn>;
  let mockSoftDelete: ReturnType<typeof vi.fn>;
  let mockToggleDest: ReturnType<typeof vi.fn>;
  let mockToggleCriteria: ReturnType<typeof vi.fn>;
  let mockDialogOpen: ReturnType<typeof vi.fn>;
  let mockSnackBarOpen: ReturnType<typeof vi.fn>;
  let dialogSubject: Subject<any>;

  function setup(vectors: FlowVector[] = []) {
    dialogSubject = new Subject();
    mockCreate = vi.fn();
    mockUpdate = vi.fn();
    mockSoftDelete = vi.fn();
    mockToggleDest = vi.fn();
    mockToggleCriteria = vi.fn();
    mockDialogOpen = vi.fn().mockReturnValue({
      afterClosed: () => dialogSubject.asObservable(),
    });
    mockSnackBarOpen = vi.fn().mockReturnValue({});

    TestBed.configureTestingModule({
      imports: [SettingsPage],
      providers: [
        provideNoopAnimations(),
        {
          provide: FlowVectorsService,
          useValue: {
            vectors: signal(vectors).asReadonly(),
            create: mockCreate,
            update: mockUpdate,
            softDelete: mockSoftDelete,
            toggleDestinationComplete: mockToggleDest,
            toggleCriteriaComplete: mockToggleCriteria,
          },
        },
      ],
    }).overrideComponent(SettingsPage, {
      remove: { imports: [FlowVectorCard, FlowVectorPlaceholder] },
      add: { imports: [FlowVectorCardStub, FlowVectorPlaceholderStub] },
    });
    TestBed.overrideProvider(MatDialog, { useValue: { open: mockDialogOpen } });
    TestBed.overrideProvider(MatSnackBar, { useValue: { open: mockSnackBarOpen } });

    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
  }

  afterEach(() => TestBed.resetTestingModule());

  // --- Rendering ---

  it('renders one app-flow-vector-card per vector', async () => {
    setup([makeVector({ id: 'v1' }), makeVector({ id: 'v2' })]);
    await fixture.whenStable();
    const cards = fixture.nativeElement.querySelectorAll('app-flow-vector-card');
    expect(cards).toHaveLength(2);
  });

  it('renders the placeholder component', async () => {
    setup();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('app-flow-vector-placeholder')).toBeTruthy();
  });

  // --- Create dialog ---

  it('openCreateDialog opens a MatDialog', () => {
    setup();
    component.openCreateDialog();
    expect(mockDialogOpen).toHaveBeenCalledOnce();
  });

  it('openCreateDialog calls flowVectorsService.create() when dialog returns a result', () => {
    setup();
    component.openCreateDialog();
    dialogSubject.next({ name: 'New', icon: '⚡', color: '#ff0000', destinations: [], finalDestinations: [] });
    expect(mockCreate).toHaveBeenCalledOnce();
  });

  it('openCreateDialog shows "Flow vector created" snackbar after creating', () => {
    setup();
    component.openCreateDialog();
    dialogSubject.next({ name: 'New', icon: '⚡', color: '#ff0000', destinations: [], finalDestinations: [] });
    expect(mockSnackBarOpen).toHaveBeenCalledWith('Flow vector created', 'OK', expect.any(Object));
  });

  it('openCreateDialog does NOT call create() when dialog is cancelled (result is null)', () => {
    setup();
    component.openCreateDialog();
    dialogSubject.next(null);
    expect(mockCreate).not.toHaveBeenCalled();
  });

  it('openCreateDialog does NOT call create() when dialog is cancelled (result is undefined)', () => {
    setup();
    component.openCreateDialog();
    dialogSubject.next(undefined);
    expect(mockCreate).not.toHaveBeenCalled();
  });

  // --- Edit dialog ---

  it('openEditDialog opens a MatDialog', () => {
    setup();
    component.openEditDialog(makeVector());
    expect(mockDialogOpen).toHaveBeenCalledOnce();
  });

  it('openEditDialog calls flowVectorsService.update() with the correct id when dialog returns a result', () => {
    const vector = makeVector({ id: 'v1' });
    setup();
    component.openEditDialog(vector);
    dialogSubject.next({ name: 'Updated', icon: '💼', color: '#ff0000', destinations: [], finalDestinations: [] });
    expect(mockUpdate).toHaveBeenCalledWith('v1', expect.any(Object));
  });

  it('openEditDialog shows "Changes saved" snackbar after updating', () => {
    setup();
    component.openEditDialog(makeVector());
    dialogSubject.next({ name: 'Updated', icon: '💼', color: '#ff0000', destinations: [], finalDestinations: [] });
    expect(mockSnackBarOpen).toHaveBeenCalledWith('Changes saved', 'OK', expect.any(Object));
  });

  it('openEditDialog does NOT call update() when dialog is cancelled (result is null)', () => {
    setup();
    component.openEditDialog(makeVector());
    dialogSubject.next(null);
    expect(mockUpdate).not.toHaveBeenCalled();
  });

  it('openEditDialog does NOT call update() when dialog is cancelled (result is undefined)', () => {
    setup();
    component.openEditDialog(makeVector());
    dialogSubject.next(undefined);
    expect(mockUpdate).not.toHaveBeenCalled();
  });

  // --- Delete ---

  it('onDeleteRequested opens a confirm dialog', () => {
    setup();
    component.onDeleteRequested(makeVector());
    expect(mockDialogOpen).toHaveBeenCalledOnce();
  });

  it('onDeleteRequested calls softDelete when dialog is confirmed', () => {
    setup();
    component.onDeleteRequested(makeVector({ id: 'v1' }));
    dialogSubject.next(true);
    expect(mockSoftDelete).toHaveBeenCalledWith('v1');
  });

  it('onDeleteRequested does NOT call softDelete when dialog is cancelled', () => {
    setup();
    component.onDeleteRequested(makeVector());
    dialogSubject.next(false);
    expect(mockSoftDelete).not.toHaveBeenCalled();
  });

  // --- Destination toggle ---

  it('onDestinationToggleRequested opens a confirm dialog', () => {
    setup();
    component.onDestinationToggleRequested('v1', { dest: makeDestination(), isFinal: false });
    expect(mockDialogOpen).toHaveBeenCalledOnce();
  });

  it('onDestinationToggleRequested calls toggleDestinationComplete when confirmed', () => {
    setup();
    component.onDestinationToggleRequested('v1', { dest: makeDestination({ id: 'd1' }), isFinal: true });
    dialogSubject.next(true);
    expect(mockToggleDest).toHaveBeenCalledWith('v1', 'd1', true);
  });

  it('onDestinationToggleRequested does NOT call service when cancelled', () => {
    setup();
    component.onDestinationToggleRequested('v1', { dest: makeDestination(), isFinal: false });
    dialogSubject.next(false);
    expect(mockToggleDest).not.toHaveBeenCalled();
  });

  // --- Criteria toggle ---

  it('onCriteriaToggleRequested opens a confirm dialog', () => {
    setup();
    component.onCriteriaToggleRequested('v1', { dest: makeDestination(), criteria: makeCriteria(), isFinal: false });
    expect(mockDialogOpen).toHaveBeenCalledOnce();
  });

  it('onCriteriaToggleRequested calls toggleCriteriaComplete when confirmed', () => {
    setup();
    component.onCriteriaToggleRequested('v1', { dest: makeDestination({ id: 'd1' }), criteria: makeCriteria({ id: 'c1' }), isFinal: false });
    dialogSubject.next(true);
    expect(mockToggleCriteria).toHaveBeenCalledWith('v1', 'd1', 'c1', false);
  });

  it('onCriteriaToggleRequested does NOT call service when cancelled', () => {
    setup();
    component.onCriteriaToggleRequested('v1', { dest: makeDestination(), criteria: makeCriteria(), isFinal: false });
    dialogSubject.next(false);
    expect(mockToggleCriteria).not.toHaveBeenCalled();
  });
});
