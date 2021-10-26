const Chart = require("./Scripts/Chart");

function Ejemplo() {
    var ejemplo = document.getElementById("ejemplo");

    ejemplo.value = "Ax^2 + Bx + C"
}
function SacarLasRaices() {
    SacarRaiz1();
    SacarRaiz2();
}


function SacarRaiz1() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;

    var resultado = document.getElementById('resultado');

    var primerCuenta = (-B) - (Math.sqrt( (B * B) - 4 * A * C));
    

    

    if ((2 * A) != 0) {
        var segundaCuenta = primerCuenta / (2 * A);
        
        resultado.value = segundaCuenta;

    } else {
        resultado.value = 'No hay raices disponibles';
    }
}
function SacarRaiz2() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;

    var resultado = document.getElementById('resultado2');

    var primerCuenta = (-B) + (Math.sqrt((B * B) - 4 * A * C));
    
    if ((2 * A) != 0) {
        var segundaCuenta = primerCuenta / (2 * A);
        resultado.value = segundaCuenta;

    } else {
        resultado.value = 'No hay raices disponibles';
    }


}