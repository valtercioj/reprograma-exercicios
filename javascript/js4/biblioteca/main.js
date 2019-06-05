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

    document.getElementById('filtroGenero').innerHTML = ''
    
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

    document.getElementById('filtroGenero').innerHTML = ''

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
    document.getElementById('lista').innerHTML = ''

    document.getElementById('filtroLista').textContent = 'Gêneros disponíveis'

    const generos = [...new Set(livros.map(x => x.genero))]

    const ordenarGenero = (gen1, gen2) => {
        if (gen1.toLowerCase() < gen2.toLowerCase()){
            return -1
        } if (gen1.toLowerCase() > gen2.toLowerCase()){
            return 1
        } 
        return 0
    };

    const generoOrdenado = generos.sort((gen1, gen2) => ordenarGenero(gen1, gen2))

    const mostrarGeneros = (data) => {
        return data.map((item) => {
            return (
                `<label><input type="radio" name="genero" value="${item}">${item}</label>`
            )
        }).join('');
    }

    document.getElementById('filtroGenero').innerHTML = `${mostrarGeneros(generoOrdenado)}<br><button id='btnFiltroGenero'>Filtrar</button>`;

    document.getElementById('btnFiltroGenero').addEventListener('click', () => {
        let qtdGenero = document.querySelectorAll("input:checked").length;

        let buscaGenero = document.querySelectorAll("input:checked").value;

        console.log(buscaGenero)
        if (qtdGenero == 0){
            document.getElementById('lista').innerHTML = ''
        } else {
            // let filtroGenero = livros.filter ((item) => {
            //     return item.genero == buscaGenero
            // })
            document.getElementById('lista').innerHTML = 'quase lá'
        }
    })
})

const limparLista = document.getElementById('limparLista')
limparLista.addEventListener('click', () => {
    document.getElementById('filtroLista').innerHTML = ''
    document.getElementById('filtroGenero').innerHTML = ''
    document.getElementById('lista').innerHTML = ''
})