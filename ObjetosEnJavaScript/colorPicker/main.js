const inputColor = document.getElementById('inputColor');
const btnVisualizar = document.getElementById('btnVisualizar');
const parrafoExa = document.getElementById('parrafoExa');
const CardColor = document.getElementById("cardColor");

// verificando si los elementos estan seleccionados.
// console.log(inputColor);
// console.log(btnVisualizar);
// console.log(parrafoExa);
// console.log(CardColor);

btnVisualizar.addEventListener("click", () => {
    parrafoExa.textContent = inputColor.value;
    parrafoExa.style.color = inputColor.value;
    parrafoExa.style.fontWeight = "bold";
    CardColor.style.backgroundColor = inputColor.value;

    // Copiar color en el portapapeles:

    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => { console.log("texto copiado") })
        .catch((e) => { console.log(e) });

})
