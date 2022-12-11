import axios from 'axios';
import uniquid from 'uniqid';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import Swal from 'sweetalert2';

function PedidosAgregar()
{
    const[codusuario, setCodUsuario] = useState('')
    const[fecha, setFecha] = useState('')
    const[direccion, setDireccion] = useState('')
    const[email, setEmail] = useState('')
    const[telefono, setTelefono] = useState('')
    const[subtotal, setSubTotal] = useState('')
    const[impuestos, setImpuestos] = useState('')
    const[estado, setEstado] = useState('')
    const navegar = useNavigate()

    function pedidosInsertar()
    {
        const pedidosinsertar = {
            codigo: uniquid(),
            codusuario: codusuario,
            fecha: fecha,
            direccion: direccion,
            email: email,
            telefono: telefono,
            subtotal: subtotal,
            impuestos: impuestos,
            estado: estado
            }
        
            console.log(pedidosinsertar)

            axios.post(`/api/pedidos/agregar`,pedidosinsertar).then(res => {
                console.log(res.data)
                Swal.fire({ position: 'center', icon: 'success', title: '¡Registro agregado exitosamente!', showConfirmButton: false, timer: 1500 })
                navegar('/pedidos')
            }).catch(err => {console.log(err.stack)})
    
        }

        function pedidosRegresar()
        {
            navegar('/pedidos')
        }

return(
    <div className='container mt-5'>
        <h4>Pedidos</h4>
        <div className='row'>
            <div className='col-md-12'>
            <div className="mb-9">
                    <label htmlFor="codusuario" className="form-label">Codigo usuario</label>
                    <input type=",text" className="form-control" id="id_usuario" value={codusuario} onChange={(e)=>{setCodUsuario(e.target.value)}}></input>
                </div>

                <div className="mb-9">
                    <label htmlFor="fecha" className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="fecha" value={fecha} onChange={(e)=>{setFecha(e.target.value)}}></input>
                </div>
                

                <div className="mb-9">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>

                <div className="mb-9">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>
                </div>

                <div className="mb-9">
                    <label htmlFor="subtotal" className="form-label">SubTotal</label>
                    <input type="number" className="form-control" id="subtotal" value={subtotal} onChange={(e)=>{setSubTotal(e.target.value)}}></input>
                </div>
                
                <div className="mb-9">
                    <label htmlFor="impuestos" className="form-label">Impuestos</label>
                    <input type="number" className="form-control" id="impuestos" value={impuestos} onChange={(e)=>{setImpuestos(e.target.value)}}></input>
                </div>

                <div className="mb-9">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <input type="text" className="form-control" id="estado" value={estado} onChange={(e)=>{setEstado(e.target.value)}}></input>
                </div>

                <button type="button" className="btn btn-info" onClick={pedidosRegresar}>Atras</button>
                <button type="button" className="btn btn-success" onClick={pedidosInsertar}>Grabar</button>
            </div>
        </div>
    </div>
)

}

export default PedidosAgregar;