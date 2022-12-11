import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import CategoriasBorrar from './categoriasborrar';

function Categorias()
{
    const[dataCategorias, setdataCategorias] = useState([]);
    useEffect(()=>{
        axios.get('/api/categorias/listar')
        .then(res=>{console.log(res.data); setdataCategorias(res.data);})
        .catch(err=>{console.log(err.stack);})
    },[])
    
    return(
    <div className="container-fluid">
        <div className="card">
                
                <div className="card-header border-transparent">
                <h3 className="card-title">Listado de Categorias</h3>
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
                    <Link to={`/categoriasagregar/`} className="btn btn-sm btn-info float-left">Agregar Categorias</Link>
                    </div>
                    <table className="table m-0">
                    <thead>
                    <tr>
                    <th scope="col">Codigo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Activo</th>
                        <th scope="col"></th>
                        <th scope="col"></th>  
                    </tr>
                    </thead>
                    <tbody>
                    {
                        dataCategorias.map(micategoria => (
                        <tr>
                             <th scope="row">{micategoria.codigo}</th>
                            <td>{micategoria.nombre}</td>  
                            <td>{micategoria.activo ? 'Activo' : 'Inactivo'}</td>
                            <td><Link to={`/categoriaseditar/${micategoria.codigo}`}><li className="btn btn-primary">Editar</li></Link></td>
                            <td><button type="button" className="btn btn-danger" onClick={()=>{CategoriasBorrar(micategoria.codigo)}}>Borrar</button></td>

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
export default Categorias;

