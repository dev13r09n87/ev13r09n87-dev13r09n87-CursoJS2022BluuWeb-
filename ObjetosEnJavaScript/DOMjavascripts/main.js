// representa cualquier pagina web cargada en el navegador
console.log("🌞🌞🌞🌞🌞🌞🌞🌞");
// console.log(document);
// console.log(document.head);
// console.log(document.title);
// console.log(document.body);
// console.log(document.domain);


// seleccionando elementos con el get element ID

// console.log(document.getElementById("tituloWeb"));
// console.log(document.getElementById("tituloWeb").textContent);
// console.log(document.getElementById("tituloWeb").innerHTML);

//Document content Loading.  esto se usa cuando ponemos el script en el head
// Lo que le estamos cuando este cargado el documento html mostra lo que esta dentro de esta funcion
//Sin defer
// document.addEventListener("DOMContentLoaded", () => {
//     console.log(document.getElementById("tituloWeb"));
//     console.log(document.getElementById("tituloWeb").textContent);
// })
console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").textContent);
console.clear();

//QuerySelector es un metodo  devuelve el primer elemento que encuentre con el grupo especificado en el selector

// console.log(document.querySelector("#tituloWeb")); //por ID
// console.log(document.querySelector(".text-primary")); // Por clase
// console.log(document.querySelector("h1")); //por tag

// console.log(document.querySelectorAll(".text-danger"));

//seleccionar los que esten en el container
console.log(document.querySelectorAll(".container .text-danger"));
console.clear();

//Element ()
const h1 = document.getElementById("tituloWeb");
console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.textContent);
h1.textContent = "Nuevo texto desde JS";
h1.style.backgroundColor = "red";
h1.style.color = "yellow";
console.log(h1.textContent);
console.clear();

console.log("Prueba"); console.log("Prueba");

// Que es un evento: Es una accción que el usuario hace mediante el cual puede realizarse algún proceso  ejmplo: pulsar un enlace seleccionar , el cambio de valor de un ormulario entre otros
// Que es el addEvenListener: Registra un controlador de eventos para un tipo de eventos específico en un elemento
const boton = document.querySelector(".btn-primary");
boton.addEventListener("click", () => {
    h1.textContent = "Me haz dado cliks desde el boton";
    h1.style.color = "green";
    h1.style.backgroundColor = "Yellow";


})

