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
                    <Link to={`/productosagregar/`} className="btn btn-sm btn-info float-left">Agregar Producto</Link>
                    </div>
                    <table className="table m-0">
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
    )
}
export default Productos;

/*
<tr>
  <td><a href="pages/examples/invoice.html">OR9842</a></td>
  <td>Call of Duty IV</td>
  <td><span className="badge badge-success">Shipped</span></td>
  <td>
    <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
  </td>
</tr>
*/