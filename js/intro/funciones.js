//Definir función
function muestraMsg(msg){
    console.log(msg);
}
muestraMsg("Un mensaje");
muestraMsg();
muestraMsg("otro mensaje",2);

//Objeto arguments
function muestraArgs(arg1){
    console.log(arguments);
    console.log(arguments[0]);
}
muestraArgs(1, 2, 3, 4);

//Funciones recursivas
function sumatorio(num){
    if(num === 1){
        return num;
    } else{
        return num + sumatorio(num-1);
    }
}
var sum5 = sumatorio(5);
console.log("Sumatorio de 5 es " + sum5);
//console.log("Sumatorio de 5 es " + sumatorio(5));


//Funciones de arrays
var series = ["TwD", "GOT", "Chernobyl"];
series.forEach(function(elem, pos){
    console.log(pos + ": " + elem);
});

var nums = [1, 2, 3, 4, 5];
var numImpares = nums.filter(function(elem){
    return elem % 2 !== 0;
});
console.log(numImpares);

var numImparesX3 = numImpares.map(function(elem){
    return elem * 3;
});
console.log(numImparesX3);

/*
var sumaTotalImparesX3 = numImparesX3.reduce(
    function(acc, ele){
        return acc += elem;
    }, 10);
console.log(sumaTotalImparesX3);*/