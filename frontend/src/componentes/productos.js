import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ProductosBorrar from './productosborrar';

function Productos()
{
    const[dataProductos, setdataProductos] = useState([]);
    useEffect(()=>{
        axios.get('/api/productos/listar')
        .then(res=>{console.log(res.data); setdataProductos(res.data);})
        .catch(err=>{console.log(err.stack);})
    },[])

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

    <div className="container-fluid">
        <div className="card">
                
                <div className="card-header border-transparent">
                <h3 className="card-title">Listado de Productos</h3>
                <div className="card-tools">
                
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                    </button>
                   
                </div>
                </div>
                
                <div className="card-body p-0">
                <div className="table-responsive">
                    <div className="card-footer clearfix">
                    
                    <Link to={`/productosagregar/`} className="btn btn-sm btn-info float-right">Agregar Producto</Link> 
                    </div>                   
                    <table className="table mb-0">
                    <thead>                   
                    <tr>
                         <th scope="col">Codigo</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Activo</th>
                        <th scope="col"></th>
                        <th scope="col"></th>                         
                    </tr>                  
                    </thead>
                    <tbody>
                    {
                        dataProductos.map(miproducto => (
                        <tr>
                            <th scope="row">{miproducto.codigo}</th>
                            <td>{miproducto.codcategoria}</td>
                            <td>{miproducto.nombre}</td>
                            <td>{miproducto.precio}</td>
                            <td>{miproducto.activo ? 'Activo' : 'Inactivo'}</td>
                            <td><Link to={`/productoseditar/${miproducto.codigo}`}><li className="btn btn-primary">Editar</li></Link></td>
                            <td><button type="button" className="btn btn-danger" onClick={()=>{ProductosBorrar(miproducto.codigo)}}>Borrar</button></td>
                        </tr>
                        ))
                    }
                    </tbody>                   
                    </table>       
                </div>
                </div>
                
            </div>
        </div>
        
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
export default Productos;