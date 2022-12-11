import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIInvoke from '../utils/APIInvoke';
import swal from 'sweetalert';

const Register = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const crearCuenta = async () => {
        if (password !== confirmar) {
            const msg = "Las contraseñas son diferentes.";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else if (password.length < 8) {
            const msg = "La contraseña deber ser al menos de 8 caracteres.";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });

        } else {
            const data = {
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password
            }
            const response = await APIInvoke.invokePOST(`/api/usuarios`, data);
            const mensaje = response.msg;

            if (mensaje === 'El usuario ya existe') {
                const msg = "El usuario ya existe.";
                swal({
                    title: 'Error',
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            } else {
                const msg = "El usuario fue creado correctamente.";
                swal({
                    title: 'Información',
                    text: msg,
                    icon: 'success',
                    buttons: {
                        confirm: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-primary',
                            closeModal: true
                        }
                    }
                });

                setUsuario({
                    nombre: '',
                    email: '',
                    password: '',
                    confirmar: ''
                })
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    }

    return(
        <div className="hold-transition login-page">
            <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                <b>Facturacion</b>
                </div>
                <div className="card-body">
                <p className="login-box-msg">Registrate</p>
                <form onSubmit={onSubmit}>
                    <div className="input-group mb-3">
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={onChange} required className="form-control" placeholder="Nombre"></input>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-user"></span>
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input type="email" id="email" name="email" value={email} onChange={onChange} className="form-control" placeholder="Email"></input>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                        </div>
                    </div>
                    </div>                    
                    <div className="input-group mb-3">
                    <input type="password" id="password" name="password" value={password} onChange={onChange} className="form-control" placeholder="Password"></input>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input type="password" id="confirmar" name="confirmar" value={confirmar} onChange={onChange} className="form-control" placeholder="Confirmar"></input>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                    </div>
                    </div>
                </form>
                <p className="mb-1">
                <Link to={`/forgot/`}><div className="text-center">¿Olvidaste el Password?</div></Link>
                </p>
                <p className="mb-0">
                    <Link to={`/login/`}><div className="text-center">Inicia Sesión</div></Link>
                </p>
                </div>
            </div>
            </div>
        </div>
    )

}

export default Register;