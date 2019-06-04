const {livros} = biblioteca

document.getElementById('quantidade').textContent = livros.length

const filtroLista = (propriedade) => {
    document.getElementById('filtroLista').innerHTML = `
    ${propriedade} disponíveis
    <button class='btnOrdenar btnOrdenarAZ'><i class="fas fa-sort-alpha-down"></i></button>
    <button class='btnOrdenar btnOrdenarZA'><i class="fas fa-sort-alpha-up"></i></button>
    `
}

const mostrarLista = (array, propriedade) => {
    let lista = ''
    array.forEach((item) => {
        lista += `<li>${item[propriedade]}</li>`
    });
    return lista
}

const ordenarListaAZ = (livroA, livroB, propriedade) => {
    if (livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()){
        return -1
    } if (livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()){
        return 1
    } 
    return 0
}

const ordenarListaZA = (livroA, livroB, propriedade) => {
    if (livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()){
        return 1
    } if (livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()){
        return -1
    } 
    return 0
}

const listarLivros = document.getElementById('listarLivros')
listarLivros.addEventListener('click', () => {
    filtroLista('Livros')
    
    document.getElementById('lista').innerHTML = mostrarLista(livros, 'livro') 

    document.querySelector('.btnOrdenarAZ').addEventListener ('click', () => {
        const listaOrdenada = livros.sort((livroA, livroB) => ordenarListaAZ(livroA, livroB, 'livro'))
        document.getElementById('lista').innerHTML = mostrarLista(listaOrdenada, 'livro')
    })

    document.querySelector('.btnOrdenarZA').addEventListener ('click', () => {
        const listaOrdenada = livros.sort((livroA, livroB) => ordenarListaZA(livroA, livroB, 'livro'))
        document.getElementById('lista').innerHTML = mostrarLista(listaOrdenada, 'livro')
    })
})

const listarAutores = document.getElementById('listarAutores')
listarAutores.addEventListener('click', () => {
    filtroLista('Autores')

    document.getElementById('lista').innerHTML = mostrarLista(livros, 'autor')

    document.querySelector('.btnOrdenarAZ').addEventListener ('click', () => {
        const listaOrdenada = livros.sort((livroA, livroB) => ordenarListaAZ(livroA, livroB, 'autor'))
        document.getElementById('lista').innerHTML = mostrarLista(listaOrdenada, 'autor')
    })

    document.querySelector('.btnOrdenarZA').addEventListener ('click', () => {
        const listaOrdenada = livros.sort((livroA, livroB) => ordenarListaZA(livroA, livroB, 'autor'))
        document.getElementById('lista').innerHTML = mostrarLista(listaOrdenada, 'autor')
    })
})

const listarGeneros = document.getElementById('listarGeneros')
listarGeneros.addEventListener('click', () => {
    filtroLista('Gêneros')

    document.getElementById('lista').innerHTML = mostrarLista(livros, 'genero') 

    document.querySelector('.btnOrdenarAZ').addEventListener ('click', () => {
        const listaOrdenada = livros.sort((livroA, livroB) => ordenarListaAZ(livroA, livroB, 'genero'))
        document.getElementById('lista').innerHTML = mostrarLista(listaOrdenada, 'genero')
    })

    document.querySelector('.btnOrdenarZA').addEventListener ('click', () => {
        const listaOrdenada = livros.sort((livroA, livroB) => ordenarListaZA(livroA, livroB, 'genero'))
        document.getElementById('lista').innerHTML = mostrarLista(listaOrdenada, 'genero')
    })
})

const limparLista = document.getElementById('limparLista')
limparLista.addEventListener('click', () => {
    document.getElementById('filtroLista').innerHTML = ''
    document.getElementById('lista').innerHTML = ''
})