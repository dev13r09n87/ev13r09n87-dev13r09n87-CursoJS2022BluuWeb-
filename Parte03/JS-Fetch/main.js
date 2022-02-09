/* 
? que es Fetch API? 
    ! Fetch api  : Proporciona una Interfaz java script para  hacer peticiones HTTP así como sus respuestas .
    ! Tambien  provee un método par aobtener recursos de forma asíncrona por la red

    !Fetch parámetro : inicia el proceso de obtener un recurso de la red devolviendo una promesa que se cumple una vez que la respuesta está disponible.
    ! Este tipo de funcionalidad se conseguia previamente haciendo uso del XMLHttpRequest.
? Conceptos claves
    * HTTT: Protocolo de transferencia de hipertexto
    * Ruta(PATH): Dirección a la que queremos acceder
    * Método Http: http tiene un conjuto de métodos de petición para indicar la acción que se desea realizar al recurso determinado :
    * - GET, POST, PUT, PUT, PATCH,DELETE.
    * Cabeceras(heades): Cabeceras http Opcionales, que pueden aportar información adicional a los servidores.
    * Códigos de respuesta (Response Code): Un código de estado, indicando si la petición fue exitosa o no:
        ! Respuestas Informativas del 100-199
        ! Respuestas Satisfactorias 200-200
        ! Redirecciones 300 - 399
        ! Errores de los clientes 400 - 499
        ! Y errores de los servidores 500 - 599
    * JSON JavaScriptNotation. Formato basado en texto standar para la representacion de datos estructurados
*/
// ? https://jsonplaceholder.typicode.com/posts/
//!  "https://pokeapi.co/api/v2/pokemon/"
console.warn("conectado");

// ! Cuando obtenemos la primera respuesta es un archivo http para poder ir a recuoerar la informacion 
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => console.log(data.forms[0].name));