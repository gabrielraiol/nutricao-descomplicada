let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {

    event.preventDefault();
    
    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPacienteDoFormulario(form);

    let pacienteTr = montaTr(paciente);

    let tabela = document.querySelector("#tabela-pacientes");

    let pacienteValido = validaPaciente(paciente);

    if (pacienteValido) {
        tabela.appendChild(pacienteTr);
        form.reset();

        // Atualizando o array de pacientes para que a função de filtro receba os valores atualizados, após adição na tabela.
        pacientes = document.querySelectorAll(".paciente");

        // Store the updated pacientes array in local storage as JSON
        // Test later

        // localStorage.setItem('pacientes', JSON.stringify(Array.from(pacientes)));    
        // const storedPacientes = localStorage.getItem('pacientes');
        // console.log(storedPacientes);
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

function validaPaciente(paciente) {

    let pesoValido = validaPeso(paciente.peso);
    let alturaValida = validaAltura(paciente.altura);

    let nomePreenchido = campoPreenchido(paciente.nome);
    let pesoPreenchido = campoPreenchido(paciente.peso);
    let alturaPreenchida = campoPreenchido(paciente.altura);
    let gorduraPreenchida = campoPreenchido(paciente.gordura);

    let campo = true;

    let erros = [];
    let ul = document.querySelector("#mensagens-erro");

    if (!nomePreenchido || !pesoPreenchido || !alturaPreenchida || !gorduraPreenchida) {
        console.log("campo em branco");
        erros.push("Não é possível adicionar paciente com campos em branco");
        campo = false;
    }

    if (!pesoValido) {
        console.log("peso inválido");
        erros.push("Paciente com peso inválido, revise os dados!");
    }

    if (!alturaValida) {
        console.log("altura inválida");
        erros.push("Paciente com altura inválida, revise os dados!");
    }

    if (pesoValido && alturaValida && campo) {

        ul.style.display = "none";
        return true;

    } else {

        ul.style.display = "block";
        ul.innerHTML = "";

        erros.forEach ( (erro) => {
            let mensagemErro = document.createElement("li");
            mensagemErro.textContent = erro;
            mensagemErro.classList.add("mensagem-erro");
            
            ul.appendChild(mensagemErro);
            }
        )
    }
};