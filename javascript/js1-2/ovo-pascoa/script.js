window.addEventListener('DOMContentLoaded', function() {

    const pais = document.querySelector('#pais');
    const cidade = document.querySelector('#cidade');
    const presente = document.querySelector('#presente');
    const menuCidade = document.querySelector('#menu-cidade');

    pais.addEventListener('click', function(){

        menuCidade.classList.add('dropdown-cidade'); 

        if (pais.value == 'australia') {
            presente.innerHTML = '🍫 Dois ovos de chocolate branco 🍫';
        }

        else if (pais.value == 'brasil') {
            menuCidade.classList.remove('dropdown-cidade'); 

            cidade.addEventListener('click', function() {
        
                if (cidade.value == 'caxiasdosul') {
                    presente.innerHTML = '🍫 Um ovo de chocolate ao leite e um ovo de chocolate branco 🍫';
                }

                else if (cidade.value == 'portoalegre') {
                    presente.innerHTML = '🍫 Um ovo de chocolate amargo e um ovo de chocolate ao leite 🍫';
                }

                else if (cidade.value == 'saopaulo') {
                    presente.innerHTML = '🍫 Duas caixas de bombons 🍫';
                }

                else {
                    presente.innerHTML = '';
                }
            });
        }

        else if (pais.value == 'estadosunidos') {
            presente.innerHTML = '🍫 Dois ovos de chocolate ao leite 🍫';
        }

        else if (pais.value == 'inglaterra') {
            presente.innerHTML = '🍫 Dois ovos de chocolate amargo 🍫';
        }

        else {
            presente.innerHTML = '';
        }

    });

});
