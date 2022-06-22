import { returnVector } from '../../src/base-pruebas/07-deses-arr';

describe('Test in 07 return vector', () => {
  test('should string in first position and number in second', () => {
    // Act 
    const [letters, numbers] = returnVector();
    // Assert
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    // If first position is a random string
    // use toStrictEqual or toEqual, is the same
    expect(letters).toStrictEqual( expect.any(String))
  });
});