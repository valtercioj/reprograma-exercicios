"use strict";

var app = document.getElementById('app');
var a = 'segunda-feira';
var template = React.createElement("h1", null, "React na Reprograma, na ", a); // variável declarada em JSX, sintaxe do react que não é lida pelo navegador e precisa ser compilada com babel da seguinte forma:
// const template = React.createElement("h1", null, "React na Reprograma, na ", a);  

ReactDOM.render(template, app); //render é um método do ReactDOM com dois parâmetros (elemento, container), o que eu quero renderizar e onde eu quero fazer isso 
// também poderia ser assim:
// ReactDOM.render(
//     <h1>React na Reprograma</h1>,
//     document.getElementById('app')
// )
