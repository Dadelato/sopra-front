
var repetir = false;

do{  
    var num = Math.floor(Math.random()*51);
    console.log(num);
    var contador = 1;
    var miNumero = prompt("Introduzca un número entre 0 y 50");
    while(Number(miNumero) !== num){
        if(miNumero > num){
            miNumero = prompt("El número es demasiado grande. Introduzca otro");
        } else{
            miNumero = prompt("El número es demasiado pequeño. Introduzca otro");
        } contador++;
    }

    alert("Enhorabuena!! Ha acertado. Ha necesitado " + contador + " intentos");
    repetir = confirm("¿Quiere volver a jugar?");
} while(repetir === true);
    
    