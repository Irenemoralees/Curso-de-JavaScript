// EJERCICIO 1
let cadena1 = "Hola irene";
let cadena2 = "como estas hoy?";
let concatenado = cadena1 + ", " + cadena2; // Concatenamos con una coma entre las dos cadenas
console.log(concatenado); // Resultado: "Hola Irene, como estas hoy?"



// EJERCICIO 2
let saludo = "¡Bienvenido!";
console.log(saludo.length); // Resultado: 12 (porque "¡Bienvenido!" tiene 12 caracteres)



// EJERCICIO 3
let texto = "JavaScript";
console.log(texto[0]); // Primer carácter: "J"
console.log(texto[texto.length - 1]); // Último carácter: "t"



// EJERCICIO 4
let frase = "Hola Mundo";
console.log(frase.toUpperCase()); // Resultado: "HOLA MUNDO"
console.log(frase.toLowerCase()); // Resultado: "hola mundo"

// EJERCICIO 5
let mensaje = `Este es un mensaje
que ocupa varias
líneas en el texto`;
console.log(mensaje);



// EJERCICIO 6
let nombre = "Ana";
let saludoPersonalizado = `Hola, ${nombre}!`;
console.log(saludoPersonalizado); // Resultado: "Hola, Ana!"



// EJERCICIO 7
let textoConEspacios = "Tengo mascota";
console.log(textoConEspacios.replace(" ",  "_")) // Resultado: Tengo_mascota




// EJERCICIO 8
let mensaje2 = "Aprender JavaScript es divertido";
console.log(mensaje2.includes("JavaScript")); // Resultado: true



// EJERCICIO 9
let str1 = "Hola";
let str2 = "Hola";
let sonIguales = str1 === str2; // Usamos === para comprobar si son iguales
console.log(sonIguales); // Resultado: true



// EJERCICIO 10
let palabra1 = "manzana";
let palabra2 = "naranja";
console.log(palabra1.length === palabra2.length); // Resultado: true (ambas tienen 7 caracteres)
