let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", (event) => {

    if (event.target.value.length > 0) {
        pacientes.forEach((pacientePosicao) => {
        
            let paciente = pacientePosicao;
            let tdNome = paciente.querySelector(".info-nome");

            // Opção para fazer a comparação usando RegGex
            // let nome = tdNome.textContent;
            // let comparaCaractere = new RegExp (event.target.value, "i");
            // if (comparaCaractere.test(nome)) {
            
            // Opção que preferi usar, com includes()
            let nome = tdNome.textContent.toLowerCase();
            let comparaCaractere = event.target.value.toLowerCase();
            
            if (nome.includes(comparaCaractere)) {
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