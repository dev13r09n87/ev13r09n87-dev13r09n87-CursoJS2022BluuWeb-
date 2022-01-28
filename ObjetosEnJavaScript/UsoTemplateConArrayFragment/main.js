console.warn("Conectado");

const arrayPaises = ["Perú", "Mexico", "Colombia", "Nicaragua"];
const listaUl = document.getElementById("lista");
const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector('#liTemplate');
// Si le pongo la e detecta el evento y me pinta el elemento al que le estoy haciendo click
const clickPaises = (e) => {
    console.log("Medistes Click", e.target);
}

arrayPaises.forEach((pais) => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('span').textContent = pais;
    // console.log(clone.querySelector('span').textContent);
    // Argregando elAddEventListener. para que funciones le agregamos  const clone = liTemplate.content.firstElementChildcloneNode(true);
    // no se le pasa los parentecis por que se ejecuta inmeditamente sin que se le de click al span
    clone.addEventListener("click", clickPaises);
    fragment.appendChild(clone);

});

listaUl.appendChild(fragment);
