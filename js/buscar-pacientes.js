let buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", () => {
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", () => {

        if (xhr.status == 200) {
            let pacientesExternos = JSON.parse(xhr.responseText);
        
            for (i=0 ; i<pacientesExternos.length ; i++) {

                let pacienteExterno = pacientesExternos[i];

                let pacienteTr = montaTr(pacienteExterno);

                let tabela = document.querySelector("#tabela-pacientes");

                tabela.appendChild(pacienteTr);

                // Atualizando o array de pacientes para que a função de filtro receba os valores atualizados, após adição na tabela.
                pacientes = document.querySelectorAll(".paciente");
                
            };
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();
});