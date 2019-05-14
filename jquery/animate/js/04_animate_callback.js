$(document).ready(function(){
    $('#animate').click(function(){
        $('#content').animate({'width':'400px', 'height':'400px'}, 'slow', function(){
            $(this).html('fim da animação')
        });
    })
});