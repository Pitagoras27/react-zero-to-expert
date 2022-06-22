import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09 promise', () => {
  // By default jest is syncronous, done is how await
  test('should return one hero', (done) => {
    const id = 2;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toEqual({
          id: 2,
          name: 'Spiderman',
          owner: 'Marvel'
        });
        // This is a callback after then is ready
        done();
      })

  });

  test('should return an error', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .catch(error => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        // This is a callback after then is ready
        done();
      })

  });
});