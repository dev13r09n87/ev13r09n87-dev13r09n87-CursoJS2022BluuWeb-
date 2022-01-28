const carrito = document.getElementById("carrito");
const template = document.getElementById("templateid");
const botones = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();
//creando un Array para almacenr los productos
const carritoArray = [];

const agregarAlCarrito = (e) => {
    // con el datasset se accede al valor que se guardo en data-fruta
    console.log(e.target.dataset.fruta);
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }
    // usando findIndex existe el elemento en el array. y buscamos el indice.
    const indice = carritoArray.findIndex((item) => item.id === producto.id);
    console.log(indice);

    //Si no exite lo agregmos el nuevo elemento
    if (indice === -1) {
        
        carritoArray.push(producto);
    } else {
        // si el cliente vuelve a presionar el producto , como ya existe lo que hacemos es sumar uno al producto seleccionado
        carritoArray[indice].cantidad++;
    }
    
    console.log(carritoArray);
    pintarCarrito(carritoArray); //se lo pasamos para poder agregar los botones agrega eliminar
};
const pintarCarrito = (array) => {
    // console.log('Pintar carrito',prod);
    carrito.textContent = "";
    array.forEach(itemP => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = itemP.titulo;
        clone.querySelector('.badge').textContent = itemP.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
};
//Agregamos el evento para cada boton 
botones.forEach((btn) => {
    btn.addEventListener("click", agregarAlCarrito)
});