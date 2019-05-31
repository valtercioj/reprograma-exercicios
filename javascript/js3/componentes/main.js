const createNav = () => {
    return (
        `<div class="navegacao__box container">
        <a class="navegacao__logo" href="index.html">
            <img class="img-responsive" src="img/logo-white.png" alt="Logo M de Maravilhosa">
        </a>
        <div class="navegacao__itens" id="menuResponsivo">
            <div class="navegacao__nav">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="http://www.reprograma.com.br/" target="_blank">Conheça a {reprograma}</a>
                    </li>
                </ul>
            </div>
            <div class="navegacao__redes-sociais"></div>
        </div>
        <div class="navegacao__menu-hamburguer" id="btnResponsivo">
            <a href="#">
                <img src="img/menu-nav.png" alt="Menu de navegação">
            </a>
        </div>`
    )
}
document.querySelector('.navegacao').innerHTML = createNav();

const redes = [
    {
        link: 'https://www.facebook.com/ReprogramaBr/',
        img: 'img/icon-facebook.png'
    },
    {
        link: 'https://twitter.com/ReprogramaBr',
        img: 'img/icon-twitter.png'
    },
    {
        link: 'https://www.instagram.com/reprogramabr/',
        img: 'img/icon-instagram.png'
    },
    {
        link: 'https://www.linkedin.com/company/reprogramabr/',
        img: 'img/icon-linkedin.png'
    },
]

const createIcon = (data) => {
    return data.map((item) => {
        return (
            `<a href="${item.link}" target="_blank">
                <img src="${item.img}" alt="Ícone Rede Social">
            </a>`
        )
    }).join('');
}
document.querySelector('.navegacao__redes-sociais').innerHTML += createIcon(redes)

const createHeader = () => {
    return (
        `<div class="container">
        <div class="principal">
            <h1 class="principal__titulo">Você conhece as mulheres que mudaram o Brasil?</h1>
            <h2 class="principal__sub">Conheça as mulheres que fizeram a diferença no nosso país, nas mais variadas áreas de
                conhecimento e cultura.</h2>
            <a class="principal__btn btn btn_roxo" href="#mulheres-maravilhosas">Quero Conhecer</a>
        </div>
    </div>`
    )
}
document.querySelector('.header').innerHTML = createHeader();

var createMain = () => {
    return (
        `<section class="maravilhosas container" id="mulheres-maravilhosas">
            <h3 class="maravilhosas__titulo">Veja todas as mulheres homenageadas nesse projeto!</h3>
            <input type="text" class="busca" onkeyup="limpar(this.value)">
            <button class="btn btn_roxo" id="btnMain">Buscar</button>
            <div class="maravilhosas__box"></div>
        </section>`
    )
}

document.querySelector('.main').innerHTML = createMain();

const maravilhosas = [
    {
        nome: 'Ada Love{lace}',
        src: 'img/home-personalidade/ada-lovelace.jpg',
        link: 'personalidade/ada-lovelace/index.html'
    },
    {
        nome: 'Angela Davis',
        src: 'img/home-personalidade/angela-davis.jpg',
        link: 'personalidade/angela-davis/index.html'
    },
    {
        nome: 'Beyoncé',
        src: 'personalidade/beyonce/img/beyonce.jpg',
        link: 'personalidade/beyonce/index.html'
    },
    {
        nome: 'Carolina Maria de Jesus',
        src: 'img/carolina maria de jesus/carolina-maria.jpg',
        link: 'personalidade/carolina-maria/index.html'
    },
    {
        nome: 'Chimamanda Ngozi Adichie',
        src: 'img/home-personalidade/chimamanda-adichie-home.jpg.jpg',
        link: 'personalidade/chimamanda-ngozi/index.html'
    },
    {
        nome: 'Clementina de Jesus',
        src: 'img/home-personalidade/clementina-de-jesus-home.jpeg.jpg',
        link: 'personalidade/clementina-de-jesus/index.html'
    }
]

var createMaravilhosas = (data) => {
    return data.map((item) => {
        return (
            `<div class="maravilhosas__perfil">
                <a href="${item.link}">
                    <img class="img-responsive" src="${item.src}" alt="Foto da personalidade">
                    <p>${item.nome}</p>
                </a>
            </div>`
        )
    }).join('');
}

document.querySelector('.maravilhosas__box').innerHTML += createMaravilhosas(maravilhosas);

document.querySelector('#btnMain').addEventListener ('click', function() {
    var palavraBusca = document.querySelector('.busca').value.toLocaleLowerCase();

    var filtro = maravilhosas.filter((item) => {
        return item.nome.toLocaleLowerCase().includes(palavraBusca)
    });

    document.querySelector('.maravilhosas__box').innerHTML = createMaravilhosas(filtro);
})

function limpar(value) {
    if(!value){
        document.querySelector('.maravilhosas__box').innerHTML = createMaravilhosas(maravilhosas);
    }
}

var createFooter = () => {
    return (
        `<div class="rodape__principal">
        <ul class="rodape__navegacao">
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="http://www.reprograma.com.br/" target="_blank">Conheça a {reprograma}</a>
            </li>
        </ul>
        <div class="rodape__logo">
            <img class="img-responsive" src="img/logo-white.png" alt="logo M de Maravilhosa">
        </div>
        <div class="rodape__redes-sociais">
            <a href="https://www.facebook.com/ReprogramaBr/" target="_blank">
                <img src="img/fb-icone.png" alt="Icone do facebook Reprograma">
                <span>/br.mdemaravilhosa</span>
            </a>
        </div>
    </div>
    <div class="rodape__cc">
        <p>Creative Commons 2019 | Feito com amor por Reprograma</p>
    </div>`
    )
}

document.querySelector('.rodape').innerHTML = createFooter();

maravilhosas.push(
    {
        nome: 'Nina',
        src: 'personalidade/beyonce/img/beyonce.jpg',
        link: 'personalidade/beyonce/index.html'
    },
    {
        nome: 'Raissa',
        src: 'personalidade/beyonce/img/beyonce.jpg',
        link: 'personalidade/beyonce/index.html'
    },
)

document.querySelector('.maravilhosas__box').innerHTML = createMaravilhosas(maravilhosas);
