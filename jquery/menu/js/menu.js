$(document).ready(function(){

    //hover

    // $('li').hover(function(){
    //     $(this).find('.menu2').slideDown();
    // }, function(){
    //     $(this).find('.menu2').slideUp();
    // });

    //click
    
    $('li').click(function(){
        $(this).find('.menu2').slideToggle();
        $(this).siblings().find('.menu2').slideUp();
    });
    
});