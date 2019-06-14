import React from 'react';
import Imagem from './Imagem';
import Texto from './Texto';

class CardComentario extends React.Component {
    render() {
        return (
            <div className="comentario">
                < Imagem 
                    imagem={this.props.imagem}
                />
                < Texto 
                    nome={this.props.nome}
                    subtitulo={this.props.subtitulo}
                    comentario={this.props.comentario}
                />
            </div>
        )
    }
}
  
export default CardComentario;