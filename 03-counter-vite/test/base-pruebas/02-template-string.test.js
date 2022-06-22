import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02 template-string', () => {
  test('should getSaludo show string log', () => {
    // Arrange
    const name = 'Francisco';
    // Act 
    const getGreeting = getSaludo(name);
    // Assert
    // ? toBe evaluates a primitive type
    expect(getGreeting).toBe(`Hello ${name}`);
  });
});