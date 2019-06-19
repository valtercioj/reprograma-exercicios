//base.js é um componente pra configurar a API, não é um componente React
//axios é uma biblioteca que usamos aqui para fazer a requisição da API

import axios from 'axios'

const config = {
  baseURL: 'https://my-json-server.typicode.com/reprograma/T7-react-II',
  timeout: 1000, //caso demore demais, mostra mensagem de erro
}

const protocolo = axios.create(config)

export function getComentarios(){
  const url = '/comentarios'
  return protocolo.get(url)
}