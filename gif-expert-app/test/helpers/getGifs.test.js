import { getGifs } from '../../src/helpers/getGifs';

describe('Test of helper getGifs', () => {
  const category = "Naruto";

  test('should return and array of gifs', async () => { 
    const gifs = await getGifs(category);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      image: expect.any(String),
      title: expect.any(String),
    })
  })
})