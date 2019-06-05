var traductor = (function(){
    console.log("Traductor");
    
    en = {
        hola: "hello",
        adios: "bye"
    }
    
    function traduce(texto, idioma){
        return en[texto] ? en[texto] : "No está disponible la traducción de " + texto;
    }

    return{
        traduce: traduce
    }
})()

console.log(traductor.traduce)

