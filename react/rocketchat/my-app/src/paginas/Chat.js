import React, { Component } from 'react';
import Comentarios from '../componentes/comentarios/Comentarios';
import { getComentarios } from '../service/base';
import './chat.css'

export default class Chat extends Component {
  constructor(props){
    super(props)
    this.state = { comentarios: new Array(), }
  }

  componentDidMount(){
    getComentarios()
    .then(response => {
      this.setState({
        comentarios: response.data
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  render(){
    const { comentarios } = this.state
    return(
      <div className='chat'>
        {
          comentarios.length > 0 ?
          comentarios.map((item, index) => {
            return <Comentarios comentario={item} key={index + 'comentario'} /> //key é um identificador único para o React saber qual elemento sofreu atualização
          }) :
          <span>Carregando comentários...</span>
        }
      </div>
    )
  }
}