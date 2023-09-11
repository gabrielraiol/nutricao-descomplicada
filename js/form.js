let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault();
    
    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPacienteDoFormulario(form);

    let pacienteTr = montaTr(paciente);

    let tabela = document.querySelector("#tabela-pacientes");

    let pacienteValido = validaPaciente(paciente.peso, paciente.altura);

    if (pacienteValido) {
        tabela.appendChild(pacienteTr);
        form.reset();
    }

});

function obtemPacienteDoFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    };

    return paciente;
};

function montaTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
};

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
};

function validaPaciente(peso, altura) {

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura (altura);
    let erros = [];
    let mensagensErro = document.querySelector("#mensagens-erro");

    if (!pesoValido) {
        console.log("peso inválido");
        erros.push("Paciente com peso inválido, revise os dados!");
    }

    if (!alturaValida) {
        console.log("altura inválida");
        erros.push("Paciente com altura inválida, revise os dados!");
    }

    if (pesoValido && alturaValida) {

        mensagensErro.style.display = "none";
        return true;
        
    } else {

        mensagensErro.style.display = "block";
        mensagensErro.innerHTML = "";

        erros.forEach ( (erro) => {
            let mensagemErro = document.createElement("li");
            mensagemErro.textContent = erro;
            mensagemErro.classList.add("mensagem-erro");
            
            mensagensErro.appendChild(mensagemErro);
            }
        )
    }
};