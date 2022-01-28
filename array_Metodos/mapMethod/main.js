//EL method map itera sobre  cada elemento de un arreglo y regresa un nuevo arreglo de llamar a la funcion callback(una funcion que se pasa como una funcion que se pasa como argumento)

// const frutas = ["🍓", "🍌", "🍏"];

// const nuevoArray = frutas.map((uta) => fruta);
// console.log(nuevoArray);
// //aca le estoy haciendo referencia al array original
// const copiaArray = frutas;
// frutas.push("🍉");
// console.log(copiaArray);


// array de usuarios
const users = [
    { name: "John", age: 23 },
    { name: "Amy", age: 2 },
    { name: "CamperCat", age: 10 },
];
// Regresar los nombres de usuarios
const names = users.map((user) => user.name);
console.log(names);

// Multiplicar por dos la matriz numerica

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numeroPorDos = numeros.map((num) => num * 2);
// console.log(numeroPorDos);

