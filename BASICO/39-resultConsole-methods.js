// EJERCICIO 1
function verificarConexion(isConnected) {
    if (!isConnected) {
        console.error("Error: No se pudo conectar.")
    } else {
        console.log("Conexión exitosa.")
    }
}

verificarConexion(false)



// EJERCICIO 2
function verificarEdad(edad) {
    if (edad < 18) {
        console.warn("Advertencia: Persona menor de edad.")
    } else {
        console.log("Edad válida.")
    }
}

verificarEdad(15)



// EJERCICIO 3
function mostrarInformacion(nombre, edad) {
    console.info(`Información: Nombre - ${nombre}, Edad - ${edad}`)
}

mostrarInformacion("Juan", 30)



// EJERCICIO 4
let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 32 },
    { nombre: "Marta", edad: 28 }
]

console.table(personas)



// EJERCICIO 5
function mostrarDetalles(nombre, edad) {
    console.group("Detalles:")
    console.log("Nombre:", nombre)
    console.log("Edad:", edad)
    console.groupEnd()
}

mostrarDetalles("Carlos", 22)



// EJERCICIO 6
function hacerTarea() {
    console.time("Tiempo de tarea")
    for (let i = 0; i < 1000000; i++) {
    }
    console.timeEnd("Tiempo de tarea")
}

hacerTarea()



// EJERCICIO 7
function verificarNumeroPositivo(numero) {
    console.assert(numero > 0, "El número debe ser positivo")
}

verificarNumeroPositivo(-5)



// EJERCICIO 8
function contarClicks() {
    console.count("Click")
}

contarClicks()
contarClicks()
contarClicks()



// EJERCICIO 9
function funcionA() {
    funcionB();
}

function funcionB() {
    console.trace("Rastro de la ejecución.");
}

funcionA(); // Ver el rastro de ejecución

// EJERCICIO 10
// console.clear(); // Limpiar la consola
