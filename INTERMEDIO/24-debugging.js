// Depuración

// console.log() (básico)
// Cuando trabajemos de verdad en código no sera tan básico como para poder encontrar los errores de esta manera:
function sum(a, b) {
    console.log("a:", a)
    console.log("typeof a:", typeof a)
    console.log("b:", b)
    console.log("typeof b:", typeof b)
    return a + b
}
// Quiero que me sume pero en vez de darme 8 me da 35, es porque le estamos pasando un número en tipo string que se ve a simple vista.
console.log(sum(3, "5"))


// Depurador (profesional)
// Con run and debug (extensión)
function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero")
    }
    return a / b
}

// console.log(divide(5, 0)) Error