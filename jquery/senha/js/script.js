// javascript
// var lis = document.querySelectorAll('li');
// for (i = 0; i < lis.length; i++){
//     lis[i].textContent = "batata"
// }

// jquery
// $('li').text('batata');

function mudaTexto(){
    // $('li').text('oh no');
    if ($('li').length > 0) {
        console.log($('.lista1 .botao').text())
    }
}

$(document).ready(function(){
    alert("oba");
    mudaTexto();
})