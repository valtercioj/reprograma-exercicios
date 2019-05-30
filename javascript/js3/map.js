// Crie uma lista ul através do array abaixo com template string.

var array = ["JavaScript", "ES5", "ES6", "React"];

var novaLista = (data) => {
    return data.map((item) => {
        return (
            `<ul>
                <li>${item}</li>
            </ul>`
        )
    });
}
document.body.innerHTML = novaLista(array);