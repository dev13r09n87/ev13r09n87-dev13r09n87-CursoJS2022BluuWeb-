const carrito = document.getElementById("carrito");
const template = document.getElementById("templateid");
const botones = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();
//creando un objeto para almacenr los productos
const carritoObjeto = {};


const agregarAlCarrito = (e) => {
    // con el datasset se accede al valor que se guardo en data-fruta
    console.log(e.target.dataset.fruta);
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }
    if (carritoObjeto.hasOwnProperty(producto.titulo)) {
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }
    carritoObjeto[producto.titulo] = producto;
    // console.log(carritoObjeto);
    pintarCarrito();
};
const pintarCarrito = () => {
    // console.log('Pintar carrito',prod);
    carrito.textContent = "";
    Object.values(carritoObjeto).forEach(itemP => {
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