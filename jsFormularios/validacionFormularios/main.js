/* Antes de enviar datos al servidor es importante asegurarse de que se completan todos los controles de formulario requerido y en el formato correcto.
Esto se denomina validacion de formulario del lado del cliente y ayuda a garantizar que los datos que se envían coinciden con los requisitos establecidos en los diversos conteroles formularios.

* Validacion de forularios incorporada: Con html5 podemos incorporar validacion sin tocar java script
*La validacion con Javascript:

HTML5
required, minlength , maxlength,min,max,patter

*/
const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
//expresiones regulares
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
// Usando queryselector  si no queremos usar el getElementById
// const userName = document.querySelector("input[name='userName']");
// const userEmail = document.querySelector("input[name='userEmail']");

formulario.addEventListener('submit', e => {
    e.preventDefault(); //para evitar el comportamiento por defecto(método get) del navegador.
    // console.log(userName.value);
    // console.log(userEmail.value);
    //como detectar lo que hizo el usuario

    if (!regUserName.test(userName.value)) {
        console.log("regUserName - Formato no válido");
        // con el return se sale de addeventListener.
        return;
    }

    if (!regUserEmail.test(userEmail.value)) {
        console.log("regUserEmail-Formato no valido");
        return;
    }

    console.log("Formulario envíado");
});



