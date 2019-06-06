let btnGuardar = document.getElementById('btn-guardar');

btnGuardar.addEventListener('click', (event)=>{
    event.preventDefault();

    let inputGenero = document.getElementById('input-genero');
    let inputPelicula = document.getElementById('input-pelicula');

    let nuevoGenero = inputGenero.value.trim();
    let nuevaPelicula = inputPelicula.value.trim();
    if(nuevaPelicula){
        //Guardamos pelicula
        savePelicula(nuevoGenero,nuevaPelicula);
    }
});


function savePelicula(genero, pelicula){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);

    xhr.addEventListener('readystatechange', () => {
        if(xhr.status === 200 && xhr.readyState === 4){
            Swal.fire({
                text: 'Pelicula guardada!',
                type: 'success'
            });
        }
    });

    xhr.send(JSON.stringify(pelicula));
}