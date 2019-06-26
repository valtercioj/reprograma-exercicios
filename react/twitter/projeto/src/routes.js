import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

//Páginas
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage'

//condição para privar o route Home se o usuário não estiver logado
const estaAutenticado = () => localStorage.getItem('TOKEN') ? true : false

//componente wrapper, criado para substituir o Route. ele que vai ter a lógica da autenticação do usuário
class PrivateRoute extends React.Component{
  render(){
    const Component = this.props.component
    if(estaAutenticado()){
      //componente rota tweets (home)
      return <Route render={() => <Component {...this.props}></Component>}></Route> //spread operator é uma sintaxe de propagação que expande um objeto iterável em outro local. por ex, com objeto ele pega cada propriedade; com array ele pega cada item
    } else {
      //componente rota login
      return <Redirect to='/login'></Redirect> //to='' reinicia uma rota
    }
  }
}

const Roteamento = () => {
  return(
    <Switch>
      <PrivateRoute exact path='/' component={Home} />
      <Route path='/login' component={LoginPage} />
    </Switch>
  )
}

export default Roteamento