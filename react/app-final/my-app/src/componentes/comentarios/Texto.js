import React from 'react';

const Texto = (props) => {
  return(
    <div>
        <h2 className="comentario__nome">{props.nome}</h2>
        <h3 className="comentario__subtitulo">{props.subtitulo}</h3>
        <hr />
        <p>{props.comentario}</p>
    </div>   
  )
}

export default Texto;