import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Card extends React.Component{
    render(){
        return(
            <div className="previsao">
                <h1 className="previsao__data">{this.props.data}</h1>
                <h2 className="previsao__resumo">{this.props.resumo}</h2>
                <img className="previsao__img" src={this.props.img}/>
                <table className="previsao-temperatura">
                        <tr className="previsao-temperatura__linha">
                            <th>Máxima</th>
                            <td>{this.props.temperaturaMax}°C</td>
                        </tr>
                        <tr className="previsao-temperatura__linha">
                            <th>Mínima</th>
                            <td>{this.props.temperaturaMin}°C</td>
                        </tr>
                </table>
            </div>
        )
    }
}

const previsao31_05 = {
    data: '31/05/2019',
    resumo: 'Ensolarado',
    imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
    temperatura: {
      max: 31,
      min: 20
    }
}
   
const previsao01_06 = {
    data: '01/06/2019',
    resumo: 'Nublado',
    imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
    temperatura: {
      max: 25,
      min: 18
    }
}

class App extends React.Component{
    render(){
        return(
            <div className="previsao-container">
                < Card
                    data={previsao31_05.data}
                    resumo={previsao31_05.resumo}
                    img={previsao31_05.imagem}
                    temperaturaMax={previsao31_05.temperatura.max}
                    temperaturaMin={previsao31_05.temperatura.min}
                />
                < Card
                    data={previsao01_06.data}
                    resumo={previsao01_06.resumo}
                    img={previsao01_06.imagem}
                    temperaturaMax={previsao01_06.temperatura.max}
                    temperaturaMin={previsao01_06.temperatura.min}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
