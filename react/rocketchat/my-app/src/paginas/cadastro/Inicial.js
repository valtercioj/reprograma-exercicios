import React from 'react'
import Astronauta from '../../img/astronaut.png'
import Globo from '../../img/globe.png'

export default function Inicial(props){
  return (
    <div className='pagina'>
      <h1>Escolha o tipo de cadastro:</h1>
      <div className='pagina__botao'>
        <button className='botao-icone'>
          <img src={Astronauta} className='botao-imagem' alt='Ícone Astronauta'/>
          <span>Pessoa Física</span>
        </button>
        <button className='botao-icone'>
          <img src={Globo} className='botao-imagem' alt='Ícone Globo'/>
          <span>Pessoa Jurídica</span>
        </button>
      </div>
    </div>
  )
}