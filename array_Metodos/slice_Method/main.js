
// array de usuarios
const arr = [
    "Dog", "Cat", "Hippo", "Tiger", "Zebra"
    //  [ 0 ]  [ 1 ]  [ 2 ]     [ 3 ]    [ 4 ]
];

//slice: Esté  método devuelve una copia de una parte del array dentro de un nuevo array empezando por el inicio hasta el fin . el array original no se modifica.
const arrNuevo = arr.slice(1, 3);
console.log(arrNuevo);