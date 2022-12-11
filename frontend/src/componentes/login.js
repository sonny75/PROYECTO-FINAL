    import React, { useState, useEffect } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import APIInvoke from '../utils/APIInvoke';
    import swal from 'sweetalert';
    
    const Login = () => {
    
        //para redireccionar de un componente a otro
        const navigate = useNavigate();
    
        //definimos el estado inicial de las variables
        const [usuario, setUsuario] = useState({
            email: '',
            password: ''
        });
    
        const { email, password } = usuario;
    
        const onChange = (e) => {
            setUsuario({
                ...usuario,
                [e.target.name]: e.target.value
            })
        }
    
        useEffect(() => {
            document.getElementById("email").focus();
        }, [])
    
        const iniciarSesion = async () => {
            if (password.length < 8) {
                const msg = "El password debe ser una combinación de Mayúsculas, minúsculas, un caracter especial, un numero y debe estar entre 8 y 20 caracteres";
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
                    email: usuario.email,
                    password: usuario.password
                }
                const response = await APIInvoke.invokePOST(`/api/auth`, data);
                const mensaje = response.msg;
    
                if (mensaje === 'El usuario no existe' || mensaje === 'Contraseña incorrecta') {
                    const msg = "No fue posible iniciar la sesión verifique los datos ingresados.";
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
                    //obtenemos el token de acceso jwt
                    const jwt = response.token;
    
                    //guardamos el token en el localstorage
                    localStorage.setItem('token', jwt);
    
                    //redireccionamos al home la pagina principal
                    navigate("/menu/");
                }
            }
        }
    
        const onSubmit = (e) => {
            e.preventDefault();
            iniciarSesion();
        }

    return(
        <div className="hold-transition login-page">
            <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                <b>Facturacion</b>
                </div>
                <div className="card-body">
                <p className="login-box-msg">Iniciar Sesión</p>
                <form onSubmit={onSubmit}>
                    <div className="input-group mb-3">
                    <input type="email" id="email" name="email" value={email} onChange={onChange}  className="form-control" placeholder="Email"></input>
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
                    <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-block">Iniciar</button>
                    </div>
                    </div>
                </form>
                <p className="mb-1">
                    <a href="forgot-password.html">¿Olvidaste tu cotraseña?</a>
                </p>
                <p className="mb-0">
                    <Link to={`/register/`}><div className="text-center">Registro</div></Link>
                </p>
                </div>
            </div>
            </div>
        </div>
    )

}

export default Login;