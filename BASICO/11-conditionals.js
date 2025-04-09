/*  Los condicionales son estructuras que permiten ejecutar diferentes bloques de código dependiendo de si una condición es verdadera o falsa.
Es como un "si esto es cierto, haz esto; si no, haz aquello". Los condicionales te ayudan a tomar decisiones en tu código.
*/



// 1. if (si)
// El 'if' se utiliza para verificar si una condición es verdadera. Si lo es, ejecuta el código dentro del bloque.

let age = 37; // Definimos una variable 'age' con el valor 37

if (age == 37) {  // Comprobamos si la edad es igual a 37
    console.log("La edad es 37");  // Si la condición es verdadera, se ejecuta este código
}

// 2. else (si no)
// El 'else' se usa para ejecutar un bloque de código si la condición del 'if' no es verdadera.

if (age == 37) {  // Verificamos si 'age' es igual a 37
    console.log("La edad es 37");  // Si es verdadero, ejecuta este código
} else {  // Si no es verdadero (es decir, si age no es 37), se ejecuta el siguiente bloque
    console.log("La edad no es 37");  // Este mensaje se mostrará si age no es 37
}

// 3. else if (si no, si)
// Usamos 'else if' cuando tenemos más de una condición que necesitamos verificar. Si la primera condición es falsa, se evalúa la siguiente.

if (age == 37) {  // Si 'age' es igual a 37, muestra este mensaje:
    console.log("La edad es 37");
} else if (age < 18) {  // Si la edad es menor que 18, muestra este mensaje:
    console.log("Es menor de edad");
} else {  // Si ninguna de las anteriores es verdadera, se ejecuta este bloque
    console.log("La edad no es 37 ni es menor de edad");  // Este mensaje se muestra si la edad no es 37 ni menor de 18
}

// 4. Operador ternario
// El operador ternario es una forma más compacta de escribir un 'if' con 'else'. La sintaxis es: condición ? valor si es verdadero : valor si es falso.

const message = age == 37 ? "La edad es 37" : "La edad no es 37"; // Si 'age' es 37, 'message' será "La edad es 37", de lo contrario será "La edad no es 37"
console.log(message); // Muestra el mensaje basado en la condición

// 5. switch
// El 'switch' es otra forma de manejar múltiples condiciones. Es útil cuando tienes que comparar un solo valor con múltiples opciones posibles: El switch es muy útil cuando tienes un valor que puede coincidir con diferentes casos, y es mucho más limpio que tener varios else if para comparar el mismo valor.

let day = 3;  // Definimos la variable 'day' con el valor 3 (representando el día jueves)
let dayName;  // Creamos una variable para almacenar el nombre del día

switch (day) {  // Comparamos el valor de 'day' con los casos posibles
    case 0:  // Si 'day' es 0, es Lunes
        dayName = "Lunes";
        break;  /* 'break' se usa para detener la ejecución de los casos una vez que se ha encontrado el caso que coincide. Es decir, detiene el switch después de que se ejecuta el código del caso que coincide.
        Si no usas break, el código continuará ejecutándose en los siguientes casos, aunque no coincidan con el valor. Esto se llama "fall-through".
        */
    case 1:  // Si 'day' es 1, es Martes
        dayName = "Martes";
        break;
    case 2:  // Si 'day' es 2, es Miércoles
        dayName = "Miércoles";
        break;
    case 3:  // Si 'day' es 3, es Jueves
        dayName = "Jueves";
        break;
    case 4:  // Si 'day' es 4, es Viernes
        dayName = "Viernes";
        break;
    case 5:  // Si 'day' es 5, es Sábado
        dayName = "Sábado";
        break;
    case 6:  // Si 'day' es 6, es Domingo
        dayName = "Domingo";
        break;
    default:  // Si 'day' no coincide con ninguno de los casos anteriores, ejecuta esto
        dayName = "Número de día incorrecto";  // En este caso, mostramos que el número no es válido
}

console.log(dayName);  // Mostramos el nombre del día correspondiente (en este caso, "Jueves")


/* RESUMEN:
if: Si la condición es verdadera, se ejecuta el bloque de código.
else if: Permite verificar condiciones adicionales entre el if y el else.
else: Si la condición del if no se cumple, se ejecuta otro bloque de código.
*/