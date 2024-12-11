import { number } from 'prop-types';
import {retornaArreglo} from '../../base-pruebas/07-deses-arr';

describe('pruebas en 07-deses-arr', () => { 
test('debe retornar un string y un numero', () => { 
    const [letters,numbers]=retornaArreglo();
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);
    //console.log(typeof letters);
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
 });
 });