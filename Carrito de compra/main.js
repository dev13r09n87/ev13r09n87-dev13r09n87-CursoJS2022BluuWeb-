const carrito = [];
const fruta = prompt('🥝¡¡ Feria Market 🍉, ¿Qué fruta desea comprar? ');

carrito.push(fruta);

while (prompt('🍈¿Desea agregar otro elemento al 🛒? ')) {
    const fruta = prompt('Qué fruta desea comprar');
    carrito.push(fruta);
}
console.log('Usted compró: ');


carrito.forEach((fruta, index) => (
    console.log(`${index + 1} :  ${fruta}`)
));

// for (let fruta of frutas) {
//     console.log(fruta)
// }