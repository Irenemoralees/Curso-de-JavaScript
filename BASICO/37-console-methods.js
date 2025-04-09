// Console
// es una herramienta que te ayuda a ver información sobre lo que está pasando en tu código. Piensa en ella como una ventana donde puedes ver mensajes, errores, y mucho más mientras trabajas.


// log
// Muestra mensajes generales en la consola.
console.log("¡Hola, JavaScript!") // Imprime un saludo en la consola.


// error
// Muestra mensajes de error en la consola, generalmente en color rojo.
console.error("Este es un mensaje de error.") // Muestra un mensaje de error simple.
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida.")) // Muestra un mensaje de error con un objeto de error.


// warn
// Muestra un mensaje de advertencia en la consola, generalmente en color amarillo.
console.warn("Este es un mensaje de advertencia.") // Imprime una advertencia en la consola.


// info
// Muestra un mensaje de información en la consola, generalmente en color azul.
console.info("Este es un mensaje de información adicional.") // Imprime un mensaje de información.


// table
// Muestra datos en formato de tabla en la consola, lo que facilita la visualización.
let data = [
    ["Irene", 23],   // Una fila con nombre y edad.
    ["Sara", 5]     // Otra fila con nombre y edad.
]
console.table(data) // Muestra los datos en una tabla.

data = [
    { name: "Brais", age: 37 }, // Un objeto con nombre y edad.
    { name: "Sara", age: 21 }   // Otro objeto con nombre y edad.
]

console.table(data) // Muestra los objetos en formato de tabla.


// group
// Agrupa varios mensajes dentro de un bloque. Es útil para organizar la salida de la consola.
console.group("Usuario:") // Inicia un grupo con el nombre "Usuario:"
console.log("Nombre: Irene") // Mensaje dentro del grupo.
console.log("Edad: 23") // Otro mensaje dentro del grupo.
console.groupEnd() // Finaliza el grupo y vuelve a la vista normal de la consola.


// time
// Mide el tiempo de ejecución de un bloque de código.
console.time("Tiempo de ejecución 2") // Inicia el cronómetro para "Tiempo de ejecución 2".
for (let i = 0; i < 10000; i++) { } // Realiza una operación repetida.
console.time("Tiempo de ejecución 1") // Inicia el cronómetro para "Tiempo de ejecución 1".
for (let i = 0; i < 10000; i++) { } // Realiza otra operación repetida.
console.timeEnd("Tiempo de ejecución 2") // Mide y muestra el tiempo de ejecución del primer bloque de código.
for (let i = 0; i < 10000; i++) { } // Realiza una tercera operación repetida.
console.timeEnd("Tiempo de ejecución 1") // Mide y muestra el tiempo del segundo bloque de código.


// assert
// Lanza un error si la condición especificada es falsa.
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.") // Si la edad no es 18 o más, lanza un error con el mensaje.

// count
// Cuenta cuántas veces se ha llamado a una misma etiqueta.
console.count("Click") // Muestra cuántas veces se ha llamado "Click".
console.count("Click") // Suma otro "Click".
console.count("Click") // Suma otro "Click".
console.countReset("Click") // Resetea el contador de "Click".
console.count("Click") // Muestra el contador reseteado de nuevo.


// trace
// Muestra una traza de la ejecución de las funciones en la consola, útil para depurar.
function funcA() {
    funcB() // Llama a la función B desde la función A.
}

function funcB() {
    console.trace("Seguimiento de la ejecución.") // Muestra el seguimiento de las llamadas de función.
}

funcA() // Llama a funcA, que a su vez llama a funcB, lo que genera el seguimiento de ejecución.


// clear
// Borra todo lo que está en la consola (se comenta porque es peligroso si lo usas sin querer).
// console.clear() // Limpia la consola.
