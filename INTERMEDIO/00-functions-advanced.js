// FUNCIONES DE FORMA AVANZADA

/*
CIUDADANOS DE PRIMERA CLASE
En JavaScript, cuando decimos que las funciones son "ciudadanos de primera clase", significa que las funciones son tratadas como cualquier otra cosa en el lenguaje. Esto quiere decir que puedes hacer con ellas las mismas cosas que harías con otros tipos de datos (como números o cadenas de texto).
Por ejemplo:
1.Guardar funciones en variables: Puedes guardar una función en una variable, como si fuera un valor normal.
*/
const greet = function (name) {
    console.log(`Hola, ${name}`)
}
greet("Irene")


//2.Pasar funciones a otras funciones: Puedes pasar una función como argumento a otra función.
function processGreeting(greetFunction, name) {
    greetFunction(name)
}
processGreeting(greet, "Sara")


//3.Devolver funciones desde otras funciones: Puedes hacer que una función devuelva otra función.
function returnGreeting() {
    return greet
}

const greet2 = returnGreeting()
greet2("Irene Morales")

/*
Así que, en resumen, cuando decimos que las funciones son "ciudadanos de primera clase" en JavaScript, significa que puedes usarlas como valores normales, pasarlas por todos lados...
*/


// ARROW FUNCTIONS AVANZADA
/* - Retorno implícito:
Es una característica que permite devolver un valor sin necesidad de escribir la palabra clave return,  se devuelve de manera implícita al ser la única expresión dentro de la función.
*/
const multiply = (a, b) => a * b
console.log(multiply(2, 5))


/* - this léxico
this es una palabra clave que hace referencia al objeto en el que estamos trabajando en ese momento.
Por ejemplo, si tienes un objeto con una función, this se refiere al objeto dentro de esa función.
Funciones normales (tradicionales):
Cuando usamos una función normal, this depende de cómo llamamos a la función.
En las arrow functions tienen un comportamiento especial con this: NO cambian el valor de this. Siempre heredan el valor de this del lugar donde fueron creadas, no del lugar donde las llama, asin que CUIDADO, NO UTILIZAR EN OBJETOS NI EN CLASES CUANDO TENGAMOS QUE UTILIZAR EL THIS.
*/
const handler = {
    name: "Irene",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}


handler.greeting() // Nos devuelve Hola, Irene
handler.arrowGreeting();// Nos devuelve undefined


/* -IIFE (Expresión de Función Invocada Inmediatamente) 
Una IIFE es una función que se ejecuta en el mismo momento que se define.
Sirve para aislar tu código y evitar que las variables afecten otras partes del programa.
¿Por qué es útil?
Evita conflictos: Si tienes muchas variables y funciones, usando IIFE puedes asegurarte de que no choquen entre ellas.
Mantiene todo ordenado: Toda la lógica de la IIFE está encapsulada, lo que hace que el código sea más fácil de manejar.
*/

// PARA QUE NO NOS DE ERROR TENEMOS QUE METERLE A LO ÚLTIMO DE ARRIBA UN ; (handler.arrowGreeting();) SI NO NOS DARA UN ERROR YA QUE LA FUNCIÓN SE CREERA QUE LO DE ARRIBA VA CON ELLA
(function () {
    console.log("IIFE clásico")
})(); // IGUAL EN ESTA SITUACION TENDREMOS QUE METER UN ; SI NO LA SIGUIENTE FUNCIÓN NOS DA ERROR.

(() => {
    console.log("IIFE con arrow function")
})();


/*
//- Parámetros Rest (...)
Los parámetros rest (...) en JavaScript te permiten agrupar varios valores en un solo array, solo al poner ...numbers en este ejemplo te esta creando un array. Es útil cuando no sabes cuántos parámetros vas a recibir en una función.
*/
function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(30, 40))


//- Operador Spread (...)
// Es útil para no escribir todos los números o su índice si no que hace una copia de la constante numbers y te coge los tres primeros números, si tienes más de tres números en este caso no importa porque seguira cogiendo los tres números primeros pero si tienes menos de tres no te los suma porque tiene que tener tres parámetros.
const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread


/* - Las clausuras (Closures) 
 Una clausura es una función que "recuerda" el entorno en el que fue creada,
 incluso después de que ese entorno haya dejado de existir. Esto significa que
 una clausura puede acceder a las variables de su entorno, aunque la función
 externa haya terminado de ejecutarse.
*/
function createCounter() {
    // Aquí se define una variable 'counter' que será privada dentro de la función
    let counter = 0;

    // Se retorna una función anónima (sin nombre) que incrementa 'counter' cada vez que se llama
    return function () {
        // Cada vez que se llama esta función, incrementa el valor de 'counter' en 1
        counter++;
        // Muestra el valor actualizado de 'counter'
        console.log(`Contador: ${counter}`);
    };
}

// Llamamos a createCounter(), que nos retorna la función para manejar el contador
const counter = createCounter();

// Llamamos a la función retornada y se incrementa el contador
counter(); // Contador: 1
counter(); // Contador: 2
counter(); // Contador: 3
counter(); // Contador: 4

// Cada vez que se llama a 'counter()', la variable 'counter' se mantiene actualizada,
// debido a que la función "recuerda" el entorno donde fue creada.
/*
Aquí te doy algunos puntos clave para identificar una clausura:

1. Una función dentro de otra:
Si ves una función dentro de otra (función anidada), es un buen indicio de que podría ser una clausura.
2. Acceso a variables externas:
La función interna debe tener acceso a las variables de la función externa, incluso después de que la función externa haya finalizado su ejecución.
3. La función interna se retorna o se guarda fuera de la función externa:
Si la función interna se retorna o se asigna a una variable fuera de la función que la contiene, ¡es casi seguro que es una clausura!

*/


