import {getHeroeById} from '../../base-pruebas/08-imp-exp'
import {getHeroesByOwner} from '../../base-pruebas/08-imp-exp'
import heroes from '../../data/heroes';

describe('pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un héroe por ID',()=>{
        const id =12;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toBeFalsy();
    });

    });
//tarea
//Debe de retornar un arreglo con los héroes de DC
//length === 3
//to Equal al arreglo filtrado 

// debe kde retornar un arreglo con los héroes de Marvel 
//length ===2
test(' getHeroesByOwner retornar arreglo con heroes DC', ()=> { 
const owner='DC';
const heroes=getHeroesByOwner(owner);
console.log(heroes);

expect(heroes.length).toBe(3);
expect(heroes).toEqual([
    { id: 1,name: 'Batman',owner: 'DC'},
    {id: 3,name: 'Superman',owner: 'DC'},
    {id: 4,name: 'Flash', owner: 'DC'}
]);
//segunda forma de hacerlo
expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
});

