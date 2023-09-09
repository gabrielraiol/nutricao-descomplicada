var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    var pacienteValido = validaPaciente(paciente.peso, paciente.altura);

    if (pacienteValido) {
        tabela.appendChild(pacienteTr);
        form.reset();
    }

});

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    };

    return paciente;
};

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(peso, altura) {

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura (altura);

    if (!pesoValido) {
        console.log("peso inválido");
        return alert("Paciente com peso inválido, revise os dados!");
    }

    if (!alturaValida) {
        console.log("altura inválida");
        return alert("Paciente com altura inválida, revise os dados!");
    }

    if (pesoValido && alturaValida) {
        return true;
    }
}