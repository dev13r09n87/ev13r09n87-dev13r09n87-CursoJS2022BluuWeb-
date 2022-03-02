
// las plantilla son propiedades y metodos para poder crear un objeto literal
/* los contrutores proporcionan los medios para crear tantos objetos como necesites de una manera efectiva, adjuntando datos y funciones a ellos según sea necesario.
! Cuando se cre una nueva instancia del objeto, la funcionalidad esta vinculada atravéz de una cadena de referencia llamada cadena de prototipo.
! JS usa lo mejor de POO y lo usa.
? Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. En JavaScript , se establece un enlace entre la instancia del objeto y su prototipo(su propiedad _proto_, la cual es derivada de la propiedad Prototype sobre el constructor),y las propiedades y metodos son encontrados recorriendo la cadena de prototipos.
*/

console.log("conectado");
// todo Funciones constructora = a una plantilla = clase
function Persona(nombre) {
    // con this hacemos referencia al objeto que estamos visitando
    this.nombre = nombre;

    // método
    this.saludar = function () {
        return `${nombre} dice hola`;
    };
    // this.saludarIngles = function () {
    //     return `${nombre} says  hi`;

    // }

}
// * Persona va a tener el metodo pero va hacer un prototipo, la diferencia es que no sele esta pasando a cada uno de la instancia, y se va a usar la cadena de prototipo como cuando usamos el array. en el Objeto prototype().
// ? El beneficio del prototypo es que no se esta saturando a nuestra Persona con muchos metodos, sino al momento de iinvocarlo podemos usarlo  atravez de la cadena de prototype. 
Persona.prototype.saludarIngles = function () {
    return `${nombre} says  hi`;
};


// para crear el literal creamos una constante

const juanito = new Persona("Juanito");

const pedrito = new Persona("Pedrito");

const pepito = new Persona("Pepito");

console.log(juanito);
console.log(pedrito);
console.log(pepito);

// console.log(juanito.saludar());
// console.log(pedrito.saludar());
// console.log(pepito.saludar());
// console.log(pepito.saludarIngles());

// Nueva manera de usar Java Script
// ! Class = son una mejora sintáctica sobre la herencia basada en prototipos de JavaScrip. 

class Persons {
    // construir propiedades
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // getter: no reciben parametros y retornan algo
    get getName() {
        return this.name;
    }
    //setter
    set setName(name) {
        this.name = name;
    }

    // metodo de la clase
    saludar() {
        return `${this.name} dice hola`;
    }

    // la palabra clave static define un método estático para una clase. Estos métodos son llamados sin instanciar la clase y no pueden ser llamados mediante una instancia de la clase . Son usados a menudo para crear una funcion de utilidad para clase.
    static palabraClave(name) {
        return ` ${name} Probando saludo desde metodo static`;
    }

}

// llamando a un metodo estaticos.
console.log(Persons.palabraClave("Eddy"));


const Juanito = new Persons("Juanito");
const Pablo = new Persons("Pablo");
// Juanito.name = 'Luisito';
Juanito.setName = 'Luisito';
console.log(Juanito.getName); // los getter no usan parentecis
console.log(Pablo.saludar());

// ? El extends: se usa en declaraciones de clase o expresiones de clase para crear una clase hija.

class Estudiante extends Persons {
    // si queremos poner nuestras propias propiedades para ello se usa el super
    // constructor(name, age, notas = []) {
    //     super(name, age);
    //     // this.notas = notas || [];
    //     this.notas = notas;
    // };


    //Private class fields: alternativa para hacerlas privadas, para permitir la definicion de campos de la clase privados utilizando  un prefijo "#" hash.
    #notas = [];
    set setNotas(nota) {
        // Aca estamos agregando las notas del estudiante
        this.#notas.push(nota);
    }
    get GetNotas() {
        return this.#notas;
    }
    // si llamamos un metodo que existe en el padre se sobre escribe el metodo. A esto sele llama polimorfismo
    saludar() {

        return `${this.name} Desde Estudiante`;
    }
}
const Eddy = new Estudiante("Eddy", 34);
console.log(Eddy);
Eddy.setNotas = 7;
Eddy.setNotas = 5;
Eddy.setNotas = 1;
console.log(Eddy.GetNotas);


