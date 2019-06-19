import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

//paginas
import Home from './paginas/Home';
import Cadastro from './paginas/Cadastro';
import Chat from './paginas/Chat';

//componentes
import Nav from './componentes/nav/Nav'

function App() {
  return (
    <Switch>
      <div>
        <Nav /> {/* a nave é um componente independente das rotas, que permanece em toda a aplicação */}
        <Route path='/' exact component={Home} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/chat' component={Chat} />
      </div>
    </Switch>
  );
}

export default App;
