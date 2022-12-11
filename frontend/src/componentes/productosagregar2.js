import axios from 'axios';
import uniquid from 'uniqid';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import Swal from 'sweetalert2';

function ProductosAgregar()
{
    const[codcategoria, setCodCategoria] = useState('')
    const[nombre, setNombre] = useState('')
    const[precio, setPrecio] = useState('')
    const[activo, setActivo] = useState('')
    const navegar = useNavigate()

    function productosInsertar()
    {
        const productoinsertar = {
        codigo: uniquid(),
        codcategoria: codcategoria,
        nombre: nombre,
        precio: precio,
        activo: activo
        }
    
        console.log(productoinsertar)

        axios.post(`/api/productos/agregar`,productoinsertar).then(res => {
            console.log(res.data)
            Swal.fire({ position: 'center', icon: 'success', title: '¡Registro agregado exitosamente!', showConfirmButton: false, timer: 1500 })
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
                    <label htmlFor="codcategoria" className="form-label">Categoria</label>
                    <input type="text" className="form-control" id="id_categoria" value={codcategoria} onChange={(e)=>{setCodCategoria(e.target.value)}}></input>
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
                <button type="button" className="btn btn-success" onClick={productosInsertar}>Grabar</button>
            </div>
        </div>
    </div>
)

}

export default ProductosAgregar;