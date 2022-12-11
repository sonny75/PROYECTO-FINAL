import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

function ProductosEditar()
{
    const parametros = useParams()

    const[codcategoria,setCodCategoria] = useState('')
    const[nombre,setNombre] = useState('')
    const[precio,setPrecio] = useState('')
    const[activo,setActivo] = useState('')
    const navegar = useNavigate()

    useEffect(()=>{axios.get(`/api/productos/cargar/${parametros.codigo}`).then(res=>{
        console.log(res.data[0])
        const dataProductos = res.data[0]
        setCodCategoria(dataProductos.codcategoria)
        setNombre(dataProductos.nombre)
        setPrecio(dataProductos.precio)
        setActivo(dataProductos.activo)
    })},[])

    function productosActualizar()
    {
        const productoeditar = {
        codigo: parametros.codigo,
        codcategoria: codcategoria,
        nombre: nombre,
        precio: precio,
        activo: activo
        }
    
        console.log(productoeditar)

        axios.post(`/api/productos/editar/${parametros.codigo}`,productoeditar).then(res=> {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: '¡Registro actualizado exitosamente!', showConfirmButton: false, timer: 1500 })
            navegar('/productos')
        }).catch(err => {console.log(err.stack)})

    }

    function productosRegresar()
    {
        navegar('/productos')
    }

return(
    <div className='container mt-5'>
        <h4>Producto</h4>
        <div className='row'>
            <div className='col-md-12'>
                <div className="mb-3">
                    <label htmlFor="id_categoria" className="form-label">Categoria</label>
                    <input type="text" className="form-control" id="codcategoria" value={codcategoria} onChange={(e)=>{setCodCategoria(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input type="text" className="form-control" id="precio" value={precio} onChange={(e)=>{setPrecio(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="activo" className="form-label">Activo</label>
                    <input type="text" className="form-control" id="activo" value={activo} onChange={(e)=>{setActivo(e.target.value)}}></input>
                </div>

                <button type="button" className="btn btn-info" onClick={productosRegresar}>Atras</button>
                <button type="button" className="btn btn-success" onClick={productosActualizar}>Actualizar</button>
            </div>
        </div>
    </div>
)

}

/*
    <div className="mb-3 form-check">
        <input type="checkbox" className="activo" id="activo"></input>
        <label className="form-check-label" htmlFor="activo">Activo</label>
    </div>
*/


export default ProductosEditar;