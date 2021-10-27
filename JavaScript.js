const Chart = require("./Scripts/Chart");

function Ejemplo() {
    var ejemplo = document.getElementById("ejemplo");

    ejemplo.value = "Ax^2 + Bx + C"
}
function SacarLasRaices() {
    SacarRaiz1();
    SacarRaiz2();
}


function calcularRaizCuadrada(A, B, C) {
    var cuentaProblematica = (B * B) - (4 * A * C);
    var resultadoReal = 0;
    if (cuentaProblematica > 0) {
        resultadoReal = Math.sqrt(cuentaProblematica);
    }

    return resultadoReal;
}

function SacarRaiz1() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;

    var resultado = document.getElementById('resultado');

    var sqrt = calcularRaizCuadrada(A, B, C);
    var pudo = false;

    if (sqrt != 0 && A != 0) {
        var resulReal = (-B) - sqrt;
        var resulTotal = resulReal / (2 * A);
        pudo = true;
    }

    if (pudo) {
        resultado.value = resulTotal;
    } else {
        resultado.value = 'no existen raices';
    }

}

function SacarRaiz2() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;

    var resultado = document.getElementById('resultado2');

    var sqrt = calcularRaizCuadrada(A, B, C);
    var pudo = false;

    if (sqrt != 0 && A != 0) {
        var resulReal = (-B) + sqrt;
        var resulTotal = resulReal / (2 * A);
        pudo = true;
    }

    if (pudo) {
        resultado.value = resulTotal;
    } else {
        resultado.value = 'no existen raices';
    }

}