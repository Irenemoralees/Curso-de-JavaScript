// EJERCICIO 1
for(let i =1; i<=20; i++){
    console.log(i)
  }
  


  // EJERCICIO 2
  let suma=0
  for(let i=1; i<=100; i++){
    suma += i
  }
  


  // EJERCICIO 3
  for(let i=2; i<51; i+= 2){
    console.log(i)
  }
  
  

  // EJERCICIO 4
  let nombres=["irene", "roberto", "maria"]
  for(let nombre of nombres){
    console.log(nombre)
  }
  
  

  // EJERCICIO 5
  let texto= "me llamo irene"
  let contador=0
  let vocales= "aeiouAEIOU"
  
  for(let i = 0; i<texto.length; i++){
    if(vocales.includes(texto[i])){
      contador++
    }
  }
  console.log(contador)
  
  

  // EJERCICIO 6
  let numbers = [2,5,7,9,3,98]
  let producto=1
  for(let i=0; i<numbers.length; i++){
    producto*= numbers[i]
  }
  


  // EJERCICIO 7
  for(let i=0; i<=10; i++){
    console.log("5 x " + i + " = " + (5*i))
  }
  


  // EJERCICIO 8
  let textoInvertido= ""
  for(let i= texto.length -1; i>=0; i--){
    textoInvertido+= texto[i]
  }
  


  // EJERCICIO 9
  let fibonacci = [0, 1];  // Primeros dos números de la secuencia

for (let i = 2; i < 10; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log(fibonacci);  // Resultado: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  


// EJERCICIO 10
  let numerotes = [23,67,1,6,89,8,9,10,4]
  let mayor= []
  
  for(let i=0;i<numerotes.length; i++){
    if(numerotes[i] >= 10){
      mayor.push(numerotes[i])
    }
  }
  console.log(mayor)
  
  
  
  
  