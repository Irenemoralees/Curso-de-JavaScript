// Importamos el módulo interno "os" de Node.js
// Este módulo nos permite obtener información del sistema operativo
const os = require("os");

// Mostramos en consola el sistema operativo actual
// Ejemplos de salida: 'win32' para Windows, 'linux' para Linux, 'darwin' para Mac
console.log("Sistema operativo:", os.platform());

// Mostramos la arquitectura del procesador
// Ejemplos de salida: 'x64' (64 bits), 'arm', etc.
console.log("Arquitectura:", os.arch());

// Mostramos la memoria total del sistema en bytes
// Esto indica cuánta memoria RAM hay en total
console.log("Memoria total (bytes):", os.totalmem());

// Mostramos cuánta memoria libre hay disponible en bytes
// Es la RAM que no está en uso actualmente
console.log("Memoria libre (bytes):", os.freemem());
