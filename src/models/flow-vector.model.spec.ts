import {
  completionCriteriaSchema,
  destinationSchema,
  flowVectorSchema,
  flowVectorsSchema,
} from './flow-vector.model';

const validCriteria = {
  id: 'c1',
  destinationId: 'd1',
  name: 'Review draft',
  completed: false,
};

const validDestination = {
  id: 'd1',
  vectorId: 'v1',
  name: 'Submit draft',
  completed: false,
  completionCriteria: [validCriteria],
};

const validVector = {
  id: 'v1',
  name: 'Work',
  color: '#4287f5',
  icon: '💼',
  destinations: [validDestination],
  finalDestinations: [],
  deleted: false,
};

describe('completionCriteriaSchema', () => {
  it('accepts a valid criteria', () => {
    expect(completionCriteriaSchema.safeParse(validCriteria).success).toBe(true);
  });

  it('rejects when id is missing', () => {
    const { id: _id, ...rest } = validCriteria;
    expect(completionCriteriaSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects when destinationId is missing', () => {
    const { destinationId: _d, ...rest } = validCriteria;
    expect(completionCriteriaSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects when name is missing', () => {
    const { name: _n, ...rest } = validCriteria;
    expect(completionCriteriaSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects when completed is not a boolean', () => {
    expect(completionCriteriaSchema.safeParse({ ...validCriteria, completed: 'yes' }).success).toBe(false);
  });
});

describe('destinationSchema', () => {
  it('accepts a valid destination', () => {
    expect(destinationSchema.safeParse(validDestination).success).toBe(true);
  });

  it('accepts an empty completionCriteria array', () => {
    expect(destinationSchema.safeParse({ ...validDestination, completionCriteria: [] }).success).toBe(true);
  });

  it('rejects when id is missing', () => {
    const { id: _id, ...rest } = validDestination;
    expect(destinationSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects when name is missing', () => {
    const { name: _n, ...rest } = validDestination;
    expect(destinationSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects when completed is not a boolean', () => {
    expect(destinationSchema.safeParse({ ...validDestination, completed: 1 }).success).toBe(false);
  });

  it('rejects when completionCriteria is not an array', () => {
    expect(destinationSchema.safeParse({ ...validDestination, completionCriteria: null }).success).toBe(false);
  });
});

describe('flowVectorSchema', () => {
  it('accepts a valid vector', () => {
    expect(flowVectorSchema.safeParse(validVector).success).toBe(true);
  });

  it('accepts a vector with empty destinations and finalDestinations', () => {
    expect(
      flowVectorSchema.safeParse({ ...validVector, destinations: [], finalDestinations: [] }).success
    ).toBe(true);
  });

  it('rejects when name is missing', () => {
    const { name: _n, ...rest } = validVector;
    expect(flowVectorSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects when deleted field is missing', () => {
    const { deleted: _d, ...rest } = validVector;
    expect(flowVectorSchema.safeParse(rest).success).toBe(false);
  });

  it('rejects when destinations is not an array', () => {
    expect(flowVectorSchema.safeParse({ ...validVector, destinations: null }).success).toBe(false);
  });

  it('rejects when finalDestinations is not an array', () => {
    expect(flowVectorSchema.safeParse({ ...validVector, finalDestinations: null }).success).toBe(false);
  });
});

describe('flowVectorsSchema', () => {
  it('accepts an empty array', () => {
    expect(flowVectorsSchema.safeParse([]).success).toBe(true);
  });

  it('accepts an array of valid vectors', () => {
    expect(flowVectorsSchema.safeParse([validVector]).success).toBe(true);
  });

  it('accepts multiple valid vectors', () => {
    expect(flowVectorsSchema.safeParse([validVector, { ...validVector, id: 'v2' }]).success).toBe(true);
  });

  it('rejects null', () => {
    expect(flowVectorsSchema.safeParse(null).success).toBe(false);
  });

  it('rejects a plain object', () => {
    expect(flowVectorsSchema.safeParse({}).success).toBe(false);
  });

  it('rejects an array containing an invalid vector', () => {
    expect(flowVectorsSchema.safeParse([{ ...validVector, deleted: 'yes' }]).success).toBe(false);
  });
});
