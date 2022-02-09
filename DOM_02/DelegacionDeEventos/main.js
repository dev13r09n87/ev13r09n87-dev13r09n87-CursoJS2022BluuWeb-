//La delegacion de evnetos es un patron para manejar eventos de manera mas eficiente.
//En lugar de agregar un detector de eventos a todos y cada uno de los elementos similares, podemos agregar un detector de eventos a un elemento principal y llamar a un evento en un objetivo en particular utlilizando la propiedad < .target > del objeto de evento. y así evitamos la propagación.

//primera manera  con la clase container

// const container = document.querySelector(".container");
// Agregamos el eventlistener 
document.addEventListener("click", e => {
// container.addEventListener("click", e => {
    //Tambien se puede seleccionar todo el documento si no tenemos un container principal.
    // console.log(e.target.id);
    //Atravez del e.target poder acceder al elemento en cuestion
    if (e.target.id === "padre") {
        console.log("Distes click en el padre => e.target.id ");
    }
    //Accediento atravez del matches : El método matches() comprueba si el Element ería seleccionable por el selector css especificado en la cadena ; en caso conrario, retorna false.
    // console.log(e.target.matches(".border-secondary"));
    if (e.target.matches(".border-secondary")) {
        console.log("Distes Click al Hijo  =>   e.target.matches ")
    }

    //Dataset :  Cuando veamos algo como eso en html es que se esta tratando de hacer algo en js.
    // console.log(e.target.dataset.div);
    if (e.target.dataset.div === 'divNieto') {
        console.log("Distes Click al nieto usando  =>  e.target.dataset.div ");
    }

});