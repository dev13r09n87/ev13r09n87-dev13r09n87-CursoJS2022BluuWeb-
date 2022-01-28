console.warn("Conectado");
const lista = document.getElementById("lista");
// const arrayPaises = ["Perú", "Mexico", "Colombia", "Nicaragua"];
// const fragment = document.createDocumentFragment();

const liTemplate = document.querySelector("#liTemplate");
// console.log(liTemplate);
// es aconsejable clonar
const clone = liTemplate.content.cloneNode(true);
clone.querySelector('.text-primary').textContent = "Agrege a travez del Template"
lista.appendChild(clone);