/*
Un operador es un símbolo o conjunto de símbolos que realiza una operación sobre uno o más valores para producir un resultado. Los operadores pueden ser usados para realizar cálculos, comparaciones, o manipular datos.
*/




// Operadores Aritméticos:
//  Se usan para realizar operaciones matemáticas.

let a = 5
let b = 10

// + : Suma
console.log(a + b) 
// - : Resta
console.log(a - b) 
// * : Multiplicación
console.log(a * b) 
// / : División
console.log(a / b) 
// % : Módulo (resto de una división)
console.log(a % b) 
console.log(a ** b) 
// ++ : Incremento (suma 1 a una variable)
a++ 
console.log(a)
// -- : Decremento (resta 1 a una variable)
b-- 
console.log(b)




// Operadores de asignacion:  
//Son los que usamos para darle un valor a una variable (algo que puede cambiar) o para modificar su valor de una manera rápida.

/* 1
= (Asignación simple):
Asigna un valor a una variable.
*/
let x = 5;  // x ahora tiene el valor 5

/* 2
+= (Suma y asigna):
Añade un valor a una variable y guarda el resultado en la misma variable.
*/
x = 5;
x += 3;  // Es igual a hacer x = x + 3, ahora x vale 8


/* 3
-= (Resta y asigna):
Resta un valor de una variable y guarda el resultado en la misma variable.
*/
 x = 5;
x -= 2;  // Es igual a hacer x = x - 2, ahora x vale 3

/* 4
*= (Multiplica y asigna):
Multiplica el valor de la variable por otro valor y guarda el resultado.
*/
x = 4;
x *= 2;  // Es igual a hacer x = x * 2, ahora x vale 8

/* 5
/= (Divide y asigna):
Divide el valor de la variable por otro valor y guarda el resultado.
*/
x = 10;
x /= 2;  // Es igual a hacer x = x / 2, ahora x vale 5

/* 6
%= (Módulo y asigna):
Este operador calcula el resto de la división entre dos números y guarda el resultado en la variable.
*/
x = 10;
x %= 3;  // Es igual a hacer x = x % 3, el resto de dividir 10 entre 3 es 1, entonces x ahora vale 1

/* 7
**= (Exponente y asigna):
Este operador calcula el exponente (potencia) de un número y asigna el resultado a la variable.
*/
 x = 2;
x **= 5;  // Es igual a hacer x = x ** 5, 2 elevado a 5 es 32, entonces x ahora vale 32



// Operadores de comparación:
//Se usan para comparar dos valores y obtener un resultado verdadero (true) o falso (false).

/* 1
> (Mayor que):
Compara si el primer valor es mayor que el segundo.
*/
console.log(a > b);  // Devuelve true si a es mayor que b

/* 2
< (Menor que):
Compara si el primer valor es menor que el segundo.
*/
console.log(a < b);  // Devuelve true si a es menor que b

/* 3
>= (Mayor o igual que):
Compara si el primer valor es mayor o igual que el segundo.
*/
console.log(a >= b);  // Devuelve true si a es mayor o igual a b

/* 4
<= (Menor o igual que):
Compara si el primer valor es menor o igual que el segundo.
*/
console.log(a <= b);  // Devuelve true si a es menor o igual a b

/* 5
== (Igualdad por valor):
Compara si los valores son iguales sin tener en cuenta el tipo de dato.
*/
console.log(a == 6);  // Devuelve true si a es igual a 6, sin importar si a es número o string
console.log(a == "6");  // Devuelve true si a es igual a "6" (aunque sea tipo string)
console.log(a == a);  // Devuelve true si a es igual a sí mismo

/* 6
=== (Igualdad estricta por valor y tipo de dato):
Compara si los valores son iguales y además el tipo de dato es el mismo.
*/
console.log(a === a);  // Devuelve true si a es igual a sí mismo, considerando también el tipo de dato
console.log(a === 6);  // Devuelve true si a es igual a 6 y es del mismo tipo de dato
console.log(a === "6");  // Devuelve false si a es igual a "6", pero son tipos diferentes (número vs. string)

/* 7
!= (Desigualdad por valor):
Compara si los valores son diferentes, sin tener en cuenta el tipo de dato.
*/
console.log(a != 6);  // Devuelve true si a es diferente a 6 (sin importar el tipo de dato)

/* 8
!== (Desigualdad estricta por valor y tipo de dato):
Compara si los valores son diferentes y también si el tipo de dato lo es.
*/
console.log(a !== "6");  // Devuelve true si a es diferente a "6" tanto por valor como por tipo de dato

/* 9
undefined == null:
Aquí, undefined y null se consideran equivalentes en una comparación con == (aunque son tipos distintos).
*/
console.log(undefined == null);  // Devuelve true porque undefined y null se consideran iguales

