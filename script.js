document.addEventListener("DOMContentLoaded", function() {

    
    const botao = document.getElementById("meu-botao");

    
    let proximaCor = "verde";

    
    botao.addEventListener("click", function() {

        if (proximaCor === "verde") {
            
            document.body.style.backgroundColor = "#28a745"; 
            botao.textContent = "Clique para Azul!"; 

          
            proximaCor = "azul";

        } else {
        
            document.body.style.backgroundColor = "#007bff";
            botao.textContent = "Clique para Verde!";

           
            proximaCor = "verde";
        }
    });

});