const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");

// Agregndo un evento ,Bubbling: se propaga del elemento que esta mas anidado se propaga al padre. Esto no es optimo
// padre.addEventListener('click', () => {
//     console.log("Hiciste click en el padre");
// }, true);
// hijo.addEventListener('click', () => {
//     console.log("Hiciste click en el hijo");
// }, true);
// nieto.addEventListener('click', () => {
//     console.log("Hiciste click en el nieto");
// }, true);

// Para evitar el burbugeo existe el stopPropagation.

const cajitas = document.querySelectorAll('.border');

cajitas.forEach(caja => {
    caja.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("Me distes click");
    });
})
