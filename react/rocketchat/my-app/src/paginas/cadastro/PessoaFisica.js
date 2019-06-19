import React from 'react';
import Grupo from '../../componentes/formulario/Grupo';
import BtnSubmit from '../../componentes/formulario/BtnSubmit';

export default class PessoaFisica extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      nomeCompleto: { valor: '', erro: '' },
      numCPF: { valor: '', erro: '' },
      dataNasc: { valor: '', erro: '' },
      email: { valor: '', erro: '' },
      senha: { valor: '', erro: '' },
    }
  }

  handleSubmit = e => {
    this.props.cadastroConteudo('final')
    e.preventDefault()
  }

  handleChange = (nomeInput, valorInput, erroInput = '') => {
    this.setState({
      [nomeInput]: {
        valor: valorInput,
        erro: erroInput
      }
    })
  }

  btnDesabilitado = () =>{
    const { nomeCompleto, numCPF, dataNasc, email, senha } = this.state
    if(!nomeCompleto.valor || nomeCompleto.erro || !numCPF.valor || numCPF.erro || !dataNasc.valor || dataNasc.erro || !email.valor || email.erro || !senha.valor || senha.erro) {
      return true
    } else {
      return false
    }
  }

  render(){
    const desabilitado = this.btnDesabilitado()
    return(
      <div className='pagina'>
        <h2>Cadastro Pessoa Física</h2>
        <form className='formulario' onSubmit={this.handleSubmit}>
          <Grupo erro={this.state.nomeCompleto.erro}> {/* Label e Input são children de Grupo */}
            <Grupo.Label htmlForLabel='nomeCompleto'>Nome completo:</Grupo.Label> {/* precisamos colocar Grupo. na frente de Label e Input porque não estamos mais importante estes componetnes em PessoaFisica, mas sim em Grupo*/}
            <Grupo.Input
              required={true} //quando o campo não for obrigatório, podemos colocar 'false'
              type='text'
              placeholder='Nome'
              id='nomeCompleto'
              value={this.state.nomeCompleto.valor}
              name='nomeCompleto'
              onChange={this.handleChange}
            />
          </Grupo>
          <Grupo erro={this.state.numCPF.erro}>
            <Grupo.Label htmlForLabel='numCPF'>CPF:</Grupo.Label>
            <Grupo.Input
              required={true} 
              type='text'
              placeholder='000.000.000-00'
              id='numCPF'
              value={this.state.numCPF.valor}
              name='numCPF'
              onChange={this.handleChange}
            />
          </Grupo>
          <Grupo erro={this.state.dataNasc.erro}>
           <Grupo.Label htmlForLabel='dataNasc'>Data de nascimento:</Grupo.Label>
           <Grupo.Input
            required={true} 
              type='text'
              placeholder='dd/mm/aaaa'
              id='dataNasc'
              value={this.state.dataNasc.valor}
              name='dataNasc'
              onChange={this.handleChange}
            />
          </Grupo>
          <Grupo erro={this.state.email.erro}>
            <Grupo.Label htmlForLabel='email'>E-mail:</Grupo.Label>
            <Grupo.Input
              required={true} 
              type='email'
              placeholder='E-mail'
              id='email'
              value={this.state.email.valor}
              name='email'
              onChange={this.handleChange}
            />
          </Grupo>
          <Grupo erro={this.state.senha.erro}>
            <Grupo.Label htmlForLabel='senha'>Senha:</Grupo.Label>
            <Grupo.Input
              required={true} 
              type='password'
              placeholder='Senha'
              id='senha'
              value={this.state.senha.valor}
              name='senha'
              onChange={this.handleChange}
            />
          </Grupo>
          <BtnSubmit desabilitado={desabilitado} acaoBtn={this.handleSubmit} classeBtn='botao'>Enviar</BtnSubmit>
        </form>
      </div>
    )
  }
}