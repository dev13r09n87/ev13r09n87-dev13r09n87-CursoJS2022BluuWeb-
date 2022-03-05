// si hacemos apirest no podemos usar las local storage. si se quiere hacer aplicaciones segura se recomienda usasr con algo que tiene configurado la seguridad  como VUEjs ANgularJS o ReactJS.
console.log("conectado")
// Guardar : Nos permite guardar datos en el navegador. guarda 5mega de datos. clave : valor
localStorage.setItem("Fresa", "🍓");
localStorage.setItem("Sandilla", "🍉");

//Obtener
if (localStorage.getItem("Fresa", "🍓")) {
    const fresa = localStorage.getItem("Fresa");
    console.log(fresa);
}

//Eliminar

// localStorage.removeItem("Fresa"); // sele pasa la clave

// Limpiar el localstorage

localStorage.clear();

// creacion de in array almacenado en el local storage

const frutas = [
    {
        nombre: "🍌",
        color: "amarillo",
    },
    {
        nombre: "🍓",
        color: "rojo",
    },
    {
        nombre: "🍏",
        color: "verde",
    },
];

localStorage.setItem("frutas", JSON.stringify(frutas));

if (localStorage.getItem("frutas")) {
    const frutasDesdeLocal = JSON.parse(localStorage.getItem("frutas"));
    console.log(frutasDesdeLocal);
}