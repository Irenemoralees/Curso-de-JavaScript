//EJERCICIO 1
let a = 10;
let b = 5;

let suma = a + b;
console.log(suma); // 10 + 5 = 15

let resta = a - b;
console.log(resta); // 10 - 5 = 5

let multiplicacion = a * b;
console.log(multiplicacion); // 10 * 5 = 50

let division = a / b;
console.log( division); // 10 / 5 = 2

let modulo = a % b;
console.log(modulo); // 10 % 5 = 0 (el resto de 10 dividido entre 5 es 0)

let exponente = a ** b;
console.log(exponente); // 10 ** 5 = 100000




//EJERCICIO 2
let asignacion = a;  
console.log(asignacion);  // 10


let sumaAsignacion = a;  // Asigna 10 a sumaAsignacion
sumaAsignacion += b;     // Le suma 5
console.log("Suma y asigna (+=):", sumaAsignacion);  // 10 + 5 = 15


let restaAsignacion = a;  // Asigna 10 a restaAsignacion
restaAsignacion -= b;     // Le resta 5
console.log("Resta y asigna (-=):", restaAsignacion);  // 10 - 5 = 5


let multiplicaAsignacion = a;  // Asigna 10 a multiplicaAsignacion
multiplicaAsignacion *= b;     // Le multiplica 5
console.log("Multiplica y asigna (*=):", multiplicaAsignacion);  // 10 * 5 = 50


let divideAsignacion = a;  // Asigna 10 a divideAsignacion
divideAsignacion /= b;     // Le divide 5
console.log("Divide y asigna (/=):", divideAsignacion);  // 10 / 5 = 2


let moduloAsignacion = a;  // Asigna 10 a moduloAsignacion
moduloAsignacion %= b;     // Le asigna el resto de la división de 10 entre 5
console.log("Módulo y asigna (%=):", moduloAsignacion);  // 10 % 5 = 0


let exponenteAsignacion = a;  // Asigna 10 a exponenteAsignacion
exponenteAsignacion **= b;     // Eleva 10 a la 5ta potencia
console.log("Exponente y asigna (**=):", exponenteAsignacion);  // 10 ** 5 = 100000



//EJERCICIO 3
let resultado1 = 10 > 5;  // 10 es mayor que 5
console.log(resultado1);  // true


let resultado2 = 3 < 7;  // 3 es menor que 7
console.log(resultado2);  // true


let resultado3 = "hola" == "hola";  // Las cadenas "hola" son iguales
console.log(resultado3);  // true


let resultado4 = 5 === 5;  // El número 5 es estrictamente igual a 5 tanto su valor que es 5 como su tipo de dato que es number
console.log(resultado4);  // true


let resultado5 = 15 >= 10;  // 15 es mayor o igual que 10
console.log(resultado5);  // true



// EJERCICIO 4
let result1 = 5 > 10;  // 5 es mayor que 10
console.log(result1);  // false


let result2 = 8 < 5;  // 8 es menor que 5
console.log(result2);  // false


let result3 = "5" == "8";  // La cadena "5" es igual a la cadena "8" 
console.log(result3);  // false porque no tienen el mismo valor


let result4 = 10 === "10";  // 10 (número) es estrictamente igual a "10" (cadena)
console.log(result4);  // false porque el primer 10 es un número y el segundo un string por lo que no son iguales en tipo de dato


let result5 = 3 <= 2;  // 3 es menor o igual a 2
console.log(result5);  // false



// EJERCICIO 5
let edad = 20;
let tieneTrabajo= true;

let puedeAcceder = edad > 18 && tieneTrabajo;

console.log(puedeAcceder);  // true (porque ambas condiciones son verdaderas)



// EJERCICIO 6
let dinero = 50;        // La persona tiene 50$
let tieneDescuento = false;  // La persona no tiene descuento

let puedeComprarBoleto = dinero >= 40 || tieneDescuento;

console.log(puedeComprarBoleto);  // true (porque una de las condiciones es verdadera)



//EJERCICIO 7
let age = 22;
let tieneEntradaValida = true;
let tienePaseEspecial = false;

let puedePasar = (age > 18 && tieneEntradaValida) || tienePaseEspecial;

console.log(puedePasar);  // true (porque tiene entrada válida y es mayor de 18)



// EJERCICIO 8
let esDia = true;  
let esNoche = !esDia;

console.log(esNoche);  // false, porque esDia es true, y al usar ! se invierte a false



// EJERCICIO 9
let mayorEdad = 20;

let puedeEntrar = (mayorEdad >= 18) ? "Puede entrar a la fiesta" : "No puede entrar a la fiesta";

console.log(puedeEntrar); //Nos devolvera "Puede entrar a la fiesta" ya que mayorEdad que es 20 es mayor a 18.



//EJERCICIO 10
let saldo = 120;         // La persona tiene 120 unidades de dinero
let precioOriginal = 150;  // El precio del producto es 150 unidades
let estaInscrito = true;  // La persona tiene una inscripcion activa

let precioConDescuento = (saldo >= precioOriginal * 0.8 && estaInscrito) ? precioOriginal * 0.8 : precioOriginal;

console.log(precioConDescuento); // Nos devolvera 120 porque la persona tiene el saldo suficiente y esta inscrito.



