pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

pacientes.forEach( (paciente) => {
    paciente.addEventListener("dblclick", function() {
        console.log("fui clicado com um duplo click");
        this.remove();
    })
});