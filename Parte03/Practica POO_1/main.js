console.log("Conectado");
const fomulario = document.querySelector('#formulario1');
const cardsEstudiantes = document.querySelector('#cardsEstudiantes');
const cardsProfesores = document.querySelector('#cardsProfesores');
const tEstudiante = document.querySelector('#templateEstudiante').content;
const tProfesores = document.querySelector('#templateProfesore').content;
const alert = document.querySelector(".alert"); // Agregando alerta para ingreso de datos

const arrestudiantes = []; //todo  Array de todos los objetos de estudiantes
const arrProfesor = []; // todo Array de todos los profesores.


document.addEventListener('click', (e) => {
    console.log(e.target.dataset); //revisar que esta mandando en el dataset
    if (e.target.dataset.uid) {
        // console.log(e.target.matches(".btn-success")); // revisar si es true o false 
        if (e.target.matches(".btn-success")) {
            arrestudiantes.map(item => {
                if (item.uid === e.target.dataset.uid) {
                    // solo se va a modificar si es verdadero  el que coincida  con el nombre o el id del Dataset
                    item.setEstado = true;
                }
                return item;
            });
        }
    }

    if (e.target.dataset.uid) {
        // console.log(e.target.matches(".btn-danger")); // revisar si es true o false 
        if (e.target.matches(".btn-danger")) {
            arrestudiantes.map(item => {
                if (item.uid === e.target.dataset.uid) {
                    // solo se va a modificar si es verdadero  el que coincida  con el nombre o el id del Dataset
                    item.setEstado = false;
                }
                return item;
            });
        }
    }
    Persona.pintarPersonaUI(arrestudiantes, "Estudiante");
});

// todo addEventListener. Cual es la ventaja de usar delegacion de eventos es que podemos acceder a contenido que aun no exiten y se evita el burbugeo
fomulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alert.classList.add('d-none');

    // El FormData recibe el formulario
    const datos = new FormData(fomulario);
    // datos.forEach(item => console.log(item)); // visualizamos la informacion que viene del formulario.
    const [nombre, edad, opcion] = [...datos.values()];
    //console.log(nombre, edad, opcion);
    //console.log([...datos.values()]); // destructuring

    // if (opcion === "Estudiante") {

    // }
    // if (opcion === "Profesor") {

    // }
    if (!nombre.trim() || !edad.trim() || !opcion.trim()) {
        console.log("mostrar alert");
        alert.classList.remove('d-none');
        return;
    }

    switch (opcion) {
        case 'Estudiante':
            const estudiante = new Estudiante(nombre, edad);
            arrestudiantes.push(estudiante);
            Persona.pintarPersonaUI(arrestudiantes, opcion);
            // console.log(estudiantes);
            break;

        case 'Profesor':
            console.log("Profesor");
            const profesor = new Profesor(nombre, edad);
            arrProfesor.push(profesor);
            Persona.pintarPersonaUI(arrProfesor, opcion);
            break;

        default:
            console.warn("No se encuentra el dato seleccionado");
            break;
    }
});

// Usando las clases
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.uid = `${Date.now()}`; // Aqui usamos los template string para convertirlo a texto sino daria problemas cuando se  use para comparar por que se guarda en numeros.
    }
    // tendra la capacidad de pintar la información
    static pintarPersonaUI(personas, tipo) {

        switch (tipo) {
            case 'Estudiante':
                console.log(cardsEstudiantes);
                cardsEstudiantes.textContent = "";
                const fragment = document.createDocumentFragment();
                personas.forEach(item => {
                    fragment.appendChild(item.agregarNuevoEstudiante());
                });
                cardsEstudiantes.appendChild(fragment);
                break;
            case 'Profesor':
                cardsProfesores.textContent = "";
                const fragmentTP = document.createDocumentFragment();
                personas.forEach((item) => {
                    fragmentTP.appendChild(item.agregarNuevoProfesor());
                });
                cardsProfesores.appendChild(fragmentTP);
                break;
            default:
                break;
        }
    }
}

class Estudiante extends Persona {
    // propiedades Privadas
    #estado = false;
    #estudiante = "Estudiante";

    set setEstado(estado) {
        this.#estado = estado;
    }
    get getEstudiante() {
        return this.#estudiante;
    }

    agregarNuevoEstudiante() {

        const clon = tEstudiante.cloneNode(true);
        clon.querySelector("h5 .text-primary").textContent = this.nombre;
        clon.querySelector('h6').textContent = this.getEstudiante;
        clon.querySelector('.lead').textContent = this.edad;

        if (this.#estado) {
            clon.querySelector('.badge').className = "badge bg-success";
            clon.querySelector('.btn-success').disabled = true;
            clon.querySelector('.btn-danger').disabled = false;
        }
        else {
            clon.querySelector('.badge').className = "badge bg-danger";
            clon.querySelector('.btn-danger').disabled = true;
            clon.querySelector('.btn-success').disabled = false;
        }

        clon.querySelector('.badge').textContent = this.#estado ? "Aprobado" : "Reprobado";
        clon.querySelector('.btn-success').dataset.uid = this.uid;
        clon.querySelector('.btn-danger').dataset.uid = this.uid;

        return clon;
    }

}

class Profesor extends Persona {
    #profesor = "Profesor";

    agregarNuevoProfesor() {
        const clon = tProfesores.cloneNode(true);
        clon.querySelector('h5').textContent = this.nombre;
        clon.querySelector('h6').textContent = this.#profesor;
        clon.querySelector('.lead').textContent = this.edad;
        return clon;
    }
}