/* 10
undefined === null:
Aunque undefined y null se consideran equivalentes con ==, son diferentes tipos de datos, por lo que la comparación estricta con === devuelve false.
*/
console.log(undefined === null);  // Devuelve false porque tienen tipos diferentes

/* 11
Comparaciones con false, 0, "" (cadena vacía), etc.:
En JavaScript, los valores como false, 0, "" (satring vacío), y otros se pueden comportar de manera especial en comparaciones. Por ejemplo:
*/
console.log(0 == false);  // Devuelve true porque 0 y false se consideran equivalentes
console.log(1 == false);  // Devuelve false porque 1 no es igual a false
console.log(0 == "");  // Devuelve true porque 0 y "" se consideran equivalentes
console.log(0 == " ");  // Devuelve true porque 0 y " " (espacio) se consideran equivalentes
console.log(0 == '');  // Devuelve true porque 0 y "" se consideran equivalentes
console.log(0 == "Hola");  // Devuelve false porque 0 y "Hola" no son equivalentes
console.log(0 === "");  // Devuelve false porque 0 y "" son de tipo diferente


/*
Truthy values (valores verdaderos)
Son aquellos valores que, en una comparación lógica, se consideran verdaderos. 
-Todos los números positivos y negativos (menos el cero):
Ejemplos: 1, -5, 100, 3.14

-Todas las cadenas de texto que no están vacías:
Ejemplos: "hola", "abc", " ", "123"

-El booleano true:
Ejemplo: true
*/

/*
Falsy values (valores falsos)
Son aquellos valores que, en una comparación lógica, se consideran falsos. 

-0 (el número cero)

-0n (el número cero en tipo BigInt)

-null (nada o ausencia de valor)

-undefined (cuando una variable no tiene un valor asignado)

-NaN (Not a Number, usado cuando algo no es un número válido)

-El booleano false

-Cadenas de texto vacías: ""

*/

/*
Resumen de operadores de comparación:
>, <, >=, <= comparan si un valor es mayor, menor o igual a otro.
== compara si los valores son iguales, sin importar el tipo.
=== compara si los valores son iguales y tienen el mismo tipo.
!= compara si los valores son diferentes, sin importar el tipo.
!== compara si los valores son diferentes y si también tienen tipos distintos.
*/





// Operadores lógicos

/* Y
AND lógico (&&)
El operador && (AND) devuelve true solo si ambas condiciones son verdaderas. Si al menos una de las condiciones es falsa, el resultado será false.
*/
let y = true;
let z = false;

console.log(y && z);  // Devuelve false, porque una de las condiciones es falsa
console.log(true && true);  // Devuelve true, porque ambas condiciones son verdaderas
console.log(false && true);  // Devuelve false, porque una de las condiciones es falsa

/* O
OR lógico (||)
El operador || (OR) devuelve true si al menos una de las condiciones es verdadera. Solo devolverá false si ambas condiciones son falsas.
*/
Copiar
y = false;
z = true;
  
console.log(y || z);  // Si y O z es true devuelve true, porque una de las condiciones es verdadera
console.log(false || false);  // Devuelve false, porque ambas son falsas
console.log(true || false);   // Devuelve true, porque al menos una es verdadera

/* CONTRARIO
NOT lógico (!)
El operador ! (NOT) invierte el valor de una expresión booleana. Si la expresión es true, se convierte en false, y si es false, se convierte en true.
*/
let h= true;

console.log(!h);  // Devuelve false, porque invierte el valor de h (true -> false)
console.log(!false);  // Devuelve true, porque invierte el valor de false (false -> true)

/*
Resumen de los operadores lógicos:
AND (&&): Devuelve true solo si ambas condiciones son verdaderas.
OR (||): Devuelve true si al menos una de las condiciones es verdadera.
NOT (!): Invierte el valor de una expresión booleana. Si es true, lo convierte en false; si es false, lo convierte en true.
*/

// Operadores ternarios: (SE EXPLICARA MEJOR MÁS ADELANTE)
/*
El operador ternario es una forma compacta de escribir una condición if...else. Permite hacer una comparación y ejecutar uno de dos bloques de código según el resultado de esa comparación.
La sintaxis del operador ternario es la siguiente:
condición ? valor_verdadero : valor_falso;
*/

const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")
// Lo que nos está diciendo es lo siguiente: LLueve? "Está lloviendo" : "No está lloviendo"
//Por consola nos devolvera "No está lloviendo" ya que isRaining esta en false entonces se mete por el valor de false que es después de los dos puntos.

let number = 5;
number < 10 ? console.log("El número es mayor o igual que 10") : console.log("El número es menor que 10");
//Aquí nos dice: el número es menor a 10? "El número es mayor o igual que 10" : El número es menor que 10
//Por consola nos devolvera "El número es menor que 10" ya que 5 es menor a 10