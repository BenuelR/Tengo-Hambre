import React, { Component } from 'react';

class Nav extends Component{
    render(){
        return(<nav className="navbar navbar-default">
        <div>
        <span className="navbar-brand" >Tengo Hambre</span>              
        </div>
        <div>
        <button type="button" className="nav-item nav-link btn btn-outline-info" href="#">Tienes un restaurante o puesto de comida registrate aqui</button>          
        </div>
      </nav>);
    }
}

export default Nav