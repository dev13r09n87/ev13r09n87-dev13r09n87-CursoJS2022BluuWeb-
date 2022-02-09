// Las expresiones regulares (a menudo llamadas RegExp o RegEx) son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.
// podemos validar que sean solamente letras , numeros, que sea un correo electronico,
// una expresion consta de /Un patron y /una banderita flag.

/* Flags de expresiones regulares 
    i: Ignora mayúsculas y mnúsculas (insensible mayús/minús)
    g: Búsqueda global. Sigue bucando coincidencia en lugar de parase a encontrar una.
    m: Multilinea. Permite a ^ y $ tratar los finales de lineas \r o \n.
    
    Método de RegExp:
    test(): ejecuta una búsqueda de una ocurrencia entre una expresion regular y una cadena especificada Devuelve true o false.
    Retorna true cuando encuentra conicidencia expresion regular y la cadena especificada y de lo contrario false. 
*/

//Notacion literal
// const regExp = /bluuweb/i;
//Rango de caracteres[] :  Cualquiera de los caracteres del interior de los corchetes
const regExp = /[ue]/gi;

// Pipeline | (alternativa): Establece una alternativa: lo que está a la izquierda o lo que está a la derecha.
const myReg = /bluweb|bluuweb/gi;

//Notacion de objeto
const regExpObjeto = RegExp("bluuWeb", "i");
const myrReObj = RegExp("bluweb|bluuweb", "i");

//Comprobar la expresion regular.
console.log(regExpObjeto.test("bluuweb"));
console.log("Rango de caracteres []", regExp.test("bluuweb"));
console.log("myReg pipeline", myReg.test("bluweb"));
console.log("myRegObj pipeline", myrReObj.test("probando"));

// notación literal
const regExpLiteral1 = /bluuweb/i

// notación de objeto
const regExpObjeto1 = new RegExp("bluuweb", "i")
console.log(regExpLiteral1.test("Bluuweb1")); // true

//Encontrar Texto y numeros en expresiones regulares
const regeExpTextoNum = /[A-Za-z0-9]/gi;
console.log("regeExpTextoNum", regeExpTextoNum.test("prue###"));

//Validar que solamente sean numeros
regExpOnliNumeros = /^\d+$/gi;
const str = "123";
console.log("regExpOnliNumeros", regExpOnliNumeros.test(str));
//Validar que sean solamente letras
const RegSoloLetras = /^[A-Za-z]*$/gi;

console.log("RegSoloLetras", RegSoloLetras.test("Holamundo"));

// Validar Email
const regCheckEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
console.log("regCheckEmail", regCheckEmail.test("juanito21@pepito.com"));