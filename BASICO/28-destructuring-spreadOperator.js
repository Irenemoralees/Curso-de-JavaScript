let myArray = [1, 2, 3, 4];  // Declaramos un array con 4 elementos

let person = { 
    name: "Irene",  // Propiedad-> name, valor->"Irene" del objeto
    age: 23,        // Propiedad age del objeto
    alias: "Morales"  // Propiedad alias del objeto
};

// 1. Acceder a valores individuales de un array y un objeto sin desestructuración
let myValue = myArray[1];  // Accedemos al segundo elemento del array (índice 1)
console.log(myValue);  // Muestra "2"

let myName = person.name;  // Accedemos a la propiedad 'name' del objeto
console.log(myName);  // Muestra "Irene"


// 2. Desestructuración (Destructuring)
// 2.1 Desestructuración de un array
// Usamos la desestructuración para extraer los valores del array directamente en variables
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray;
console.log(myValue0);  // Muestra "1"
console.log(myValue1);  // Muestra "2"
console.log(myValue2);  // Muestra "3"
console.log(myValue3);  // Muestra "4"
console.log(myValue4);  // Muestra 'undefined' porque no hay un quinto valor en el array

// 2.2 Desestructuración con valores predeterminados
// Si un valor no está presente en el array, podemos establecer un valor predeterminado
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray;
console.log(myValue5);  // Muestra "1"
console.log(myValue6);  // Muestra "2"
console.log(myValue7);  // Muestra "3"
console.log(myValue8);  // Muestra "4"
console.log(myValue9);  // Muestra "0", ya que no hay un quinto valor en el array, se asigna 0 como predeterminado

// 2.3 Ignorar elementos de un array con desestructuración
// Usamos una coma para saltarnos un valor específico del array
let [myValue10, , , myValue13] = myArray;
console.log(myValue10);  // Muestra "1"
console.log(myValue13);  // Muestra "4"

// 2.4 Desestructuración de un objeto
// Extraemos las propiedades del objeto directamente en variables
let { name, age, alias } = person;
console.log(name);  // Muestra "Irene"
console.log(age);   // Muestra 23
console.log(alias); // Muestra "Morales"

// 2.5 Desestructuración con valores predeterminados en objetos
// Si una propiedad no existe, podemos asignar un valor predeterminado
let { name2, age2, alias2, email = "email@email.com" } = person;
console.log(name2);  // Muestra 'undefined', ya que 'name2' no existe, porque en los objetos tienes que poner el nombre exacto de cada propiedad para poder acceder a ellas.
console.log(age2);   // Muestra 'undefined', ya que 'age2' no existe
console.log(alias2); // Muestra 'undefined', ya que 'alias2' no existe
console.log(email);  // Muestra "email@email.com" porque 'email' no estaba en el objeto pero tiene un valor predeterminado

// 2.6 Desestructuración con nuevos nombres de variables
// Asignamos nuevos nombres a las propiedades al desestructurar
let { alias: alias3, name: name3, age: age3 } = person;
console.log(name3);  // Muestra "Irene" porque lo estamos renombrando y con esta manera si podriamos acceder al valor de la propiedad aunque tenga diferente nombre.
console.log(age3);   // Muestra 23
console.log(alias3); // Muestra "Morales"

// 2.7 Desestructuración de objetos anidados
// Si el objeto contiene otro objeto, también podemos desestructurarlo
let person3 = {
    name: "Irene",
    age: 37,
    alias: "Morales",
    walk: function () { console.log("La persona camina.") },
    job: {  // Este es el objeto anidado 'job'
        name: "Programador",
        exp: 2,
        work: function () {
            console.log(`La persona de ${this.exp} años de experiencia trabaja.`)
        }
    }
};

// Desestructuramos el objeto 'person3' y accedemos al objeto anidado 'job'
let { name: name4, job: { name: jobName } } = person3;
console.log(name4);   // Muestra "Irene"
console.log(jobName); // Muestra "Programador"

// 3. Spread Operator

// 3.1 Propagación en arrays
// Usamos el spread operator (...) para copiar elementos de un array y agregar nuevos valores
let myArray2 = [...myArray, 5, 6]; 
console.log(myArray2);  // Muestra: [1, 2, 3, 4, 5, 6]

// 3.2 Copia de arrays con el spread operator
// Usamos el spread operator para hacer una copia del array original
let myArray3 = [...myArray];
console.log(myArray3);  // Muestra: [1, 2, 3, 4]

// 3.3 Combinación de arrays
// Usamos el spread operator para combinar varios arrays en uno solo
let myArray4 = [...myArray, ...myArray2, ...myArray3];
console.log(myArray4);  // Muestra: [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4]

// 3.4 Propagación en objetos
// Usamos el spread operator para copiar un objeto y agregar nuevas propiedades
let person4 = { ...person, email: "irene@gmail.com" };
console.log(person4);  // Muestra el objeto person con la nueva propiedad 'email'

// 3.5 Copia de objetos con el spread operator
// Usamos el spread operator para hacer una copia superficial del objeto 'person'
let person5 = { ...person };
console.log(person5);  // Muestra una copia del objeto 'person'
