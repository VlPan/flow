import { STORAGE_REGISTRY } from './storage-registry';

describe('STORAGE_REGISTRY', () => {
  it('has exactly two registered keys', () => {
    expect(Object.keys(STORAGE_REGISTRY)).toHaveLength(2);
    expect(Object.keys(STORAGE_REGISTRY)).toEqual(
      expect.arrayContaining(['sidenavExpanded', 'flowVectors'])
    );
  });

  describe('sidenavExpanded', () => {
    it('accepts true', () => {
      expect(STORAGE_REGISTRY.sidenavExpanded.safeParse(true).success).toBe(true);
    });

    it('accepts false', () => {
      expect(STORAGE_REGISTRY.sidenavExpanded.safeParse(false).success).toBe(true);
    });

    it('rejects a string', () => {
      expect(STORAGE_REGISTRY.sidenavExpanded.safeParse('true').success).toBe(false);
    });

    it('rejects a number', () => {
      expect(STORAGE_REGISTRY.sidenavExpanded.safeParse(1).success).toBe(false);
    });

    it('rejects null', () => {
      expect(STORAGE_REGISTRY.sidenavExpanded.safeParse(null).success).toBe(false);
    });
  });

  describe('flowVectors', () => {
    it('accepts an empty array', () => {
      expect(STORAGE_REGISTRY.flowVectors.safeParse([]).success).toBe(true);
    });

    it('rejects null', () => {
      expect(STORAGE_REGISTRY.flowVectors.safeParse(null).success).toBe(false);
    });

    it('rejects a plain object', () => {
      expect(STORAGE_REGISTRY.flowVectors.safeParse({}).success).toBe(false);
    });

    it('rejects an array with an item missing required fields', () => {
      expect(STORAGE_REGISTRY.flowVectors.safeParse([{ id: 'x', name: 'bad' }]).success).toBe(false);
    });
  });
});
