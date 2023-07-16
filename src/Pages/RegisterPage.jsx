import React from 'react'
import {useNavigate } from 'react-router-dom'
import imgFond from '../assets/img/register.png'
import logo from '../assets/img/KNLLogo.png'

export const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='contt'>
                <div className="containerLog" style={{ maxWidth: '1000px' }}>
                    <div className="row">
                        <div className="col">
                            <div className="cover" style={{ right: '50%' }}>
                                <div className="front" style={{ backgroundImage: `url(${imgFond})`, backgroundSize: 'cover' }} >
                                    <div className="text">
                                        <div className='imgs'><img src={logo} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="forms" style={{ left: '50%', width: '100%' }}>
                                <div className="form-content">
                                    <div className="login-form">
                                        <div className="title" style={{ paddingRight: '360px' }}>Register</div>
                                        <form action="#">
                                            <div className="input-boxes">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="input-box">
                                                            <input type="text" placeholder="Name" required />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="input-box">
                                                            <input type="text" placeholder="Surname" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-box">
                                                    <input type="text" placeholder="Username" required />
                                                </div>
                                                <div className="input-box">
                                                    <input type="email" placeholder="username@gmail.com" required />
                                                </div>
                                                <div className="input-box">
                                                    <input className='input-number' type="number" min="8" max="8" placeholder="1234-5678" required />
                                                </div>
                                                <div className="input-box">
                                                    <input type="password" placeholder="Password" required />
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="button input-box">
                                                        <input onClick={() => navigate('/login')} type="submit" value="Exit" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="button input-box">
                                                            <input  type="submit" value="SignUp" />
                                                        </div>
                                                    </div>
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
        </>
    )
}
