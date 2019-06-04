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
