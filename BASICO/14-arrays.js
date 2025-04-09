
/* Arrays
un array es como una caja que puede guardar varias cosas. Pero en lugar de poner cualquier cosa, lo que haces es poner cosas que están ordenadas dentro de la caja. Por ejemplo, puedes tener una caja con números, palabras, o incluso otros objetos.

Cada cosa que pones en la caja tiene un número (índice) que te dice dónde está. El primer elemento tiene el número 0, el segundo tiene el número 1, y así sucesivamente.

Ejemplo fácil:
let frutas = ["manzana", "plátano", "naranja"];
console.log(fruitas[0]);  // "manzana", porque es el primer elemento
console.log(fruitas[1]);  // "plátano", porque es el segundo
console.log(fruitas[2]);  // "naranja", porque es el tercero
*/

// Declaración de arrays vacíos, podemos usar o uno u otro
let myArray = []  // Usamos los corchetes [] para declarar un array vacío
let myArray2 = new Array()  // También podemos declarar un array vacío con el constructor new Array()

console.log(myArray)  // Muestra el contenido de myArray (estará vacío)
console.log(myArray2)  // Muestra el contenido de myArray2 (también vacío)


// Inicialización de arrays
myArray = [3]  // Inicializamos myArray con un solo número, el 3
myArray2 = new Array(3)  // Inicializamos myArray2 con el constructor, asignando espacio para 3 elementos (pero sin valores definidos)

console.log(myArray)  // Aquí se creara un array con solo un elemento, el [3]
console.log(myArray2)  // Aquí se creara un array con tres huecos vacios


// Arrays con varios valores
myArray = [1, 2, 3, 4]  // Inicializamos un array con varios valores numéricos
myArray2 = new Array(1, 2, 3, 4)  // Lo mismo con el constructor new Array

console.log(myArray)  // Muestra [1, 2, 3, 4]
console.log(myArray2)  // Muestra [1, 2, 3, 4]


// Arrays con diferentes tipos de datos
myArray = ["Irene", "Morales", "iri", 23, true]  // Inicializamos un array con cadenas, números y booleanos
myArray2 = new Array("Irene", "Morales", "iri", 23, true)  // Lo mismo con el constructor new Array

console.log(myArray)  // Muestra el array con diferentes tipos de datos
console.log(myArray2)  // Muestra el mismo array

// Declaración de un array con un tamaño definido, pero luego asignando valores manualmente
myArray2 = new Array(3)  // Creamos un array con espacio para 3 elementos (vacío)
myArray2[2] = "Irene"  // Asignamos un valor a la posición 2
myArray2[1] = "iri"  // Asignamos un valor a la posición 1
myArray2[4] = "Morales"  // Asignamos un valor a la posición 4 (deja un hueco en la posición 3)

console.log(myArray2)  // Muestra = [     ,"iri", "Irene",   , "Morales" ]

// También podemos crear arrays vacíos y asignar valores a posiciones específicas
myArray = []  // Creamos un array vacío
myArray[2] = "Irene"  // Asignamos "Irene" en la posición 2
myArray[1] = "iri"  // Asignamos "iri" en la posición 1

console.log(myArray)  // Muestra el array con valores asignados en las posiciones 1 y 2 = [     ,"iri", "Irene"]


// Métodos comunes para trabajar con arrays
myArray = []  // Creamos un array vacío

// push: Añadir elementos al final del array
myArray.push("Irene")  // Añadimos "Irene" al final
myArray.push("Morales")  // Añadimos "Morales" al final
myArray.push("iri")  // Añadimos "iri" al final
myArray.push(23)  // Añadimos el número 23al final

console.log(myArray)  // Muestra el array con los elementos añadidos

// pop: Elimina el último elemento del array y lo devuelve
console.log(myArray.pop())  // Elimina el último elemento que es 23 y lo muestra
myArray.pop()  // Elimina el siguiente último elemento ("iri")
console.log(myArray)  // Muestra el array después de eliminar dos elementos


// shift: Elimina el primer elemento del array y lo devuelve
console.log(myArray.shift())  // Elimina el primer elemento ("Irene") y lo muestra
console.log(myArray)  // Muestra el array después de eliminar el primer elemento


// unshift: Añadir elementos al principio del array
myArray.unshift("Irene", "iri")  // Añade "Irene" y "iri" al principio del array
console.log(myArray)  // Muestra el array con los nuevos elementos al principio

// length: Obtiene la longitud del array (número de elementos)
console.log(myArray.length)  // Muestra el número de elementos en el array

// clear: Limpiar el array (se queda vacio)
myArray = []  // Creamos un array vacío
myArray.length = 0  // Otra forma de vaciar un array (establecer su longitud a 0)
console.log(myArray)  // Muestra el array vacío

// slice: Crear una copia de una sección del array (sin modificar el original)
myArray = ["Irene", "Morales", "iri", 23, true]

let myNewArray = myArray.slice(1, 3)  // Copiamos los elementos desde la posición 1 hasta la 3 (sin incluir la 3)

console.log(myArray)  // Muestra el array original
console.log(myNewArray)  // Muestra la copia de la sección del array ["Morales", "iri"]

// splice: Modifica el array, puede eliminar, reemplazar o añadir elementos
myArray.splice(1, 3)  // Elimina 3 elementos desde la posición 1
console.log(myArray)  // Muestra el array después de eliminar elementos que quedaria de la siguiente manera = ["Irene", true]

// También podemos usar splice para añadir elementos
myArray = ["Irene", "Morales", "iri", 23, true]

myArray.splice(1, 2, "Nueva entrada")  // Desde la posición 1 que es "Morales", eliminamos 2 elementos y añadimos "Nueva entrada"
console.log(myArray)  // ["Irene", "Nueva entrada", 23, true]
