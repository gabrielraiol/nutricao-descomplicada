var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Nutrição Descomplicada";

var pacientes = (document.querySelectorAll(".paciente"));

console.log(pacientes.length);

for( i = 0; i < pacientes.length; i++){

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

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});

