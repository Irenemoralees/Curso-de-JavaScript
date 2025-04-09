// EJERCICIO 1
class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
}



// EJERCICIO 2
class CarWithMethod {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
    
    showInfo() {
        console.log(`El coche es un ${this.brand} ${this.model}`)
    }
}



// EJERCICIO 3
let myCar = new CarWithMethod("Toyota", "Corolla")
console.log(myCar.brand)
console.log(myCar.model)
myCar.showInfo()



// EJERCICIO 4
class Vehicle {
    constructor(brand, type) {
        this.brand = brand
        this.type = type
    }

    static showType() {
        console.log("Este es un vehículo.")
    }
}

Vehicle.showType()



// EJERCICIO 6
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} hace un sonido.`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }

    speak() {
        console.log(`${this.name} ladra.`)
    }

    run() {
        console.log(`${this.name} corre.`);
    }
}

let myDog = new Dog("Rex", "Pastor Alemán");
myDog.speak()
myDog.run()



// EJERCICIO 7
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get name() {
        return this.name;
    }

    set age(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        } else {
            console.log("La edad debe ser mayor que 0");
        }
    }
}



// EJERCICIO 8
class PersonWithPrivate {
    #name
    #age
    constructor(name, age) {
        this.#name = name
        this.#age = age
    }

    // Getter para 'name'
    get name() {
        return this.#name;
    }

    // Getter para 'age'
    get age() {
        return this.#age;
    }

    // Setter para 'age'
    set age(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        } else {
            console.log("La edad debe ser mayor que 0");
        }
    }
}



// EJERCICIO 9
let person1 = new PersonWithPrivate("Carlos", 30);
console.log(person1.name)
console.log(person1.age)

person1.age = 35
console.log(person1.age)



// EJERCICIO 10
class AnimalWithSound {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} hace un sonido genérico.`);
    }
}

class Cat extends AnimalWithSound {
    constructor(name) {
        super(name)
    }

    speak() {
        console.log(`${this.name} maúlla.`);
    }
}

let myCat = new Cat("Pelusa");
myCat.speak()
