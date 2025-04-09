// Map

// Declaración
let myMap = new Map()  // Creamos un Map vacío
console.log(myMap)  // Muestra: Map {} (un Map vacío)


// Inicialización
// Inicializamos el Map con algunos  clave-valor
myMap = new Map([
    ["name", "Irene"],  // La clave es "name" y el valor es "Irene"
    ["email", "irene@gmail.com"],  // La clave es "email" y el valor es "irene@gmail.com"
    ["age", 23]  // La clave es "age" y el valor es 23
])

console.log(myMap)  // Muestra el Map con los elementos inicializados


// Métodos y propiedades
// set: Agrega clave-valor al Map
myMap.set("alias", "iri")  // Añade la clave "alias" con el valor "iri"
myMap.set("name", "Irene Morales")  // Modifica el valor de la clave "name" a "Irene Morales"
console.log(myMap)  // Muestra el Map después de agregar y modificar elementos


// get: Obtiene el valor de una clave específica
console.log(myMap.get("name"))  // Muestra "Irene Morales", que es el valor asociado a la clave "name"
console.log(myMap.get("surname"))  // Muestra "undefined", porque "surname" no existe en el Map


// has: Verifica si una clave existe en el Map
console.log(myMap.has("surname"))  // Muestra "false", porque no existe la clave "surname"
console.log(myMap.has("age"))  // Muestra "true", porque sí existe la clave "age"


// delete: Elimina clave-valor del Map
myMap.delete("email")  // Elimina la clave "email"
console.log(myMap)  // Muestra el Map después de eliminar el par con la clave "email"


// keys: Devuelve un iterador con todas las claves del Map. Un iterador en JavaScript es un objeto que permite recorrer los elementos de una colección de datos (como un array, Map, Set, etc.) de manera secuencial, uno por uno.
console.log(myMap.keys())  // Muestra las claves: ["name", "age", "alias"]


// values: Devuelve un iterador con todos los valores del Map
console.log(myMap.values())  // Muestra los valores: ["Irene Morales", 23, "iri"]


// entries: Devuelve un iterador con todos las clave-valor del Map
console.log(myMap.entries())  // Muestra  clave-valor: [["name", "Irene Morales"], ["age", 23], ["alias", "iri"]]


// size: Devuelve el número de elementos en el Map
console.log(myMap.size)  // Muestra el número de elementos en el Map (3 en este caso)


// clear: Elimina todos los elementos del Map
myMap.clear()
console.log(myMap)  // Muestra el Map vacío después de usar "clear"
