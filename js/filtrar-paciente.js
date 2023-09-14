let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", (event) => {

    if (event.target.value.length > 0) {
        pacientes.forEach((pacientePosicao) => {
        
            let paciente = pacientePosicao;
            let tdNome = paciente.querySelector(".info-nome");
    
            nome = tdNome.textContent;
            
            let expressao = new RegExp (event.target.value, "i");
    
            if (expressao.test(nome)) {
                paciente.classList.remove("esconde-elemento");
            } else {
                paciente.classList.add("esconde-elemento");
            }
        });

    } else {
        pacientes.forEach((pacientePosicao) => {
            let paciente = pacientePosicao;
            paciente.classList.remove("esconde-elemento");
        })
    };
});