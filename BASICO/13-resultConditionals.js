// EJERCICIO 1
let myName = "Irene";  

if (myName === "Irene") {  
    console.log("Mi nombre es Irene");  // Si es cierto, imprimimos el nombre
}



// EJERCICIO 2
let username = "user123";  // Nombre de usuario
let password = "pass456";  // Contraseña

if (username === "user123" && password === "pass456") {  // Verificamos si ambos coinciden
    console.log("Acceso permitido");  // Si las credenciales son correctas, mostramos el mensaje
} else {
    console.log("Acceso denegado");  // Si no coinciden, mostramos otro mensaje
}



// EJERCICIO 3
let number = 0;  

if (number > 0) {
    console.log("El número es positivo");
} else if (number < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// EJERCICIO 4
let age = 16;  

if (age >= 18) {
    console.log("Puedes votar");
} else {
    let yearsToVote = 18 - age;  // Calculamos cuántos años faltan para votar
    console.log(`Te faltan ${yearsToVote} años para poder votar`);
}



// EJERCICIO 5
let personAge = 22;  

let userStatus = personAge >= 18 ? "adulto" : "menor";  
console.log(userStatus);  



// EJERCICIO 6
let month = 5;  

if (month === 12 || month === 1 || month === 2) {
    console.log("Estamos en invierno");
} else if (month === 3 || month === 4 || month === 5) {
    console.log("Estamos en primavera");
} else if (month === 6 || month === 7 || month === 8) {
    console.log("Estamos en verano");
} else {
    console.log("Estamos en otoño");
}



// EJERCICIO 7
let daysInMonth = 0;  // Variable para almacenar los días del mes

switch (month) {  //month esta definida en el ejercicio anterior
    case 1:  // Enero
    case 3:  // Marzo
    case 5:  // Mayo
    case 7:  // Julio
    case 8:  // Agosto
    case 10: // Octubre
    case 12: // Diciembre
        daysInMonth = 31;  // Meses con 31 días
        break;
    case 4:  // Abril
    case 6:  // Junio
    case 9:  // Septiembre
    case 11: // Noviembre
        daysInMonth = 30;  // Meses con 30 días
        break;
    case 2:  // Febrero
        daysInMonth = 28;  // Febrero tiene 28 días en años no bisiestos
        break;
    default:
        console.log("Mes inválido");
        break;
}

console.log(`El mes ${month} tiene ${daysInMonth} días`);



//EJERCICIO 8
let language = "es";  // Idioma seleccionado (español)

switch (language) {
    case "en":
        console.log("Hello!");  // Saludo en inglés
        break;
    case "es":
        console.log("¡Hola!");  // Saludo en español
        break;
    case "fr":
        console.log("Bonjour!");  // Saludo en francés
        break;
    case "de":
        console.log("Hallo!");  // Saludo en alemán
        break;
    default:
        console.log("Idioma no reconocido");  // Si el idioma no está en la lista
        break;
}



// EJERCICIO 9
month = 8;  // Número del mes (8 para agosto)

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Estamos en invierno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Estamos en primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Estamos en verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Estamos en otoño");
        break;
    default:
        console.log("Mes inválido");
        break;
}



// EJERCICIO 10
month = 2;  // Número del mes (2 para febrero)
 daysInMonth = 0;  // Variable para almacenar los días del mes

switch (month) {
    case 1:  // Enero
    case 3:  // Marzo
    case 5:  // Mayo
    case 7:  // Julio
    case 8:  // Agosto
    case 10: // Octubre
    case 12: // Diciembre
        daysInMonth = 31;  // Meses con 31 días
        break;
    case 4:  // Abril
    case 6:  // Junio
    case 9:  // Septiembre
    case 11: // Noviembre
        daysInMonth = 30;  // Meses con 30 días
        break;
    case 2:  // Febrero
        daysInMonth = 28;  // Febrero tiene 28 días en años no bisiestos
        break;
    default:
        console.log("Mes inválido");
        break;
}

console.log(`El mes ${month} tiene ${daysInMonth} días`);

