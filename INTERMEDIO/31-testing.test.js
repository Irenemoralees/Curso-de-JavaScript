const sum = require('./30-testing')  // Importamos la función para poder usarla

// Acá empiezan las pruebas con Jest.
// Usamos la función "test" para definir cada prueba.

// PRIMERA PRUEBA
// Queremos comprobar que la suma de 3 + 5 sea igual a 8
test("Suma de 3 + 5 tiene que ser 8", () => {
    // Llamamos a la función sum con 3 y 5, y esperamos que el resultado sea 8
    expect(sum(3, 5)).toBe(8);
    // Si da 8, la prueba pasa. Si da otro número, la prueba falla.
});


// SEGUNDA PRUEBA
// Esta prueba tiene un pequeño error a propósito.
// Dice que quiere probar 3 + 3, pero en realidad está sumando 3 + 4
test("Suma de 3 + 3 tiene que ser 6", () => {
    // sum(3, 4) da 7, pero estamos esperando que dé 6 → esto va a fallar
    expect(sum(3, 4)).toBe(6);
    // Para que pase, deberíamos usar sum(3, 3) o esperar 7 como resultado
});
