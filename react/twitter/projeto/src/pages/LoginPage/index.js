import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      erro: '',
    }
  }

  fazerLogin = (e) => {
    e.preventDefault()
    const dadosLogin = {
      login: this.inputLogin.value,
      senha: this.inputSenha.value
    }

    //fetch é uma promise que recebe dois parâmetros (url, dados de requisição)
    fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify(dadosLogin)
      //métodos JSON: stringify() converte o objeto para json, para enviar para o back-end; parse() converte o json enviado pelo back-end para objeto
    })

    //para acessar o que a promise retorna, precisamos usar o then/catch
      .then(resp => {
        if (!resp.ok) //ok é uma propriedade da response com valor booleano
          throw resp; //a declaração throw cria uma exceção, que vai interromper a execução da função atual (as instruções após o throw não serão executadas), passando para o primeiro bloco catch
        return resp.json() //json() é uma função para pegar apenas o retorno do back-end (no caso, o token). json() também é uma promise, por isso precisamos do 'then' novamente para acessar o que ela retorna
      })
      .then((respJson) => {
        localStorage.setItem('USUARIO', dadosLogin.login)
        localStorage.setItem('TOKEN', respJson.token) //os parâmetros de setItem são (key, value). depois podemos usar 'key' para getItem e removeItem (todos métodos do localStorage)
        //localStorage é como se fosse um banco de dados do navegador, usado pelo front-end para armazenar info
        this.props.history.push('/') //router-dom tem a props history, que pega todo o histórico da rota. com o método push()  acessamos a rota desejada (no caso, Home)
      })
      .catch((err) => {
        err.json() //usamos json() para fazer o tratamento do erro na tela, com 'then'
        .then((res) => {
          this.setState({
            erro: res.message,
          })
        })
      })
  }

  render() {
    return (
      <Fragment>
        <Cabecalho />
        <div className="loginPage">
          <div className="container">
            <Widget>
              <h2 className="loginPage__title">Seja bem vindo!</h2>
              <form className="loginPage__form" action="/" onSubmit={this.fazerLogin}>
                <div className="loginPage__inputWrap">
                  <label className="loginPage__label" htmlFor="login">Login</label>
                  <input
                    ref={(elementoInput) => this.inputLogin = elementoInput} //propriedade ref do input é utilizada no lugar do onChange para acessar o conteúdo (value) do input
                    className="loginPage__input"
                    type="text"
                    id="login"
                    name="login"
                  />
                </div>
                <div className="loginPage__inputWrap">
                  <label className="loginPage__label" htmlFor="senha">Senha</label>
                  <input
                    ref={(elementoInput) => this.inputSenha = elementoInput}
                    className="loginPage__input"
                    type="password"
                    id="senha"
                    name="senha"
                  />
                </div>
                {
                  this.state.erro !== '' &&
                  <div className="loginPage__errorBox">
                    <p>{this.state.erro}</p>
                  </div>
                }

                <div className="loginPage__inputWrap">
                  <button className="loginPage__btnLogin" type="submit">
                    Logar
                  </button>
                </div>
              </form>
            </Widget>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default LoginPage