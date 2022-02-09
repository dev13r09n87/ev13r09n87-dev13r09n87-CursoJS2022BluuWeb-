const carrito = document.getElementById("carrito");
const template = document.getElementById("templateid");
const footer = document.getElementById("footer");
const templatefooter = document.getElementById('templatefooter');
// const botones = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();

document.addEventListener('click', e => {
    // console.log(e.target.matches(".card .btn-outline-primary"));
    if (e.target.matches(".card .btn-outline-primary")) {
        agregarAlCarrito(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-success"));
    if (e.target.matches("#carrito .list-group-item .btn-success")) {
        btnAumentar(e);
    }

    if (e.target.matches("#carrito .list-group-item .btn-danger")) {
        btnDisminuir(e);
    }



});

//creando un Array para almacenr los productos por que va a mutar.
let carritoArray = [];

const agregarAlCarrito = (e) => {
    // con el datasset se accede al valor que se guardo en data-fruta
    console.log(e.target.dataset.fruta);
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    }
    // console.log(producto);
    // usando findIndex existe el elemento en el array. y buscamos el indice buscames que exista el producto .
    const indice = carritoArray.findIndex((item) => item.id === producto.id);
    console.log(indice);

    //Si no exite lo agregmos el nuevo elemento
    if (indice === -1) {

        carritoArray.push(producto);
    } else {
        // si el cliente vuelve a presionar el producto , como ya existe lo que hacemos es sumar uno al producto seleccionado
        carritoArray[indice].cantidad++;
        // carritoArray[indice].precio = carritoArray[indice].cantidad * producto.precio;
    }

    console.log(carritoArray);
    pintarCarrito(); //se lo pasamos para poder agregar los botones agrega eliminar
};
const pintarCarrito = () => {
    // console.log('Pintar carrito',prod);
    carrito.textContent = ""; //Limpiamos la variable para que no se repita la información 
    carritoArray.forEach(itemP => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.text-white .lead').textContent = itemP.titulo;
        clone.querySelector('.badge').textContent = itemP.cantidad;
        clone.querySelector('div .lead span').textContent = itemP.precio * itemP.cantidad;
        clone.querySelector('.btn-danger').dataset.id = itemP.id;
        clone.querySelector('.btn-success').dataset.id = itemP.id;

        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
    pintarFooter();
};
const pintarFooter = () => {
    console.log("Pintar Footer");
    footer.textContent = "";
    const total = carritoArray.reduce((acc, current) => acc + current.cantidad * current.precio, 0);
    // console.log(total);
    const clone = templatefooter.content.cloneNode(true);
    clone.querySelector('span').textContent = total;
    // COmo aca no es un ciclo no es necesario usar el fragment 
    footer.appendChild(clone);
}

const btnAumentar = (e) => {
    console.log("me distes click Agregar", e.target.dataset.id);
    carritoArray = carritoArray.map(item => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++;
        }
        return item;
    });
    pintarCarrito()
};
const btnDisminuir = (e) => {
    console.log("me distes click Quitar", e.target.dataset.id);
    carritoArray = carritoArray.filter(item => {
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--;
                if (item.cantidad === 0) {
                    return;
                }
                return item
            }
        } else { return item; }
    });

    pintarCarrito()
};
//Agregamos el evento para cada boton  lo quitamos por que usaremos los delegados para seleccionar los eventos
// botones.forEach((btn) => {
//     btn.addEventListener("click", agregarAlCarrito)
// });