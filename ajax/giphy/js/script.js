$(document).ready(function(){

    $('#btn-busca').click(function(e){
        e.preventDefault(); //previne comportamento padrão do form de mudar a url
        $('.area-gif').html('');
        let palavraBusca = $('#campo-busca').val();
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=RCMt2Ig3S68xtPvCjXY23ZX5gtfRgJKS&q=${palavraBusca}&limit=25`,
            type: 'GET',
            success: function(gifs){
                let arrayBusca = gifs.data;
                $(arrayBusca).each(function(){
                    let link =  $('<a>').attr('href', this.url).attr('target', '_blank');
                    let resultadoBusca = $('<img>').attr('src', this.images.fixed_height.url);
                    $('.area-gif').append(link);
                    $(link).append(resultadoBusca);
                })
            },
            error: function(req){
                let errorImg = $('<img>').attr('src', `https://http.cat/${req.status}`);
                $('.area-gif').append(errorImg);
            }
        })
    })

});