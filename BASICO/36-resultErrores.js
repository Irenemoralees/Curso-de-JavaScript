// EJERCICIO 1
try {
    let myObject = {};
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}



// EJERCICIO 2
try {
    let myObject = {}
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
} finally {
    console.log("Este bloque siempre se ejecutará, sin importar si hubo error o no.");
}



// EJERCICIO 3
function throwError() {
    throw new Error("¡Algo salió mal!");
}

try {
    throwError()
} catch (error) {
    console.log("Capturado:", error.message)
}



// EJERCICIO 4
class MiErrorPersonalizado extends Error {
    constructor(message, codigo) {
        super(message)
        this.codigo = codigo
    }

    mostrarCodigo() {
        console.log(`Código del error: ${this.codigo}`);
    }
}



// EJERCICIO 5
function dividir(a, b) {
    if (b === 0) {
        throw new MiErrorPersonalizado("No se puede dividir entre cero", 1001);
    }
    return a / b;
}


try {
    console.log(dividir(10, 0))
} catch (error) {
        console.log("Se ha producido un error",error.message);
        error.mostrarCodigo()
}



// EJERCICIO 6
function realizarOperacion(valor) {
    if (valor < 0) {
        throw new RangeError("El valor no puede ser negativo");
    } else if (valor === 0) {
        throw new TypeError("El valor no puede ser cero");
    } else if (valor > 100) {
        throw new Error("El valor no puede ser mayor que 100");
    } else {
        console.log("Operación exitosa: el valor es válido");
    }
}


try {
    realizarOperacion(-5)
    realizarOperacion(150)
    realizarOperacion(0)
} catch (error) {
    if (error instanceof RangeError) {
        console.log("RangeError: " + error.message);
     } else if (error instanceof TypeError) {
            console.log("TypeError: " + error.message);
    }else if (error instanceof Error) {
            console.log("Error: " + error.message);
    }
}




// EJERCICIO 7
try {
    let myObject = {};
    console.log(myObject.email)
    let num = 10;
    console.log(num.toUpperCase())
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}



// EJERCICIO 8
let values = ["1.2", "abc", "3.4", "xyz"];
for (let value of values) {
    try {
        let floatValue = parseFloat(value)
        if (isNaN(floatValue)) throw new Error(`No se puede convertir '${value}' a número`)
        console.log(`El valor ${value} convertido a ${floatValue}`)
    } catch (error) {
        console.log(error.message)
    }
}



// EJERCICIO 9
function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new CustomError(`La propiedad '${prop}' no existe en el objeto`)
    }
    console.log(`La propiedad '${prop}' existe en el objeto.`)
}

let person = { name: "Juan", age: 25 }

try {
    checkProperty(person, "email")
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}



// EJERCICIO 10
function tryWithRetries(maxRetries) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            let randomNumber = Math.random()
            if (randomNumber > 0.5) {
                throw new Error("Error aleatorio")
            }
            console.log("Operación exitosa")
            break
        } catch (error) {
            attempts++
            console.log(`Intento ${attempts} fallido: ${error.message}`)
            if (attempts === maxRetries) {
                console.log("Se alcanzó el número máximo de reintentos.")
            }
        }
    }
}

tryWithRetries(10)
