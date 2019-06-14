import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import datas from './componentes/dados/arrayPrevisao';
import comentarios from './componentes/dados/arrayComentarios';
import Previsao from './componentes/previsao/Previsao';
import Comentarios from './componentes/comentarios/Comentarios';
import BtnFontSize from './componentes/BtnFontSize';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    render() {
        return (
            <div>
                < Previsao array={datas} />
                < BtnFontSize />
                < Comentarios array={comentarios} />
            </div>
        )
    }
}

ReactDOM.render(< App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();