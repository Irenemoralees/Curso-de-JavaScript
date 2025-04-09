/*Testing
Testing (o pruebas en español) es el proceso de probar un programa o una parte del código para asegurarse de que funcione correctamente.
En pocas palabras:
Es como revisar si todo está bien antes de lanzar un software, una app o una función.
 ¿Para qué sirve?
- Para detectar errores (bugs)
- Para verificar que lo que hiciste hace lo que debe hacer
- Para evitar que cambios futuros rompan el código
- Para asegurarse de que el usuario tenga una buena experiencia
*/

// - Tipos de testing
// Pruebas unitarias : Pruebas pequeñas, de funciones individuales

function sum(a, b) {
    return a + b
}

module.exports = sum  // // Exportamos la función para poder probarla

console.log(sum(3, 5) === 8)

// Pruebas de integración : Prueba cómo interactúan varias partes juntas

// Pruebas end-to-end (E2E) : Simula al usuario real: clics, formularios, flujos

/*VAMOS A INSTALAR Jest que es una herramienta (librería) de JavaScript que se usa para hacer tests automáticos. O sea, para verificar que tu código funcione correctamente sin tener que probar todo a mano.
Para instalarlo:
1. Node.js y npm instalados
(Abre tu terminal y verifica con node -v y npm -v)
2.  Inicializa tu proyecto (si aún no lo hiciste)
Abre la terminal en tu proyecto o carpeta donde quieras trabajar y escribe: npm init -y (al hacer esto se creara un archivo paackage.json)
3. npm install --save-dev jest (se nos creara una carpeta de node_modules donde esta jest )
4. Nos vamos a la carpeta de package.json y en el apartado de test escribimos "jest"
5. Cuando creemos nuestros test para probar en la terminal escribiremos npm test

¿Qué puedes hacer con Jest?
- Probar funciones individuales (unit testing)
- Simular comportamiento del usuario
- Verificar resultados esperados
- Ver qué rompiste sin querer después de un cambio
- Generar reportes de cobertura (qué tanto del código está testeado)
*/

