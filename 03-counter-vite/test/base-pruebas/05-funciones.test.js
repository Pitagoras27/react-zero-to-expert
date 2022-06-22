import { getUser, getUserActive } from '../../src/base-pruebas/05-funciones';

describe('Test in 05-funciones', () => {
  test('should getUser show object', () => {
    // Arrange
    const user = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    // Act 
    const userFn = getUser();

    // Assert
    // ? Not use toBe because getUser evaluate an Object
    // expect(user).toBe(userFn);
    expect(user).toEqual(userFn);
  });

  test('should getUserActive recibe one argument and show object', () => {
    const name = 'Carlos';

    const activeUser = getUserActive(name);

    expect(activeUser).toEqual( {
      uid: 'ABC567',
      username: name
    });
  });

});