import React from 'react';
import {Link} from 'react-router-dom';

function MenuLateral()
{
    return(
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
        <img src="../logo.jpg" alt="Papeleria" className="brand-image"></img>
        <span className="brand-text font-weight-light"></span>
    </a>
    <div className="sidebar">
        <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item menu-open">
            <ul className="nav nav-treeview">
            <li className="nav-item">
                <a href="/menu" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Inicio</p>
                </a>
                </li>
                <li className="nav-item">
                <a href="/productos" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Productos</p>
                </a>
                </li>
                <li className="nav-item">
                <a href="/categorias" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Categorias</p>
                </a>
                </li>
            </ul>
            </li>
        </ul>
        </nav>
    </div>
    </aside>
    )
}

export default MenuLateral;

