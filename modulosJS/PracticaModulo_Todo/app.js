const formulario = document.querySelector("#fomulario");
const pintarTodo = document.querySelector("#pintarTodo");
const alert = document.querySelector(".alert");
const templateTodo = document.querySelector("#templateTodo").content;


let todos = [];
const agregarTodo = todo => {
    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`,
    }
    todos.push(objetoTodo);
};

pintarTodos = () => {

    localStorage.setItem('todos', JSON.stringify(todos));

    pintarTodo.textContent = "";
    const fragment = document.createDocumentFragment();
    todos.forEach(item => {
        const clone = templateTodo.cloneNode(true);
        clone.querySelector(".lead").textContent = item.nombre;
        clone.querySelector(".btn-danger").dataset.id = item.id; // el dataset siempre guarda cadenas
        fragment.appendChild(clone);
    })
    pintarTodo.appendChild(fragment);
};

// delegacion de evento se hace atravez del document.

document.addEventListener("click", (e) => {
    // console.log(e.target.dataset.id);
    // console.log(e.target.matches(".btn-danger"));

    if (e.target.matches(".btn-danger")) {
        // Vamoas a rrecorrer dodo el array para encontrar el id sea igual al seleccionado
        todos = todos.filter(item => item.id !== e.target.dataset.id)
        pintarTodos();
    }
});

formulario.addEventListener('submit', e => {
    e.preventDefault();
    // console.log("Funcionando Formulario");
    alert.classList.add("d-none");
    const data = new FormData(formulario);
    const [todo] = [...data.values()];
    // console.log(!todo.trim());
    if (!todo.trim()) {
        console.log("Te equivocastes mandastes espacion vacío")
        alert.classList.remove("d-none");
        return; // para que no siga nuestro codigo 
    }
    agregarTodo(todo);
    pintarTodos();
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    if (localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
        pintarTodos();
    }
});