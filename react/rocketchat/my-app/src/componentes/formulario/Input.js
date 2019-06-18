import React from 'react'

export default function Input(props){

  function validarInput(e){
    props.onChange(e.target.name, e.target.value)
  }

  return(
    <input 
      className='campo' 
      type={props.type} 
      placeholder={props.placeholder} 
      id={props.id} 
      value={props.value.valor} 
      name={props.name} 
      onChange={validarInput}
    />
  )
}