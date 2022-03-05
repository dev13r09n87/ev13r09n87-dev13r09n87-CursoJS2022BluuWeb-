// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
// Es un patrón de diseño también conocido cómo función autoejecutable.


(() => {
    const banana = "🍌";
    console.log("conectado desde Frutas");
    console.log(banana);
})();

const nombre = "Bluweb"


/*
export e import
Lo primero que debes hacer para acceder a las funciones del módulo es exportarlas.
Esto se hace usando la declaración export.
Puedes exportar funciones, var, let, const y, como veremos más adelante clases.
Deben ser elementos de nivel superior; no puedes usar export dentro de una función, por ejemplo.
Esto se conoce como exportaciones con nombre.

 */

// export const sandia = " 🍉";
// export function pintarBanana() {

//     console.log("🍌");
// };
// export const frutilla = () => {
//     console.log("🍓");
// }

// export class CFruta {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }
// }

/** Otra manera de exportar es como se muestra 
 * en el siguiente codigo
 * se exportan todas la variables, constantes , funciones arrow function y clases
 */


const sandia = " 🍉";

function pintarBanana() {
    console.log("🍌");
};

const frutilla = () => {
    console.log("🍓");
}

class CFruta {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
export { sandia, pintarBanana, frutilla, CFruta };

// El export defoult solo exporta una sola cosa, si no genera error. No necesitan un nombre, solamente se usa una vez
//  Usamos el impor con cualquier nombre, 
const aguacate = "🥑";
export default aguacate;
