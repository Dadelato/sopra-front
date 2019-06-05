var serie = {
    titulo: "",
    episodios: "",
    episodiosVistos: "",
    finalizada: ""
}

function Serie(titulo, episodios, episodiosVistos, finalizada){
    this.titulo = titulo;
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
    this.finalizada = function(){
        return this.espisodios - this.episodiosVistos === 0;

    }
}

var twd = new Serie("The Walking Dead", 180, 54, false);
var got = new Serie("Game of Thrones", 120, 102, true);
var bb = new Serie("Breaking Bad", 100, 100, true);
var ww = new Serie("West World", 50, 50, false);
var series = new Array(0);

series.push(twd);
series.push(got);
series.push(bb);
series.push(ww);
/*

    var sinFinal = [];
    for(var serie of series){   
        if(!serie.finalizada()){
            sinFinal.push(serie);
        }
    }
    return sinFinal;

console.log(enCurso(series));*/

var sinFinal = series.filter(function(serie){
    return !(serie.finalizada);
});

console.log(sinFinal);