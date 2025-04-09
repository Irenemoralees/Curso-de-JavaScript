// EJERCICIO 1
let animals = ["hormiga", "ballena", "serpiente", "camaleón", "pantera"]
console.log(animals)



// EJERCICIO 2
animals.push("oso")
animals.unshift ("lechuza")
console.log(animals)



// EJERCICIO 3
animals.splice(2,1)
console.log(animals)



// EJERCICIO 4
let libros = new Set(["Filosofía en la calle", "El libro tibetano de la vida y la muerte", "Ética para desconfiados", "El viaje al centro de la tierra", "El monje que vendio su ferrari"])
console.log(libros)



// EJERCICIO 5
libros.add("Alter Cantabria")
libros.add("El viaje al centro de la tierra")
console.log(libros)



// EJERCICIO 6
libros.delete("Ética para desconfiados")
console.log(libros)



// EJERCICIO 7
let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(meses)



// EJERCICIO 8
console.log(meses.has(5))
console.log(meses.get(5))



// EJERCICIO 9
meses.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(meses)



// EJERCICIO 10
let colors = ["rojo", "amarillo", "turquesa", "verde", "lila"]
let setColors = new Set(colors)
let mapColors = new Map(Array.from(setColors, (index, color) => [index, color]));
console.log(mapColors)
/*
Explicación:
Array.from(setColors, (color, index) => [index, color]):

Array.from(): Convierte un Set en un array.
El segundo argumento de Array.from() es una función de transformación que toma dos parámetros: el valor del Set y el índice (que sirve como la clave para el Map).
Esta función devuelve un array de clave-valor, donde la clave es el índice del color y el valor es el color mismo.
new Map(): Crea un Map a partir del array de pares clave-valor.
*/