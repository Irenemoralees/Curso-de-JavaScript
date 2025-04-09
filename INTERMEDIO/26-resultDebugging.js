// EJERCICIO 1
function calcularArea(largo, ancho) {
    if (largo <= 0 || ancho <= 0) {
        throw new Error("Error: Las dimensiones no pueden ser negativas o cero.");
    }
    return largo * ancho;
}

console.log(calcularArea(5, 0));  // Error: Las dimensiones no pueden ser negativas o cero.



// EJERCICIO 2
/* Lo hacemos con RUN AND DEBUG
Clicamos en: To customize Run and Debug create a launch.json file
Elegimos las opciones dependiendo si lo queremos utilizar en VS, en la web..

BREAKPOINTS
Un breakpoint (o punto de interrupción) es una herramienta usada durante la depuración (debugging) de código que te permite pausar la ejecución del programa en una línea específica. Esto te da la oportunidad de ver qué está ocurriendo en ese momento: revisar el valor de las variables, el flujo de ejecución, y detectar errores antes de que el programa continúe.

-  ¿Cómo se usa un breakpoint en VS Code?
1 Abres el archivo de código que estás depurando.
2 Haces clic en la barra izquierda al lado del número de línea donde quieres que el código se detenga.
3 Aparecerá un círculo rojo: ese es tu breakpoint.
4 Ejecutas tu programa en modo de depuración (usando F5 o el botón "Run and Debug").
5 El programa se detendrá automáticamente en ese punto cuando llegue allí.

- ¿Cuándo activar "Caught Exceptions" y "Uncaught Exceptions"?
Cuando estás depurando, puedes elegir si deseas que el depurador te detenga o te avise cuando ocurren excepciones, y puedes seleccionar si quieres que se detenga en excepciones no capturadas o en excepciones capturadas (o en ambos).

1. Uncaught Exceptions (Excepciones no capturadas)
En un depurador de VS Code, puedes detenerte automáticamente en las excepciones no capturadas. Esto es útil si no estás manejando adecuadamente las excepciones en tu código y deseas que el depurador te avise cada vez que se lance una excepción no capturada.

¿Cuándo activar "Uncaught Exceptions"?

Cuando no manejas errores en tu código con try-catch y deseas asegurarte de que tu aplicación no falle sin que te des cuenta de qué pasó.

Cuando quieres atrapar errores no previstos: Esto te ayudará a identificar errores que surgen por fallos inesperados, como acceder a propiedades de null o undefined.

2. Caught Exceptions (Excepciones capturadas)
Puedes elegir que el depurador también se detenga cuando se lance una excepción capturada. Esto te ayuda a hacer un seguimiento de los errores que ya sabías que podían ocurrir, pero aún quieres analizar cómo se manejan dentro de tu aplicación.

¿Cuándo activar "Caught Exceptions"?

Cuando deseas ver cómo se manejan los errores capturados en tu código, para asegurarte de que tu lógica de manejo de excepciones esté funcionando correctamente.

Cuando tienes bloques try-catch y quieres asegurarte de que el flujo de trabajo se ejecute de la manera que esperas cuando ocurre un error. A veces, el comportamiento que manejas en los catch podría necesitar ser depurado.

3. Ambos (Uncaught y Caught)
Puedes elegir detener el depurador en ambos tipos de excepciones si deseas hacer una inspección exhaustiva de cómo se están manejando todos los errores (tanto no capturados como capturados) en tu código. Esto es útil para detectar tanto errores lógicos como errores que aún no has anticipado.
*/
