import React from 'react';
import Grupo from '../../componentes/formulario/Grupo';
import BtnSubmit from '../../componentes/formulario/BtnSubmit';

export default class PessoaFisica extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      razaoSocial: { valor: '', erro: '' },
      numCNPJ: { valor: '', erro: '' },
      numCEP: { valor: '', erro: '' },
      login: { valor: '', erro: '' },
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
    const { razaoSocial, numCNPJ, numCEP, login, senha } = this.state
    if(!razaoSocial.valor || razaoSocial.erro || !numCNPJ.valor || numCNPJ.erro || !numCEP.valor || numCEP.erro || !login.valor || login.erro || !senha.valor || senha.erro) {
      return true
    } else {
      return false
    }
  }

  render(){
    const desabilitado = this.btnDesabilitado()
    return(
      <div className='pagina'>
        <h2>Cadastro Pessoa Jurídica</h2>
        <form className='formulario' onSubmit={this.handleSubmit}>
          <Grupo erro={this.state.razaoSocial.erro}>
            <Grupo.Label htmlForLabel='razaoSocial'>Razão social:</Grupo.Label>
            <Grupo.Input
              required={true}
              type='text'
              placeholder='Razão social'
              id='razaoSocial'
              value={this.state.razaoSocial.valor}
              name='razaoSocial'
              onChange={this.handleChange}
            />
          </Grupo>
          <Grupo erro={this.state.numCNPJ.erro}>
            <Grupo.Label htmlForLabel='numCNPJ'>CNPJ:</Grupo.Label>
            <Grupo.Input
              required={true} 
              type='text'
              placeholder='xx.xxx.xxx/0001-yy'
              id='numCNPJ'
              value={this.state.numCNPJ.valor}
              name='numCNPJ'
              onChange={this.handleChange}
            />
          </Grupo>
          <Grupo erro={this.state.numCEP.erro}>
           <Grupo.Label htmlForLabel='numCEP'>CEP:</Grupo.Label>
           <Grupo.Input
            required={true} 
              type='text'
              placeholder='00.000-000'
              id='numCEP'
              value={this.state.numCEP.valor}
              name='numCEP'
              onChange={this.handleChange}
            />
          </Grupo>
          <Grupo erro={this.state.login.erro}>
            <Grupo.Label htmlForLabel='login'>Login:</Grupo.Label>
            <Grupo.Input
              required={true} 
              type='login'
              placeholder='Login'
              id='login'
              value={this.state.login.valor}
              name='login'
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