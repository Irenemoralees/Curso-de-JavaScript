// EJERCICIO 1
let mascota = {
    nombre: "Nala",
    raza: "Caniche",
    edad: 8
}



// EJERCICIO 2
console.log(mascota.nombre)
console.log(mascota.raza)
console.log(mascota.edad)



// EJERCICIO 3
mascota.chip = true



// EJERCICIO 4
delete(mascota.edad)



// EJERCICIO 5
mascota.tamaño = function() {
    console.log(`${this.nombre} es una raza de tamaño pequeño.`);
};
mascota.tamaño()



// EJERCICIO 6
for(let key in mascota){
    console.log(mascota[key])
}



// EJERCICIO 7
let mascota2 = {
    nombre: "Nala",
    raza: "Caniche",
    edad: 8,
   direccion:  {
    calle: "Av. Libertador",
    ciudad: "Buenos Aires",
    pais: "Argentina"
}};



// EJERCICIO 8
console.log(mascota2.direccion.calle)
console.log(mascota2.direccion.ciudad)
console.log(mascota2.direccion.pais)



// EJERCICIO 9
console.log(mascota == mascota2)
console.log(mascota === mascota2)



// EJERCICIO 10
console.log(mascota.name == mascota2.name)