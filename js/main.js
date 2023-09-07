var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Nutrição Descomplicada";

var pacientes = (document.querySelectorAll(".paciente"));

console.log(pacientes.length);

for( i = 0; i < pacientes.length; i++){
    console.log(pacientes[i]);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var pacientePeso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var pacienteAltura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (pacientePeso <= 0 || pacientePeso >= 300){
        console.log("peso invalido");
        pesoValido = false;
        tdImc.textContent = ("Peso Inválido");
        paciente.classList.add("paciente__invalido");
    }

    if (pacienteAltura <= 0 || pacienteAltura >= 2.5){
        console.log("altura invalida");
        alturaValida = false;
        tdImc.textContent = ("Altura Inválida");
        paciente.classList.add("paciente__invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = pacientePeso/(pacienteAltura*pacienteAltura);
        tdImc.textContent = imc.toFixed(2);
    }
}
