import React from 'react'
import './cadastro.css'
import Inicial from './cadastro/Inicial'
import PessoaFisica from './cadastro/PessoaFisica'
import PessoaJuridica from './cadastro/PessoaJuridica'
import Final from './cadastro/Final'

export default class Cadastro extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      conteudo: undefined,
    }
  }

  // handleConteudo = (valor) => {
  //   this.setState({ conteudo: valor })
  // }

  //forma mais reduzida:
  handleConteudo = (conteudo) => {
    this.setState({ conteudo })
  }
  
  render(){
    return(
      <div className='cadastro'>
        { this.state.conteudo === undefined && <Inicial cadastroConteudo={this.handleConteudo} /> }
        { this.state.conteudo === 'PF' && <PessoaFisica cadastroConteudo={this.handleConteudo} /> }
        { this.state.conteudo === 'PJ' && <PessoaJuridica /> }
        { this.state.conteudo === 'final' && <Final /> }
      </div>
    )
  }
}