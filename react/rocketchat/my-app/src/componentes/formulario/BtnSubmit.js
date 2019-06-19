import React from 'react'

// props = {
//   desabilitado = boolean
//   classeBtn = string
//   acaoBtn = function
//   children = texto do botão
// }

export default function BtnSubmit(props){
  // let classes = props.classeBtn

  // if(props.desabilitado){
  //   classes += ' botao--desabilitado'
  // }

  let classes = props.desabilitado ? (props.classeBtn + ' botao--desabilitado') : props.classeBtn

  return(
    <button className={classes} onClick={props.acaoBtn}>
      {props.children}
    </button>
  )
}