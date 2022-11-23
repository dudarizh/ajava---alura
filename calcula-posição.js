var titulo = document.querySelector(".titulo");
titulo.textContent = "Atrás da Bola";

var atletas = document.querySelectorAll(".atleta");

for (var i = 0; i < atletas.length; i++) {

    var atleta = atletas[i];

    var tdAltura = atleta.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdPeso = atleta.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdPosição = atleta.querySelector(".info-posição");

    var alturaEhValido = validaAltura(altura);
    var pesoEhValida = validaPeso(peso);

    if (!alturaEhValido) {
        console.log("Altura inválida!");
        alturaEhValido = false;
        tdposição.textContent = "Altura inválida";
        atleta.classList.add("atleta-invalido");
    }

    if (!pesoEhValida) {
        console.log("Peso inválid0!");
        pesoEhValida = false;
        tdPosição.textContent = "Peso inválido";
        atleta.classList.add("altura-invalido");
    }

if (alturaEhValida && pesoEhValido) {
        var posição = calculaPosição(altura, peso);
        tdImc.textContent = posição;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
