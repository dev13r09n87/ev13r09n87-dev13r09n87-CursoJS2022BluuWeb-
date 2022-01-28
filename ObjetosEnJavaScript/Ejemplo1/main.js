const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["cobarde", "timido"],
        favoritos: {
            comida: {
                frito: "salmon",
                caliente: "pollo"
            }
        }
    },
    // Forma de declaracion antigua
    // comer: function () {
    //     console.log("Gato comiendo");
    // },
    comer(alimento) {
        // Con this hace referneia al objeto contexto en el cual se esta ejecutando el código actual
        console.log(`El gato ${this.nombre} esta comiendo ${alimento}  `)
    },

    // Usando Arrow Function

    listarEnemigos() {
        // LAs arrow funtion se pueden usar dentro de un metodo pero no se puede usar como metodo
        this.enemigos.forEach((item) => console.log(item))
    },
    //Getter y setter sib como propuedades computadas
    get nombreMayuscula() {
        return this.nombre.toUpperCase();
    },

    set addEnemigo(enemigo) {
        this.enemigos.push(enemigo);
    },

}

// Leer el objeto
console.log(gato);
// console.log(gato.nombre)
// console.log(gato["nombre"])
// console.log(gato.duerme)
// console.log(gato.nombre)
// console.log(gato["enemigos"][0]);
// console.log(gato.enemigos[1])

//Crear una propiedad"

gato.color = "azul";
console.log(gato.color);

// Actualizar la edad

gato.edad = 15;

// hasOwnProperty ,COmprobar si exuiste una propiedad en el objeto

// if (gato.hasOwnProperty("edad")) {
//     gato.nombre = "Flojera"
// }

//Accediendo a los objetos anidados
console.log(gato.otros.favorito?.comida.frito)
console.log(gato.otros.amigos[1]);
gato.comer("pez")
gato.listarEnemigos();

//  Uso del For in itera sobre todas las propiedades enumerable de un objeto
// El for of es usado solamente para los array
console.clear();
console.clear();
for (const propiedad in gato) {
    // console.log(propiedad);
    console.log(gato[propiedad]);
}
console.clear();
// 
console.log(Object.values(gato))
Object.values(gato).forEach((item) => console.log(item));
console.clear();
// Destructuring, desectructuraicon en Java Script esto se hace en el Array como en los Objetos
//forma tradicional
// const nombre = gato.nombre;
// console.log(nombre);

// // const { nombre: nomSupGato, duerme: sleep, edad: Age } = gato;
// const { nombre: nomSupGato = "no name", duerme: sleep, edad: Age } = gato;

// console.log(nomSupGato, sleep, Age);

const { amigos: amigosGatos } = gato.otros;

// Esto es mas complicado de usar
// const {
//     otros:
//     { amigos: amicat }
// } = gato;

console.log(amigosGatos);


const { amigos: amigosArray } = gato.otros;

const [amigo1, amigo2, am3, am4 = "Juanito"] = amigosArray;

console.log(amigo1, am4);

console.clear();

//Getter y Setters

console.log(gato.nombreMayuscula);

gato.addEnemigo = "Batman";
console.log(gato.enemigos)

console.clear();


// Por valor y por referencia (objetos,array ,funciones) asigna referencia
//Por valor

let a = "hola"
let b = a;
a = "chao";
console.log(b);

// Por referencia

let d = ["Hola"];
let e = d;
d.push("chao");
console.log(e);

let f = { nombre: "objeto<<w" };
let g = f;
console.log(g);