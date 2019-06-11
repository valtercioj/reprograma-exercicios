import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let contadorNum = 0

const nome = {
    primeiroNome: "Nina",
    sobrenome: "Solon"
}

function nomeCompleto(nome){
    if (nome) {
        return `${nome.primeiroNome} ${nome.sobrenome}`;
    } else {
        return 'desconhecida';
    }
}

function statusContador(contador){
    if (contador === 0){
        return <p>Contador não iniciado</p>
    } else {
        return <p>Contador iniciado</p>
    }
}

const template = 
    <div className="contador">
        <h1>Count: {contadorNum}</h1>
        <h2>Oi, {nome.primeiroNome}</h2>
        <h3>Olá, {nomeCompleto(null)}</h3>
        <div>
            <button>+1</button>
            <button>-1</button>
            <button>reset</button>
        </div>
        {statusContador(contadorNum)}
    </div>
ReactDOM.render(template, document.getElementById('root'))    

// setInterval(function(){
//     const template = 
//         <div className="contador">
//             <h1>Count: {contadorNum}</h1>
//             <h2>Oi, {nome.primeiroNome}</h2>
//             <h3>Olá, {nomeCompleto(null)}</h3>
//             <div>
//                 <button>+1</button>
//                 <button>-1</button>
//                 <button>reset</button>
//             </div>
//             {statusContador(contadorNum)}
//         </div>
//     contadorNum++
//     ReactDOM.render(template, document.getElementById('root'))    
// }, 2000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
