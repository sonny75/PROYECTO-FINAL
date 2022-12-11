import axios from 'axios';
import uniquid from 'uniqid';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import Swal from 'sweetalert2';
function CategoriasAgregar()
{
    const[codigo, setCodigo] = useState('')
    const[nombre, setNombre] = useState('')
    const[subcategoria, setSubCategoria] = useState('')
    const[activo, setActivo] = useState('')
    const navegar = useNavigate()

    function categoriasInsertar()
    {
        const categoriasinsertar = {
            codigo: uniquid(),
            nombre: nombre,
            subCategoria: subcategoria,
            activo: activo
            }
            console.log(categoriasinsertar)

            axios.post(`/api/categorias/agregar`,categoriasinsertar).then(res => {
                console.log(res.data)
                Swal.fire({ position: 'center', icon: 'success', title: '¡Registro agregado exitosamente!', showConfirmButton: false, timer: 1500 })
                navegar('/categorias')
            }).catch(err => {console.log(err.stack)})
        }
        function categoriasRegresar()
        {
            navegar('/categorias')
        }
        return(
            <div className='container mt-5'>
                <h4>Categorias</h4>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="mb-3">
                        <label htmlFor="codigo" className="form-label">Codigo</label>
                        <input type="text" className="form-control" id="codigo" value={codigo} onChange={(e)=>{setCodigo(e.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
                </div>
                
                <div className="mb-3">
                <label htmlFor="activo" className="form-label">Activo</label>
                <input type="text" className="form-control" id="activo" value={activo} onChange={(e)=>{setActivo(e.target.value)}}></input>
                </div>
                <button type="button" className="btn btn-info" onClick={categoriasRegresar}>Atras</button>
                <button type="button" className="btn btn-success" onClick={categoriasInsertar}>Grabar</button>
            </div>
        </div>
    </div>
    )

}

export default CategoriasAgregar;

    
    