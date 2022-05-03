var Error = 0;
var xi = 175;
var yi = 350;
var juego;
var Palabra = document.getElementById("palabras");
var Letras = document.getElementById("letra");
var Mensaje = document.getElementById("mensajes");
var tecla;
var arreglo = obtenerArregloPalabras();
var palabraElegida = elegirPalabra().split('');

//inicializa el juego
inicializarJuego();
//comprueba si esta jugando

document.addEventListener('keypress', function (e) {
    if (juego) {
        validar(e);
        if (tecla == "") {
            return
        } else {
            var acierto = controlaLetras(tecla);
            if (acierto) {
                if (completaPalabra())
                    finalJuego(true);
            } else {
                Error = Error + 1;
                dibujar(Error);
                if (Error == 7) {
                    finalJuego(false)
                }
            }
        }

    } else {
        alert('Pulsa Nuevo Juego para\n comenzar una partida nueva.');
    }
})

