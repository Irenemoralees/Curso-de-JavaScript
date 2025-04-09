

// Captura de errores
// try-catch
// Usamos try-catch para manejar los errores de manera controlada.

// En el bloque 'try' intentamos ejecutar código que puede generar un error.
// En este caso, intentamos acceder a la propiedad 'email' de 'myObject', que no existe, lo que provoca un error.
try {
    console.log(myObject.email) // Este código produce un error porque 'myObject' es undefined.
    console.log("Finaliza la ejecución sin errores") // Este código no se ejecuta, ya que el error ocurre antes.
} catch {
    // En el bloque 'catch', si ocurre un error, se captura y ejecuta este código.
    console.log("Se ha producido un error") // Muestra el mensaje indicando que se ha producido un error.
}


// Captura del error
// Aquí capturamos el error de forma más específica.
// La variable 'error' almacenará el objeto de error, el cual contiene detalles sobre lo que salió mal.
try {
    console.log(myObject.email) // Genera el mismo error de antes.
} catch (error) {
    console.log("Se ha producido un error:", error.message) // Mostramos "Se ha producido un error:" el mensaje del error (lo que pasó).
}


// finally
// El bloque 'finally' se ejecuta siempre, independientemente de si hubo error o no.
// Se usa para código que siempre debe ejecutarse, como limpiar recursos o hacer tareas de cierre.
try {
    console.log(myObject.email) 
} catch (error) {
    console.log("Se ha producido un error:", error.message) // Se muestra el mensaje del error.
} finally {
    console.log("Este código se ejecuta siempre") // Este código se ejecuta siempre, tanto si hubo error como si no.
}


// No está soportado
/*
try {
    console.log(myObject.email) 
} finally {
    console.log("Este código se ejecuta siempre") 
}
*/


// Lanzamiento de errores
// 'throw' se usa para lanzar un error de forma manual.
// Usamos throw para lanzar errores cuando algo no va bien, como en la función de suma.

function sumIntegers(a, b) {
    // Si 'a' o 'b' no son números, lanzamos un error de tipo.
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números") // Error si no son números.
    }
    // Si 'a' o 'b' no son enteros (decimales), lanzamos otro error.
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros") // Error si no son enteros.
    }
    // Si 'a' o 'b' son cero, lanzamos un error personalizado.
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b) // Error si se intenta sumar cero, MÁS ABAJO TENEMOS LA CLASE  DE ESTE ERROR
    }
    return a + b // Si todo está bien, suma los números y devuelve el resultado.
}

try {
    console.log(sumIntegers(5, 10)) // Suma 5 y 10, no da error.
    // console.log(sumIntegers(5.5, 10)) // No se ejecuta porque '5.5' no es un número entero.
    console.log(sumIntegers("5", 10)) // No se ejecuta porque "5" es una cadena, no un número.
    // console.log(sumIntegers(5, "10")) // Error similar al anterior.
    // console.log(sumIntegers("5", "10")) // Error similar al anterior.
} catch (error) {
    console.log("Se ha producido un error:", error.message) // Captura el error y muestra el mensaje.
}


// Capturar varios tipos de errores
// En este bloque mostramos cómo capturar diferentes tipos de errores específicos.
// Podemos usar 'instanceof' para saber el tipo de error que ocurrió.
try {
    // console.log(sumIntegers(5.5, 10)) // No se ejecuta, ya que '5.5' no es un entero.
    console.log(sumIntegers("5", 10)) // Error porque '5' es una cadena.
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message) // Si es un error de tipo, lo mostramos.
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message) // Si es otro tipo de error, mostramos el mensaje.
    }
}


// Crear excepciones personalizadas
// Aquí creamos un error personalizado, que es una clase llamada 'SumZeroIntegerError'.
// Esta clase hereda de la clase base 'Error' y permite agregar información adicional al error.

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message) // Llama al constructor de la clase base 'Error'.
        this.a = a // Almacena el primer número que se está sumando.
        this.b = b // Almacena el segundo número que se está sumando.
    }

    printNumbers() {
        console.log(this.a, " + ", this.b) // Muestra los números que causaron el error.
    }
}

try {
    console.log(sumIntegers(0, 10)) // Intenta sumar 0 con 10, lo que lanza un error personalizado.
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message) // Muestra el mensaje del error.
    error.printNumbers() // Llama al método 'printNumbers' para mostrar los números que causaron el error.
}
