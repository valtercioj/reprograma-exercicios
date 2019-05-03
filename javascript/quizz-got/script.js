window.addEventListener('DOMContentLoaded', function(event) {

    const botaoJogar = document.getElementById("botaoJogar");
    const sequenciaJogo = document.getElementById("sequenciaJogo");
    const imagens = [
        `<img src="./img/mindinho.jpg">`,
        `<img src="./img/brienne.jpg">`,
        `<img src="./img/viserion.jpg">`,
        `<img src="./img/jon-snow.jpg">`
    ]

    botaoJogar.addEventListener("click", function(){
        document.getElementById("jogo").classList.remove("jogo-off");
        document.getElementById("jogo").classList.add("jogo-on");
        document.getElementById("inicio").classList.add("inicio-none");

        document.getElementById("sequenciaJogo").innerHTML = imagens[0];
        setTimeout(function(){sequenciaJogo.innerHTML = imagens[1];}, 2000);
        setTimeout(function(){sequenciaJogo.innerHTML = imagens[2];}, 4000);
        setTimeout(function(){sequenciaJogo.innerHTML = imagens[3];}, 6000);
        setTimeout(function(){sequenciaJogo.innerHTML = 
        `<p>Mindinho - Morto 💀</p>
        <p>Brienne de Tarth - Viva 😊</p>
        <p>Viserion - White Walker 🥶</p>
        <p>Jon Snow - Vivo (porém, ressuscitado) 🤔</p>`;}, 9000);
    })

});