// function trocaCarta(){
//     $.get('http://localhost:3000/cartas', cartaAleatoria);
// }

// function cartaAleatoria(cartas, status){
//     if(status == 'success'){
//         let numAleatorio = Math.floor(Math.random() * cartas.length);
//         $('.titulo').text(cartas[numAleatorio].nome);
//         $('.tipo').text(cartas[numAleatorio].tipo);
//         $('.descricao').text(cartas[numAleatorio].descricao);
//         $('.imagem').attr('src', cartas[numAleatorio].imagem);
//         $('.saiba-mais').attr('href', cartas[numAleatorio].link);
//     }

//     else {
//         $('.erro').text('Não foi possível carregar a carta.');
//     }
// }

// $(document).ready(function(){
//     trocaCarta();
//     $('#novaCarta').click(trocaCarta);
// });


//com $.ajax

function trocaCarta(){
    $.ajax({
        url: 'http://localhost:3000/cartasss',
        type: 'GET',
        success: function(cartas){
            let numAleatorio = Math.floor(Math.random() * cartas.length);
            $('.titulo').text(cartas[numAleatorio].nome);
            $('.tipo').text(cartas[numAleatorio].tipo);
            $('.descricao').text(cartas[numAleatorio].descricao);
            $('.imagem').attr('src', cartas[numAleatorio].imagem);
            $('.saiba-mais').attr('href', cartas[numAleatorio].link);
        },
        error: function(){
            $('body').text('Não foi possível carregar a carta.');
        }
    })
}

$(document).ready(function(){
    trocaCarta();
    $('#novaCarta').click(trocaCarta);
});