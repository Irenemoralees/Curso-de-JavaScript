// EJERCICIO 1
let ages = [24, 5, 10, 18, 54, 83]

const mapAges = ages.map(age => console.log(age))
const filterAges = ages.filter(age => age >= 18)
console.log(filterAges)
const reduceAges = ages.reduce ((result, current) => result * current, 1)
console.log(reduceAges)



// EJERCICIO 2
const numbers = [1,2,3,4,5,6,7,8,9,10]
const numbersCubo = numbers.map(number => number ** 3)
console.log(numbersCubo)
let pares = numbersCubo.filter (number => number % 2 === 0)
console.log(pares)



// EJERCICIO 3
const animals =[ ["Agua", ["Delfin", "Tiburon"]], ["Tierra", ["Elefante", "León"]], ["Aire", ["Aguila", "Murciélagos"]]]

 console.log(animals.flat(1))
 console.log(animals.flat(2))

 let allAnimals = animals.flatMap(([category, animalsList]) => animalsList);

console.log(allAnimals);



// EJERCICIO 4
const numeros = [12, 4, 34, 8, 95, 2]
const ordenarNumeros = numeros.sort((a, b) => b - a)
console.log(ordenarNumeros)



// EJERCICIO 5
const set1 = new Set (["a", "b", "c", "d"])
const set2 = new Set (["a", "d", "e", "f", "g"])

const union = new Set ([...set1, ...set2])
console.log(union)

const interseccion = new Set ([...set1].filter (element => set2.has (element) ) )
console.log(interseccion)

const diferencia =  new Set ([...set1].filter (element => !set2.has (element)))
console.log(diferencia)



// EJERCICIO 6
union.forEach(element => console.log(element))
interseccion.forEach(element => console.log(element))
diferencia.forEach(element => console.log(element))



// EJERCICIO 7
const usuarios = new Map([
    ["usuario1", { nombre: "Irene", edad: 23, email: "irene@gmail.com" }],
    ["usuario2", { nombre: "Roberto", edad: 30, email: "robe@gmail.com" }],
    ["usuario3", { nombre: "Maria", edad: 27, email: "maria@gmail.com" }],
    ["usuario4", { nombre: "Sara", edad: 5, email: "sara@gmail.com" }]
])

usuarios.forEach((value, key) => {
    console.log(`${key} : Nombre=${value.nombre}, Edad=${value.edad}, Email=${value.email}`)
})



// EJERCICIO 8 
const nombres = Array.from(usuarios.values()).map(usuario => usuario.nombre)
console.log(nombres)



// EJERCICIO 9
const email = Array.from(usuarios.values()).filter(usuario => usuario.edad >= 18).map(usuario => usuario.email)
const setEmail = new Set(email)
console.log(setEmail)



// EJERCICIO 10
const mapObject = Object.fromEntries(usuarios)
const objectMap = new Map(
    Object.values(mapObject).map(usuario => [usuario.email, usuario])
);

objectMap.forEach((value, key) => {
    console.log(`${key} :`, value);
});