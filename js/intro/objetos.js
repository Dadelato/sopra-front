var persona = {
    //Los atributos de un objeto no necesitan comillas, a menos que sean más de una palabra
    nombre: "Charly",
    apellido: "Falco",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido + " " + this.edad;
    },
}
console.log(persona.apellido);

var clave = "apellido";
console.log(persona.clave);
console.log(persona[clave]);

persona.edad = 20;

console.log(persona.nombreCompleto());

var pelicula = {
    titulo: "Los vengadores",
    director: {
        nombre: "...",
        apellido: "Russo"
    },
    genero: "Accion/Superheroes",
    setAnyoEstreno: function(anyo){
        this.anyoEstreno = anyo;
        var self = this;
        function mostrar(){
            //console.log(this); No funciona, llama al objeto global
            console.log(self);
        }
        mostrar();
        //mostrar.call(this); Funciona como el self
    }
}
pelicula.setAnyoEstreno(2019);

var serie = {
    titulo: "The Walking Dead",
    episodios: 180,
    episodiosVistos: 178
}

function Serie(titulo, episodios, episodiosVistos){
    this.titulo = titulo;
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
}

var twd = new Serie("The Walking Dead", 180, 178);
var got = new Serie("Game of Thrones", 120, 98);
console.log(twd);

var cancionBatman = new Array(16).join("what"-1) + " Batman!";
console.log(cancionBatman);

//Ejercicio 14
var numeros = [1, 34, 12, 64, 75, 343, 64, 75, 2323, 54, 6];

var ej14 = numeros.map(function(num){
    return num % 2 === 0 ? "Par" : num;
});

console.log(ej14);

//Strings
var texto = "Hola mundo!";
console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.replace("o",0));
console.log(texto.replace(/o/gi,0));
console.log(texto.substring(3, 6));
console.log(texto.indexOf("!"));
console.log(texto.includes("o"));
console.log(texto.split(""));



var colores = ["amarillo", "rojo", "verde"];
var primero = colores.shift();
var ultimo = colores.pop();
console.log(primero, ultimo);
colores.push("blanco");
colores.unshift("azul");
colores = colores.concat([primero, ultimo]);
console.log(colores);


var hoy = new Date();
console.log(hoy.getDay());
console.log(hoy.getDate());
console.log(typeof(hoy));

var angelJSON = JSON.stringify({nombre: "Angel"});
//console.log(angel);
/*
var angelJS = JSON.parse(angelJSON);
console.log(angel);
console.log(angelJSON);
console.log(angelJS);
*/