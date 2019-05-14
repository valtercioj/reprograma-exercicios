$(document).ready(function(){
    // $('.input').keyup(function(){
    //     let text = $(this).val();
    //     $('.typed').html(text);
    // })

    let wordAccount = $('.text').text().split(" ").length;
    $('.words').text(wordAccount);

    $('.input').on('input', function(){
        $('.typed').text($(this).val());
        
        let characterAccount = $('.typed').text().length;
        $('.character-typed').text(characterAccount);
        
        let typeAccount = $('.typed').text().split(" ").length;
        $('.words-typed').text(typeAccount);
    })
});