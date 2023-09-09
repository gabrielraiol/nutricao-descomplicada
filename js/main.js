var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Nutrição Descomplicada";

var pacientes = (document.querySelectorAll(".paciente"));

for( i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var pacientePeso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var pacienteAltura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(pacientePeso);
    var alturaValida = validaAltura(pacienteAltura);

    if (!pesoValido){
        console.log("peso invalido");
        pesoValido = false;
        tdImc.textContent = ("Peso Inválido");
        paciente.classList.add("paciente__invalido");
    }

    if (!alturaValida){
        console.log("altura invalida");
        alturaValida = false;
        tdImc.textContent = ("Altura Inválida");
        paciente.classList.add("paciente__invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calcImc(pacientePeso, pacienteAltura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if (peso>0 && peso<300) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura>0 && altura<2.5) {
        return true;
    } else {
        return false;
    }
}

function calcImc(peso, altura) {

    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}