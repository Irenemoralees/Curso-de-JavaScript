// Loops o bucles
// Un bucle es una forma de decirle a la computadora: "Ejecuta este conjunto de instrucciones varias veces". Es como pedirle a la computadora que repita una tarea sin tener que escribirla una y otra vez.


// Bucle for
// El bucle 'for' es útil cuando sabes cuántas veces quieres que se repita el código.
// Tiene 3 partes:
// 1. Inicialización (se ejecuta una vez antes de empezar)
// 2. Condición (se evalúa antes de cada vuelta del bucle, si es 'true' sigue ejecutando el bucle)
// 3. Actualización (se ejecuta al final de cada vuelta del bucle)

for (let i = 0; i < 5; i++) {
    // 'i' empieza en 0 y se incrementa de 1 en 1 hasta llegar a 5 (el 5 no lo incluye, para eso tendriamos que poner i =< 5 o i < 6)
    console.log(`Hola ${i}`) // Imprime Hola 0, Hola 1, Hola 2, Hola 3, Hola 4
}

// Array de números para otro ejemplo
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// Aquí usamos el bucle 'for' para recorrer el array 'numbers'
// 'numbers.length' nos da el tamaño del array, en este caso 8.
// Cada vez que pasa por el bucle, 'i' nos da el índice del array y 'numbers[i]' es el valor en ese índice.

for (let i = 0; i < numbers.length; i++) {
    // 'numbers[i]' obtiene el valor en la posición 'i' del array
    console.log(`Elemento: ${numbers[i]}`) // Imprime el valor en esa posición del array que es 8
}

// Bucle while
// El bucle 'while' ejecuta el código mientras que la condición sea 'true'.
// En este caso, comenzamos con i = 0, y mientras i sea menor que 5, el código sigue repitiéndose.

let i = 0
while (i < 5) {
    // Imprime el valor de 'i' mientras sea menor que 5
    console.log(`Hola ${i}`)
    // Al final de cada vuelta, 'i' se incrementa en 1.
    i++
}

// Bucle infinito (comentado para no causar un bucle eterno)
// Si escribimos 'while(true)', siempre se ejecutaría porque 'true' siempre es verdadero.
// Este tipo de bucle nunca se detiene sin una instrucción para salir, como 'break'.

//NO HACER ESTO SI NO QUEREMOS QUE SE ROMPA NUESTRA WEB
// while(true) {
//     console.log('Esto nunca se detendría')
// }




// Bucle do while
// El bucle 'do while' siempre ejecuta el bloque de código al menos una vez, sin importar si la condición es 'true' o 'false'.
// Primero ejecuta el código, y luego verifica la condición.

i = 6
do {
    // Este mensaje se imprimirá al menos una vez, incluso si la condición es falsa
    console.log(`Hola ${i}`)
    // Al igual que en los otros bucles, se incrementa 'i' después de cada vuelta
    i++
} while (i < 5) // La condición se evalúa después de la primera ejecución, por lo que el bucle termina



// Bucle for of
// 'for of' es una manera más fácil de recorrer colecciones de datos como arrays, sets, maps, o incluso cadenas de texto.

myArray = [1, 2, 3, 4] // Un array de números
mySet = new Set(["Irene", "Morales", "iri", 23, true, "irene@gmail.com"]) // Un Set con diferentes tipos de datos
myMap = new Map([
    ["name", "Irene"],
    ["email", "irene@gmail.com"],
    ["age", 23]
]) // Un Map que guarda  clave-valor
myString = "¡Hola, JavaScript!" // Un string

// 'for of' recorre cada valor en un array o colección y lo imprime
for (let value of myArray) {
    console.log(value) // Imprime cada número en el array
}

// Recorriendo un Set con 'for of'
// Un Set no permite duplicados, por lo que imprimirá solo los valores únicos
for (let value of mySet) {
    console.log(value) // Imprime cada valor único en el Set
}

// Recorriendo un Map con 'for of'
// Un Map guarda pares clave-valor, y el bucle imprimirá cada par como un array de 2 elementos: [clave, valor]
for (let value of myMap) {
    console.log(value) // Imprime cada  clave-valor en el Map
}

// Recorriendo un string con 'for of'
// 'for of' también puede recorrer cada letra en una cadena de texto
for (let value of myString) {
    console.log(value) // Imprime cada carácter del string
}

// break y continue
// 'continue' hace que el bucle salte a la siguiente iteración sin ejecutar el código restante para esa vuelta.
// 'break' termina el bucle por completo y sale del ciclo.
for (let i = 0; i < 10; i++) {
    
    if (i == 5) { // Si 'i' es igual a 5
        continue // continua sin contar el 5, entonces contaria 0,1, 2, 3, 4 ,6 ,7, 8, 9
    } 
    
    else if (i == 7) {// Si 'i' es igual a 7
        break // no sigue mas, entonces cuando este contando 0,1,2,3,4,5,6 y cuando llegue al 7 se queda ahi, ni el 7 ni los demas numeros los cuenta
    }
    // Si 'i' no es ni 5 ni 7, imprime el valor de 'i'
    console.log(i)
}
