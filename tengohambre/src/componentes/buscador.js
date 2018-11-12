import React, { Component } from 'react';
import '../App.css';
class Buscador extends Component{
    render(){
        return(
            <div className="locationsWrapper">
                <div >
                    <form className="formulario">                      
                        <input className="control col-md-8 " type="search" placeholder="¿Qué quieres comer?" aria-label="Search" />
                        <button className="btn btn-danger " type="submit">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Buscador