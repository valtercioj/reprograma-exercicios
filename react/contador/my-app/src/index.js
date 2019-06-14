import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// let contadorNum = 0

// const nome = {
//     primeiroNome: "Nina",
//     sobrenome: "Solon"
// }

// function nomeCompleto(nome){
//     if (nome) {
//         return `${nome.primeiroNome} ${nome.sobrenome}`;
//     } else {
//         return 'desconhecida';
//     }
// }

// function statusContador(contador){
//     if (contador === 0){
//         return <p>Contador não iniciado</p>
//     } else {
//         return <p>Contador iniciado</p>
//     }
// }

// const template = 
//     <div>
//         <h1>Count: {contadorNum}</h1>
//         <h2>Oi, {nome.primeiroNome}</h2>
//         <h3>Olá, {nomeCompleto(null)}</h3>
//         <div>
//             <button>+1</button>
//             <button>-1</button>
//             <button>reset</button>
//         </div>
//         {statusContador(contadorNum)}
//     </div>
// ReactDOM.render(template, document.getElementById('root'))    

// setInterval(function(){
//     const template = 
//         <div>
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

class Contador extends React.Component {

    //constructor não é um método obrigatório. quando não chamamos, ele é chamado sozinho com valores padrão. para adicionar outros valores, como o state, precisamos chamá-lo
    constructor(props){
        super(props);
        this.state = { 
            contadorNum: 0
        }
        // this.somaUm = this.somaUm.bind(this)
        // this.subtraiUm = this.subtraiUm.bind(this)
        // this.resetCount = this.resetCount.bind(this)
    }
    
    //para adicionar eventos na classe, precisamos criar métodos dentro dela
    somaUm = () => {

        //state é um objeto, por isso precisamos de um método para atualizar seu valor:
        this.setState((prevState) => {
            return {
                contadorNum: prevState.contadorNum + 1
            }
        })
        // ReactDOM.render(< Contador />, document.getElementById('root')) - substituído pelo state
    }

    subtraiUm = () => {
        this.setState((prevState) => {
            return {
                contadorNum: prevState.contadorNum - 1
            }
        })
    }

    resetCount = () => {
        this.setState(() => {
            return {
                contadorNum: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.contadorNum}</h2>
                <div>
                    <button onClick={this.somaUm}>+1</button>
                    <button onClick={this.subtraiUm}>-1</button>
                    <button onClick={this.resetCount}>Reset</button>
                </div>
            </div>
        )
    }
}   

ReactDOM.render(< Contador />, document.getElementById('root')) 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
