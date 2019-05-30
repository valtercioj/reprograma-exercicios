window.addEventListener('DOMContentLoaded', function(event) {

    const getNumber = document.querySelector('#getNumber');
    const result = document.getElementById('result');

    getNumber.addEventListener('click', function(){
        const numberValue = document.querySelector('#number').value;

        if (isNaN(numberValue) || numberValue == "" || numberValue == " ") {
            alert("Digite um número, por favor");
        }

        else  {
            if (numberValue == 0) {
                result.innerHTML = `O número ${numberValue} é neutro`;
            }

            else if (numberValue > 0) {
                result.innerHTML = `O número ${numberValue} é positivo`;
            }

            else {
                result.innerHTML = `O número ${numberValue} é negativo`;
            }
        };
    });

});