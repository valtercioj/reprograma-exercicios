window.addEventListener('DOMContentLoaded', function(event) {

    const comecar = document.getElementById("botaoComecar");
    const jogar = document.getElementById("botaoJogar");
    const gif = document.getElementById("gif");
    const nomeJogador = document.getElementById("nomeJogador");
    const opcoesJogo = ["Pedra", "Papel", "Tesoura", "Lagarto", "Spock"];

    comecar.addEventListener("click", function() {

        document.getElementById("inicio").classList.add("input-none");
        document.getElementById("jogo").classList.remove("jogo-none");
        gif.innerHTML = `<img src="https://media.giphy.com/media/swTbdYziUJ8u4/giphy.gif">`

    });

    jogar.addEventListener("click", function(){

        const random = Math.floor(Math.random() * opcoesJogo.length);
        const escolhaComputador = opcoesJogo[random];
        const escolhaJogador = document.getElementById("escolhaJogador").value;
        const combinacao = document.getElementById("combinacao");
        const vencedor = document.getElementById("vencedor");

        if (escolhaJogador == "Pedra") {
            switch(escolhaComputador) {
                case ("Pedra"):
                combinacao.innerHTML = `Computador escolheu Pedra<br>👊👊`;
                vencedor.innerHTML = `Empate! Jogue novamente.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/DoDQmx72boyHu/giphy.gif">`
                break;

                case ("Papel"):
                combinacao.innerHTML = `Computador escolheu Papel<br>📃 cobre 👊`;
                vencedor.innerHTML = `Computador ganhou.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/CV61LRKyQf6P6/giphy.gif" width="300px">`
                break;

                case ("Tesoura"):
                combinacao.innerHTML = `Computador escolheu Tesoura<br>👊 quebra ✂️`;
                vencedor.innerHTML = `${nomeJogador.value} ganhou!`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/f79OYWh5uwIfK/giphy.gif">`
                break;

                case ("Lagarto"):
                combinacao.innerHTML = `Computador escolheu Lagarto<br>👊 esmaga 🦎`;
                vencedor.innerHTML = `${nomeJogador.value} ganhou!`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/f79OYWh5uwIfK/giphy.gif">`
                break;

                case ("Spock"):
                combinacao.innerHTML = `Computador escolheu Spock<br>🖖 vaporiza 👊`;
                vencedor.innerHTML = `Computador ganhou.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/CV61LRKyQf6P6/giphy.gif" width="300px">`;
                break;
            }
        }

        else if (escolhaJogador == "Papel") {
            switch (escolhaComputador) {
                case ("Pedra"):
                combinacao.innerHTML = `Computador escolheu Pedra<br>📃 cobre 👊`;
                vencedor.innerHTML = `${nomeJogador.value} ganhou!`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/f79OYWh5uwIfK/giphy.gif">`
                break;

                case ("Papel"):
                combinacao.innerHTML = `Computador escolheu Papel<br>📃📃`;
                vencedor.innerHTML = `Empate! Jogue novamente.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/DoDQmx72boyHu/giphy.gif">`
                break;

                case ("Tesoura"):
                combinacao.innerHTML = `Computador escolheu Tesoura<br>✂️ corta 📃`;
                vencedor.innerHTML = `Computador ganhou.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/CV61LRKyQf6P6/giphy.gif" width="300px">`;
                break;

                case ("Lagarto"):
                combinacao.innerHTML = `Computador escolheu Lagarto<br>🦎 come 📃`; 
                vencedor.innerHTML = `Computador ganhou.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/CV61LRKyQf6P6/giphy.gif" width="300px">`;
                break;

                case ("Spock"):
                combinacao.innerHTML = `Computador escolheu Spock<br>📃 desqualifica 🖖`;
                vencedor.innerHTML = `${nomeJogador.value} ganhou!`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/sBl8Fowq0ErFC/giphy.gif">`
                break;
            }
        }

        else if (escolhaJogador == "Tesoura") {
            switch (escolhaComputador) {
                case("Pedra"):
                combinacao.innerHTML = `Computador escolheu Pedra<br>👊 quebra ✂️`;
                vencedor.innerHTML = `Computador ganhou.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/CV61LRKyQf6P6/giphy.gif" width="300px">`;
                break;

                case ("Papel"):
                combinacao.innerHTML = `Computador escolheu Papel<br>✂️ corta 📃`;
                vencedor.innerHTML = `${nomeJogador.value} ganhou!`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/f79OYWh5uwIfK/giphy.gif">`
                break;

                case ("Tesoura"):
                combinacao.innerHTML = `Computador escolheu Tesoura<br>✂️✂️`;
                vencedor.innerHTML = `Empate! Jogue novamente.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/DoDQmx72boyHu/giphy.gif">`
                break;

                case ("Lagarto"):
                combinacao.innerHTML = `Computador escolheu Lagarto<br>✂️ decapita 🦎`;
                vencedor.innerHTML = `${nomeJogador.value} ganhou!`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/f79OYWh5uwIfK/giphy.gif">`
                break;

                case ("Spock"):
                combinacao.innerHTML = `Computador escolheu Spock<br>🖖 quebra ✂️`;
                vencedor.innerHTML = `Computador ganhou.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/x7gybOmE9zBmw/giphy.gif" width="300px">`;
                break;
            }
        }

        else if (escolhaJogador == "Lagarto") {
            switch (escolhaComputador) {
                case("Pedra"):
                combinacao.innerHTML = `Computador escolheu Pedra<br>👊 esmaga 🦎`; 
                vencedor.innerHTML = `Computador ganhou.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/CV61LRKyQf6P6/giphy.gif" width="300px">`;
                break;

                case ("Papel"):
                combinacao.innerHTML = `Computador escolheu Papel<br>🦎 come 📃`;
                vencedor.innerHTML = `${nomeJogador.value} ganhou!`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/f79OYWh5uwIfK/giphy.gif">`
                break;

                case ("Tesoura"):
                combinacao.innerHTML = `Computador escolheu Tesoura<br>✂️ decapita 🦎`;
                vencedor.innerHTML = `Computador ganhou.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/CV61LRKyQf6P6/giphy.gif" width="300px">`;
                break;

                case ("Lagarto"):
                combinacao.innerHTML = `Computador escolheu Lagarto<br>🦎🦎`;
                vencedor.innerHTML = `Empate! Jogue novamente.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/DoDQmx72boyHu/giphy.gif">`
                break;

                case ("Spock"):
                combinacao.innerHTML = `Computador escolheu Spock<br>🦎 envenena 🖖`;
                vencedor.innerHTML = `${nomeJogador.value} ganhou!`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/sBl8Fowq0ErFC/giphy.gif">`
                break;
            }
        }

        else if (escolhaJogador == "Spock") {
            switch (escolhaComputador) {
                case("Pedra"):
                combinacao.innerHTML = `Computador escolheu Pedra<br>🖖 vaporiza 👊`;
                vencedor.innerHTML = `${nomeJogador.value} ganhou!`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/x7gybOmE9zBmw/giphy.gif">`;
                break;

                case ("Papel"):
                combinacao.innerHTML = `Computador escolheu Papel<br>📃 desqualifica 🖖`;
                vencedor.innerHTML = `Computador ganhou.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/sBl8Fowq0ErFC/giphy.gif" width="300px">`;
                break;

                case ("Tesoura"):
                combinacao.innerHTML = `Computador escolheu Tesoura<br>🖖 quebra ✂️`;
                vencedor.innerHTML = `${nomeJogador.value} ganhou!`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/x7gybOmE9zBmw/giphy.gif">`;
                break;

                case ("Lagarto"):
                combinacao.innerHTML = `Computador escolheu Lagarto<br>🦎 envenena 🖖`;
                vencedor.innerHTML = `Computador ganhou.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/sBl8Fowq0ErFC/giphy.gif" width="300px">`;
                break;

                case ("Spock"):
                combinacao.innerHTML = `Computador escolheu Spock<br>🖖🖖`;
                vencedor.innerHTML = `Empate! Jogue novamente.`;
                gif.innerHTML = `<img src="https://media.giphy.com/media/DoDQmx72boyHu/giphy.gif">`
                break;
            }
        }
    
        else {
            alert("Selecione uma opção para jogar")
            combinacao.innerHTML = ``;
            vencedor.innerHTML = ``;
            gif.innerHTML = `<img src="https://media.giphy.com/media/Lj3lt5pYUQBKE/giphy.gif">`
        }

    });

});

