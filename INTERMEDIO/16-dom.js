/* Manejo del DOM (Document Object Model):
El DOM (Document Object Model) es como un "mapa" o "árbol" de tu página web que JavaScript puede leer y modificar.
Cuando cargas una página, el navegador convierte el código HTML en una estructura organizada de nodos (elementos, textos, atributos, etc.). JavaScript usa el DOM para cambiar cosas en la página sin necesidad de recargarla.

Ejemplo: 
Imagina que tu página web es un libro.
- El HTML es el contenido escrito en el libro (títulos, párrafos, imágenes, enlaces, etc.).
- El DOM es como un índice dinámico que organiza todo lo que está en el libro y permite modificarlo sin necesidad de reescribirlo por completo.
- JavaScript usa el DOM para buscar, cambiar o agregar cosas en el libro sin necesidad de imprimir una nueva versión.

Por ejemplo, si en tu libro hay un título que dice "Mi Primera Página", JavaScript puede cambiarlo a "Bienvenido a Mi Web" sin necesidad de recargar el libro entero.
*/

console.log(document)

// SELECCIÓN DE ELEMENTOS
//-  Métodos clásicos (búsqueda por ID, clase y etiqueta)
const myElementById = document.getElementById("id"); // Busca un elemento por su ID
const myElementsByClass = document.getElementsByClassName("class"); // Busca todos los elementos con una clase específica
const myElementsByTag = document.getElementsByTagName("tag"); // Busca todos los elementos de un tipo de etiqueta (ej: "p", "div")
/* Los métodos tradicionales como getElementById, getElementsByClassName y getElementsByTagName no utilizan puntos (.) ni signos de # porque los parámetros que reciben son nombres de atributos, no selectores CSS. */


// - Métodos modernos usando selectores CSS
const firstParagraph = document.querySelector(".paragraph"); // Selecciona el primer elemento con la clase "paragraph"
const allParagraphs = document.querySelectorAll(".paragraph"); // Selecciona todos los elementos con la clase "paragraph"
// Estos métodos sí utilizan sintaxis de selectores CSS, por lo que debes incluir . para clases y # para ID.


// MANIPULACIÓN DE ELEMENTOS
//- Cambiar el contenido de un elemento
const title = document.getElementById("title");
title.textContent = "Hola JavaScript"; // Modifica solo el texto dentro del elemento

// - Modificar el contenido HTML dentro de un contenedor
const container = document.querySelector(".container");
container.innerHTML = "<p>Esto es un nuevo párrafo</p>"; // Inserta un nuevo párrafo dentro del contenedor

/* 📌 Ejemplo simple:
div.textContent = "<b>Hola</b>";  // Muestra: <b>Hola</b> (como texto)
div.innerHTML = "<b>Hola</b>";    // Muestra: Hola (en negrita)
🔹 Usa textContent cuando solo quieras texto plano.
🔹 Usa innerHTML cuando necesites interpretar HTML.
 */

// MODIFICACIÓN DE ATRIBUTOS
const link = document.querySelector("a"); // Selecciona el primer enlace encontrado en la página

// - Obtener el valor de un atributo
const url = link.getAttribute("href"); // Obtiene la URL actual del enlace

// - Modificar un atributo (cambia la URL del enlace)
link.setAttribute("href", "https://example.com");

// - Comprobar si el enlace tiene un atributo específico
const hasTarget = link.hasAttribute("target"); // Devuelve true si tiene el atributo "target"

//-  Eliminar un atributo (en este caso, "target")
link.removeAttribute("target");


// INTERACCIÓN CON CLASES CSS
const box = document.querySelector(".box"); // Selecciona el primer elemento con la clase "box"
box.classList.add("selected"); // Agrega la clase "selected"
box.classList.remove("selected"); // Elimina la clase "selected"
box.classList.toggle("selected"); // Si la clase está presente, la quita; si no, la agrega


// MODIFICACIÓN DE ESTILOS
const button = document.querySelector("button"); // Selecciona el primer botón encontrado
button.style.backgroundColor = "blue"; // Cambia el color de fondo a azul
button.style.color = "white"; // Cambia el color del texto a blanco
button.style.padding = "10px"; // Agrega espacio alrededor del texto dentro del botón


