import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../../assets/img/fondoLogin.png'
import axios from 'axios'

export const RegisterPage = () => {
    return (
        <>
            <section className="">
                <div className="px-4 py-5 px-md-5 text-center text-lg-start"
                    style={{
                        backgroundImage: `url(${Background})`,
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundSize: 'cover',
                        padding: '30px'
                    }}>
                    <div className="container" style={{ width: '100%', height: 'auto', }}>
                        <div className="row gx-lg-5 align-items-center" style={{ width: '60%', justifyContent: 'space-between', margin: '0', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,  -50%)' }}>
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-4 display-3 fw-bold ls-tight" style={{ color: 'white' }}>
                                    KNL <br />
                                    <span className="text-primary">Practices</span>
                                </h1>
                                <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                    Ingresa tu nombre de usuario y contraseña para acceder a las funcionalidades
                                </p>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0"
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    width: '25rem',
                                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                }}>
                                <div className="containerLog">
                                    <div className="forms">
                                        <div className="form-content">
                                            <form>
                                                <div className="row">
                                                    <p className=" display-6" style={{ color: 'hsl(217, 10%, 50.8%)', fontWeight: 'bold', font: 'italic', textAlign: 'center' }}>Register</p>
                                                </div>
                                                <div className="input-boxes">
                                                    <div className="input-box" style={{ width: '300px' }}>
                                                        <i className="fas fa-envelope"></i>
                                                        <input type="text" placeholder="Enter your email" required />
                                                    </div>
                                                    <div className="input-box" style={{ width: '300px' }}>
                                                        <i className="fas fa-lock"></i>
                                                        <input type="password" placeholder="Enter your password" required />
                                                    </div>

                                                    <div className="button input-box">
                                                        <input type="submit" value="Submit" />
                                                    </div>

                                                </div>
                                                <div>
                                                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                                        <Link to={'/login'}>
                                                            Login
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
