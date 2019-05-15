// mesmo que o document.ready:

// $(function(){
// })

$(document).ready(function(){

    //método pronto do jquery para chamar o ajax
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photossd',
        type: 'GET',
        
        //success e error são propriedades do jquery que substituem o if/else da requisição por js
        success: function(photos){
            $(photos).each(function(){
                let container = $('<div>').attr('class', `photo${this.albumId}`);
                let photoTitle = $('<h2>').text(this.title);
                let photoImg = $('<img>').attr('src', this.url);
                container.append(photoTitle).append(photoImg);
                $('#root').append(container);
            });
        },
        error: function(req){
            let errorImg = $('<img>').attr('src', `https://http.cat/${req.status}`);
            $('#root').append(errorImg);
        }
    })

});