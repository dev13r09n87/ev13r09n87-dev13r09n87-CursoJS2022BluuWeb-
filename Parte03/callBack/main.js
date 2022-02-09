//callback : Una función callback es una función que se pasa a otra función como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o aación.
//Esto cada vez se usa menos.
//pasar una funcion como argumento.

//Simulando que que obtenemos informacion de la base de datos a travez de un Json
const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
];
// lo que quiero es enviarle un ID y me retoner la informacion del post
// const findPostById = (id, callback) => {
//     const post = posts.find(item => item.id === id);
//     //manejando errores. Usualmente los callback siempre se envia comoprimer argumento el error y la respuesta positiva o satisfactoria.
//     if (post) {
//         // respuesta satisfactoria
//         callback(null, post);
//     } else {
//         // en el error
//         callback("no se encontro el post con Id : " + id);
//     }

// }

// const findPostByIdUnoCBA = (id, callback) => {
//     const post = posts.find(item => item.id === id);
//     //manejando errores. Usualmente los callback siempre se envia comoprimer argumento el error y la respuesta positiva o satisfactoria.
//     if (post) {
//         // respuesta satisfactoria
//         callback(null, post);
//     } else {
//         // en el error
//         callback("no se encontro el post con Id : " + id);
//     }

// }

// findPostById(0, (err, post) => {
//     //Aca esto se escapa y termina
//     if (err) return console.log(err);
//     console.log(post);
// })

// //callback hell: Si realiza muchas callback anidados para realizar las validaciones creara el infierno de los callback.
// findPostByIdUnoCBA(1, (err, post) => {
//     if (err) return console.log("findPostByIdUnoCBA: " + err);
//     console.log(post);

//     findPostByIdUnoCBA(2, (err, post) => {
//         if (err) return console.log("findPostByIdDosCBA: " + post);
//         console.log(post);
//         findPostByIdUnoCBA(3, (err, post) => {
//             if (err) return console.log(err);
//             console.log(post);
//         })
//         findPostById(4, (err, post) => {
//             if (err) return console.log("Ultimo callback :" + err);
//             console.log(post);
//         })
//     })
// })
//Las promesas bienen a solucionar los problemas de los Callback Hell
//Las promesas : Una promesa es un objeto que representa la teminación o el fracaso de una operacion asíncrona .Es como cuando le hacen una promesa a un amigo si cumple la promesa o no la cumple

// const findPosByIdXPormesa = (id) => {
//     const post = posts.find(item => item.id === id);

//     return new Promise((resolve, reject) => {
//         if (post) {
//             resolve(post);
//         }
//         else {
//             reject("No se encontro el Id : " + id);
//         }
//     });
// };

//Otra forma de declarar una promise
const findPosByIdXPormesa = id => new Promise((resolve, reject) => {
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
//Promise hell
findPosByIdXPormesa(1)
    .then(post => {
        console.log("Promise 1:", post)
        return findPosByIdXPormesa(2)
    })
    .then(post => {
        console.log("Respuesta 2: ", post);
        return findPosByIdXPormesa(3)
    })
    .then(post => {
        console.log("Respuesta 3: ", post);
        return findPosByIdXPormesa(4)
    })
    .catch(err => console.log("Error Promise: ", err));

console.log("Fin del codigo");

