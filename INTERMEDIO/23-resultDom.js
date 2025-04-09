// EJERCICIO 1
const title = document.getElementById ("title")
title.innerHTML = "¡Hola Mundo!"



// EJERCICIO 2
const imagen = document.getElementById ("myImage")
const link = imagen.getAttribute("src")
imagen.setAttribute ("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaoulu54cRu9VVp1Q7t_iRNUe6V1T17nRqg&s")



// EJERCICIO 3
const box = document.querySelector("#box")
box.classList.add("resaltado");



// EJERCICIO 4
const p = document.querySelector ("#paragraph")
p.style.color = "blue"



// EJERCICIO 5
const button = document.createElement("button")
button.textContent= "click"
box.appendChild(button)



const ul = document.getElementById("list")

function buttonList(){
    const li = document.createElement("li")
li.textContent = "Nuevo elemento"
ul.appendChild(li)
}

button.addEventListener("click",buttonList)



// EJERCICIO 6
const deleteParag = document.getElementById("deleteParagraph")
const buttonDelete = document.getElementById("deleteButton")

function eliminarParagraph(){
    deleteParag.remove()
}

buttonDelete.addEventListener("click", eliminarParagraph)



// EJERCICIO 7
const div = document.getElementById("content")
div.innerHTML = "<h2>Nuevo Contenido</h2>"



// EJERCICIO 8
const buttonAlert = document.getElementById("greetBtn")

function alerta(){
    alert("¡Hola!")
}

buttonAlert.addEventListener("click", alerta)



// EJERCICIO 9
const input = document.getElementById("textInput")
const divInput = document.getElementById("result")

input.addEventListener("input", () => {
divInput.textContent = input.value
})



// EJERCICIO 10
const buttonBackgroundColor = document.getElementById("backgroundBtn")
const body = document.querySelector("body")
buttonBackgroundColor.addEventListener("click", () => {
body.style.backgroundColor = "orange"
})