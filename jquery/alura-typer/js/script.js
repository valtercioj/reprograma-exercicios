$(document).ready(function(){
    // $('.input').keyup(function(){
    //     let text = $(this).val();
    //     $('.typed').html(text);
    // })

    let wordCount = $('.orig-text').text().split(" ").length;
    $('.word-count').text(wordCount);

    $('.input').on('input', function(){
        $('.typed-text').text($(this).val());
        
        let characterCount = $('.typed-text').text().length;
        $('.typed-characters').text(characterCount);
        
        let typeCount = $('.typed-text').text().split(" ").length;
        $('.typed-words').text(typeCount);

        if ($('.input').val()=='') {
            $('.typed-characters').text('0');
            $('.typed-words').text('0');
        }
    })

    $('.restart').click(function(){
        $('.input').val('');
        $('.typed-text').text('');
        $('.typed-characters').text('0');
        $('.typed-words').text('0');
    })

});