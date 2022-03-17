var palabras = ['PATO', 'JAVASCRIPT', 'JAVA', 'DIARIO', 'PROGRAMA', 'DINERO', 'VELOCIDAD', 'ESTUDIO', 'CUENTA', 'ALGORITMO', 'ALEATORIO'];
// Guardar el array en el localStorage
// Se guarda en localStorage despues de JSON stringificarlo 
localStorage.setItem('myArray', JSON.stringify(palabras));
// Obtener el arreglo de localStorage
var array = localStorage.getItem('myArray');
// Se parsea para poder ser usado en js con JSON.parse :)
array = JSON.parse(array);

var text = document.getElementById("nueva-palabra");
validacionLetra();

