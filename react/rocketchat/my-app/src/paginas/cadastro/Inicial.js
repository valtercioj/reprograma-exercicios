import React from 'react'
import Astronauta from '../../img/astronaut.png'
import Globo from '../../img/globe.png'
import BtnCadastro from '../../componentes/formulario/BtnCadastro';

//props declarado na página Cadastro quando chamamos Inicial:

// props = {
//   formConteudo
// }

export default function Inicial(props){
  return (
    <div className='pagina'>
      <h1>Escolha o tipo de cadastro:</h1>
      <div className='pagina__botao'>
        <BtnCadastro
          srcImg={Astronauta}
          altImg='Ícone Astronauta'
          textoBtn='Pessoa Física'
          valorBtn='PF'
          acaoBtn={props.formConteudo}
        />
        <BtnCadastro
          srcImg={Globo}
          altImg='Ícone Globo'
          textoBtn='Pessoa Jurídica'
          valorBtn='PJ'
          acaoBtn={props.formConteudo}x
        />
      </div>
    </div>
  )
}