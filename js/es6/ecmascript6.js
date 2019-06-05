let angel = "Angel";
angel = "Paco";
console.log(angel);

const NUM_MAX = 3;

function getNum(p1){
    let n1 = 0;
    var n2 = 1;

    if(p1 === 0){
        let n1 = 3;
        var n2 = 4;
        console.log(n1); //3
        console.log(n2); //4
    }
    console.log(n1); //0
    console.log(n2); //4
}

getNum(0);


//Template literals
let nombre = "Rickon";
let apellido = "Stark";
let nombreCompleto = "Me llamo" + nombre + " " + apellido;
let nombreCompleto2 = `Me llamo ${nombre} ${apellido}`;
function esPar(){
    return(2+2)%2===0 ? "par" : "impar"
}
let suma = `La suma de 2+2 es ${2+2} y es ${esPar()}`;
console.log(nombreCompleto);
console.log(nombreCompleto2);
console.log(suma);

console.log(`Array
de varias
lineas`)


//Arrow functiones

let dobles = [1, 2, 3, 4].map(function(num){
    return num*2;
})

let numDobles = [1, 2, 3, 4].map((num) => {
    return num*2;
})

console.log(numDobles);


//Funcion flecha
let pelicula = {
    titulo: "Los vengadores",
    genero: "Accion/Superheroes",
    setAnyoEstreno: function(anyo){
        this.anyoEstreno = anyo;
        let mostrar = () =>{
            console.log(this);
        }
        mostrar();

    }
}
pelicula.setAnyoEstreno(2019);
console.log(pelicula.anyoEstreno);


// REST PARAMS
function getNumLoteria(idSoreto, ...nums){
    console.log(nums);
    //return nums.join(', ');
    return `Sorteo ${idSoreto}: ${nums.join(", ")}`;
}

let numGanador = getNumLoteria(1, 4, 24, 31, 38);
console.log(numGanador);



//SPREAD OPERATOR
let telefonoDesconocido = ["+34", 647012398];
let telefonoCharly = ["+34", 647012398, "Charly"];
function createNumConPrefijo(prefijo, numTelf, nombre="Desconocido"){
    return `${nombre}: ${prefijo} ${numTelf}`
}

//createNumConPrefijo(telefono[0], telefono[1])
console.log(createNumConPrefijo(...telefonoCharly));
console.log(createNumConPrefijo(...telefonoDesconocido));




//DESESTRUCTURACION
let serie = {
    titulo: "Gangland Undercover",
    temporadas: 3,
    episodios: 30,
    finalizada: true
}

let {titulo, finalizada, ...restoProps} = serie;
console.log(titulo, finalizada);
console.log(restoProps);

let mascotas = ["gato", "perro", "pez", "canario"];

//let gato = mascota[0];
//let perro = mascota[1];
//let pez = mascota[2];
let [gato, , ...restoMascotas] = mascotas;
console.log(gato);
console.log(restoMascotas);