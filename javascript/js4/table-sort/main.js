//transformou em string e voltou para objeto (não é necessário)
// const listaLivros = JSON.stringify(autores)
// const listaLivrosJs = JSON.parse(listaLivros)

const insertRows = lista => {
    let table = '' //se não declarar vazio, a primeira linha vai ser undefined
    lista.forEach((item) => { //o map retornaria um novo array, que não é necessário
        table += `
        <tr>
        <td>${item.livro}</td>
        <td>${item.autor}</td>
        <td>${item.genero}</td>
        </tr>
        `
    });
    return table
}
document.getElementById("table-section").innerHTML = insertRows(autores.livros)

const ordenarLista = (livroA, livroB, propriedade) => {
    if (livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()){
        return -1
    } if (livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()){
        return 1
    } 
    return 0
}

const ordenarLivros = document.getElementById('ordenarLivros')
const ordenarAutores = document.getElementById('ordenarAutores')
const ordenarGenero = document.getElementById('ordenarGenero')

ordenarLivros.addEventListener ('click', () => {
    const listaOrdenada = autores.livros.sort((livroA, livroB) => ordenarLista(livroA, livroB, 'livro'))
    document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

ordenarAutores.addEventListener ('click', () => {
    const listaOrdenada = autores.livros.sort((livroA, livroB) => ordenarLista(livroA, livroB, 'autor'))
    document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

ordenarGenero.addEventListener ('click', () => {
    const listaOrdenada = autores.livros.sort((livroA, livroB) => ordenarLista(livroA, livroB, 'genero'))
    document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})