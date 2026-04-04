import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { vi } from 'vitest';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { FlowVectorForm } from './flow-vector-form';
import { Destination, FlowVector } from '../../models/flow-vector.model';

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

function setup(data: FlowVector | null) {
  const mockClose = vi.fn();
  TestBed.configureTestingModule({
    imports: [FlowVectorForm],
    providers: [
      provideNoopAnimations(),
      { provide: MAT_DIALOG_DATA, useValue: data },
      { provide: MatDialogRef, useValue: { close: mockClose } },
    ],
  });
  const fixture: ComponentFixture<FlowVectorForm> = TestBed.createComponent(FlowVectorForm);
  // Cast to any to access protected form properties in tests
  const component = fixture.componentInstance as any;
  return { fixture, component, mockClose };
}

describe('FlowVectorForm', () => {
  afterEach(() => TestBed.resetTestingModule());

  describe('create mode (data = null)', () => {
    it('isEditMode is false', () => {
      const { component } = setup(null);
      expect(component.isEditMode).toBe(false);
    });

    it('name control starts empty', () => {
      const { component } = setup(null);
      expect(component.form.get('name').value).toBe('');
    });

    it('color defaults to #9E9E9E', () => {
      const { component } = setup(null);
      expect(component.form.get('color').value).toBe('#9E9E9E');
    });

    it('destinations FormArray starts empty', () => {
      const { component } = setup(null);
      expect(component.destinations.length).toBe(0);
    });

    it('finalDestinations FormArray starts empty', () => {
      const { component } = setup(null);
      expect(component.finalDestinations.length).toBe(0);
    });

    it('save() does nothing when name is empty (form invalid)', () => {
      const { component, mockClose } = setup(null);
      component.save();
      expect(mockClose).not.toHaveBeenCalled();
    });
  });

  describe('edit mode (data = FlowVector)', () => {
    it('isEditMode is true', () => {
      const { component } = setup(makeVector());
      expect(component.isEditMode).toBe(true);
    });

    it('name control is pre-populated from data', () => {
      const { component } = setup(makeVector({ name: 'Reading' }));
      expect(component.form.get('name').value).toBe('Reading');
    });

    it('color control is pre-populated from data', () => {
      const { component } = setup(makeVector({ color: '#abc123' }));
      expect(component.form.get('color').value).toBe('#abc123');
    });

    it('icon control is pre-populated from data', () => {
      const { component } = setup(makeVector({ icon: '📚' }));
      expect(component.form.get('icon').value).toBe('📚');
    });

    it('destinations FormArray is pre-populated from data', () => {
      const dest = makeDestination({ name: 'Finish draft' });
      const { component } = setup(makeVector({ destinations: [dest] }));
      expect(component.destinations.length).toBe(1);
      expect(component.destinations.at(0).get('name').value).toBe('Finish draft');
    });

    it('criteria within destinations are pre-populated', () => {
      const criteria = { id: 'c1', destinationId: 'd1', name: 'Review', completed: false };
      const dest = makeDestination({ completionCriteria: [criteria] });
      const { component } = setup(makeVector({ destinations: [dest] }));
      const destGroup = component.destinations.at(0);
      expect(component.getCriterias(destGroup).length).toBe(1);
      expect(component.getCriterias(destGroup).at(0).get('name').value).toBe('Review');
    });
  });

  describe('save()', () => {
    it('closes the dialog with the form result when valid', () => {
      const { component, mockClose } = setup(null);
      component.form.patchValue({ name: 'Study', icon: '📚', color: '#ff0000' });
      component.save();
      expect(mockClose).toHaveBeenCalledWith(expect.objectContaining({ name: 'Study' }));
    });

    it('applies DEFAULT_ICON (⚡) when icon is empty', () => {
      const { component, mockClose } = setup(null);
      component.form.patchValue({ name: 'Study', icon: '', color: '#ff0000' });
      component.save();
      expect(mockClose).toHaveBeenCalledWith(expect.objectContaining({ icon: '⚡' }));
    });

    it('applies DEFAULT_COLOR (#9E9E9E) when color is empty', () => {
      const { component, mockClose } = setup(null);
      component.form.patchValue({ name: 'Study', icon: '📚', color: '' });
      component.save();
      expect(mockClose).toHaveBeenCalledWith(expect.objectContaining({ color: '#9E9E9E' }));
    });

    it('strips null id from new destinations', () => {
      const { component, mockClose } = setup(null);
      component.form.patchValue({ name: 'Study' });
      component.addDestination(component.destinations);
      component.destinations.at(0).patchValue({ name: 'Draft', id: null });
      component.save();
      const result = mockClose.mock.calls[0][0];
      expect(result.destinations[0]).not.toHaveProperty('id');
    });

    it('strips null id from new criteria', () => {
      const { component, mockClose } = setup(null);
      component.form.patchValue({ name: 'Study' });
      component.addDestination(component.destinations);
      const destGroup = component.destinations.at(0);
      destGroup.patchValue({ name: 'Draft' });
      component.addCriteria(destGroup);
      component.getCriterias(destGroup).at(0).patchValue({ name: 'Review', id: null });
      component.save();
      const result = mockClose.mock.calls[0][0];
      expect(result.destinations[0].completionCriteria[0]).not.toHaveProperty('id');
    });

    it('preserves existing id on destinations', () => {
      const dest = makeDestination({ id: 'd1', name: 'Draft' });
      const { component, mockClose } = setup(makeVector({ destinations: [dest] }));
      component.save();
      const result = mockClose.mock.calls[0][0];
      expect(result.destinations[0].id).toBe('d1');
    });

    it('preserves completed state of destinations on save', () => {
      const dest = makeDestination({ id: 'd1', name: 'Draft', completed: true });
      const { component, mockClose } = setup(makeVector({ destinations: [dest] }));
      component.save();
      const result = mockClose.mock.calls[0][0];
      expect(result.destinations[0].completed).toBe(true);
    });

    it('preserves completed state of criteria on save', () => {
      const criteria = { id: 'c1', destinationId: 'd1', name: 'Review', completed: true };
      const dest = makeDestination({ completionCriteria: [criteria] });
      const { component, mockClose } = setup(makeVector({ destinations: [dest] }));
      component.save();
      const result = mockClose.mock.calls[0][0];
      expect(result.destinations[0].completionCriteria[0].completed).toBe(true);
    });
  });

  describe('form array manipulation', () => {
    it('addDestination appends a new destination group', () => {
      const { component } = setup(null);
      component.addDestination(component.destinations);
      expect(component.destinations.length).toBe(1);
    });

    it('removeDestination removes the group at the given index', () => {
      const { component } = setup(null);
      component.addDestination(component.destinations);
      component.removeDestination(component.destinations, 0);
      expect(component.destinations.length).toBe(0);
    });

    it('addCriteria appends a new criteria to the destination group', () => {
      const { component } = setup(null);
      component.addDestination(component.destinations);
      const destGroup = component.destinations.at(0);
      component.addCriteria(destGroup);
      expect(component.getCriterias(destGroup).length).toBe(1);
    });

    it('removeCriteria removes the criteria at the given index', () => {
      const { component } = setup(null);
      component.addDestination(component.destinations);
      const destGroup = component.destinations.at(0);
      component.addCriteria(destGroup);
      component.removeCriteria(destGroup, 0);
      expect(component.getCriterias(destGroup).length).toBe(0);
    });
  });

  describe('onColorChange()', () => {
    it('updates the color form control with the selected hex value', () => {
      const { component } = setup(null);
      component.onColorChange({ color: { hex: '#123456' } });
      expect(component.form.get('color').value).toBe('#123456');
    });
  });
});
