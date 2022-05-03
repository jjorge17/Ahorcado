var palabras = ['PATO', 'JAVASCRIPT', 'JAVA', 'DIARIO', 'PROGRAMA', 'DINERO', 'VELOCIDAD', 'ESTUDIO', 'CUENTA', 'ALGORITMO', 'ALEATORIO'];


function obtenerArregloPalabras() {
    localStorage.setItem('myArray', JSON.stringify(palabras));
    var arreglo = localStorage.getItem('myArray');
    // Se parsea para poder ser usado en js con JSON.parse :)
    return arreglo = JSON.parse(arreglo);
}

function elegirPalabra() {
    var palabraElegida = arreglo[Math.floor(Math.random() * arreglo.length)];
    return palaElegida = palabraElegida;
}

function inicializarJuego() {
    juego = true;
    Error = 0;
    tecla = '';
    Mensaje.textContent = '';
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    dibujarSuelo(xi, yi);
    var finalJuego = false;
    for (var x = 0; x < palabraElegida.length; x++)
        Palabra.value += "_ ";
    Letras.value = "";
}

function validar(e) {
    var txt = e.keyCode || e.which;
    tecla = String.fromCharCode(txt).toUpperCase();
    patron = /[A-Z]/;
    if (!patron.test(tecla)) {
        tecla = "";
    } else {
        return patron.test(tecla);
    }
}

function controlaLetras(tecla) {
    var acierto = false
    var cadena = new String(Palabra.value)
    var letrasCadena = cadena.split(" ")
    cadena = ""
    for (var x = 0; x < palabraElegida.length; x++) {
        if (palabraElegida[x] == tecla) {
            cadena += tecla + " "
            acierto = true
        } else
            cadena += letrasCadena[x] + " "
    }
    Palabra.value = cadena
    Letras.value = Letras.value + tecla
    return acierto
}


function finalJuego(resultado) {
    if (resultado) {
        Mensaje.textContent = 'Acertaste !!!! ';
    } else {
        Mensaje.textContent = 'Perdiste!!! \n La palabra era: ' + palaElegida;
    } juego = false;
    return;
    
}

function completaPalabra() {
    var fin = true
    var cadena = new String(Palabra.value)
    var letrasCadena = cadena.split(" ")
    for (var x = 0; x < letrasCadena.length; x++)
        if (letrasCadena[x] == "_")
            fin = false
    return fin
}


function dibujar(Error) {
    if (Error >6) {
         dibujarPiernaDerecha(xi, yi);
    } else if (Error > 5) {
        dibujarPiernaIzquierda(xi, yi);
    } else if (Error > 4) {
        dibujarBrazoDerecho(xi, yi);
    } else if (Error > 3) {
        dibujarBrazoIzquierdo(xi, yi);
    } else if (Error > 2) {
        dibujarTronco(xi, yi);
    } else if (Error > 1) {
        dibujarCabeza(xi, yi);
    } else if (Error > 0) {
       dibujarHorca(xi, yi);
    } return;
}
