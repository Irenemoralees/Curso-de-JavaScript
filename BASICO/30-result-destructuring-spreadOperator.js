// EJERCICIO 1
let colors = ["naranja", "rojo", "amarillo", "celeste"];
let [color1, color2] = colors
console.log(color1)
console.log(color2)



// EJERCICIO 2
let [color3 , color4 = "verde", color5 ] = colors;  
console.log(color3);  // Muestra "naranja"
console.log(color4);  // Muestra "rojo" 
console.log(color5);  // Muestra "amarillo" 



// EJERCICIO 3
let person = {
  name: "Juan",
  age: 25,
  alias: "juanito"
}

let { name, age } = person  // Extraemos las propiedades 'name' y 'age' del objeto
console.log(name) // Muestra "Juan"
console.log(age)   // Muestra 25



// EJERCICIO 4
let { name: fullName, age: yearsOld } = person
console.log(fullName);  // Muestra "Juan"
console.log(yearsOld);  // Muestra 25



// EJERCICIO 5
let person2 = {
  name: "Maria",
  age: 28,
  job: {
    title: "Desarrolladora",
    yearsOfExperience: 5
  }
};

let { name: name2, job: { title, yearsOfExperience } } = person2
console.log(name2)
console.log(title)
console.log(yearsOfExperience)



// EJERCICIO 6
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let combinedArray = [...array1, ...array2]
console.log(combinedArray)



// EJERCICIO 7
let copiedArray = [...array1]
console.log(copiedArray)



// EJERCICIO 8
let person3 = { name: "Carlos", age: 30 }
let contactInfo = { email: "carlos@example.com", phone: "1234567890" }
let combinedPerson = { ...person3, ...contactInfo }
console.log(combinedPerson)



// EJERCICIO 9
let copiedPerson = { ...person3 }
console.log(copiedPerson)



// EJERCICIO 10
let person4 = { name: "Laura", age: 27, country: "España" };
let { name: name4, ...rest } = person4
console.log(name4)
console.log(rest)
