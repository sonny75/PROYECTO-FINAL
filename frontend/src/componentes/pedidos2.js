import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PedidosBorrar from './pedidosborrar';

function Pedidos()
{
    const[dataPedidos, setdataPedidos] = useState([]);
    useEffect(()=>{
        axios.get('/api/pedidos/listar')
        .then(res=>{console.log(res.data); setdataPedidos(res.data);})
        .catch(err=>{console.log(err.stack);})
    },[])
    
    return(
    <div className="container-fluid">
        <div className="card">
                
                <div className="card-header border-transparent">
                <h3 className="card-title">Listado de Pedidos</h3>
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
                    <Link to={`/categoriasagregar/`} className="btn btn-sm btn-info float-left">Agregar Pedidos</Link>
                    </div>
                    <table className="table m-0">
                    <thead>
                    <tr>
                    <th scope="col">Codigo</th>
                        <th scope="col">Codigo usuario</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Dirrecion</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">SubTotal</th>  
                        <th scope="col">Impuestos</th>  
                        <th scope="col">Total</th>
                        <th scope="col">Estado</th>     
                    </tr>
                    </thead>
                    <tbody>
                    {
                        dataPedidos.map(mipedido => (
                        <tr>
                            <th scope="row">{mipedido.codigo}</th>
                            <td>{mipedido.codusuario}</td>
                            <td>{mipedido.fecha}</td>
                            <td>{mipedido.direccion}</td>
                            <td>{mipedido.email}</td>
                            <td>{mipedido.telefono}</td>
                            <td>{mipedido.subtotal}</td>
                            <td>{mipedido.impuestos}</td>
                            <td>{mipedido.total}</td>
                            <td>{mipedido.estado ? 'Activo' : 'Inactivo'}</td>
                            <td><Link to={`/pedidoseditar/${mipedido.codigo}`}><li className="btn btn-primary">Editar</li></Link></td>
                            <td><button type="button" className="btn btn-danger" onClick={()=>{PedidosBorrar(mipedido.codigo)}}>Borrar</button></td>
                        </tr>
                        ))
                    }
                    </tbody>
                    </table>
                </div>
                </div>

            </div>
        </div>
    )
}
export default Pedidos;

