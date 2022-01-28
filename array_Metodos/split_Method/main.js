
// array de usuarios
const meses = "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre";
//split:  Esté  método divide un objeto de tipo String en un array, mediante un separador.
const arrNuevo = meses.split(",");
console.log(arrNuevo);

//join (opens new window): el método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena. Si no le  pongo el separador esta funcion por defecto lo separa por comas.
const regresarLaMatrizAString = arrNuevo.join();
console.log("Usando join:", regresarLaMatrizAString);