// Objetos
// Un objeto es como una caja en la que puedes guardar cosas. Cada cosa dentro de la caja tiene un nombre (o etiqueta) y un valor.


// Sintaxis: 
// Aquí definimos un objeto llamado 'person' con tres propiedades: name, age, y alias.
let person = {
    name: "Irene",
    age: 23,
    alias: "Morales"
}


// Acceso a propiedades
// 1. Notación punto: 
console.log(person.name) // Imprime "Irene"

// 2. Notación de corchetes: 
// Usamos corchetes para acceder a las propiedades. Esto es útil cuando las propiedades contienen espacios o son variables.
console.log(person["name"]) // También imprime "Irene"


// Modificación de propiedades
//1. Podemos cambiar el valor de las propiedades del objeto:
person.name = "Irene Morales"
console.log(person.name) // Imprime "Irene Morales"

// 2. También podemos cambiar el tipo de datos de las propiedades. Por ejemplo, convertir un número a string.
console.log(typeof person.age) // Imprime "number"
person.age = "37" // Cambiamos la edad a un string
console.log(person.age) // Imprime "37"
console.log(typeof person.age) // Imprime "string"


// Eliminación de propiedades:
// Podemos eliminar propiedades de un objeto con la palabra clave 'delete'.
delete person.age

console.log(person) // La propiedad 'age' ha sido eliminada y ya no aparece en el objeto.


// Nueva propiedad
// Podemos añadir nuevas propiedades a un objeto después de su declaración.
person.email = "irene@gmail.com"
person["age"] = 23 // Añadimos de nuevo la propiedad 'age'

console.log(person) // Ahora 'person' tiene las propiedades: name, alias, email y age.


// Métodos (funciones dentro de objetos)
let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    // Definimos un método llamado 'walk' que es una función que puede ser llamada desde el objeto.
    walk: function () {
        console.log("La persona camina.")
    }
}
person2.walk() // Llamamos al método 'walk', lo que imprime "La persona camina."


// Anidación de objetos
// Los objetos pueden contener otros objetos dentro de ellos.
let person3 = {
    name: "Irene",
    age: 23,
    alias: "Morales",
    walk: function () {
        console.log("La persona camina.")
    },
    job: { // Aquí anidamos un objeto dentro de 'person3'
        name: "Programador",
        exp: 2,
        work: function () {
            console.log(`La persona de ${this.exp} años de experiencia trabaja.`)
        }
    }
}

console.log(person3) // Imprime el objeto 'person3' con todo su contenido.
console.log(person3.name) // Accedemos a la propiedad 'name' de person3
console.log(person3.job) // Accedemos al objeto anidado 'job'
console.log(person3.job.name) // Accedemos a la propiedad 'name' dentro del objeto 'job'
person3.job.work() // Llamamos al método 'work' dentro de 'job', imprime la cadena de texto con el valor de 'exp' de person3.


// Igualdad de objetos
// Los objetos en JavaScript se comparan por referencia, no por su contenido.
let person4 = {
    name: "Irene",
    alias: "Morales",
    email: "irene@gmail.com",
    age: 23
}

console.log(person) // Imprime el objeto 'person' 
console.log(person4) // Imprime el objeto 'person4'

console.log(person == person4) // Devuelve 'false' porque aunque tienen las mismas propiedades, son objetos diferentes.
console.log(person === person4) // Devuelve 'false' por la misma razón: son dos referencias distintas.

// Sin embargo, podemos comparar los valores de las propiedades individualmente.
console.log(person.age == person4.age) // Devuelve 'true' porque ambos tienen el mismo valor para la propiedad 'name'.



// Iteración sobre las propiedades de un objeto usando 'for...in'
// El bucle 'for...in' se usa para recorrer todas las **propiedades** de un objeto. 
// Es decir, puedes acceder a cada propiedad (clave) del objeto y obtener su valor. 

for (let key in person4) {
    console.log(person4[key]); // Imprime el valor de cada propiedad. 
    // Por ejemplo, si 'key' es "name", entonces 'person4["name"]' se evalúa y se imprime su valor.
}
// Esto permite recorrer todas las propiedades del objeto sin tener que saber de antemano cuáles son.


// Funciones como objetos
// En JavaScript, las funciones también pueden ser tratadas como objetos. 
// Una función constructora es una función que permite crear objetos de un tipo específico.

// Aquí definimos una función llamada 'Person' que servirá como plantilla para crear objetos de tipo 'Person'.
function Person(name, age) {
    this.name = name;  // 'this' hace referencia al objeto que estamos creando.
    this.age = age;    // Asignamos los valores de los parámetros a las propiedades del objeto.
}

// Usamos 'new' para crear una nueva instancia (objeto) de la función 'Person'.
let person5 = new Person("Irene", 23);
// Al crear 'person5', se asignan las propiedades 'name' y 'age' con los valores pasados como parámetros.


// Ahora, si imprimimos 'person5', veremos el objeto creado.
console.log(person5); // Imprime: Person { name: 'Irene', age: 23 }

// Podemos acceder a las propiedades de 'person5' como lo haríamos con cualquier objeto.
console.log(person5.name); // Imprime: Irene

// También podemos verificar el tipo de 'person5' y 'person4' usando 'typeof'.
console.log(typeof person5); // 'person5' es un objeto, así que imprime 'object'.
console.log(typeof person4); // 'person4' también es un objeto, imprime 'object'.


