var cursos = document.querySelector(".js-cursos");
var tempo = document.querySelector(".js-totaisDeHoras");
var contadodeCursos = 0;
var contadorhoras = 0;

function evento(elemento) {
  if (elemento.checked) {
    contadodeCursos = contadodeCursos + 1;
    contadorhoras = contadorhoras + parseInt(elemento.value);
  } else {
    contadodeCursos = contadodeCursos - 1;
    contadorhoras = contadorhoras - parseInt(elemento.value);
  }
  cursos.innerHTML = contadodeCursos + "curso(s)";
  tempo.innerHTML = contadorhoras + "h";
}
