import { getUser } from "../../base-pruebas/05-funciones";
import {getUsuarioActivo} from "../../base-pruebas/05-funciones";

describe('pruebas en 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => { 
        const testUser={
            uid: 'ABC123',
            username: 'El_Papi1502'  
        };
        const user = getUser();
        expect( testUser ).toEqual(user);
     });
});
//para comparar objetos se usa toStrictEqual o toEqual

test('getUsuarioActivo debe retornar un objeto', () => { 
const name ="vanessa";
const user=getUsuarioActivo(name);
expect( user ).toEqual({
    uid: 'ABC567',
    username: name
});
 });
 