// - Recursividad
/* La recursividad es cuando una función se llama a sí misma para resolver un problema. En vez de resolver todo de una vez, la función se divide en pasos más pequeños, y cada vez se llama a sí misma con un caso más sencillo, hasta que llega a un caso base, donde ya no necesita llamarse más.
*/

function factorial(n) {
    // Caso base: Si n es 1 o menos, devolvemos 1 (ya no hacemos más cálculos)
    if (n <= 1) {
        return 1;
    }

    // Si n es mayor que 1, multiplicamos n por el resultado de factorial(n - 1)
    return n * factorial(n - 1);
}
console.log(factorial(6))


/* - Funciones parciales
Las funciones parciales son funciones que te permiten "prellenar" o fijar algunos de los parámetros de una función general, lo que te deja con una nueva función que solo necesita los parámetros que faltan.
*/
// Esta es la función que vamos a usar para crear una "función parcial".
function partialSum(a) {
    // La función que retorna acepta dos parámetros (b, c) y usa 'a' que ya está fijado
    return function (b, c) {
        // La función interna devuelve la suma de 'a', 'b' y 'c', esta función esta mas arriba creada
        return sum(a, b, c);
    };
}

// Ahora, creamos una nueva función "sumWith" usando partialSum con el primer número fijo en 4.
const sumWith = partialSum(4);

// Llamamos a sumWith pasando los dos parámetros restantes (2, 3).
console.log(sumWith(2, 3));  // Esto devuelve 4 + 2 + 3 = 9

// Llamamos a sumWith nuevamente con otros dos números (1, 2).
console.log(sumWith(1, 2));  // Esto devuelve 4 + 1 + 2 = 7


/* - Currying:
Significa que una función con múltiples parámetros puede ser transformada en una serie de funciones, cada una aceptando un solo parámetro. Es decir, una función que originalmente toma varios parámetros se divide en una cadena de funciones que aceptan un argumento cada una.
*/

// La función currySum crea una cadena de funciones que toman un solo parámetro cada una.
// La función final calcula la suma de todos los valores.
function currySum(a) {
    // Retorna una función que toma 'b'
    return function(b) {
        // Retorna una función que toma 'c'
        return function(c) {
            // Retorna una función que toma 'd'
            return function(d) {
                // Aquí se realiza la suma de todos los valores: a + b + c + d
                return sum(a, b, c, d);
            }
        }
    }
}

// Usamos currySum para crear una "función parcial" que tiene 'a' = 1 y 'b' = 2 predefinidos.
const sumAB = currySum(1)(2);  // Esto devuelve una función que espera 'c' y 'd'

// Ahora, 'sumAB' está configurada con 1 y 2. Pasamos 3 como 'c' y la función devuelve otra función esperando 'd'.
const sumC = sumAB(3);  // 'sumC' ya tiene a=1, b=2 con la función de sumAB y c=3 que se lo hemos pasado por parámetro y ahora esperamos 'd'

// Ahora 'sumC' es una función que espera el valor de 'd' y calculará la suma de (1 + 2 + 3 + d)
console.log(sumC(3));  // Llamamos con 'd' = 3, lo que da 1 + 2 + 3 + 3 = 9
console.log(sumC(4));  // Llamamos con 'd' = 4, lo que da 1 + 2 + 3 + 4 = 10

// También puedes llamar directamente a la cadena de funciones y pasar los valores paso a paso.
// Aquí estamos pasando 5 como 'c' y 7 como 'd' en la llamada directa.
console.log(sumAB(5)(7));  // Llamamos con 'c' = 5 y 'd' = 7, lo que da 1 + 2 + 5 + 7 = 15


/* - Callbacks
Un callback es una función que se pasa como argumento a otra función, y se ejecuta en algún momento después de que esa función haya completado su tarea. En términos sencillos, es como decirle a una función: "Cuando termines lo que tienes que hacer, haz esto". Los callbacks se utilizan comúnmente para manejar operaciones asíncronas, pero también se usan en operaciones sincrónicas.
*/
// Callbacks

// Esta función recibe dos argumentos: 'data' y 'callback'.
// 'data' es un arreglo de números y 'callback' es una función que se ejecutará cuando terminemos de procesar los datos.
function processData(data, callback) {
    // Primero, calculamos la suma de todos los elementos en el arreglo 'data' utilizando la función sum.
    const result = sum(...data);  
    
    // Después, ejecutamos la función callback pasando el resultado como argumento.
    callback(result);
}


// Función callback que recibe el resultado y lo imprime en la consola
function processResult(result) {
    console.log(result);
}


// Otra función de callback que recibe el resultado, pero con un mensaje adicional
function processResult2(result) {
    console.log(`Mi resultado es: ${result}`);  
}


// La función 'processResult' se ejecutará con el resultado de la suma (6).
processData([1, 2, 3], processResult);  // Imprime 6

// Ahora, llamamos a 'processData' , pero esta vez usamos 'processResult2' como callback.
// 'processResult2' imprimirá el resultado con un mensaje extra.
processData([1, 2, 3], processResult2);  // Imprime 'Mi resultado es: 6'

// Finalmente, pasamos una función anónima (arrow function) como callback, aqui nos enseña que tambien podemos crear la función en el mismo instante sin necesidad de llamarla y que este en otra parte creada.
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`); 
});



