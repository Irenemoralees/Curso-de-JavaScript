// EJERCICIO 1
/*
 /^ ... $/
^ → Indica el inicio de la cadena.
$ → Indica el final de la cadena.
- Esto significa que toda la cadena debe coincidir con el patrón (no solo una parte).
*/

/*
[^\s@]+
[ ... ] → Significa “un conjunto de caracteres permitidos”.
^ dentro de los corchetes → significa “todo lo que no sea...”.
\s → representa espacios en blanco (espacio, tabulación, salto de línea).
@ → el símbolo arroba.
[^\s@] → “cualquier carácter que no sea espacio ni @”.
+ → uno o más caracteres.
- Entonces esta parte significa:
“Uno o más caracteres que no sean espacios ni @”
*/

/*
Literalmente el símbolo @. Necesario en todo correo.
 */

/*
[^\s@]+
Lo mismo que antes: uno o más caracteres que no sean espacio ni @.
-  Esta es la parte del dominio, como gmail, hotmail, empresa.
 */

/*
\.
\. → el punto (.) se escapa con \ porque en regex el punto es un carácter especial que representa “cualquier cosa”.
-  Esto es el punto que separa el dominio de la extensión, como .com, .org, etc.
 */

/*
[^\s@]+ (otra vez)
Otra vez, uno o más caracteres que no sean espacio ni @.
👉 Esto valida la extensión del dominio, como com, net, edu, etc.
 */

const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const correo = "irene@gmail.com"
console.log(regex.test(correo))



// EJERCICIO 2
/*
# → empieza con un numeral (hashtag)
[\w]+ → uno o más caracteres de palabra (\w incluye letras, números y guiones bajos)
g → busca todas las coincidencias, no solo la primera 
*/
const regex2 = /#[\w]+/g
const text = "hola #gente #animales"
let match;  // Variable para almacenar las coincidencias

// Mientras haya coincidencias, continúa ejecutando
while ((match = regex2.exec(text)) !== null) {
    console.log(match)
}



// EJERCICIO 3
/*
^ → Inicio de la cadena. Asegura que la validación comience desde el principio de la contraseña.
(?=.*[A-Za-z]) → Asegura que haya al menos una letra (mayúscula o minúscula).
. → cualquier carácter.
* → 0 o más repeticiones de caracteres.
[A-Za-z] → Cualquier letra, mayúscula o minúscula.
El (?=.*[A-Za-z]) es una "lookahead" que garantiza que al menos una letra esté presente en cualquier parte de la cadena.
(?=.*\d) → Asegura que haya al menos un número (\d es un dígito).
Similar al anterior, busca al menos un dígito en cualquier parte de la contraseña.
[A-Za-z\d] → Solo permite letras y dígitos.
{8,} → Indica que la longitud de la contraseña debe ser al menos 8 caracteres.
$ → Final de la cadena. Asegura que la validación termine al final de la contraseña.
 */
const regex3 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
const contraseña = "jhds68hks"
console.log(regex3.test(contraseña))



