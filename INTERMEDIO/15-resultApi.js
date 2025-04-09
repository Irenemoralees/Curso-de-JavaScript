// EJERCICIO 1
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    return response.json()
}).then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})



// EJERCICIO 2
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response =>{
    if(!response.ok){
        throw new Error(`Se ha producido un error: ${response.status}`)
    }
    return response.json()
}
).then(data => {
    console.log(data)
}).catch(error =>{
    console.log("Error:", error)
})



// EJERCICIO 3
async function getPubli(){
    try{
const url = "https://jsonplaceholder.typicode.com/posts"
const response = await fetch(url)
const data = await response.json()
console.log(data)
    }catch(error){
        console.log("Error:", error)
    }
}
getPubli()



// EJERCICIO 4
async function postPubli(){
    try{
    const newPost = {
        userId: 10,
        title: "nuevo titulo con post",
        body: "nuevo body con post"
      }

      const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newPost)
      }
      )
      const data = await response.json()
      console.log(data)
}catch(error){
    console.log("Error:", error)
}
}
postPubli()



// EJERCICIO 5
async function putPubli(){
    try{
    const modificPubli = {
        userId: 10,
        title: "titulo actualizado con put",
        body: "body acualizado con put"
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/4", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(modificPubli)
    })
    const data = await response.json()
    console.log(data)
}catch(error){
    console.log("Error:", error)
}
}
putPubli()



// EJERCICIO 6
async function patchPubli(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/7",{
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title: "titulo modificado con patch"})
    }
    )
    const data = await response.json()
    console.log(data)
}catch(error){
    console.log("Error:", error)
}
}
patchPubli()



// EJERCICIO 7
async function deletePubli(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/56",{
        method: "DELETE"
    })
    if(!response.ok){
        throw new Error(`Error: ${response.status}, no se ha podido borrar correctamente`)
    }
    return console.log("Se ha borrado correctamente")
}catch(error){
    console.log("Error:", error)
}
}
deletePubli()



// EJERCICIO 8
async function getWeather(city){
    const apiKey = "d3bb8792d45dc60bc65386c3b9a49653f"
    const url = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${apiKey}`

    try{
    const response = await fetch(url)
    const data= await response.json()
    console.log(data)
}catch(error){
    console.log("Error:", error)
}
}
getWeather("Barcelona")



// EJERCICIO 9 no esta terminado
async function pokeApi(pokemon){
const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
try{
const response = await fetch(url)
const data = response.json()

}catch(error){
    console.log("Error:", error)
}
}