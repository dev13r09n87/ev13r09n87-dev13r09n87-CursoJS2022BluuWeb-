console.log("Conectado");

// const uri = "https:rickandmortyapi.com/api/character";
const uri = "https://randomuser.me/api/?results=200";
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});


const fetchData = async () => {
    // console.log("Obteniendo datos ..."); // con esto verificamos que este cargado
    try {
        // todo: aca realizamos la peticiones al servidor
        loadingData(true);
        const res = await fetch(uri); // todo : perate dejame traer la respuesta 
        const data = await res.json(); // todo: una vez que la tengo ahora si transformala en json
        // console.log(data);
        pintarCard(data);
    } catch (error) {
        console.error();
    } finally {
        // todo: una vez finalizada la solicitud mostramos el false
        loadingData(false);
    }
}

const pintarCard = data => {
    // todo cards es donde vamos a pintar nuestros items
    const cards = document.getElementById("card-dinamicas");
    // todo clonamos el template para ir agregando los elementos y clonarlos es la base principal.
    const templateCard = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    // console.log(data);
    data.results.forEach(item => {
        console.log(item);
        // console.log(item.name.first + " " + item.name.last + " " + item.name.title);

        const cloneTC = templateCard.cloneNode(true);
        cloneTC.querySelector("h5").textContent = item.name.first + " " + item.name.last;
        cloneTC.querySelector("p").textContent = item.email;
        cloneTC.querySelector(".card-img-top").setAttribute("src", item.picture.large);
        // todo guardamos en el fragmen para evitar el reflow
        fragment.appendChild(cloneTC);
    });
    // todo: Una vez que se crea el fragment agregamos a nuestro sitio web nuestra template
    cards.appendChild(fragment);
};


// todo Pintar el loading
const loadingData = (estado) => {
    const loading = document.getElementById("loading");
    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }

};