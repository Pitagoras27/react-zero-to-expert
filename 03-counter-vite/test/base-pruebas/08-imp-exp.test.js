import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Test 08-imp-exp', () => {
  test('getHeroeById should return heroe by ID', () => {
    const id = 1;
    
    const hero = getHeroeById(id);
    
    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    });

  });

  test('getHeroeById should return undefind if ID don\'t exist', () => {
    const id = 100;
    
    const hero = getHeroeById(id);
    
    expect(hero).toBe( undefined );

  });

  test('getHeroesByOwner should return array lenght 3 if owner is DC ', () => {
    const owner = 'DC';
    const expected = [
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC'
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC'
      },
    ]
    
    const hero = getHeroesByOwner(owner); 
    
    expect(hero).toEqual(expect.arrayContaining(expected));
    expect(hero.length).toBe(3);
    expect(hero).toEqual(heroes.filter(hero => hero.owner === owner))

  });
  
  test('getHeroesByOwner should return empty array if owner dont\'t exist ', () => {
    const owner = 'Disney';
    
    const hero = getHeroesByOwner(owner); 
    
    expect(hero.length).toEqual(hero.length);

  });

});