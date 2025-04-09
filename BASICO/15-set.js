// Set
//Es como una colección de valores únicos donde no puedes tener elementos repetidos y no puedes acceder a los elementos por índice.

// Declaración de un Set vacío
let mySet = new Set()
console.log(mySet)  // Muestra el Set vacío, será un Set de tamaño 0


// Inicialización de un Set con varios valores (cadenas, números, booleanos)
mySet = new Set(["Irene", "Morales", "iri", 23, true, "irene@gmail.com"])
console.log(mySet)  // Muestra el Set con los valores que hemos añadido


// Métodos comunes de los Sets:

// add: Añadir elementos al Set
mySet.add("https://iri")  // Añadimos una URL al Set
console.log(mySet)  
// Nos mostrara ["Irene", "Morales", "iri", 23, true, "irene@gmail.com", "https://iri"]


// delete: Eliminar un elemento del Set
mySet.delete("https://iri")  // Eliminamos la URL añadida antes
console.log(mySet)  // Muestra el Set después de eliminar la URL

// También podemos borrar elementos y ver el resultado (devuelve true si el valor fue eliminado, false si no)
console.log(mySet.delete("Irene"))  // Intentamos eliminar "Irene", mostrará true si fue eliminado
console.log(mySet.delete(4))  // Intentamos eliminar el número 4, mostrará false porque no existe,
console.log(mySet)  // Muestra el Set después de eliminar los valores


// has: Verifica si un elemento existe en el Set (devuelve true o false)
console.log(mySet.has("Morales"))  // Muestra true porque "Morales" está en el Set
console.log(mySet.has("Irene"))  // Muestra false porque "Irene" ya fue eliminado


// size: Nos da el número de elementos que tiene el Set
console.log(mySet.size)  // Muestra el número de elementos en el Set


// Convertir un Set a un Array usando Array.from
let myArray = Array.from(mySet)  // Convertimos el Set en un Array
console.log(myArray)  // Muestra el Array convertido desde el Set


// Convertir un Array a un Set para eliminar duplicados si los hubiera
mySet = new Set(myArray)  // Convertimos el Array de nuevo a un Set
console.log(mySet)  // Muestra el Set después de convertirlo desde el Array


// Los Sets no permiten valores duplicados
mySet.add("irenemorales@gmail.com")  // Añadimos un correo al Set
mySet.add("irenemorales@gmail.com")  // Intentamos añadirlo de nuevo, pero no se añadirá porque es un duplicado
mySet.add("irenemorales@gmail.com")  // Lo mismo, no se añadirá
mySet.add("IreneMorales@gmail.com")  // Añadimos un correo diferente

console.log(mySet)  // Muestra el Set, donde solo se permite un valor único para cada elemento




/*
Diferencias clave entre un Array y un Set:

Duplicados:
Array: Sí permite duplicados, es decir, puedes tener el mismo valor varias veces en un Array.
Ejemplo: ["manzana", "manzana", "plátano"]
Set: No permite duplicados, si intentas añadir el mismo valor más de una vez, solo se quedará uno.
Ejemplo: {"manzana", "manzana", "plátano"} (El Set solo tendrá "manzana" una vez)

Orden:
Array: Los elementos tienen un orden. Puedes acceder a ellos por su índice (el primer elemento está en el índice 0, el segundo en el índice 1, etc.).
Ejemplo: let frutas = ["manzana", "plátano", "naranja"]
Set: Aunque mantiene el orden de inserción, no puedes acceder a los elementos por un índice como en un Array. Solo puedes ver si un valor está presente o no.

Acceso a elementos:
Array: Puedes acceder directamente a un elemento usando su índice.
Ejemplo: frutas[0] te dará "manzana".
Set: No puedes acceder a los elementos por un índice, pero puedes comprobar si un elemento existe usando has().

Métodos:
Array: Tiene métodos como .push() (añadir elementos), .pop() (eliminar el último), .shift() (eliminar el primero), entre otros.
Set: Tiene métodos como .add() (añadir un valor único), .delete() (eliminar un valor), .has() (comprobar si existe un valor), y .size (ver el número de elementos).


Resumen:
Array: Es como una lista ordenada donde puedes tener valores repetidos y acceder a ellos por índice.
Set: Es como una colección de valores únicos donde no puedes tener elementos repetidos y no puedes acceder a los elementos por índice.
*/