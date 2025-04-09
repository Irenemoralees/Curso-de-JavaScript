// EJERCICIO 1
function age (n){
    return `Hola tengo ${n} años`
}

function returnAge(){
    return age
}

const age2 = returnAge()
console.log(age2(23))



// EJERCICIO 2
function curryMult(a){
     return function(b){
        return function(c){
            return (a * b * c)
        }
     }
}

const multAB = curryMult(3)(6)
console.log (multAB(2))



// EJERCICIO 3
function potencia (base, exponente){
    if(exponente === 0){
        return 1
    }
   return base **  exponente
}

console.log(potencia(2, 4))



// EJERCICIO 4
function createCounter(initialValue) {
    let value = initialValue
    return {
        increment: function() {
            value++
        },
        decrement: function() {
            value--
        },
        getValue: function() {
            return value
        }
    }
}

const counter = createCounter(5)

console.log(counter.getValue())
counter.increment()
console.log(counter.getValue())
counter.decrement()
console.log(counter.getValue())




 // EJERCICIO 5
 function sumManyTimes(multiplier, ...numbers){
    let suma = 0
    for(let number of numbers){
        suma += number
    }
    return suma * multiplier
 }


 const result = sumManyTimes(2, 2,3,4)
 console.log(result)



 // EJERCICIO 6
 function processCallback (callback, ...numbers){
    let suma= 0
    for(let number of numbers){
        suma += number
    }

    callback(suma)
    }
    
   processCallback (result => {
        console.log("La suma es:", result);
    }, 1, 2, 3, 4, 5); 



// EJERCICIO 7
    function parcial(a){
        return function suma (b, c){
          return  a + b + c
        }
    }

    const sumA = parcial(6)
    console.log( sumA(5,8))



// EJERCICIO 8
   const numbers = [6,9,2,4,1]
   function sumaConSpread(a,b,c){
return a + b + c
   }

   console.log(sumaConSpread(...numbers))



// EJERCICIO 9

const dividiendo = (a,b) => a/b

console.log(dividiendo(10,2))



// EJERCICIO 10
const edades = {
    edad : 24,
    greeting: function() {
    console.log(`Hola tengo ${this.edad} años`)}
}
edades.greeting()