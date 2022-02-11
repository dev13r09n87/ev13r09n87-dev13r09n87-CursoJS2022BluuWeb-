console.log("Vinculado");

// !  el Evento DOMContentLoades es disparado cuando el documento HTML ha sido completamente cargado y parseado NO espera( css,imagenesimages y subframe)

document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomInt(1, 151);
    console.log(random);
    fetcData(random);
})


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const fetcData = async (id) => {
    try {
        // ! esperate cuandodo tengas esta operacion 
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // ! cuando este lista la respuesta convertirlo a json. Cuando se demora mucho estas solicitudes si tarda mucho se envia al catch.
        const data = await res.json();
        console.log(data);
        // creando el objeto pokemon
        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            experiencia: data.base_experience,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat,
        };
        pintarCard(pokemon);
    } catch (error) {
        console.log(error);
    } finally {

    }
}

const pintarCard = (pokemon) => {
    console.log(pokemon);
    const main = document.querySelector(".flex");
    const template = document.querySelector('#template-card').content;
    const cloneT = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    // Seleccionando la imagen
    cloneT.querySelector('.card-body-img').setAttribute('src', pokemon.img);
    cloneT.querySelector('.card-body-title').
        innerHTML = `
        ${pokemon.nombre}
        <span>
            ${pokemon.hp} hp
        </span>`;
    // con text conten es un texto plano.
    cloneT.querySelector('.card-body-text').textContent = pokemon.experiencia + ' Exp';
    cloneT.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque;
    cloneT.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defensa;
    cloneT.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.especial;
    
    fragment.appendChild(cloneT);

    // una vez que tenemos agregado los cambios en nuestra template lo empujajos o insertamos en el main
    main.appendChild(fragment);
}
