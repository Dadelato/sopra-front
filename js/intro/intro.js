console.log('Hola mundo!');
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
