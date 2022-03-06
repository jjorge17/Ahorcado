var arreglo = localStorage.getItem('myArray');
arreglo = JSON.parse(arreglo);
var palaElegida;
var letra;


// dibujar el inicio del juego
dibujarTablero();
//Elegir aleatoriamente la palabra y generar un array
formarPalabra()
//quedar a la espera de las letra
//1 verificar letra ingresada si es una letra y en mayuscula
var eventoControlado = false;
window.onload = function(){
    this.onkeypress = validacionLetra; 
    document.onkeyup = mostrarLetra;
}
//verificar si está en la palabra

function mostrarLetra(evObject) {
        
        var teclaPulsada = String.fromCharCode(evObject.which);
        letrasusadas.innerHTML += teclaPulsada;
        eventoControlado = false;
        return letra = teclaPulsada;

}
 



// en caso error dibujar una parte del dibujo y controlar cuantas partes van

// si no hay mas partes que dibujar finalizar el juego con mensaje perdio

// si se completo la palabra dibujar mensaje de Gano y finalizar

// si no sucedio ninguno de los pasos anteriores volver al paso 1



function formarPalabra() {
    var palabraElegida = elegirPalabra().split('');
    //Generar espacio para la palabra y colocar guiones
    for (let i = 0; i < palabraElegida.length; i++) {
        var newDiv = document.createElement("div");
        var otherDiv = document.getElementById("letra");
        var currentDiv = document.getElementById("palabra");
        letter = palabraElegida[i];
        var newContent = document.createTextNode(" _ ");
        currentDiv.insertBefore(newDiv, otherDiv);
        newDiv.appendChild(newContent);
    }
}

function dibujarTablero(){
    var xi =175
    var yi=350
    dibujarHorca(xi,yi);
    /*dibujarCabeza(xi,yi);
    dibujarTronco(xi,yi);
    dibujarPiernaIzquierda(xi,yi);
    dibujarPiernaDerecha(xi,yi);
    dibujarBrazoIzquierdo(xi,yi);
    dibujarBrazoDerecho(xi,yi);*/
}

function elegirPalabra(){
    var palabraElegida = arreglo[Math.floor(Math.random() * arreglo.length)];
    return palaElegida = palabraElegida;
}