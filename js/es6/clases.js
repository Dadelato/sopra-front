class Coche {
    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    pintar(nuevoColor){
        this.color = nuevoColor;
    }
}