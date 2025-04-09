// Clases avanzadas

// Definimos una clase llamada Person
class Person {
    constructor(name, age) { // Constructor que recibe el nombre y la edad
        this.name = name // Guardamos el nombre en la propiedad "name"
        this.age = age // Guardamos la edad en la propiedad "age"
    }

    greet() { // Método para saludar
        console.log(`Hola, soy ${this.name}`) // Muestra un mensaje con el nombre de la persona
    }
}

const person = new Person("Irene", 23) // Creamos una instancia de Person
person.greet() // Llamamos al método greet()

// Agregamos un nuevo método a la instancia person después de haberla creado
person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}
person.sayAge() // Llamamos al nuevo método

// - Abstracción (evitar instanciación directa de una clase base)
class Animal {
    constructor(name) {
        if (new.target === Animal) { // Si intentamos instanciar Animal directamente, lanzamos un error
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound() { // Método abstracto que debe ser implementado en las subclases
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

// Intentar crear una instancia de Animal daría error
// const animal = new Animal("Lili")
// console.log(animal)

// - Polimorfismo: El polimorfismo es un concepto de la programación orientada a objetos (POO) que permite que diferentes clases tengan el mismo método, pero con implementaciones distintas.
class Cat extends Animal {
    makeSound() { // Implementamos el método makeSound() en Cat
        console.log("Miau!")
    }
}

class Dog extends Animal {
    makeSound() { // Implementamos el método makeSound() en Dog
        console.log("Guau!")
    }
}

const cat = new Cat("Mimi") // Creamos un gato
console.log(cat)
cat.makeSound() // "Miau!"

const dog = new Dog("Pluto") // Creamos un perro
console.log(dog)
dog.makeSound() // "Guau!"

// - Mixins (añadir funcionalidades a clases sin herencia) : Los mixins son una forma de compartir funcionalidades entre clases sin usar herencia. En otras palabras, permiten "mezclar" métodos en varias clases sin necesidad de que esas clases hereden de una misma clase base.
const FlyMixin = { // Objeto con un método que permite volar
    fly() {
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal { } // Clase Bird sin métodos propios
class Dragon extends Animal { } // Clase Dragon sin métodos propios

// Mezclamos FlyMixin en Bird y Dragon
Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("Tintin")
console.log(bird.name)
bird.fly() // "Tintin está volando"

const dragon = new Dragon("Scar")
console.log(dragon.name)
dragon.fly() // "Scar está volando"

/*El uso de Object.assign() permite mezclar comportamientos de un objeto (como FlyMixin) en el prototype de otra clase (como Bird o Dragon). Esta técnica se conoce como mezcla (mixin) y permite que diferentes clases o objetos compartan funcionalidades sin tener que recurrir a la herencia tradicional.

Resumen del uso de prototype en este ejemplo:
FlyMixin contiene un método que queremos que otras clases puedan usar.
Object.assign(Bird.prototype, FlyMixin) y Object.assign(Dragon.prototype, FlyMixin) agregan el método fly de FlyMixin a los prototipos de las clases Bird y Dragon.
Ahora, todas las instancias de Bird y Dragon tienen el método fly disponible, porque los prototipos de ambas clases lo incluyen.
En este caso, prototype se utiliza para compartir funcionalidades entre diferentes clases sin necesidad de herencia directa, y la mezcla (mixin) de objetos permite que clases que no tienen esos métodos por sí mismas puedan usarlos.

Otra situación en la que deberiamos utilizar prototype:
 La principal razón para usar el prototype en lugar de agregar métodos dentro de la función constructora es por eficiencia en el uso de memoria.
Veamos un resumen rápido de la diferencia en términos de memoria:

Si defines el método dentro del constructor:
Cada objeto creado a partir de ese constructor obtiene su propia copia del método.
Si creas muchos objetos (por ejemplo, 100 personas), cada uno tendrá su propia copia del método, lo cual ocupa más memoria.

Si defines el método en el prototype:
Todos los objetos creados a partir de ese constructor comparten el mismo método.
En lugar de crear 100 copias del mismo método, solo hay una copia en memoria que todos los objetos pueden usar.
 */



// - Patrón Singleton (una única instancia de una clase)
class Session {
    constructor(name) {
        if (Session.instance) { // Si ya existe una instancia, se devuelve en vez de crear otra
            return Session.instance
        }
        this.name = name
        Session.instance = this // Guardamos la instancia para que siempre sea la misma
    }
}

const session1 = new Session("Irene Morales")
const session2 = new Session()
console.log(session1.name) // "Irene Morales"
console.log(session2.name) // "Irene Morales"
console.log(session1 === session2) // true (ambas son la misma instancia)

const session3 = new Session("Morales")
console.log(session3.name) // "Irene Morales" (no cambia, porque Singleton mantiene la misma instancia)
console.log(session2 === session3) // true

// - Symbol (propiedades privadas únicas)
const ID = Symbol("id") // Creamos un Symbol para usar como clave privada

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random() // Asignamos un ID único a cada usuario
    }

    getId() { // Método para obtener el ID (ya que no es accesible directamente)
        return this[ID]
    }
}

const user = new User("Irene")
console.log(user.name) // "Irene"
console.log(user.ID) // undefined (no es accesible directamente)
console.log(user.getId()) // Devuelve el ID generado

// - instanceof (comprobar el tipo de un objeto)
class Car { }
const car = new Car()
console.log(car instanceof Car) // true (car es una instancia de Car)

// - create (crear objetos con un prototipo específico)
const anotherCar = Object.create(Car.prototype) // Creamos un objeto con el prototipo de Car
console.log(anotherCar instanceof Car) // true


// - Proxy (interceptar accesos a propiedades de un objeto)
const proxy = {
    // Esta función intercepta los accesos a las propiedades del objeto
    get(target, property) { 
        console.log(`Se accede a la propiedad ${property}`); // Se imprime un mensaje cuando se accede a una propiedad
        return target[property]; // Devuelve el valor real de la propiedad
    },

    // Esta función intercepta las asignaciones de valores a las propiedades
    set(target, property, value) { 
        if (property === "balance" && value < 0) { // Si la propiedad es "balance" y el valor es negativo
            throw new Error("El saldo no puede ser negativo"); // Lanza un error
        }
        target[property] = value; // Asigna el nuevo valor a la propiedad
    }
};

// Definimos una clase llamada BankAccount que representa una cuenta bancaria
class BankAccount {
    constructor(balance) {
        this.balance = balance; // Propiedad balance, que es el saldo de la cuenta
    }
}

// Creamos una nueva instancia de BankAccount (cuenta bancaria) y la pasamos a Proxy
const account = new Proxy(new BankAccount(100), proxy); // Creamos el proxy que interceptará los accesos y modificaciones

console.log(account.balance); // Aquí se accede a la propiedad "balance"
// Al acceder a "balance", el proxy intercepta y muestra el mensaje "Se accede a la propiedad balance"


// Intentar asignar un saldo negativo daría error
// account.balance = -10


/* Nos podriamos preguntar el porque no creamos el get y el set en la misma clase sin usar Proxy si hace lo mismo, aqui te dejo una explicación sencilla: 
Resumen:
Usar get y set en la clase es más directo y sencillo cuando solo necesitas controlar el acceso a propiedades específicas de una clase.
Usar Proxy te ofrece más flexibilidad y control para interceptar no solo el acceso y modificación de propiedades, sino cualquier acción sobre el objeto, como llamar a métodos, comprobar propiedades, etc.
¿Cuándo usar cuál?
Si necesitas controlar cómo se accede o modifica una propiedad específica dentro de un objeto, puedes usar los accesores get y set en la clase.
Si necesitas un control más avanzado sobre cómo interactúan las personas con tu objeto, o si quieres aplicar lógica similar a varias clases u objetos, entonces un Proxy es una mejor opción.
*/
