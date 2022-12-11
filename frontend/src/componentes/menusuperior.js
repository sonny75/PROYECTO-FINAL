import React from 'react';
import {Link} from 'react-router-dom';

function MenuSuperior()
{
    return(
        <nav className="main-header navbar navbar-expand navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item d-none d-sm-inline-block">
            <Link to={`/menu`} className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
            <Link to={`/productos`} className="nav-link">Productos</Link>
            </li>
        </ul>
       </nav>
    )
}

export default MenuSuperior;

