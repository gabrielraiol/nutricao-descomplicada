let titulo = (document.querySelector(".titulo"));
titulo.textContent = "Nutrição Descomplicada";

let pacientes = document.querySelectorAll(".paciente");

for( let i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let pacientePeso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let pacienteAltura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoValido = validaPeso(pacientePeso);
    let alturaValida = validaAltura(pacienteAltura);

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
        let imc = calcImc(pacientePeso, pacienteAltura);
        tdImc.textContent = imc;
    }
};

function validaPeso(peso){
    if ((peso>0 && peso<300) && !peso.length == 0) {
        return true;
    } else {
        return false;
    }
};

function validaAltura(altura){
    if ((altura>0 && altura<2.5) && !altura.length == 0) {
        return true;
    } else {
        return false;
    }
};

function campoPreenchido(dado) {
    if (!dado.length == 0) {
        return true;
    } else {
        return false;
    }
}

function calcImc(peso, altura) {

    let imc = peso / (altura * altura);

    return imc.toFixed(2);
};