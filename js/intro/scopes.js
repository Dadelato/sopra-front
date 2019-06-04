var global = 1;
global2 = 2;

function fn1(){
    var local1 = 3;
    local2 = 4; //GLobal, pero hay que ejecutar fn1
    console.log(local1); 

    function fn2(){
        console.log(local1);
    }
    fn2();
}

fn1();

console.log(global);
console.log(global2);
//console.log(local1); 
console.log(local2);

function suma(n1, n2){
    return n1+n2;
}
function muestraConsola(mensaje){
    console.log("Mensaje" + mensaje + "global" + global);
}
muestraConsola("1 + 2 = " + suma(1, 2));
