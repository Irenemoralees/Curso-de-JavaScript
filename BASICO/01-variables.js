
/*
var: Es una forma antigua de crear variables. No se usa mucho hoy en día aunque se sigue usando en algunos proyectos antiguos por compatibilidad y costumbre.

let: Sirve para crear variables que puedes cambiar más tarde.

const: Sirve para crear variables que no puedes cambiar después de asignarlas.
*/




// var  (NO ES RECOMENDABLE USARLA)
var helloWorld = "¡Hola, JavaScript!"
console.log(helloWorld)
//Por consola nos saldra ¡Hola, JavaScript!

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)
//Por consola nos saldra ¡Hola de nuevo, JavaScript!


// let
let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2) //Lo que estamos haciendo con esto es llamar a la variable helloWorld2 que es igual a ¡Hola, JavaScript 2!
//Por consola nos saldra ¡Hola, JavaScript2!

helloWorld2 = "¡Hola de nuevo, JavaScript 2!" //De esta forma podemos cambiar el valor, escribiendo de nuevo el nombre de la variable sin el let delante y ya pasa a tener el valor nuevo
console.log(helloWorld2)
//Por consola nos saldra ¡Hola de nuevo, JavaScript2!


// const
const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)
//Por consola nos saldra ¡Hola, JavaScript3!

// Error
//helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
//console.log(helloWorld3)
//Por consola nos dara error ya que como hemos explicado antes las variables const no puede cambiar de valor


/*
Resumen:
var: Viejo, se usa poco.
let: Se usa para variables que cambian.
const: Se usa para valores que no cambian.
*/
