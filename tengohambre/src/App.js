import React, { Component } from 'react';
import './App.css';
import Nav from "./componentes/nav";
import Buscador from './componentes/buscador';

export class App extends Component {
  constructor(){
    super();
    this.state={
      mensaje_inicio:"Bienvenido a nuestra pagina para buscar comida"
    }
  }
  render() {
    return (
      <div className="App">
        <div className="bg-light ">
        <Nav />        
        </div>
        <div>
          <h1>{this.state.mensaje_inicio}</h1>
        </div>
        <div>
          <Buscador />
        </div>
      </div>
    );
  }
}

export default App;
