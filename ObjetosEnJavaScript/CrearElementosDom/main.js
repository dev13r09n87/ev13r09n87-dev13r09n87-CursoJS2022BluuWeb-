const lista = document.querySelector("#lista");
const arrayPaises = ["Perú", "Bolivia", "Colombia"];
const fragment = document.createDocumentFragment();

//  El metodo document.createElement() crea un elemento HTML especificado por su tagName.
// const lista = document.querySelector("#lista");

console.log("Conectado");
//aca tambien genera reflow- para tratarr de mitigar el reflow se usa el DocumentFragment. El cual se usa como una versión ligera del document que almacena un segmento como una estructura de documentos compuesta de nodos como el document estándar.  El fragmen se genera de forma paralela y no estamos interfiriendo en el dom hasta que se hace el appendChild

arrayPaises.forEach(pais => {
    //En este punto vamos a crear el elemento li
    const li = document.createElement('li');
    //Ahora le asignamos el elemento con textContent
    li.textContent = pais;
    //y luego de asignarle el valor de la variable pais lo agregamos a la lista con appendChild
    fragment.appendChild(li);
});

lista.appendChild(fragment);
// Otra manera de recorrer el arrayPaises
//no se recomienda por que se genera un reflow: el rendimiento puede bajar al dibujar la pagina
// arrayPaises.forEach((pais) => {
//     lista.innerHTML += `<li>${pais}</li>`;
//     console.log(pais)
// });

// console.log(li);

// AppendChild : Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre espesificado
// lista.appendChild(li);

// si el hijo hace referencia  a un nodo existente en el nuevo documento, el método AppendChild se mueve de su posicion actual a su nueva posición.
