// EJERCICIO 1
miObjeto = {
    name : "objeto1",
}

Object.getPrototypeOf(miObjeto).mostrarMensaje = function(){
    console.log(`Hola soy ${this.name}`)
}

miObjeto.mostrarMensaje()



// EJERCICIO 2
let objeto2 = Object.create(miObjeto)
objeto2.name = "objeto2"
objeto2.mostrarMensaje()



// EJERCICIO 3
let person = {
    nombre : "Roberto",

    greet() {
        console.log(`Buenas, me llamo ${this.nombre}`)
    }
}



// EJERCICIO 4
let correo = {
    nombre : "Irene",
    email : "irene@gmail.com",
    contraseña : 1234,

    get mostrarCorreo(){
        return this.email
    },

    set cambiarContraseña(newContraseña){
     this.contraseña = newContraseña
    }
}

console.log(correo)
console.log(correo.mostrarCorreo)
console.log(correo.cambiarContraseña = 54321)
console.log(correo)



// EJERCICIO 5
let datos = {name : "Juan", edad : 27}
let datosAntropometricos = {peso : 85, altura : 1.85}
let allDatos = Object.assign(datos, datosAntropometricos)
console.log(allDatos)



// EJERCICIO 6
class Person {
    constructor(nombre, edad){
        if (new.target === Person){
            throw new Error ("No se puede instanciar directamente de la clase base")
        }
        this.nombre = nombre,
        this.edad = edad
    }

    caracteristicas(){
        throw new Error ("Tienes que definir el método en la subclase")
    }
}



// EJERCICIO 7
class Person1 extends Person {
    caracteristicas(){
        console.log(`Hola me llamo ${this.nombre} y tengo pecas.`)
    }
}
class Person2 extends Person {
    caracteristicas(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad}`)
    }
}

let person1 = new Person1("Roberto", 30)
let person2 = new Person2 ("Lorena", 43)

person1.caracteristicas()
person2.caracteristicas()



// EJERCICIO 8
const estudiante = {
    estudiar(){
        console.log (`${this.nombre} esta estudiando`)
    }
}

class Person3 extends Person{}
class Person4 extends Person{}

Object.assign(Person3.prototype, estudiante)
Object.assign(Person4.prototype, estudiante)

let person3 = new Person3 ("Tatiana", 18)
let person4 = new Person4 ("Sebastian", 64)
person3.estudiar()
person4.estudiar()



// EJERCICIO 9
class Single{
    constructor(usuario){
        if(Single.instance){
            return Single.instance
        }
        this.usuario = usuario,
        Single.instance = this
    }
}

let usuario1 = new Single("Irene")
let usuario2 = new Single("Pepe")
let usuario3 = new Single("Juan")

console.log(usuario1)
console.log(usuario2)
console.log(usuario3)



// EJERCICIO 10
const persona = {
    nombre: "Ana",
    edad: 25
}

const handler = {
    get(target, propiedad) {
        console.log(`Accediendo a la propiedad "${propiedad}"`)
        return propiedad in target ? target[propiedad] : "Propiedad no encontrada"
    },
    set(target, propiedad, valor) {
        if (propiedad === "edad" && typeof valor !== "number") {
            console.log("La edad debe ser un número.")
            return false
        }
        console.log(`Modificando "${propiedad}" con el valor "${valor}"`)
        target[propiedad] = valor
        return true
    }
};

const proxyPersona = new Proxy(persona, handler)
console.log(proxyPersona.nombre)
console.log(proxyPersona.altura)


proxyPersona.edad = 30
proxyPersona.edad = "treinta"
