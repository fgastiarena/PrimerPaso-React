describe('Pruebas en el archivo demo.test.js', () => {

    test('deben de ser iguales los string', () => {

        //1. Inicialización
        const mensaje = 'Hola Mundo';

        //2. Estímulo
        const mensaje2 = `Hola Mundo`;

        //3. Observamos el Comportamiento
        expect(mensaje).toBe(mensaje2); // ===

    })

});