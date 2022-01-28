console.log("conectado");
// insertBefore()  inserta un nodo antes del nodo de referencia
const lista = document.querySelector("#lista");

const arrayPaises = ["Perú", "Mexico", "colombia"];

const fragment = document.createDocumentFragment();

arrayPaises.forEach((pais) => {
    const newNode = document.createElement("li");
    newNode.textContent = pais;
    // En la primera vuelta estamos tratando de sacar el primer nodo que estamos tratando de sacar por que no hay primer nodo
    const referenciNodo = fragment.firstChild;
    // en esta linea lo insertamos efectivamente en la primera vuelta , asi que en la segunda vuelta si va a sacar la referencia del primer nodo asi que lo saca y lo guarda y vamos enpujando los elementos hacia arriba de esa referencia. También pudieran invertir el array u ptras solción.
    fragment.insertBefore(newNode, referenciNodo);
});

lista.appendChild(fragment);
