// Objetos avanzados
// - Prototipos y Herencia

// ---------------- PROTOTIPOS ----------------
// Un prototipo es como un "modelo base" de un objeto. Todos los objetos en JavaScript tienen un prototipo, que es otro objeto del cual heredan propiedades y métodos.

// Definimos un objeto "person" con propiedades y métodos
let person = {
    name: "Irene",
    age: 23,
    greet() {
        console.log(`Hola, soy ${this.name}`); // Método que imprime un saludo con el nombre
    }
};

// Mostramos el prototipo del objeto person (esto suele ser un objeto vacío en este caso)
console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));

// Agregamos un nuevo método "sayAge" al objeto person
person.sayAge = function () {
    console.log(`Tengo ${this.age} años`);
};

// Mostramos el objeto actualizado
console.log(person);
// Llamamos al nuevo método agregado
person.sayAge();


// ---------------- HERENCIA ----------------
// Heredar significa que un objeto puede usar las propiedades y métodos de otro objeto sin necesidad de copiarlos.

// Creamos un nuevo objeto "programmer" que hereda de "person"
let programmer = Object.create(person);

// Agregamos una nueva propiedad al objeto "programmer"
programmer.language = "JavaScript";

// Modificamos la propiedad "name" del objeto "programmer"
programmer.name = "Morales";

// Mostramos el nombre de "person" (no cambia) porque lo hemos modificado en programmer no en person
console.log(person.name); // "Irene"

// Intentamos acceder a "language" desde "person" (no existe en este objeto) porque en donde lo hemos creado es en programmer
console.log(person.language); // undefined

// Mostramos los valores heredados y propios de "programmer"
console.log(programmer.name); // "Morales" (sobrescribió el valor heredado)
console.log(programmer.age); // 23 (heredado de "person")
console.log(programmer.language); // "JavaScript" (propia de "programmer")

// Llamamos a los métodos heredados
programmer.greet(); // "Hola, soy Morales" (hereda y usa la propiedad modificada)
programmer.sayAge(); // "Tengo 23 años" (hereda y usa la propiedad "age" de "person")


// - Métodos estáticos y de instancia
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Irene", 23)
newPerson.greet()

// Ahora se utiliza más las clases ya que es un código mas legible y fácil de usar
/* Asin se vería el último código siendo una clase:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hola, soy ${this.name}`);
    }
}

let newPerson = new Person("Irene", 23);
newPerson.greet();

*/

// - Métodos avanzados
// Creamos un objeto 'personCore' que tiene la propiedad 'name'
let personCore = { name: "Irene" }

// Creamos otro objeto 'personDetails' que tiene las propiedades 'age' y 'alias'
let personDetails = { age: 23, alias: "Morales" }


/* Usamos Object.assign() para combinar los dos objetos en uno nuevo.
 El primer objeto es 'personCore' y el segundo objeto es 'personDetails'.
 El resultado será un nuevo objeto con todas las propiedades de ambos. */
let fullPerson = Object.assign(personCore, personDetails)

console.log(fullPerson)

// keys, values, entries
console.log(Object.keys(fullPerson)) //Nos devolvera en un array las claves
console.log(Object.values(fullPerson))//Nos devolvera en un array los valores 
console.log(Object.entries(fullPerson))//Nos devolvera un array con una lista con las claves y valores

