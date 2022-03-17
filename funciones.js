var arreglo = localStorage.getItem('myArray');
arreglo = JSON.parse(arreglo);
var palaElegida;
var letra;
var palabraElegida = elegirPalabra().split('');


function dibujar(){
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


function validacionLetra() {
    text.addEventListener("keypress", validar);
        function validar(e) {
        var textV = "which" in e ? e.which : e.keyCode,
            char = String.fromCharCode(textV),
            regex = /[A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Z]/g;
            if(!regex.test(char)) e.preventDefault(); 
            return false;
        }
    }

function mostrarLetra(evObject) {
    
    var teclaPulsada = String.fromCharCode(evObject.which);
    letrasusadas.innerHTML += teclaPulsada;
    eventoControlado = false;
    return letra = teclaPulsada;

}

function elegirPalabra(){
    var palabraElegida = arreglo[Math.floor(Math.random() * arreglo.length)];
    return palaElegida = palabraElegida;
}

function formarPalabra() {
    //Generar espacio para la palabra y colocar guiones
    for (let i = 0; i < palabraElegida.length; i++) {
        var currentDiv = document.getElementById("palabra");
        var otherDiv = document.getElementById("letra");
        var newDiv = document.createElement("div");
        letter = palabraElegida[i];
        var newContent = document.createTextNode(" _ ");
        currentDiv.insertBefore(newDiv, otherDiv);
        newDiv.appendChild(newContent);
    }
    
}