class Coche {

    static numRuedas(){
        return 4;
    }

    constructor(marca="Ferrari", modelo="", color="blanco"){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    pintar(nuevoColor){
        this.color = nuevoColor;
    }
}

let tesla = new Coche("Tesla", "Roadster", "rojo");
let defecto = new Coche();
console.log(Coche.numRuedas());


class Persona {
    constructor(nombre, apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    getNombreCompleto(){
        return this.nombre + " " + this.apellidos;
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellidos, puesto){
            super(nombre, apellidos);
            this.puesto = puesto;
            let edad = 20;
            this.getEdad = () =>{
                return edad;
            }
            this.setEdad = function(nuevaEdad){
                edad = nuevaEdad;
            }
    }
}

let angel = new Desarrollador("Angel", "Villaba", "JS");
console.log(angel.getNombreCompleto());
