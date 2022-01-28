// Funcion declarativa 
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log('Funcion declarativa', numeroAleatorio(101, 1000));


// Funciones Expresadas. No funciona llamarla antes de definirla

const numAzar = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log('Funcion expresada: ', numAzar(11, 100));

// Arroy Funcion Es una alternatica compacta a una expresión de funcion tradicional

// const azarNumFlecha = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
// };

// atajo con arrow function
const azarNumFlecha = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log('Funcion Arrow', azarNumFlecha(1, 10))

const azarNumFlechaOneParam = max => Math.floor(Math.random() * (max - 1) + 1);
console.log("Arrow atajo un parametro", azarNumFlechaOneParam(5));
// Parametro por defecto
const azarNumFlDefaultParam = (min = 50, max = 65) => Math.floor(Math.random() * (max - min) + min);
console.log("Arrow atajo default parameter solo con min", azarNumFlDefaultParam(60));
console.log("Arrow atajo default parameter con min y max", azarNumFlDefaultParam(9999, 999999));
console.log("Arrow atajo default parameter sin parametros", azarNumFlDefaultParam());
