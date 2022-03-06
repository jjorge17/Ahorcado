var pantalla = document.querySelector("#ahorcado");
var pincel =  pantalla.getContext("2d");

function dibujarHorca(xi,yi){
    if (pantalla.getContext) {
    //Dibujar la Horca
        //Dibujar la base
        pincel.strokeStyle = "rgb(85, 48, 13)";
        pincel.lineWidth = 15;
        pincel.lineCap = "round";
        pincel.beginPath();
        pincel.moveTo(xi,yi);                  //100, 300);
        pincel.lineTo(xi+50, yi-50);
        pincel.lineTo(xi+100, yi);
        pincel.closePath();
        pincel.stroke();
    //Dibujar el palo
        pincel.lineCap = "round";
        pincel.beginPath();
        pincel.moveTo(xi+50, yi-50);
        pincel.lineTo(xi+50, yi-255);
        pincel.closePath();
        pincel.stroke();
    //Dibujar el travesaño
        pincel.lineCap = "round";
        pincel.beginPath();
        pincel.moveTo(xi+43, yi-250);
        pincel.lineTo(xi+203, yi-250);
        pincel.closePath();
        pincel.stroke();
    //Dibujar la soga
        pincel.strokeStyle = "#000000";
        pincel.lineWidth = 2;
        pincel.beginPath();
        pincel.moveTo(xi+200, yi-250);
        pincel.lineTo(xi+200, yi-225);
        pincel.closePath();
        pincel.stroke();
    }
}

    
function dibujarCabeza(xi,yi) {
    if (pantalla.getContext) {
    //Dibujar la cabeza
    pincel.strokeStyle = "#808080";
    pincel.lineWidth = 3;
    pincel.beginPath();
    pincel.arc(xi+200, yi-200, 25, 0, Math.PI * 2, 0);    //cara
    pincel.moveTo(xi+215, yi-200);
    pincel.arc(xi+200, yi-200, 15, 0, Math.PI , 0);        //sonrisa
    pincel.moveTo(xi+195, yi-209);
    pincel.arc(xi+192.5, yi-209, 2.5, 0, Math.PI * 2, 0);        //ojo izquierdo
    pincel.moveTo(xi+210, yi-209);
    pincel.arc(xi+207.5, yi-209, 2.5, 0, Math.PI * 2, 0);        //Ojo derecho
    pincel.stroke();
    }
}

function dibujarTronco(xi,yi){
    if (pantalla.getContext) {
    pincel.strokeStyle = "#808080";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(xi+200,yi-200+25);
    pincel.lineTo(xi+200,yi-200+100);
    pincel.closePath();
    pincel.stroke();
    }
}

function dibujarPiernaIzquierda(xi,yi){
    if (pantalla.getContext) {
    pincel.strokeStyle = "#808080";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(xi+200,yi-200+100);
    pincel.lineTo(xi+200+40,yi-200+150);
    pincel.closePath();
    pincel.stroke();
    }
}

function dibujarPiernaDerecha(xi,yi){
    if (pantalla.getContext) {
    pincel.strokeStyle = "#808080";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(xi+200,yi-200+100);
    pincel.lineTo(xi+200-40,yi-200+150);
    pincel.closePath();
    pincel.stroke();
    }
}


function dibujarBrazoIzquierdo(xi,yi){
    if (pantalla.getContext) {
    pincel.strokeStyle = "#808080";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(xi+200,yi-200+40);
    pincel.lineTo(xi+200+40,yi-200+75);
    pincel.closePath();
    pincel.stroke();
    }
}

function dibujarBrazoDerecho(xi,yi){
    if (pantalla.getContext) {
    pincel.strokeStyle = "#808080";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(xi+200,yi-200+40);
    pincel.lineTo(xi+200-40,yi-200+75);
    pincel.closePath();
    pincel.stroke();
    }  
}

