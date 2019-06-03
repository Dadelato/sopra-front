/*console.log('Hola mundo!');
var texto = "Probando";

console.log(texto);

console.log(typeof(texto));

//Nomenclatura de variables
var unTexto; //OK

var nombre = "me llamo \"Angel\"";
console.log(nombre);

if(nombre){
    console.log("Truthy \nValor verdadero");
} else{
    console.log("Falsy");
}

if(!unTexto){
    console.log("Falsy");
} else{
    console.log("Truthy");
}



var numLiteral = [1, 2, 3, 4, 5];
var numsContructor = new Array(6, 7, 8, 9);
var ar3Posiciones = new Array(3);
ar3Posiciones[0] = 10;
ar3Posiciones[1] = 13;
ar3Posiciones[2] = "String";
ar3Posiciones.push(15);
var numeroArray = 20;
ar3Posiciones.push(numeroArray);
console.log(ar3Posiciones);

nombre1 = "Angel";
console.log(nombre1[0]);


//Operador ternario
var num = 3 % 2 === 0 ? "Es par" : "Es impar";
console.log(num);

//Ejemplos consola
console.log("Mensaje de informacion");
console.warn("Mensaje de peligro");
console.log("Mensaje de error");
alert("Muestra un mensaje");
var esVerdad = confirm("Es verdad lo que dicen??");
var miNombre = prompt("Como te llamas??"); //Devuelve lo introducido o null


//Iteraciones y Bucles

var miNombre ="Paco";
if(miNombre === "Paco"){
    console.log("Eres Paco");
} else if (miNombre ==="Angel"){
    console.log("Eres Angel");
} else{
    console.log("Eres otra persona");
}

switch(miNombre){
    case "Paco":
        console.log("Eres Paco");
        break;
    case "Angel":
        console.log("Eres Angel");
        break;
    default:
        console.log("Eres otra persona");
}


var nombres = ["Robb", "Arya", "Sansa", "Rickon", "Bran"]
for(var i = 0; i<nombres.length; i++){
    console.log(nombres[i]);
}

//For in
for(var i in nombres){
    console.log("FORIN: " + nombres[i]);
}

//For of
for(var nombre of nombres){
    console.log("FOROF: " + nombre);
}

//While
var num = prompt("Introduce -1 para salir del bucle");
while(Number(num) !== -1){
    num = prompt("introduce -1 para salir del bucle");
}

*/


