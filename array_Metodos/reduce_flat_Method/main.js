
//reduce : El  valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteracion de la mateiz y, en l aúltima instancia, se convierte en el valor final, único y resultante.
const numeros = [1, 2, 3, 4, 5];
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

// sumar los elementos de un array
const sumarTodos = numeros.reduce((acumulador, valorActual) => acumulador + valorActual);
console.log("Usando reduce", sumarTodos);

const soloNumeros = arrayNumeros.reduce((acumulador, current) => acumulador.concat(current));
console.log("Usando reduce y concat:", soloNumeros);


const arrayPlanoConSpread = [].concat(...arrayNumeros);
console.log("Usando concat(SpreadSyntax):", arrayPlanoConSpread);

//Metodo flat es experomental, es como sacarle los elementos anidados hacia fuera.

const unaProfArray = [1, 2, [3, 4, [5, 6]]];
const arrayUsandoFlat = unaProfArray.flat(2);
console.log("Usando flat con una profundidad: ", arrayUsandoFlat);