import React from 'react'

//props declarado na página Inicial quando chamamos BtnCadastro:

// props = {
//   srcImg={Astronauta},
//   altImg='Ícone Astronauta',
//   textoBtn='Pessoa Física',
//   valorBtn='PF',
//   acaoBtn={props.formConteudo},
// }

export default function BtnCadastro(props){
  return(
  <button className='botao-icone' onClick={() => props.acaoBtn(props.valorBtn)}> {/* escrevemos toda a função onClick pq ela precisa receber parâmetro*/}
      <img src={props.srcImg} className='botao-imagem' alt={props.altImg}/>
      <span>{props.textoBtn}</span>
    </button>
  )
}