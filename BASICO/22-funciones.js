// Funciones
// Una función es un bloque de código que puedes definir una vez y luego usar (llamar) en diferentes partes de tu programa.


// 1. Función Simple
// Una función simple es como un conjunto de instrucciones que se pueden ejecutar en cualquier momento.
// Aquí definimos la función "myFunc", que solo imprime un mensaje en la consola.

function myFunc() {
    console.log("¡Hola mundo!"); // Imprime "¡Hola, función!" en la consola
}
// Después, usamos un bucle "for" para llamar a esta función 5 veces.
for (let i = 0; i < 5; i++) {
    myFunc(); // Cada vez que pasa por el bucle, ejecuta la función myFunc, entonces en este caso nos dira ¡Hola mundo! cinco veces.
}


// 2. Función con parámetros
// Las funciones pueden recibir **parámetros**, que son valores que le pasas para que los use dentro de la función.
function myFuncWithParams(name) {
    // Aquí, la función recibe un parámetro llamado "name" y lo usa para crear un mensaje personalizado.
    console.log(`¡Hola, ${name}!`); // Imprime el mensaje con el nombre que se pasa
}
// Llamamos a la función con diferentes nombres.
myFuncWithParams("Irene");   // Imprime: ¡Hola, Irene!
myFuncWithParams("Morales"); // Imprime: ¡Hola, Morales!



// 3. Funciones anónimas
// Una función anónima es una función sin nombre. A menudo la asignamos a una variable.
const myFunc2 = function(name) {
    console.log(`¡Hola, ${name}!`); // Hace lo mismo que la función anterior, pero de forma anónima.
}
// Llamamos a la función con el nombre de la variable en donde la hemos metido.
myFunc2("Irene Morales"); // Imprime: ¡Hola, Irene Morales!


// 4. Funciones Flecha (Arrow Functions)
// Las funciones flecha son una forma más corta y moderna de escribir funciones.
const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`); // Imprime el mensaje con el nombre.
}

// Esta es una versión aún más corta de la función anterior.
const myFunc4 = (name) => console.log(`¡Hola, ${name}!`); // Hace lo mismo, pero en una sola línea.

// Llamamos a ambas funciones flecha con un parámetro.
myFunc3("Irene Morales"); // Imprime: ¡Hola, Irene Morales!
myFunc4("Irene Morales"); // Imprime: ¡Hola, Irene Morales!


// 5. Parámetros en funciones
// Las funciones pueden recibir parámetros. Si no le pasas un valor, puede usar un valor por defecto.

function sum(a, b) {
    console.log(a + b); // Suma los dos números 'a' y 'b' y los imprime.
}

sum(5, 10);  // Imprime: 15
sum(5);      // Imprime: NaN (porque 'b' es undefined)
sum();       // Imprime: NaN (porque 'a' y 'b' son undefined)

function defaultSum(a = 0, b = 0) {
    console.log(a + b); // Suma los valores, si no se pasa ningun valor por defecto tanto a como b valen 0.
}

defaultSum();      // Imprime: 0 (0 + 0)
defaultSum(5);     // Imprime: 5 (5 + 0)
defaultSum(5, 10); // Imprime: 15 (5 + 10)
defaultSum(undefined, 5); // Imprime: 5 (0 + 5 porque 'a' tiene un valor por defecto)


// 6. Retorno de valores
// Las funciones también pueden devolver un valor con la palabra clave 'return'.
function mult(a, b) {
    return a * b; // Devuelve el resultado de multiplicar 'a' y 'b'
}

let result = mult(5, 10); // Guarda el resultado de la multiplicación en la variable 'result'
console.log(result);  // Imprime: 50


// 7. Funciones anidadas
// Las funciones pueden estar dentro de otras funciones. La función interna solo puede ser llamada dentro de la función externa.
function extern() {
    console.log("Función externa");

    // Esta es una función interna, solo se puede llamar dentro de la función.
    function intern() {
        console.log("Función interna");
    }

    intern(); // Llama a la función interna
}

extern();  // Imprime: Función externa, y Función interna
// intern(); // Esto daría error porque 'intern' es una funcion que está dentro de otra funcion


// 8. Funciones de orden superior
// Son funciones que pueden recibir otras funciones como parámetros.
function applyFunc(func, param) { //LOS NOMBRES QUE PONEMOS DENTRO DE LOS PARÁMETRO PUEDEN SER LOS QUE QUERAMOS
    func(param); // Llama a la función 'func' que le pasamos y le da un parámetro
}

applyFunc(myFunc4, "función de orden superior"); // le pasamos dos cosas porque arriba en el parametro de la funcion hemos dicho en el parametro que nos tiene que pasar dos cosas, func y param que repito que lo podriamos llamar de la manera que queramos solo le estamos diciendo que va a existir dos cosas.
// Esto imprimiria ¡Hola, función de orden superior! porque myFunc4 al llamarla nos da esto: `¡Hola, ${name}!` y como nombre le hemos pasado función de orden superior.


// 9. forEach
// El método 'forEach' recorre cada elemento de una lista (como un array, set, o map) y ejecuta una función para cada elemento.
let myArray = [1, 2, 3, 4];

// Recorre el array 'myArray' y ejecuta una función para cada elemento.
myArray.forEach(function(value) {
    console.log(value);  // Imprime cada número del array.
});

// También puedes usar funciones flecha para hacerlo más corto.
myArray.forEach((value) => console.log(value)); // Imprime cada número usando una función flecha

// Lo mismo con un Set (conjunto único de valores)
let mySet = new Set([ "Irene", "Morales", "iri", 23, true, "irene@gmail.com"]);

// Recorre el Set y ejecuta una función para cada elemento
mySet.forEach((value) => console.log(value));  // Imprime cada valor en el Set

// Lo mismo con un Map (un conjunto de claves y valores)
let myMap = new Map([
    ["name", "Irene"],
    ["email", "irene@gmail.com"],
    ["age", 23]
]);

// Recorre el Map y ejecuta una función para cada valor
myMap.forEach((value) => console.log(value));  // Imprime cada valor en el Map
