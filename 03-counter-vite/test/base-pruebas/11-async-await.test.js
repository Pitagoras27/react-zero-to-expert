import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11 async', () => {
  //node 18 implement fetch API, therefore is not necessary use async function
  test('should log error because api key don\'t exist', async () => {
    const url = await getImagen();
    console.log('url--*>', url);
    expect(typeof url).toBe('string');

  });

});

// verificar la configuracion para utilizar el polifill que permite utilizar API Fetch en node