// EJERCICIO 1
function saludar (nombre){
 setTimeout (() => console.log("Hola", nombre)
 , 2000)
}
saludar("Irene")



// EJERCICIO 2
function task1 (callback){
    setTimeout(() => {console.log("Tarea 1 completada")
        callback()
    }, 1000)
}

function task2 (callback){
    setTimeout(() => {console.log("Tarea 2 completada")
        callback()
    }, 1000)
}

function task3 (callback){
    setTimeout(() => {console.log("Tarea 3 completada")
        callback()
    }, 1000)
}

task1 (() =>{
    task2 (() => {
        task3 (() => {
            console.log( "Tareas completadas")
        })
    })
})



// EJERCICIO 3
function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            if (numero % 2 === 0) {
                resolve("Número par")
            } else {
                reject("Número impar")
            }
        })
    })
}

verificarNumero(4) 
.then((result) =>{console.log(result)})
.catch((error) => {console.log(error)})



// EJERCICIO 4  

function firstTask() {
return new Promise (resolve => {
    setTimeout (() => {
        console.log("Primera task completada")
        resolve()
    }, 1000)
})
}

function secondTask() {
  return new Promise (resolve => {
    setTimeout (() => {
        console.log("Segunda task completada")
        resolve()
    }, 2000)
  })  
}

function thirdTask() {
    return new Promise (resolve => { 
        setTimeout (() => {
            console.log("Tercera task completada")
            resolve()
        }, 1500)
    })
}

firstTask().then(secondTask).then(thirdTask)



// EJERCICIO 5
async function executeTasks(){
    await firstTask()
    await secondTask()
    await thirdTask()
}

executeTasks()



//EJERCICIO 6 no esta terminado
async function getUser(id) {
    try {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id < 5) {
                    resolve({ id, nombre: "Usuario " + id })
                } else {
                    reject("Usuario no encontrado")
                }
            }, 2000)
        })
    } catch (error) {
        console.error("Error:", error)
    }
}


getUser(3).then(console.log)
getUser(6).then(console.log)



// EJERCICIO 7
  console.log("Inicio")
  setTimeout(() => console.log("setTimeout ejecutado"), 0)
  Promise.resolve().then(() => console.log("Promesa resuelta"))
  console.log("Fin")

  /*
  1- JavaScript ejecuta primero todo el código síncrono (Call Stack). En este caso sería Inicio y Fin.
  2- Luego ejecuta las Promesas, como tiene .then(), la función dentro de .then() se agrega a la Microtask Queue (tareas de alta prioridad).
  3- Después ejecuta setTimeout() en la Macrotask Queue.
  4- Promise.resolve() no necesita new porque ya devuelve una promesa resuelta automáticamente, porque Promise.resolve() viene siendo lo mismo que new Promise((resolve) => resolve());
  */



  // EJERCICIO 8
  function person1 (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("✅ Irene lista")
        }, 2000)
    })
}

  function person2 (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("✅ Roberto listo")
        }, 3000)
    })
}

  function person3 (){
    return new Promise ((resolve) => {
        setTimeout(() => { 
            resolve("✅ Mercedes lista")
        }, 4000)
    })
}

  /*
  Promise.all() es un método en JavaScript que ejecuta varias promesas en paralelo y espera a que todas se resuelvan. Si todas tienen éxito, devuelve un array con los resultados.
❌ Si una sola promesa falla, TODA la operación falla.
  */

Promise.all([person1(), person2(), person3()])
.then(result => console.log(result))
.catch(error => console.error("Error:", error))



// EJERCICIO 9
async function waitSeconds(segundos) {
    return await new Promise ((resolve) => {
        setTimeout(() =>{resolve("Tiempo finalizado")
        },  segundos * 1000)
    })
}

waitSeconds(10)
.then(result => {console.log(result)})
.catch(error => {console.log(error)})

// EJERCICIO 10
async function checkBalance() {
    try{
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(500)
        }, 1000)
    })
}catch(error){
    console.log(error)
}
}

async function withdrawMoney(amount, saldo) {
    try{
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= saldo) {
                saldo -= amount;
                resolve(saldo)
            } else {
                reject("Error: Fondos insuficientes")
            }
        }, 2000)
    })
}catch(error){
    console.log(error)
}
}

async function atmSimulation() {
    try {
        let saldo = await checkBalance()
        console.log(`Saldo disponible: ${saldo}$`)

        console.log("Retirando 300$...")
        saldo = await withdrawMoney(300, saldo)
        console.log(`Operación exitosa, saldo restante: ${saldo}$`)

        console.log("Retirando 300$...")
        saldo = await withdrawMoney(300, saldo)
        console.log(`Operación exitosa, saldo restante: ${saldo}$`)
    } catch (error) {
        console.error(error)
    }
}

atmSimulation()
