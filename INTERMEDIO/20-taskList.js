// Seleccionamos los elementos del documento HTML
const text = document.getElementById("text") // Campo de entrada donde el usuario escribe la tarea
const button = document.getElementById("button") // Botón que al hacer clic agrega la tarea
const list = document.getElementById("list") // Lista donde se mostrarán las tareas agregadas

// Función para agregar una nueva tarea a la lista
function addTask() {
    // Si el campo de texto está vacío, detenemos la ejecución con "return"
    // Esto evita que se agreguen elementos vacíos a la lista
    if (text.value === "") return

    // Creamos un nuevo elemento de lista (<li>)
    const newElement = document.createElement("li")
    newElement.textContent = text.value // Le asignamos el texto ingresado en el input

    // Agregamos un evento de clic al nuevo elemento para eliminarlo al hacer clic
    newElement.addEventListener("click", () => {
        newElement.remove() // Elimina la tarea cuando se hace clic en ella
    })

    // Agregamos la nueva tarea a la lista
    list.appendChild(newElement)

    // Limpiamos el campo de texto después de agregar la tarea
    text.value = ""
}

// Evento que escucha cuando el usuario hace clic en el botón para agregar una tarea
button.addEventListener("click", addTask)

// Evento que permite agregar una tarea al presionar la tecla "Enter" en el input
text.addEventListener("keypress", (event) => {
    // Verificamos si la tecla presionada es "Enter"
    if (event.key === "Enter") {
        addTask() // Llamamos a la función para agregar la tarea
    }
})