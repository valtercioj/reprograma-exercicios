window.addEventListener('DOMContentLoaded', function(event) {

    let botaoResultado = document.getElementById("botaoResultado");

    botaoResultado.addEventListener("click", function(){

        let opcoesMarcadas = document.querySelectorAll("input[name=itemCheck]:checked").length;

        // let check = document.querySelectorAll(".check");
        
        // let opcoesMarcadas = 0;

        // for (let i=0; i < check.length; i++){ 

        //     if (check[i].checked == true){ 
        //         opcoesMarcadas ++;  
        //     }  
          
        // }

        let resultado = document.getElementById("resultado");

        if (opcoesMarcadas >= 0 && opcoesMarcadas <= 4) {
            resultado.innerHTML = `Você marcou ${opcoesMarcadas} opções de 17. Você tem uma relação saudável com seu pet, com limites emocionais estabelecidos. Se está bom para você e para ele, continue assim!`
        }

        else if (opcoesMarcadas > 4 && opcoesMarcadas <= 9) {
            resultado.innerHTML = `Você marcou ${opcoesMarcadas} opções de 17. Amor e atenção em ótima medida, dentro dos limites considerados normais pela sociedade.`
        }

        else if (opcoesMarcadas > 9 && opcoesMarcadas <= 14) {
            resultado.innerHTML = `Você marcou ${opcoesMarcadas} opções de 17. Seu pet é seu melhor amigo! Algumas pessoas acham que você exagera nos cuidados, mas pergunte a eles se estão pagando seus boletos do petshop.`
        }

        else {
            resultado.innerHTML = `Você marcou ${opcoesMarcadas} opções de 17. Mãe/Pai de pet nível hard! Você defenderia seu animal de estimação com a própria vida. Isso é ótimo e seu bichinho merece toda essa atenção, só não se esqueça de buscar contato humano de vez em quando.`
        }


    });
});