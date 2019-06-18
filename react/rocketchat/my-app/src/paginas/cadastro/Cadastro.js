import React from 'react'
import './cadastro.css'
import Inicial from './Inicial'
import PessoaFisica from './PessoaFisica'
import PessoaJuridica from './PessoaJuridica'

export default class Cadastro extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      conteudo: undefined,
    }
  }

  handleConteudo = (valor) => {
    this.setState({ conteudo: valor })
  }

  //forma mais reduzida:
  // handleConteudo = (conteudo) => {
  //   this.setState({ conteudo })
  // }
  
  render(){
    return(
      <div className='cadastro'>
        { this.state.conteudo === undefined && <Inicial formConteudo={this.handleConteudo} /> }
        { this.state.conteudo === 'PF' && <PessoaFisica /> }
        { this.state.conteudo === 'PJ' && <PessoaJuridica /> }
      </div>
    )
  }
}