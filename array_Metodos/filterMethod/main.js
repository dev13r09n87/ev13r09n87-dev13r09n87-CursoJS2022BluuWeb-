
// array de usuarios
const users = [
    { uid: 1, name: "John", age: 32 },
    { uid: 2, name: "Amy", age: 27 },
    { uid: 3, name: "CamperCat", age: 50 },
];
// el filter puede retornar un elemento o todos los elementos del array. tambien se puede usar para eliminar elementos del array


const mayoresDeTreinta = users.filter((user) => user.age > 30);
console.log(mayoresDeTreinta);

// por ejemplo el ususario tres quiere eliminarse de la pagina  el va a pinchar un boton que le mande el uid y eliminarlo de la lista de contacto.

const userFiltrado = users.filter((user) => user.uid !== 3);
console.log(userFiltrado);