

function jugar(usuario){
    var contador = 0;
    var repetir = true;
    while(contador <= 20 && repetir){
        var num = Math.floor(Math.random()*10+1);
        contador += num;
        if(contador<20){
            if(usuario === 0){
                repetir = confirm("Ha obtenido " + num + " puntos. Su puntuación es de " + contador + "¿Quiere otro número?");
            }else{
                repetir = contador < 17;
            }
        }          
    }
    return contador;
}

function evaluarPuntos(pJugador, pMaquina){
    if(pJugador > 20){
        alert("Ha perdido");
    } else if(pJugador = 20){
        alert("Ha ganado");
    } else{

    }
}

var pJugador = jugar(0);
alert(pJugador);
evaluarPuntos(pJugador);
         

    