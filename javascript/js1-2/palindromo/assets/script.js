function palindromo(){
    var palavra = document.getElementById("input").value.toLowerCase();
    var resposta = document.getElementById("resposta");

    while(palavra.indexOf(" ") != -1 || palavra.indexOf(",") != -1 || palavra.indexOf("-") != -1 || palavra.indexOf(":") != -1 || palavra.indexOf(".") != -1 || palavra.indexOf("!") != -1 || palavra.indexOf("?") != -1 || palavra.indexOf(";") != -1){
        palavra = palavra.replace(" ", "");
        palavra = palavra.replace(",", "");
        palavra = palavra.replace("-", "");
        palavra = palavra.replace(":", "");
        palavra = palavra.replace(".", "");
        palavra = palavra.replace("!", "");
        palavra = palavra.replace("?", "");
        palavra = palavra.replace(";", "");
    }

    palavra = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "") //remove acentos

    for(var i = 0; i <palavra.length/2; i++){
        if(palavra[i] !== palavra[palavra.length -1 -i] || palavra.length == 1){
            resposta.innerText = "Não 💔"
            return
        }

        else{
            resposta.innerText = "Sim ❤️"
        }
    }
}