import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

//menu transformado em classe para mudar o state no responsivo

export default class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      aberto: false,
    }
  }

  handleAbreFecha = e => {
    this.setState(prevState => {
      return {aberto: !prevState.aberto}
    })
  }

  render(){
    let classeOpcoes = 'navbar-menu__opcoes'
    let classeBtn = 'navbar-menu__botao'

    if(this.state.aberto){
      classeOpcoes += ' navbar-menu__opcoes--aberto'
      classeBtn += ' navbar-menu__botao--aberto'
    }

    return(
      <div className='navbar-links'>
        <a className={classeBtn} onClick={this.handleAbreFecha}>Menu</a>
        <ul className={classeOpcoes}>
          {/* Link é um componente do react */}
          <li><Link to='/' className='navbar-links__ativo'>Home</Link></li>
          <li><Link to='/cadastro' className='navbar-links__ativo'>Cadastro</Link></li>
          <li><Link to='/chat' className='navbar-links__ativo'>Chat</Link></li>
        </ul>
      </div>
    )
  }
}