// Variables globales
var nota1 = 0;
var nota2 = 0;
var nota3 = 0;
var total = 0;


// Calcular Promedio
function ObtenerPromedio() {
    total = (nota1 + nota2 + nota3)
    return (total / 3).toFixed(2)
}

function PedirNotas() {
    nota1 = +prompt("Ingrese la primera nota");
    nota2 = +prompt("Ingrese la segunda nota");
    nota3 = +prompt("Ingrese la tercera nota");
}

// seleccionar los botones de las dstintas asignaturas
var BotonHtml = document.getElementById("btn_html");
var BotonCss = document.getElementById("btn_css");
var BotonJs = document.getElementById("btn_js");

//Mostrar los resultados de las celdas de la tabla
BotonHtml.onclick = function () {
    PedirNotas();
    document.getElementById("html-nota1").textContent = nota1;
    document.getElementById("html-nota2").textContent = nota2;
    document.getElementById("html-nota3").textContent = nota3;
    document.getElementById("html-promedio").textContent = ObtenerPromedio();  
}

BotonCss.onclick = function() {
    PedirNotas();
    document.getElementById("css-nota1").textContent = nota1;
    document.getElementById("css-nota2").textContent = nota2;
    document.getElementById("css-nota3").textContent = nota3;
    document.getElementById("css-promedio").textContent = ObtenerPromedio();
}

BotonJs.onclick = function() {
    PedirNotas();
    document.getElementById("js-nota1").textContent = nota1;
    document.getElementById("js-nota2").textContent = nota2;
    document.getElementById("js-nota3").textContent = nota3;
    document.getElementById("js-promedio").textContent = ObtenerPromedio();
}



