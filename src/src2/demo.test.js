describe('pruebas en <DemoComponente/>', () =>{
    test('Esta prueba no debe fallar',() =>{
    
        //1.inicializacion
        const message1 ='hola mundo';
        
        //2. estimulo
        const message2 = message1.trim();
     
        //3. obseervar el comportamiento.. esperado
         expect(message1).toBe(message2);
     });
})


