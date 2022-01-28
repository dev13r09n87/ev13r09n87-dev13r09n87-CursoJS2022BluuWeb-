console.warn("Conectado");

// <li class="list">
//     <bold>pais:</bold>
//     <span>Aqui va el pais</span>
// </li>

const lista = document.getElementById("lista");
const arrayPaises = ["Perú", "Mexico", "Colombia", "Nicaragua"];
const fragment = document.createDocumentFragment();
// Haciendo uso de create element fragment para generar los li dinamicamente
// arrayPaises.forEach((pais) => {
//     const li = document.createElement("li");
//     li.className = 'list';
//     const b = document.createElement('b');
//     b.textContent = "Pais: ";
//     const span = document.createElement('span');
//     span.className = "text-primary";
//     span.textContent = pais;
//     // uniendo todos los tag en el li
//     li.appendChild(b);
//     li.appendChild(span);
//     fragment.appendChild(li);

// });
// lista.appendChild(fragment);

// Haciendo uso de InnerHtml. 
let template = '';
arrayPaises.forEach((pais) => {
    template += `  
     <li class="list">
     <bold>pais:</bold>
     <span class = "text-primary" >${pais}</span >
    </li >
    `
});
lista.innerHTML = template;