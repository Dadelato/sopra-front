String.prototype.reverse = function(){
    /*let array = [];
    for(let i = this.length-1; i >= 0; i--){
        array.push(this[i]);

    }
    return array.join("");*/
    let array = this.split("");
    array.reverse();
    let textoReverse = array.join("");
    return textoReverse;
}

let saludo = "perro";
console.log(saludo.reverse());


Array.prototype.miIncludes = function(elem){
    return this.indexOf(elem) > -1 ? true : false;
}

console.log([1, 2, 3].miIncludes(2));
console.log(["gato", "perro"].miIncludes("pez"));