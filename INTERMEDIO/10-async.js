// Programación asíncrona

// Código síncrono

console.log("Inicio")

for (let i = 0; i < 100000000; i++) { }

console.log("Fin")

// Event Loop (Bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (Pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js:
// 3. Task Queue (setTimeout()) y Microtask Queue (Promesas)

// Flujo del Event Loop:
// 1. Ejecuta lo que tiene en el Call Stack
// 2. Si encuentra operaciones asíncronas lo que va a terminar haciendo es transferir la ejecución de las operaciones asíncronas a otro componente del entorno de ejecución como -> Web APIs (en el navegador) o Node.js (en un entorno de servidor)
// 3.  Cuando la operación termina -> La coloca en Task Queue o Microtask Queue
// 4. Revisa si el Call Stack esta vacío -> Mueve las tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite


// Código asíncrono
// - Callbacks

console.log("Inicio")

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos")
}, 2000)

console.log("Fin")

/* - El problema de los Callback : Callback Hell
El Callback Hell es un problema que ocurre cuando anidamos demasiados callbacks dentro de callbacks, lo que hace que el código sea difícil de leer, entender y mantener.

🔹 Ocurre cuando trabajamos con funciones asíncronas (setTimeout, peticiones HTTP, etc.) y dependemos de múltiples callbacks anidados.
*/

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback()
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})

/* - Promesas
Las Promesas son usadas para manejar operaciones asíncronas (como pedir datos de una API, leer archivos, esperar respuestas de un servidor, etc.).
🔹 Las Promesas permiten manejar código asíncrono sin callbacks anidados.
🔹 Tienen 3 estados: 
1️⃣ pending (pendiente) → Estado inicial, la promesa todavía no ha completado la operación.
2️⃣ fulfilled (cumplida) → Se ejecutó resolve(), la promesa tuvo éxito.
3️⃣ rejected (rechazada) → Se ejecutó reject(), la promesa falló.
🔹 Se manejan con .then() (para éxito) y .catch() (para errores).
🔹 Se pueden encadenar varias .then() para ejecutar tareas en orden.
🔹 async/await hace que el código sea aún más claro y fácil de leer.
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = false
        if (ok) {
            resolve("Operación exitosa")
        } else {
            reject("Se ha producido un error")
        }
    }, 4000)
})

/* .then() y .catch() son métodos que usamos con Promesas para manejar el resultado de una operación asíncrona.

.then() → Se ejecuta si la promesa se resuelve con éxito (resolve).
.catch() → Se ejecuta si la promesa es rechazada (reject).
*/

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

// - Encadenamiento de promesas para evitar el Callback Hell

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3 con promesa completado")
            resolve()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("Todos los pasos con promesa completados")
    })

/* - Async/Await
 async y await son palabras clave que facilitan el manejo de código asíncrono de una manera más clara y legible, evitando el uso excesivo de promesas encadenadas (.then()).
 async
La palabra clave async se usa para declarar una función que siempre devuelve una promesa. Si la función devuelve un valor, automáticamente se envuelve en una promesa.
await
La palabra clave await solo puede usarse dentro de funciones async y sirve para pausar la ejecución hasta que una promesa se resuelva.
*/

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {

    console.log("Inicio del proceso")

    await wait(5000)
    console.log("Proceso después de 5 segundos")

    await wait(1000)
    console.log("Proceso después de 1 segundo")

    await wait(2000)
    console.log("Proceso después de 2 segundos")

    console.log("Fin del proceso")
}

process()