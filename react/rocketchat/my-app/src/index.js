import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'; //as chaves são usadas para importar componentes ou funções quando a página exporta mais de um objeto. nesse caso, não usamos 'export default' na página de origem, apenas 'export'

//precisamos declarar as rotas no app
ReactDOM.render(
  (
    <Router>
      <App />
    </Router>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
