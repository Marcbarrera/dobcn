import React, { Component } from 'react';
import imgportada from './header_XL_generico.png';

class Portada extends Component {
    render() {
        return (
            <div className="img_portada">
                <img src={imgportada} alt="portada"/>
            </div>
        )
    }
}

export default Portada;