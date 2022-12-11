import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Menu()
{
    return(
   
   <div className="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">

    <div className="wrapper">

    <nav className="main-header navbar navbar-expand navbar-dark">
    <ul className="navbar-nav">
        <li className="nav-item d-none d-sm-inline-block">
        <Link to={`/menu`} className="nav-link"></Link>
        </li>
    </ul>

    </nav>

    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <Link to={`/menu`} className="brand-link">
        <img src="../logo.jpg" alt="Papeleria" className="brand-image"></img>
        <span className="brand-text font-weight-light"></span>
    </Link>
    <div className="sidebar">
        <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                <Link to={`/menu`} className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                    <p>Inicio</p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to={`/productos`} className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                    <p>Productos</p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to={`/categorias`} className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                    <p>Categorias</p>
                </Link>
                </li>
                <li className="nav-item">
                <Link to={`/pedidos`} className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                    <p>Pedidos</p>
                </Link>
                </li>
                
        </ul>
        </nav>
    </div>
    </aside>
    
    <div className="content-wrapper">
    <div className="content-header">
        <div className="container-fluid">
        <div className="row mb-2">
            <div className="col-sm-6">
            <h1 className="m-0"> </h1>
            </div>
            <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to={`/`} className="nav-link"></Link></li>
            </ol>
            </div>
            <p><h2> Este es un software para que realice la digitalización del sistema de información de las papelerías, donde se pueda gestionar el inventario de sus productos con respecto a las ventas a clientes y compras. La idea de este negocio surge a partir de la necesidad en el área por productos escolares gracias a la cercanía de instituciones educativas, donde los principales clientes: padres, alumnos y profesores, buscan adquirir rápidamente accesorios escolares.</h2></p>
        </div>
        </div>
    </div>
    </div>

    <footer className="main-footer">
    <strong>Copyright &copy; 2022 <Link to={`https://adminlte.io`} className="nav-link">Mision TIC 2022</Link></strong>
    Todos los derechos reservados
    <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 1.0.0
    </div>
    </footer>


    </div>
    </div>
   
    )
}
export default Menu;