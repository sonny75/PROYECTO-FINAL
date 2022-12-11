import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

function CategoriasEditar()
{
    const parametros = useParams()

    const[codigo,setCodigo] = useState('')
    const[nombre,setNombre] = useState('') 
    const[activo,setActivo] = useState('')
    
    const navegar = useNavigate()

    useEffect(()=>{axios.get(`/api/categorias/cargar/${parametros.codigo}`).then(res=>{
        console.log(res.data[0])
        const dataCategorias = res.data[0]
        setCodigo(dataCategorias.codigo)
        setNombre(dataCategorias.nombre)
        setActivo(dataCategorias.activo)
        
    })},[])

    function categoriasActualizar()
    {
        const categoriaeditar = {
        codigo: parametros.id,
        nombre: nombre,
        activo: activo

        }
        console.log(categoriaeditar)

        axios.post(`/api/categorias/editar/${parametros.codigo}`,categoriaeditar).then(res=> {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: '¡Registro actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navegar('/categorias')
        }).catch(err => {console.log(err.stack)})
    }

    function categoriasRegresar()
    {
        navegar('/categorias')
    }
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

        <section className="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                <div className="card card-primary">
                    <div className="card-header">
                    <h3 className="card-title">Agregar un Categoria</h3>
                    </div>
                    <form id="quickForm">
                    <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="codigo" className="form-label">Codigo</label>
                        <input type="text" className="form-control" id="codigo" value={codigo} onChange={(e)=>{setCodigo(e.target.value)}}></input>
                        </div>
    
                        <div className="form-group">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
                        </div>
                        
                       
                        <div className="form-group">
                        <label htmlFor="activo" className="form-label">Activo</label>
                        <input type="text" className="form-control" id="activo" value={activo} onChange={(e)=>{setActivo(e.target.value)}}></input>
                        </div>
    
                    </div>
                    
                    <div className="card-footer">
                        <button type="button" className="btn btn-info" onClick={categoriasRegresar}>Atras</button>
                        <button type="button" className="btn btn-success" onClick={categoriasActualizar}>Actualizar</button>
                    </div>

                    </form>
                </div>
                </div>
                <div className="col-md-6">
                </div>
            </div>
            </div>
        </section>


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
export default CategoriasEditar;