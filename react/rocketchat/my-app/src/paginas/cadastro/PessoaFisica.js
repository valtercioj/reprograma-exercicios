import React from 'react'
import Label from '../../componentes/formulario/Label'
import Input from '../../componentes/formulario/Input'

export default class PessoaFisica extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      nomeSobrenome: {
        valor: '',
        erro: ''
      },
      numCPF: {
        valor: '',
        erro: ''
      },
      dataNasc: {
        valor: '',
        erro: ''
      },
      email: {
        valor: '',
        erro: ''
      },
      senha: {
        valor: '',
        erro: ''
      },
    }
  }

  handleSubmit = e => {
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

  render(){
    return(
      <div className='pagina'>
        <h2>Cadastro Pessoa Física</h2>
        <form className='formulario' onSubmit={this.handleSubmit}>
          <div>
            <Label htmlForLabel='nomeSobrenome'>Nome completo:</Label>
            <Input 
              type='text'
              placeholder='Nome'
              id='nomeSobrenome'
              value={this.state.nomeSobrenome}
              name='nomeSobrenome'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Label htmlForLabel='numCPF'>CPF:</Label>
            <Input 
              type='text'
              placeholder='000.000.000-00'
              id='numCPF'
              value={this.state.numCPF}
              name='numCPF'
              onChange={this.handleChange}
            />
          </div>
          <div>
           <Label htmlForLabel='dataNasc'>Data de nascimento:</Label>
           <Input 
              type='text'
              placeholder='dd/mm/aaaa'
              id='dataNasc'
              value={this.state.dataNasc}
              name='dataNasc'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Label htmlForLabel='email'>E-mail:</Label>
            <Input 
              type='email'
              placeholder='E-mail'
              id='email'
              value={this.state.email}
              name='email'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Label htmlForLabel='senha'>Senha:</Label>
            <Input 
              type='password'
              placeholder='Senha'
              id='senha'
              value={this.state.senha}
              name='senha'
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}