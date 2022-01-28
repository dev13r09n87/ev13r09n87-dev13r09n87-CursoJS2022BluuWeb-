
// array de usuarios
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];

//concat = El metodo concat se usa para unir dos o mas array. Este método no cambia los arrays existentes, sino que devuelve un nuevo array

const arr3 = arr1.concat(arr2);
console.log("Usando concat", arr3);//['a', 'b', 'c', 'd', 'e', 'f']

// Spread: permite a un objeto iterable tal como un arreglo o cadena puede ser expandido en lugares donde son esperados
const arraySpread = [...arr1, ...arr2];
console.log("Usando Spread syntaxis", arraySpread);
