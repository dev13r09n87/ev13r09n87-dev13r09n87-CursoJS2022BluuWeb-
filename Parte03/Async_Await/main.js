/* 
* async (opens new window): La declaración de función async define una función asíncrona, la cual devuelve una AsyncFunction.
* await (opens new window): El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function.
 */


//Simulando que que obtenemos informacion de la base de datos a travez de un Json
const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "Titulo Uno",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "Titulo dos",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
];

//Otra forma de declarar una promise. Aca estamos simulando la lectura de la información de la base de datos.
const findPostById = id => new Promise((resolve, reject) => {
    // con la funcion setTimeout simulamos el tiempo que tardaria en recuperar los datos de la base de datos. en este caso le estamos indicando 2 milisegundo. Las promesas son Asincronos.
    setTimeout(() => {
        const post = posts.find((item) => item.id === id);
        if (post) {
            resolve(post);
        }
        else {
            reject("No se encontro Id: ", id);
        }
    }, 2000);
});

// como regla general para poder usar el Async necesitamos usar la funcion Await

/*
     ! La promesas son asyncronas y eso no significa que nuestro código se va a detener, a que cumpla la promesa, el programa continua con las siguientes lineas de codiga cuando se cumple hace su ejecucion, se ejecuta de forma paralela
 */

// findPostById(1).then((post) => {
//     console.log(post);
// })
// El async puede funcionar solo 
/*  
    ? El Sync puede trabajar solo (SI)
    ? el Await pues trabajar solo (NO).  
    ! Son una mejora para las promesas.
     */
const buscar = async (id) => {
    // aca le decimos que esperamos a que se resualva la promesa. con la palabra await. esta palabra await siempre tiene que estar dentro de un async, ya que el async devuelve una promesa.
    let loading = true;
    try {
        // esta solucion es valida si el post 1 depende del código dos es decir que una vez obtenido el id se use para consultar otra tabla de la base de datos. .
        const post = await findPostById(id);
        // const postDos = await findPostById(2);
        // console.log("Titulo 1: ", post.title, "Titulo dos: ", postDos.title);
        console.log("Funcion buscar \n ", post, "\n");
    } catch (error) {
        console.log("Error en buscar el id :", id)
    }
    finally {
        // esto se ejecuta si o si., Aca podria ir un Loading  = true;
        loading = false;
        console.log("Finalizando loading , Finally ", loading);
    }

}

buscar(1);

const buscarAll = async () => {
    try {
        /* siempre el await tiene que esperar una promesa.
         !  Vamos a obtener un array de  todas las promesas que se van hacer.
         Promise.all, recibe un array de promesas que se van a ejecutar.
         * El Promise.All va a mostrar la respuesta siempre y cuando la ejecución de las promesas sean Satisfactorias. ya que si da falso se va directamente al catch. y no mostrara las repuestas de las demas promesas que tengamos en el array.
         */
        const resPosts = await Promise.all([
            findPostById(1),
            findPostById(2)
        ])
        console.log("Titulo 1 : ", resPosts[0].title, "\n Titulo 2", resPosts[1].title);

    } catch (error) {
        console.log(error);
    }
    finally {
        console.log("Esto se ejecuta siempre en el finally");
    }
}

buscarAll()