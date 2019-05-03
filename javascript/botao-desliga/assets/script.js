function desliga(){
    var meuBody = document.getElementById("fundo"); //armazena o body (id "fundo") em uma variável
    var meuBotao = document.getElementById("botao"); //armazena a imagem (id "botao") em uma variável

    if(meuBody.style.background == "white"){
        meuBody.style.background = "black";
        meuBotao.src = "./assets/botao-liga.png"
    }

    else{
        meuBody.style.background = "white";
        meuBotao.src = "./assets/botao-desliga.png";
    }
}