// CREACION Y ELIMINACION DE ELEMENTOS EN EL DOM
// - Creación de un nuevo párrafo
const newParagraph = document.createElement("p"); // Crea un nuevo elemento <p> (párrafo)
newParagraph.textContent = "Este es un nuevo párrafo creado desde JS"; // Asigna un texto al párrafo
newParagraph.style.padding = "8px"; // Establece un padding (espaciado interno) de 8px para el párrafo

// - Añadir el párrafo a un contenedor en el HTML
const container = document.querySelector("#container"); // Busca un elemento con el id 'container'
container.appendChild(newParagraph); // Añade el nuevo párrafo dentro del contenedor

// - Crear un nuevo elemento de lista (<li>) y añadirlo a una lista existente (<ul>)
const itemsList = document.querySelector("ul"); // Busca la primera lista (<ul>) en el HTML
const newItem = document.createElement("li"); // Crea un nuevo elemento <li> (ítem de lista)
newItem.textContent = "Nuevo elemento"; // Establece el texto del nuevo ítem de lista

// - Insertar el nuevo ítem en una posición específica dentro de la lista
const secondItem = itemsList.children[1]; // Accede al segundo ítem de la lista (<li>) (índice 1)
itemsList.insertBefore(newItem, secondItem); // Inserta el nuevo ítem antes del segundo ítem en la lista

// - Añadir el nuevo ítem al final de la lista
itemsList.append(newItem); // Añade el nuevo ítem al final de la lista <ul> (después de todos los demás elementos)

// - Añadir el nuevo ítem al principio de la lista
itemsList.prepend(newItem); // Inserta el nuevo ítem al inicio de la lista <ul> (antes del primer elemento)

// - Insertar el nuevo ítem antes de un ítem específico (en este caso, el segundo ítem)
// Es lo mismo que si hicieramos lo de arriba (itemsList.insertBefore(newItem, secondItem)) pero esta forma es más moderna y sencilla.
secondItem.before(newItem); // Inserta el nuevo ítem justo antes del 'secondItem' en la lista

// - Insertar el nuevo ítem después de un ítem específico (en este caso, el segundo ítem)
secondItem.after(newItem); // Inserta el nuevo ítem justo después del 'secondItem' en la lista

// - Eliminación tradicional  
const parent = newParagraph.parentElement; // Obtiene el elemento padre del 'newParagraph'
parent.removeChild(newParagraph); // Elimina el 'newParagraph' del DOM utilizando el método tradicional con su elemento padre

// - Eliminación más moderna y sencilla
newParagraph.remove(); // Elimina el elemento 'newParagraph' del DOM (de forma directa y moderna)


// ELEMENTOS DEL DOM
// - Función para mostrar un mensaje cuando se hace clic
function showMsg() {
    alert("Clic!"); // Muestra un mensaje de alerta cuando se llama esta función
}

// - Buscar el botón con id 'send' y añadir un evento 'click'
const sendButton = document.querySelector("#send"); // Obtiene el botón con id 'send'
//("Evento", función que queremos que se ejecute")
sendButton.addEventListener("click", showMsg); // Cuando el botón se hace clic, ejecuta la función 'showMsg'

// - Añadir un evento 'click' usando una función de flecha (arrow function)
sendButton.addEventListener("click", () => {
    alert("Clic con una arrow function!"); // Muestra un mensaje cuando se hace clic, usando una función de flecha
})

// EVENTOS COMUNES
// - Evento 'DOMContentLoaded' (se ejecuta cuando el DOM ha sido completamente cargado)
document.addEventListener("DOMContentLoaded", () => {
    console.log("El DOM está completamente cargado"); // Muestra un mensaje en consola cuando el DOM está listo
})

// - Evento 'mouseenter' (cuando el mouse entra en el área del botón)
sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "green"; // Cambia el color de fondo del botón a verde cuando el mouse entra
})

// - Evento 'mouseleave' (cuando el mouse sale del área del botón)
sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue"; // Cambia el color de fondo del botón a azul cuando el mouse sale
})

// - Evento 'submit' en un formulario (se ejecuta cuando el formulario se envía)
const form = document.querySelector("form"); // Obtiene el formulario del documento
form.addEventListener("submit", (event) => {
    // Código que se ejecuta cuando se envía el formulario
    event.preventDefault(); // Previene que el formulario se envíe de forma predeterminada (si quieres hacer algo antes de enviarlo)
})