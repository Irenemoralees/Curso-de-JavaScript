// EJERCICIO 1
function suma (a,b){
    return a + b
  }
  console.log(suma(5,7))
  
  
  
  // EJERCICIO 2
  //ESTE EJERCICIO LO HE HECHO DE DOS MANERA DIFERENTES
  // 1
  function mayor (arry){
    let numeroMayor=0
    for(let i=0; i<arry.length; i++){
      if(arry[i] > numeroMayor){
        numeroMayor=arry[i]
      }
    }
    return numeroMayor
  }
  console.log(mayor([78,6,34,12,1,90,67]))
  
  
  //2
  function mayor(arry) {
    return Math.max(...arry); // Usamos Math.max con el spread operator para obtener el mayor número
  }
  
  console.log(mayor([78, 6, 34, 12, 1, 90, 67])); // Esto imprimirá: 90
  
  
  
  // EJERCICIO 3
  function vocales(string){
    let vocales= "aeiouAEIOU"
    let contador=0
    for(let i=0; i<string.length; i++){
      if(vocales.includes(string[i])){
         contador++
         }
    }
    return contador
  }
  
  console.log(vocales("hola soy de otro planeta"))
  
  

  // EJERCICIO 4
  function mayusculas(array){
  
    for(let i=0; i<array.length;i++){
    return array[i].toUpperCase()
    }
  
  }
  console.log(mayusculas(["irene, roberto, mercedes, carmen"]))
  
  
  
  // EJERCICIO 5
  function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
      return false;
    }
  
    // Solo necesitamos verificar hasta la raíz cuadrada de "numero"
    //Math.sqrt = Esta función devuelve la raíz cuadrada de un número, es decir, el número que, al ser multiplicado por sí mismo, da como resultado el valor original.
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;  // Si encontramos un divisor, no es primo
      }
    }
  
    return true;  // Si no encontramos divisores, es primo
  }
  
    console.log(esPrimo(6))
  
  
  
    // EJERCICIO 6
  function elementosComunes(arr1, arr2) {
    const setArr2 = new Set(arr2); // Convertimos el segundo array a un Set para búsqueda más rápida
    const comunes = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (setArr2.has(arr1[i])) {  // Verificamos si el elemento de arr1 está en arr2
        comunes.push(arr1[i]);
      }
    }
  
    return comunes;
  }
  
  console.log(elementosComunes([1, 2, 3, 4], [3, 4, 5, 6])); 
  
  
  
  // EJERCICIO 7
  function pares(numeros) {
    let suma = 0; // Variable para almacenar la suma de los números pares
    
    for (let i = 0; i < numeros.length; i++) { // Recorremos todo el array
      if (numeros[i] % 2 === 0) { // Si el número es par (módulo 2 es 0)
        suma += numeros[i]; // Sumamos el número par a la variable suma
      }
    }
    
    return suma; // Devolvemos la suma total de los números pares
  }
  
  console.log(pares([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6)
  
  
  
  // EJERCICIO 8
  function elevado(array){
    let newArray = []
    for(let i=0; i<array.length; i++){
      newArray.push(array[i]** 2)
    }
     return newArray
  }
  
  console.log(elevado([2,3,4,5,6]))
  
  

  // EJERCICIO 9
  function inversa(string){
    let newString = ""
    for(let i = string.length -1; i >=0; i--){
      newString += string[i]
    }
    return newString
  }
  
  console.log(inversa("buenos dias bb"))
  
  
  
  // EJERCICIO 10
  function factorial(n) {
    // Comprobamos si el número es 0 o 1, en cuyo caso el factorial es 1
    if (n === 0 || n === 1) {
        return 1; // El factorial de 0 o 1 es 1
    }
    
    let resultado = 1; // Inicializamos el resultado en 1
    
    // Hacemos un bucle que multiplica 'resultado' por cada número desde 'n' hasta 1
    for (let i = n; i > 1; i--) {
        resultado *= i; // Multiplicamos el resultado por el número actual
    }
    
    return resultado; // Retornamos el resultado final
}