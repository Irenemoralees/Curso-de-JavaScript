// Strings (cadenas de texto) en JavaScript

// 1. Concatenación: Unimos cadenas de texto usando el símbolo '+'
let myName = "Irene"; // Guardamos el nombre "Irene" en la variable 'myName'
let greeting = "Hola " + myName + "!"; // Concatenamos la palabra "Hola, " con el valor de 'myName' y un signo de exclamación
console.log(greeting); // Mostramos el resultado en la consola: "Hola, Irene!"
console.log(typeof greeting); // Mostramos el tipo de dato de 'greeting', que será 'string' (cadena de texto)

// 2. Longitud de la cadena: Mostramos cuántos caracteres tiene la cadena 'greeting', incluyendo espacios
console.log(greeting.length); // En este caso, el resultado será 12 porque incluye las letras y el espacio

// 3. Acceso a caracteres: Podemos acceder a caracteres específicos de la cadena utilizando índices
console.log(greeting[0]); // Muestra el primer carácter de la cadena, que es "H"
console.log(greeting[12]); // Muestra el último carácter de la cadena, que es "!"

// 4. Métodos comunes de las cadenas de texto:

// Convertir todo el texto a mayúsculas
console.log(greeting.toUpperCase()); // Resultado: "HOLA IRENE!"

// Convertir todo el texto a minúsculas
console.log(greeting.toLowerCase()); // Resultado: "hola irene!"

// Encontrar el índice de una palabra dentro de la cadena
console.log(greeting.indexOf("Hola")); // Resultado: 0 (porque "Hola" empieza en la posición 0)

// Si la palabra no está, el índice será -1
console.log(greeting.indexOf("Irene")); // Resultado: 6 (porque la I de "Irene" empieza en la posición 6)
console.log(greeting.indexOf("Iri")); // Resultado: -1 porque la palabra no existe en ese texto

// Verificar si una palabra o subcadena está incluida en la cadena
console.log(greeting.includes("Hola")); // Resultado: true, porque "Hola" está en 'greeting'
console.log(greeting.includes("Irene")); // Resultado: true, porque "Irene" está en 'greeting'
console.log(greeting.includes("Iri")); // Resultado: false, porque "Iri" no está en 'greeting'

// Extraer una parte de la cadena de texto usando 'slice'
console.log(greeting.slice(0, 9)); // Resultado: "Hola Iren", extrae desde el índice 0 hasta el 8 (sin incluir el 9)

// Reemplazar parte de la cadena usando 'replace'. Aquí reemplazamos "Irene" por "Iri" (solo reemplaza la primera ocurrencia)
console.log(greeting.replace("Irene", "Iri")); // Resultado: "Hola, Iri!"

// 5. Template literals (plantillas literales): nos permiten trabajar con cadenas de texto de forma más fácil

// Crear cadenas de texto en varias líneas sin necesidad de concatenar
let message = `Hola, este
es mi
curso de
JavaScript`;
console.log(message); // Resultado: el mensaje con saltos de línea gracias a las comillas invertidas ` `

// Interpolación de valores: podemos insertar valores de variables dentro de una cadena utilizando ${} , pero para utilizarlo en vez de poner las comillas de siempre " ", tendremos que poner las invertidas ` `
let email = "irene@gmail.com"; // Guardamos el email en la variable 'email'
console.log(`Hola, ${myName}! Tu email es ${email}.`); // Resultado: "Hola, Irene! Tu email es irene@gmail.com."
