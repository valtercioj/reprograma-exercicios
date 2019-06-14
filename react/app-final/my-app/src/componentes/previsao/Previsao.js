import React from 'react';
import CardPrevisao from './Card';

class Previsao extends React.Component {
    render() {
      return (
        <div className = "previsao-container">
              {this.props.array.map((item) => (
                  <CardPrevisao
                      data={item.data}
                      resumo={item.resumo}
                      imagem={item.imagem}
                      temperatura={item.temperatura}
                  />
              ))}
        </div>
      )
    }
}

export default Previsao;