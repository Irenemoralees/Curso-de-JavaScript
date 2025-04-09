// EJERCICIO 2
const isEven = require ("./33-resultTesting")

test("El número 4 es par", () =>{
    expect(isEven(4)).toBe(true)
})