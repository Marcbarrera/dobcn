import React from 'react'
import {Link} from 'gatsby'

function navbar() {
    return (
        <div className="navbar-container">
            <Link to="/">
             <img src="https://sandbox5.dobcn.com/hiring/sergio/wp-content/themes/epaplus/assets/images/epaplus.png" alt="Epaplus logo" />
            </Link>
            <ul className="menu-options-container">
                <li>Productos</li>
                <li>Acerca Epaplus</li>
                <li>Magazine</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default navbar;