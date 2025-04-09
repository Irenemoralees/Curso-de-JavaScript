//Los data types (tipos de datos) son los diferentes tipos de valores que puede tener una variable en un programa.

// Estos son tipos de datos primitivos:


// Cadenas de texto (string)
let myName = "Irene Morales"
let alias = 'Iri'
let email = `irene@gmail.com`
//Las comillas se pueden poner de diferente forma.

// Números (number), almacena números, ya sean enteros o decimales.
let age = 23 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean), almacena valores de verdadero o falso.
let isTeacher = true
let isStudent = false

// Undefined. Es una variable que la hemos creado pero no le hemos agregado ningun valor todavía.
let undefinedValue
console.log(undefinedValue)

// Null. Se usa cuando quieres indicar que una variable no tiene valor intencionalmente.
let nullValue = null

// Symbol. Se usa cuando quieres garantizar que el nombre de la propiedad no se duplique o cuando quieres que una propiedad sea privada y no pueda ser modificada por otras partes del código.

let mySymbol = Symbol("mysymbol")

// BigInt : Almacena números muy grandes. 
// Se puede hacer tanto de una manera como de otra.
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos, el typeof te muestra de que tipo es esa variable, si es un string, number, boolean..., no te muestra el valor en sí, si no el tipo de dato del valor.
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)
//Cuando usas typeof en null, JavaScript te devuelve "object", lo cual es un bug histórico que ha quedado en el lenguaje desde sus primeros días y no se ha corregido por razones de compatibilidad. Aunque null es un valor primitivo, JavaScript lo clasifica erróneamente como un "objeto".

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)



/*
Resumen:
String: Texto.
Number: Números.
Boolean: Verdadero o falso.
Undefined: Sin valor asignado.
Null: Vacío. La variable tiene un valor vacío asignado intencionalmente. typeof null devuelve "object" debido a un comportamiento histórico de JavaScript.
Symbol: Valor único.  Se usa para crear identificadores únicos que no pueden ser duplicados
BigInt: Números muy grandes.
typeof: Muestra por consola que tipo de dato del valor de la variable.
 */
