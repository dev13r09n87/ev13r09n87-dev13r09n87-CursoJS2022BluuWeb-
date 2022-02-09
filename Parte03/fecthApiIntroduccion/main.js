/* 
? que es Fetch ?
!  API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.

* El método fetch() toma un argumento obligatorio que es la ruta de acceso al recurso que desea recuperar. Devuelve una Promise que resuelve en Response a esa petición, sea o no correcta.

* Una vez que Response es recuperada, hay varios métodos disponibles para definir cuál es el contenido del cuerpo y como se debe manejar.
* https://jsonplaceholder.typicode.com/
? Qué son las API?
! es cuando nosotros queremos conectar dos recursos. por ejemplo si queremos entrar al gps del nvegador el gps debe de conectarse al gps del telefono (NO vamos a programar el codigo  que acceda al hardware del celular). En tonces pormedio de la API nos conectaremos de forma sencilla que no estan escrita en un mismo lenguaje pero que se conectan entre ellas.
! YA que nos proporcionan un mecanismo sencillo para acceder a la información a travez de un standar.

! API son construcciones disponibles en los lenguajes de programación que permiten a los desarrolladores crear funcionalidades complejas de una manera simple. Estas abstraen el código más complejo para proveer una sintaxis más fácil de usar en su lugar.

Los APIs de navegador. 
Las APIs de terceros

REST : Transferencia de representacion de estados es un standar tiene unos mecanismos pasos a pasos 

¿Qué es Restful?
REST es el concepto, RESTFul es la implementación y al crear un RESTFul creamos una API, la cual una API es un conjunto de funciones o procedimientos para que sea utilizado por otro software.

#Recursos
 */

console.info("Connectado");
//parametro obligatorio del fech la URL 
const url = "https://jsonplaceholder.typicode.com/posts/";

// Usando el fetch. el fetch ya tiene la promesa.
fetch(url)
    //Cuando usemos el then tenemos que retornar algo.como no lo tenemos formateado lo tenemos que formatear a Json. sino averiguar para formatear al formato correcto
    .then((res) => res.json())
    //ahora como eso me recibe una respuesta en json y la devuelvo. y pinto los datos.
    .then(data => console.log(data))
    .catch(e => console.log(e))
    .finally(() => console.log("Finalizo"));

const findPostById = async (id) => {
    try {
        //Aca le estoy concatenando dinamicamente el Id del usuario fetch(url + id);
        const res = await fetch(url + id);
        const post = await res.json();
        console.log("Post desde findPostId: ", post);
    } catch (error) {
        console.error(error);
    }
};

findPostById(1);