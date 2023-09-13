let tabela = document.querySelector("#tabela-pacientes");
console.log(tabela);

tabela.addEventListener("dblclick", (event) =>{
    event.target.parentNode.classList.add("fade-out");
    
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 700);
});