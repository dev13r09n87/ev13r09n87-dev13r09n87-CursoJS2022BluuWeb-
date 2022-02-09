const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const alertSuccess = document.getElementById("alertSuccess");
const alertNameE = document.getElementById("alertNameE");
const alertEmailE = document.getElementById("alertEmailE");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMesajeExito = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
    errores.forEach(item => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    // en caso de rellenar el formulario nuevamente agregamos la clase que oculta la caja de success
    const errores = []; //vamos a ir guardando los errores para pintarlo al final.
    alertSuccess.classList.add("d-none");
    //Esta linea devuelve true si existen espacios en blanco
    // console.log(!userName.value.trim())
    // console.log(!userEmail.value.trim())


    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        console.log("Formato no valido username");
        userName.classList.add("is-invalid");
        errores.push({
            tipo: alertNameE,
            msg: "formato no válido en el campo Nombre, solo letras"
        });
    } else {

        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertNameE.classList.add("d-none");
    }

    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        console.log("Formato no valido userEmail");
        userEmail.classList.add("is-invalid");
        errores.push({
            tipo: alertEmailE,
            msg: "Escriba un correo valido"
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
    }
    if (errores.length !== 0) {
        pintarMensajeError(errores)
        return;
    }
    console.info("Formulario enviado");
    pintarMesajeExito()
})