// find() devuelve el primer elemento del array que cumpla la funcion de prueba proporiconada
// array de usuarios
const users = [
    { uid: 1, name: "John", age: 32 },
    { uid: 2, name: "Amy", age: 27 },
    { uid: 3, name: "CamperCat", age: 50 },
];

const amy = users.find((user) => user.uid === 2);
console.log("Usando find", amy); //me retorna un objeto {uid: 2, name: 'Amy', age: 27}

// Usando destruturacion : destructuring.si no se cumple la condicion nos daria error.
const { age } = users.find((user) => user.uid === 2);
console.log("Usando destructuracion", age);
// Some method : COmprueba si almenos un elemento del array comple con la condición implementadapor la funcion proporcionada y nos retorna true o false.
const exist = users.some((user) => user.uid === 4);
console.log("Usando some", exist);

//findIdex: devuelve el índice del primer elemento de un array que cumpla con la funcion de prueba proporcionada . en caso contrario devulve -1

const indice = users.findIndex((user) => user.uid == 5);
console.log("Usando findIndex [", indice, "]");