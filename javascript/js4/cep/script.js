// XMLHttpRequest é uma classe do js que faz o navegador entender que ele vai fazer uma requisição pra um servidor web (a classe tem seus métodos próprios, que vamos usar pra consumir a API)

const cep = document.getElementById("cep")
const logradouro = document.getElementById("logradouro")
const complemento = document.getElementById("complemento")
const bairro = document.getElementById("bairro")
const localidade = document.getElementById("localidade")
const uf = document.getElementById("uf")
const cepError = document.getElementById("cepError")

const getData = url => {
  return new Promise((resolve, reject) => {

    const requisicao = new XMLHttpRequest()
    requisicao.open("GET", url)
    requisicao.onload = function () {
        if (requisicao.status === 200) {
            const resposta = JSON.parse(requisicao.responseText)
            resolve(resposta)
        } 
    }
    requisicao.onerror = () => {
        reject("CEP inválido")
    }
    requisicao.send()
  })
}

cep.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        const valorCep = cep.value
        if (valorCep) {
            getData(`https://viacep.com.br/ws/${valorCep}/json/`)
            .then(resultadoAPI => {
                cep.classList.remove("error")
                cepError.innerHTML = ""
                cep.value = resultadoAPI.cep
                logradouro.value = resultadoAPI.logradouro
                complemento.value = resultadoAPI.complemento
                bairro.value = resultadoAPI.bairro
                localidade.value = resultadoAPI.localidade
                uf.value = resultadoAPI.uf
            })
            .catch(erro => {
                cep.classList.add("error")
                cepError.style.color = 'red'
                cepError.innerHTML = erro
                logradouro.value = ""
                complemento.value = ""
                bairro.value = ""
                localidade.value = ""
                uf.value = ""
            })
        } else {
            cep.classList.add("error")
            cepError.style.color = 'red'
            cepError.innerHTML = "Campo obrigatório"
        }
    }
})