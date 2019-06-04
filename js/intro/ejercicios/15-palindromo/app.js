function esPalindromo(texto){
    var palindromo = texto.replace(/ /g,"");
    //console.log(palindromo);
    //console.log(palindromo.length);
    var comprobar = true;
    for(var i=0; i<palindromo.length; i++){
        if(palindromo[i] !== palindromo[palindromo.length-i-1]){
            //console.log(palindromo[i] !== palindromo[palindromo.length-i-1]);
            comprobar = false;
        }
    }
    return comprobar;
}
console.log(esPalindromo("ha  h"));

/*
function esPalindromo(texto){
    var textoSinEspacios = texto.replace(/ /g,"");
    var arrayLetras = textoSinEspacios.split("");
    var arrayAlReves = arrayLetras.reverse();
    var textoAlReves = arrayAlReves.join("");

    return textoSinEspacios === textoAlReves;
}
*/
