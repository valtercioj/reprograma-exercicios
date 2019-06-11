import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function BemVinda(props){ //BemVinda é um componente que chama um h1 e um h2, por meio de props (parametro), compostos por 3 propriedades de um objeto
    console.log(props)
    return (
    <div>
        <h1>{props.saudacao}, {props.apelido}</h1>
        <h3>Seu signo é {props.signo}</h3>
    </div>
    )
}

function App (props){
    console.log(props)
    return (
    <div>
        < BemVinda 
            apelido="Mell" 
            saudacao="oi bebê" 
            signo="gêmeos"
        />
        < BemVinda 
            apelido="Nina" 
            saudacao="opa" 
            signo="gêmeos"
        />
    </div>
    )
}

ReactDOM.render(< App />, document.getElementById('root'));

//classe
class NovaClasse extends React.Component {
    render () {
        return (
            <div>
                <h1>Reprograma</h1>
                < BemVinda 
                    apelido="Nina" 
                    saudacao="opa" 
                    signo="gêmeos"
                />
            </div>
        )
    }
}

ReactDOM.render (< NovaClasse />, document.getElementById('classe'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
