import React from 'react';
import Label from './Label';
import Input from './Input';

export default function Grupo(props){ //componente Grupo servirá pra mostrar o erro na tela
  return(
    <div>
      { props.children }
      { props.erro && (<p className='grupo__erro'>{props.erro}</p>) }
    </div>
  )
}

//vinculando os componentes:
Grupo.Label = Label
Grupo.Input = Input