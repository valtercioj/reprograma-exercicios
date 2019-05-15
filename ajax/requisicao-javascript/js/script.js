const app = document.getElementById('root');
const container = document.createElement('div');

app.appendChild(container);

//chamando o ajax
let request = new XMLHttpRequest();

//consumindo uma API que já existe
request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);

//preparando a execução para quando abrir a conexão
request.onload = function(){
    let photos = JSON.parse(this.response);

    //verifica o código de status após a requisição. de 200 a 399 é bem sucedido
    if (request.status >= 200 && request.status < 400){

        //photos é o array de objetos recebidos. cada objeto vai ser uma photo (o parâmetro item do forEach pode ter qualquer nome)
        photos.forEach(function(photo){
            const conteudo = document.createElement('div')
            conteudo.setAttribute('class', "album" + photo.albumId);

            const h2 = document.createElement('h2');
            h2.textContent = photo.title;

            const img = document.createElement('img');
            img.setAttribute('src', photo.url);

            container.appendChild(conteudo);
            conteudo.appendChild(h2);
            conteudo.appendChild(img);
        });
    }

    else {
        const errorMessage = document.createElement('img');
        errorMessage.setAttribute('src', 'https://http.cat/' + request.status);
        app.appendChild(errorMessage);
    }
}

//executando
request.send();