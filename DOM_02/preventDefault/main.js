/* 
 ! prevent Default: Cancela el evento si este es cancelable , sin detener el resto del funcionamiento del evento. es decir, puede ser llamadoo de nuevo.
 Todo  El navegador tiene un evento submit que envia los datos por el metodo get. el cual esta enviando la informacion del formulario a la url del  navegador.
 */


const formulario = document.querySelector('form');
formulario.addEventListener("submit", e => {
    console.log('me distes click');
    //con el preven defoult detuvimos el comportamiento por defecto del navegador.
    e.preventDefault();
});

// COmo capturar el ancla

const ancla = document.querySelector('a');
ancla.addEventListener('click', e => {
    e.preventDefault();
    console.log("Medistes click ");

});

