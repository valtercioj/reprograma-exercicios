import React from 'react';
import CardComentario from './Card';

class Comentarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilidade: false
    }
  }

  verComentarios = () => {
    this.setState((estadoAnterior) => {
      return {
        visibilidade: !estadoAnterior.visibilidade
      }
    })
  }

  render() {
    return (
      <div>
        <button className="btnComentario" onClick={this.verComentarios}>Ver comentários</button>
        {this.state.visibilidade && this.props.array.map((item) => (
          <CardComentario
            imagem={item.autora.imagem}
            nome={item.autora.nome}
            subtitulo={item.subtitulo}
            comentario={item.texto}
          />
        ))}
      </div>
    )
  }
}

export default Comentarios;