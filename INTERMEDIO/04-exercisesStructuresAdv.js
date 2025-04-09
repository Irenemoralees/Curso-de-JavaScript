// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const array1 = [1,2,3,4,5,6,7,8,9,10]
const mapArray = array1.map((element) => element /2)
console.log(mapArray)
const filterArray = array1.filter((element) => element %2 === 0)
console.log(filterArray)
const reduceArray = array1.reduce((result, current) => result += current,2)
console.log(reduceArray)
// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const cubo = array1.map(element => element ** 3).filter(element => element %2 === 0)
console.log(cubo)
// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
const animales =[ ["Tierra", ["leon", "perro"]], ["Agua", ["delfin", "pez"]]]
console.log(animales.flat(1))
console.log(animales.flat(2))
// 4. Ordena un array de números de mayor a menor
const mayorMenor = array1.sort ((a,b) => b-a)
console.log(mayorMenor)
// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let set1 = new Set ([1,2,3,4,5])
let set2 = new Set ([4,5,6,7,8])
let union = new Set ([...set1, ...set2])
console.log(union)

const intersenccion = new Set ([...set1].filter((element) => set2.has(element)))
console.log(intersenccion)
const difference = new Set ([...set1].filter(element => !set2.has(element)))
console.log(difference)
// 6. Itera los resultados del ejercicio anterior
intersenccion.forEach(element => console.log(element))
difference.forEach(element => console.log(element))
union.forEach(element => console.log(element))
// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
const usuarios = new Map ([["usuario1", {nombre : "Irene", edad: 23, correo: "irenemoraleess22@gmail.com"}],
["usuario2", {nombre : "Roberto", edad: 30, correo: "roberto@gmail.com"}],
["usuario3", {nombre : "Sara", edad: 5, correo: "sara@gmail.com"} ]])

usuarios.forEach((values, keys) => {console.log(`${keys}: ${values}`)})
// 8. Dado el mapa anterior, crea un array con los nombres
const nombres = Array.from(usuarios.values()).map(usuario => usuario.nombre)
console.log(nombres)
// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const email = Array.from(usuarios.values()).filter(usuario => usuario.edad >=18).map(usuario => usuario.correo)
const newSet = new Set (email)
console.log(newSet)
// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
const newObject = Object.fromEntries(usuarios)
console.log(newObject)
const newMap = new Map (Object.values(newObject).map(usuario => [usuario.correo, usuario]))
newMap.forEach((value, key) =>{ console.log(`${key}:`, value)})