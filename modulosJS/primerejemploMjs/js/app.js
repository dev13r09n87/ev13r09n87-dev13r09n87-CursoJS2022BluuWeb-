


// Expresiones ejecutadas automaticamente en el momento
(function () {
    const fruta = "🍓";
    console.warn("Conectado app ");
    console.log(fruta);
})();

import { sandia, frutilla, CFruta } from './frutas.js'
import { pintarBanana } from './frutas.js'
import aguacate from './frutas.js' //Cuando se tiene el expor default no va entre llaves.

console.log(`Exportado de Frutasjs ${sandia}`);
pintarBanana();
console.log(`Pintar Bananas desde FrutasJS funcion`);
console.log(`Frutilla desde Frutasjs`);
frutilla();

const ceresa = new CFruta("🍒");
console.log(ceresa);
console.log("Aguacate");
console.log(aguacate);