import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { FlowVectorsService } from './flow-vectors.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { CompletionCriteria, Destination, FlowVector } from '../../models/flow-vector.model';

function makeVector(overrides: Partial<FlowVector> = {}): FlowVector {
  return {
    id: 'test-id',
    name: 'Work',
    color: '#4287f5',
    icon: '💼',
    destinations: [],
    finalDestinations: [],
    deleted: false,
    ...overrides,
  };
}

function setup(stored: FlowVector[] | null = null) {
  const mockGet = vi.fn().mockReturnValue(stored);
  const mockSet = vi.fn();

  TestBed.configureTestingModule({
    providers: [
      FlowVectorsService,
      {
        provide: LocalStorageService,
        useValue: { get: mockGet, set: mockSet, remove: vi.fn() },
      },
    ],
  });

  const service = TestBed.inject(FlowVectorsService);
  return { service, mockGet, mockSet };
}

describe('FlowVectorsService', () => {
  afterEach(() => TestBed.resetTestingModule());

  // --- Behavior 1: empty when nothing stored ---
  it('vectors is empty when nothing is stored', () => {
    const { service } = setup(null);
    expect(service.vectors()).toEqual([]);
  });

  // --- Behavior 2: create adds vector to vectors ---
  it('create() makes a new vector appear in vectors', () => {
    const { service } = setup(null);
    service.create({ name: 'Work', color: '#ff0000', icon: '💼', destinations: [], finalDestinations: [] });
    expect(service.vectors()).toHaveLength(1);
    expect(service.vectors()[0].name).toBe('Work');
  });

  // --- Behavior 3: create applies default color ---
  it('create() applies default color when color is empty', () => {
    const { service } = setup(null);
    service.create({ name: 'Work', color: '', icon: '💼', destinations: [], finalDestinations: [] });
    expect(service.vectors()[0].color).toBe('#9E9E9E');
  });

  // --- Behavior 4: create applies default icon ---
  it('create() applies default icon when icon is empty', () => {
    const { service } = setup(null);
    service.create({ name: 'Work', color: '#ff0000', icon: '', destinations: [], finalDestinations: [] });
    expect(service.vectors()[0].icon).toBe('⚡');
  });

  // --- Behavior 5: create persists to localStorage ---
  it('create() persists vectors to localStorage', () => {
    const { service, mockSet } = setup(null);
    service.create({ name: 'Work', color: '#ff0000', icon: '💼', destinations: [], finalDestinations: [] });
    expect(mockSet).toHaveBeenCalledWith('flowVectors', expect.arrayContaining([
      expect.objectContaining({ name: 'Work' }),
    ]));
  });

  // --- Behavior 6: loads existing vectors from storage on init ---
  it('vectors loads existing data from localStorage on init', () => {
    const stored = [makeVector({ name: 'Learning' })];
    const { service } = setup(stored);
    expect(service.vectors()).toHaveLength(1);
    expect(service.vectors()[0].name).toBe('Learning');
  });

  // --- Behavior 7: softDelete removes vector from vectors ---
  it('softDelete() removes vector from vectors signal', () => {
    const stored = [makeVector({ id: 'abc' })];
    const { service } = setup(stored);
    service.softDelete('abc');
    expect(service.vectors()).toHaveLength(0);
  });

  // --- Behavior 8: softDelete persists to localStorage ---
  it('softDelete() persists to localStorage', () => {
    const stored = [makeVector({ id: 'abc' })];
    const { service, mockSet } = setup(stored);
    service.softDelete('abc');
    expect(mockSet).toHaveBeenCalledWith('flowVectors', expect.arrayContaining([
      expect.objectContaining({ id: 'abc', deleted: true }),
    ]));
  });

  // --- Behavior 9: update changes are reflected in vectors ---
  it('update() reflects changes in vectors', () => {
    const stored = [makeVector({ id: 'abc', name: 'Old Name' })];
    const { service } = setup(stored);
    service.update('abc', { name: 'New Name' });
    expect(service.vectors()[0].name).toBe('New Name');
  });

  // --- Behavior 10: toggleDestinationComplete flips completed ---
  it('toggleDestinationComplete() flips destination completed state', () => {
    const dest: Destination = { id: 'd1', vectorId: 'abc', name: 'Draft', completed: false, completionCriteria: [] };
    const stored = [makeVector({ id: 'abc', destinations: [dest] })];
    const { service } = setup(stored);
    service.toggleDestinationComplete('abc', 'd1', false);
    expect(service.vectors()[0].destinations[0].completed).toBe(true);
  });

  // --- Behavior 11: toggleCriteriaComplete flips completed ---
  it('toggleCriteriaComplete() flips criteria completed state', () => {
    const criteria: CompletionCriteria = { id: 'c1', destinationId: 'd1', name: 'Review', completed: false };
    const dest: Destination = { id: 'd1', vectorId: 'abc', name: 'Draft', completed: false, completionCriteria: [criteria] };
    const stored = [makeVector({ id: 'abc', destinations: [dest] })];
    const { service } = setup(stored);
    service.toggleCriteriaComplete('abc', 'd1', 'c1', false);
    expect(service.vectors()[0].destinations[0].completionCriteria[0].completed).toBe(true);
  });

});
