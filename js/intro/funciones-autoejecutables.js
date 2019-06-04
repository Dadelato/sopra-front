var miCalculadora = (function(){
    console.log("Hola");
    function sumar(n1, n2){
        return n1 + n2;
    }
    
    function restar(n1, n2){
        return n1 - n2;
    }
    
    function multiplicar(n1, n2){
        return n1 * n2;
    }
    
    function dividir(n1, n2){
        return n1 / n2;
    }

    return{
        sumar: sumar,
        restar: restar,
        multiplicar: multiplicar,
        dividir: dividir
    }
})()

function sumar(n1, n2){
    return 1;
}

