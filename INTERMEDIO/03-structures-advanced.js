// Estructuras avanzadas

// Arrays avanzados

//  METODOS FUNCIONALES

// - forEach: Recorre un array y ejecuta una función por cada elemento.
// En este caso, imprimimos cada número en la consola.
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(element => console.log(element));

// - map: Crea un nuevo array aplicando una función a cada elemento del original.
// Aquí multiplicamos cada número por 2.
let doubled = numbers.map(element => element * 2);
console.log(doubled);

// - filter: Filtra los elementos de un array que cumplen una condición.
// Aquí seleccionamos solo los números pares.
let evens = numbers.filter(element => element % 2 === 0);
console.log(evens);

// - reduce: Reduce los elementos del array a un solo valor, acumulando resultados.
// En este caso, sumamos todos los números.
let sum = numbers.reduce((result, current) => result + current, 0);
console.log(sum);
/* result (también llamado acumulador) es el valor acumulado en cada iteración.
    current es el valor actual del array que se está procesando en la iteración.
     0 es el valor inicial de result. (opcional)
Explicación paso a paso:
Si numbers = [1, 2, 3, 4, 5, 6], el método reduce funciona así:

Primera iteración:
result = 0 (valor inicial)
current = 1 (primer número del array)
result + current = 0 + 1 = 1

Segunda iteración:
result = 1 (resultado anterior)
current = 2
result + current = 1 + 2 = 3

Tercera iteración:
result = 3
current = 3
result + current = 3 + 3 = 6

Y asin hasta hacerlo con todos los números
*/

//  MANIPULACION DE ARRAYS

// - flat: Aplana un array con subarrays hasta la profundidad especificada.
// Imagina que tienes una lista de categorías en un sitio web y cada categoría tiene subcategorías dentro de ella:
let categorias = [
    "Tecnología",
    ["Móviles", ["Android", "iPhone"]],
    ["Computadoras", ["Laptops", "Desktops"]]
];
console.log(categorias.flat(1));
console.log(categorias.flat(2));
/* Aquí, flat(2) nos permite obtener una lista plana sin necesidad de recorrer los subarrays con for o map, haciendo que los datos sean más fáciles de usar.

💡 Cuándo usar flat
1 Cuando recibimos datos anidados y queremos simplificarlos.
2 Cuando importamos datos de una API que devuelve información en varios niveles.
3 Cuando necesitamos operar sobre todos los elementos sin preocuparnos de los subarrays. */

// - flatMap: Aplica una función y aplana el array resultante en un solo nivel.
// Aquí dividimos frases en palabras.
/* split() es un método que divide una cadena de texto en un array de subcadenas, usando un delimitador que determines, en este caso es el espacio.
Es muy útil cuando necesitas procesar o manipular cadenas de texto de manera más específica, separando las palabras o fragmentos de acuerdo con ciertos patrones. */
let phrases = ["Hola mundo", "Adiós mundo"];
let words = phrases.flatMap(phrase => phrase.split(" "));
console.log(words);

// ORDENACION DE ARRAYS

// - sort: Ordena un array alfabéticamente o numéricamente con una función de comparación.
let unsorted = ["b", "a", "d", "c"];
let sorted = unsorted.sort();
console.log(sorted);

/* El sort() en JavaScript ordena los elementos como si fueran cadenas de texto por defecto, lo que puede llevar a un orden incorrecto si estamos trabajando con números.
Para ordenar correctamente los números, es necesario proporcionar una función de comparación que defina cómo se deben ordenar los números, ya sea de menor a mayor (a - b) o de mayor a menor (b - a). */
unsorted = [3, 4, 1, 6, 10];
sorted = unsorted.sort((a, b) => a - b); // Orden ascendente
console.log(sorted);

//-  reverse: Invierte el orden de los elementos del array.
sorted.reverse();
console.log(sorted);

// BUSQUEDA EN ARRAYS

// - includes: Verifica si un array contiene un elemento.
console.log(sorted.includes(4)); // true
console.log(sorted.includes(5)); // false

// - find: Devuelve el primer elemento que cumple una condición.
let firstEven = sorted.find(element => element % 2 === 0);
console.log(firstEven);

// - findIndex: Devuelve el índice del primer elemento que cumple una condición.
let firstEvenIndex = sorted.findIndex(element => element % 2 === 0);
console.log(firstEvenIndex);


// Sets avanzados

// OPERACIONES CON SETS

// - Eliminación de duplicados con Set
let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6];
numbersArray = [...new Set(numbersArray)];
console.log(numbersArray);

// - Unión de conjuntos (combinamos elementos de ambos sets)
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union);

// - Intersección de conjuntos (elementos en común entre ambos sets)
const intersection = new Set([...setA].filter(element => setB.has(element)));
console.log(intersection);

// - Diferencia de conjuntos (elementos en setA que no están en setB)
const difference = new Set([...setA].filter(element => !setB.has(element)));
console.log(difference);

// CONVERSION ENTRE ESTRUCTURAS

// - Convertir Set a Array
console.log([...setA]);


// ITERACION SOBRE UN SET
// - forEach en un Set
setA.forEach(element => console.log(element));

// SI QUISIERAMOS QUE LOS SETS HICIERAN OTRAS FUNCIONALIDADES COMO LOS QUE TIENE LOS ARRAYS, TENDRIAMOS QUE HACERLO DE LA MISMA MANERA QUE LO HEMOS ESTADO REALIZANDO, CONVIRTIENDOLOS EN ARRAYS


// Maps avanzados

// ITERACION SOBRE UN MAP

let myMap = new Map([
    ["name", "Irene"],
    ["age", 23]
]);

// - forEach en un Map: Recorremos clave y valor
/*
En los Map, el método forEach recibe los parámetros en el orden (valor, clave), a diferencia de los objetos normales en los que usamos (clave, valor).

Esto se debe a que Map está diseñado para almacenar claves y valores de manera ordenada y eficiente, permitiendo cualquier tipo de dato como clave (no solo strings como en los objetos). Al recorrerlo, el método forEach prioriza el valor antes que la clave porque el propósito principal de un Map es trabajar con pares clave-valor, y en muchas operaciones el valor es lo más relevante.
*/
myMap.forEach((value, key) => console.log(`${key}: ${value}`));

// CONVERSION ENTRE ESTRUCTURAS

// - Convertir un Map a un Array
const arrayFromMap = Array.from(myMap);
console.log(arrayFromMap);

// - Convertir un Map a un Objeto
const objectFromMap = Object.fromEntries(myMap);
console.log(objectFromMap);

// - Convertir un Objeto a un Map
const mapFromObject = new Map(Object.entries(objectFromMap));
console.log(mapFromObject);