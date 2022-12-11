import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';


function PedidosEditar()
{
    const parametros = useParams()

    const[codusuario,setCodUsuario] = useState('')
    const[fecha,setFecha] = useState('')
    const[direccion,setDireccion] = useState('')
    const[email,setEmail] = useState('')
    const[telefono,setTelefono] = useState('')
    const[subtotal,setSubTotal] = useState('')
    const[impuestos,setImpuestos] = useState('')
    const[total,setTotal] = useState('')
    const[estado,setEstado] = useState('')
    const navegar = useNavigate()

    useEffect(()=>{axios.get(`/api/pedidos/cargar/${parametros.codigo}`).then(res=>{
        console.log(res.data[0])
        const dataPedidos = res.data[0]
        setCodUsuario(dataPedidos.codusuario)
        setFecha(dataPedidos.fecha)
        setDireccion(dataPedidos.direccion)
        setEmail(dataPedidos.email)
        setTelefono(dataPedidos.telefono)
        setSubTotal(dataPedidos.subtotal)
        setImpuestos(dataPedidos.impuestos)
        setTotal(dataPedidos.total)
        setEstado(dataPedidos.estado)
    })},[])

    function pedidosActualizar()
    {
        const pedidoseditar = {
        codigo: parametros.id,
        codusuario: codusuario,
        fecha: fecha,
        direccion: direccion,
        email: email,
        telefono: telefono,
        subtotal: subtotal,
        impuestos: impuestos,
        total: total,
        estado: estado
        
        }
    
        console.log(pedidoseditar)

        axios.post(`/api/pedidos/editar/${parametros.codigo}`,pedidoseditar).then(res=> {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: '¡Registro actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navegar('/pedidos')
        }).catch(err => {console.log(err.stack)})

    }

    function pedidosRegresar()
    {
        navegar('/pedidos')
    }

return(
    <div>
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
                    <h3 className="card-title">Agregar un Pedido</h3>
                    </div>
                    <form id="quickForm">
                    <div className="card-body">
                        
                        <div className="form-group"></div>
                    <label htmlFor="id_usuario" className="form-label">Codigo usuario</label>
                    <input type="text" className="form-control" id="codusuario" value={codusuario} onChange={(e)=>{setCodUsuario(e.target.value)}}></input>
                </div>
                
                <div className="form-group">
                    <label htmlFor="fecha" className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="fecha" value={fecha} onChange={(e)=>{setFecha(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="direccion" value={direccion} onChange={(e)=>{setDireccion(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="subtotal" className="form-label">SubTotal</label>
                    <input type="text" className="form-control" id="subtotal" value={subtotal} onChange={(e)=>{setSubTotal(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="impuestos" className="form-label">Impuestos</label>
                    <input type="text" className="form-control" id="impuestos" value={impuestos} onChange={(e)=>{setImpuestos(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="total" className="form-label">Total</label>
                    <input type="text" className="form-control" id="total" value={total} onChange={(e)=>{setTotal(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <input type="text" className="form-control" id="estado" value={estado} onChange={(e)=>{setEstado(e.target.value)}}></input>
                </div>

                <div className="card-footer">
                <button type="button" className="btn btn-info" onClick={pedidosRegresar}>Atras</button>
                <button type="button" className="btn btn-success" onClick={pedidosActualizar}>Actualizar</button>
            </div>
            </form>
        </div>
    </div>
    <div className="col-md-6"></div>
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
        </div>

)

}
export default PedidosEditar;