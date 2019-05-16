function trocaCarta(){
    $.getJSON('tarot.json', cartaAleatoria);
}

function cartaAleatoria(cartas, status){
    if(status == 'success'){
        let numAleatorio = Math.floor(Math.random() * cartas.length);
        $('.titulo').text(cartas[numAleatorio].nome);
        $('.tipo').text(cartas[numAleatorio].tipo);
        $('.descricao').text(cartas[numAleatorio].descricao);
        $('.image').attr('src', cartas[numAleatorio].imagem);
        $('.saiba-mais').attr('href', cartas[numAleatorio].link);
    }

    else {
        $('.message').text('Não foi possível carregar a carta.');
    }
}

$(document).ready(function(){
    trocaCarta();
    $('#novaCarta').click(trocaCarta);
});