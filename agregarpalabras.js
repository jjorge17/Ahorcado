var palabras = ['PATO', 'JAVASCRIPT', 'JAVA', 'DIARIO', 'PROGRAMA', 'DINERO', 'VELOCIDAD', 'ESTUDIO', 'CUENTA', 'ALGORITMO', 'ALEATORIO'];
// Guardar el array en el localStorage
// Se guarda en localStorage despues de JSON stringificarlo 
localStorage.setItem('myArray', JSON.stringify(palabras));
// Obtener el arreglo de localStorage
var array = localStorage.getItem('myArray');
// Se parsea para poder ser usado en js con JSON.parse :)
array = JSON.parse(array);


/*function validar() {
    const input = document.getElementById('nueva-palabra');
    if(!input.checkValidity()) {
      alert('El campo no es válido.');
    } else {
      alert('El campo es válido.');
    }
  }*/
var text = document.getElementById("nueva-palabra");

function validacionLetra() {
text.addEventListener("keypress", validar);
    function validar(e) {
    var textV = "which" in e ? e.which : e.keyCode,
        char = String.fromCharCode(textV),
        regex = /[A-Z]/ig;
        if(!regex.test(char)) e.preventDefault(); return false;
    }
}

/*window.addEventListener("load", validacionLetra);

var btnagregarPalabra = document.getElementById("agregar-palabra");
btnagregarPalabra.addEventListener("click",function(event){
    event.preventDefault();
    
} )*/
