// Manejo de APIs

/* - APIs REST (HTTP + URLs + JSON)
Una API REST (Interfaz de Programación de Aplicaciones basada en REST) es una forma en que dos programas pueden comunicarse entre sí a través de internet.

Piensa en una API REST como un mesero en un restaurante:
Tú (el cliente) haces un pedido (una solicitud).
El mesero (la API) lleva el pedido a la cocina (el servidor).
La cocina prepara la comida (procesa la solicitud).
El mesero te trae la comida a la mesa (la respuesta con la información que pediste).

En este caso:
Tú eres una aplicación (ej. una app de clima).
La cocina es el servidor donde está la información.
La API REST es el puente que lleva y trae los datos.
*/

// Métodos HTTP:
/*
GET (para pedir información, como ver el clima en una ciudad).
POST (para enviar datos, como subir una foto).
PUT (para actualizar datos, como cambiar tu perfil).
DELETE (para borrar algo, como eliminar una cuenta).
 */

// Códigos de respuesta HTTP:
// - 200 OK (Indica éxito)
// - 201 (Indica éxito y a parte que un nuevo recurso se ha creado con éxito en el servidor.) Se usa principalmente cuando haces una solicitud POST para crear algo nuevo, como un usuario, un pedido o un archivo.
// - 400 (La solicitud está mal hecha. El problema está en la solicitud del cliente, no en el servidor. El servidor recibió la solicitud, la revisó y la rechazó porque tenía errores.)
// - 404 (La solicitud está bien, pero el recurso no existe)
// - 500 (Error dentro del servidor y no puede procesar la solicitud, aunque la petición del cliente sea válida.)


// Consumir una API
// https://jsonplaceholder.typicode.com -> Esta es la url que utilizaremos

// GET
fetch("https://jsonplaceholder.typicode.com/posts") // En el fetch tenemos que pasarle la url del sitio a la que queremos hacerle la petición, dentro de la pagina nos indica como tenemos que poner la url para que nos den unos datos u otros o si quisieramos hacerle alguna modificacion o eliminar algun dato.
// El fetch nos devuelve una promesa por eso a continuación utilizados el .then y el .catch
    .then(response => {
        // Transforma la respuesta a JSON
        return response.json()
    })
    .then(data => {
        // Procesa los datos
        console.log(data)
    })
    .catch(error => {
        // Captura errores
        console.log("Error", error)
    })

// Uso de Async/Await
//Vamos a hacer exactamente lo mismo pero usando ahora el async y el await.
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

getPosts()

// Solicitud POST

async function createPost() {
    try {
        // Creamos un objeto 'newPost' con los datos que queremos enviar en el post.
        const newPost = {
            userId: 1, // Identificador del usuario (en este caso, el usuario con id 1)
            title: "Este es el título de mi post", // Título del post
            body: "Este es el cuerpo de mi post" // Cuerpo del post
        };

        // Usamos 'fetch' para hacer una solicitud HTTP de tipo POST al servidor
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // Indicamos que la solicitud es de tipo POST (para crear algo nuevo)
            headers: {
                "Content-Type": "application/json" // Indicamos que el contenido que estamos enviando es de tipo JSON
            },
            body: JSON.stringify(newPost) // Convertimos el objeto 'newPost' en un string JSON para enviarlo
        });

        // Esperamos la respuesta del servidor y la convertimos a formato JSON
        const data = await response.json();

        // Imprimimos los datos recibidos del servidor (el post recién creado)
        console.log(data);
    } catch (error) {
        // Si hay un error en cualquier parte del proceso, lo capturamos y lo mostramos en la consola
        console.log("Error", error);
    }
}
// Llamamos a la función 'createPost' para ejecutar el código
createPost();


// Herramientas para realizar peticiones HTTP
// - https://postman.com
// - https://apidog.com
// - https://thunderclient.com

// Manejo de errores

fetch("https://jsonplaceholder.typicode.com/irene")
    .then(response => {
        if (!response.ok) {  //Si no nos devuelve un código de respuesta de los 200
            throw Error(`Status HTTP: ${response.status}`) //Lanzate un error
        }
        return response.json() // Si no hay ningun error devuelve la respuesta en formato json
    })
    .catch(error => {
        console.log("Error", error)
    })

// Métodos HTTP adicionales:
// - PATCH -> Sirve para actualizar parcialmente un recurso (modifica solo una parte de los datos de un recurso sin reemplazarlo completamente)
/* - OPTIONS -> 1. Sirve para descubrir qué métodos puedes usar antes de intentarlo y 
ayuda a los navegadores con CORS (cuando un sitio web intenta comunicarse con otro dominio). */

async function partialPostUpdate() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH", // Método PATCH
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: "Este es el nuevo título de mi post" }) //Aqui en vez de pasarle la constante de newPost le pasamos directamente la parte que queramos modificar 
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

partialPostUpdate()

// Autenticación mediante API Key
//Una API Key es una clave secreta que te da acceso a una API, como una llave para entrar a un hotel.
/* ¿Para qué sirve?:
- Identificar quién usa la API.
- Evitar abusos (por ejemplo, limitar cuántas veces puedes usarla).
- Proteger datos privados.
*/

async function getWeather(city) {
     // 1. Entramos en la siguiente url:
    // https://openweathermap.org
    const apiKey = "TU_API_KEY"  // 2. Al entrar en la página te haces tu propia API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}` // En otro apartado de la página te explicara un poco como se maneja y te dara una url que es para poder usar su API.

    try {
        // 3. Hacemos una petición con fetch pasandole la url.
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

getWeather("Madrid")

// Otros métodos de Autenticación y Autorización
// Ambos son formas de autenticación para acceder a una API de manera segura:
// - Bearer Token:  es como una "clave de acceso" que te permite acceder a una API o recurso. Este token se utiliza para autenticarte y demostrar que tienes permiso para hacer la solicitud.
// - JWT: es un tipo de Bearer Token, pero más avanzado. En lugar de solo ser un código, un JWT contiene información codificada dentro de él, que puede ser verificada y utilizada por el servidor.

/* Versionado de APIs:
El versionado de una API es como tener diferentes ediciones de un producto. Si haces un cambio grande (como agregar más detalles a los productos), el versionado asegura que los que usan la versión antigua de la API no tengan problemas, mientras que otros pueden aprovechar las mejoras de la nueva versión.
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources
*/

// Otras APIs
async function getPokemon(pokemon) {

    // https://pokeapi.co
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Habilidades de ${data.name}`) //Escribimos data.name porque si entramos en la pag de la pokeapi el nombre esta en una propiedad llamada name.
        data.abilities.forEach(habilidad => {  //Como queremos que nos devuelva solo las habilidades, igual que esta la propiedad name que nos devuelve los nombres tiene otra propiedad que se llama abilities donde nos da las habilidades por eso ponemos data.abilities y hacemos un forEach porque queremos recorrerlo y es un array
            console.log(habilidad.ability.name)  // Los nombres de las habilidades están metidos dentro de ability y ahí dentro de name
        })
    } catch (error) {
        console.log("Error", error)
    }
}

getPokemon("pikachu")