// Las clases son una forma de crear plantillas para objetos en JavaScript.
// Nos permiten definir propiedades y métodos que los objetos creados a partir de la clase tendrán.


// Definimos una clase llamada 'Person'
class Person {

    // El método constructor es donde definimos las propiedades del objeto.
    constructor(name, age, alias) {
        this.name = name   // 'this' se refiere al objeto que estamos creando
        this.age = age     // Asigna el valor de 'age' al objeto creado
        this.alias = alias // Asigna el valor de 'alias' al objeto creado
        //Pondremos el mismo nombre de la propiedad por buenas prácticas.
    }
}

// Aquí estamos creando dos objetos a partir de la clase 'Person'.
// Usamos el operador 'new' para crear instancias de la clase.
let person = new Person("Irene", 37, "Morales")
let person2 = new Person("Irene", 37, "Morales")

console.log(person)
console.log(person2)


// Mostramos el tipo de la variable 'person'. Debería ser un objeto (tipo 'object').
console.log(typeof person)


// Clases con valores por defecto para las propiedades.
// Si no pasamos un valor al crear el objeto, las propiedades tendrán los valores por defecto que definimos.
class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Creamos un objeto 'person3' con valores predeterminados.
// Solo pasamos valores para 'name' y 'age', por lo que 'alias' tomará el valor predeterminado.
let person3 = new DefaultPerson("Irene", 23)

console.log(person3)  


// Acceso a propiedades de un objeto.
// Se puede acceder a las propiedades de un objeto de dos maneras:
// 1. Usando el punto (.) y el nombre de la propiedad.
console.log(person3.alias)  // Muestra "Sin alias" 

// 2. Usando corchetes y el nombre de la propiedad como una cadena de texto.
console.log(person3["alias"])  // Muestra "Sin alias"

// Cambiamos el valor de la propiedad 'alias' en el objeto person3
person3.alias = "Morales"

console.log(person3.alias)  // Muestra "Morales" ahora que cambiamos el valor


// Funciones dentro de las clases
// Las funciones dentro de las clases son los métodos de esos objetos.
class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    // Método que imprime un mensaje 
    walk() {
        console.log("La persona camina.")
    }
}

// Creamos un objeto 'person4' a partir de la clase PersonWithMethod
let person4 = new PersonWithMethod("Irene", 23, "Morales")
person4.walk()  // Llamamos al método 'walk', que imprime "La persona camina."


// Propiedades privadas
// Usamos el símbolo '#' para crear propiedades privadas en las clases.
// Estas propiedades no pueden ser accedidas directamente desde fuera de la clase.
class PrivatePerson {

    #bank  // Propiedad privada (no se puede acceder directamente)

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank  // Asignamos un valor a la propiedad privada
    }

    pay() {
        console.log(this.#bank)  
    }

}

// Creamos un objeto 'person5' con la propiedad privada '#bank'
let person5 = new PrivatePerson("Irene", 23, "Morales", "IBAN 897465783")

// No podemos acceder directamente a la propiedad privada '#bank' desde fuera de la clase
// console.log(person5.bank)  // Esto causaría un error
console.log(person5)  // Mostramos el objeto, sin mostrar la propiedad privada


// Getters y Setters
// Los getters y setters son métodos especiales para acceder o modificar propiedades privadas.
class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    // Getter: permite acceder al valor de la propiedad 'name'
    get name() {
        return this.#name
    }

    // Setter: permite cambiar el valor de la propiedad 'bank'
    set bank(bank) {
        this.#bank = bank
    }

}

// Creamos un objeto 'person6' y usamos el getter para acceder a la propiedad privada 'name'.
person6 = new GetSetPerson("Irene", 23, "Morales", "IBAN 897465783")

console.log(person6)  
console.log(person6.name)  // Muestra "Irene" usando el getter

// Usamos el setter para cambiar el valor de la propiedad privada 'bank'
person6.bank = "new IBAN 764567890"


// Herencia
// La herencia nos permite crear clases que heredan propiedades y métodos de otras clases.
class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

// La clase 'Dog' hereda de la clase 'Animal' al poner extends.
class Dog extends Animal {

    // Sobrescribimos el método 'sound' para que el perro haga un sonido específico
    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

// La clase 'Fish' también hereda de la clase 'Animal', pero añade su propio comportamiento
class Fish extends Animal {

    constructor(name, size) {
        super(name)  // Llamamos al constructor de la clase padre 'Animal' con super()
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

// Creamos objetos de las clases 'Dog' y 'Fish', que heredan de 'Animal'
let myDog = new Dog("MoralesDog")
myDog.run()  // "El perro corre"
myDog.sound()  // "Guau!"

let myFish = new Fish("MoralesFish", 10)
myFish.swim()  // "El pez nada"
myFish.sound()  // "El animal emite un sonido genérico"


// Métodos estáticos
// Los métodos estáticos son métodos que pertenecen a la clase y no a las instancias de la clase.
// Se llaman directamente a través de la clase, no a través de un objeto.
class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

// Llamamos al método estático sin necesidad de crear una instancia de la clase
console.log(MathOperations.sum(5, 10))  // Muestra 15
