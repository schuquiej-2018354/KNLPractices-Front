import React from 'react'
import {useNavigate } from 'react-router-dom'
import imgFond from '../../assets/img/register.png'
import logo from '../../assets/img/KNLLogo.png'

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
                                                    <input type="number" placeholder="1234-5678" required />
                                                </div>
                                                <div className="input-box">
                                                    <input type="password" placeholder="Password" required />
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="button input-box">
                                                            <input type="submit" value="Submit" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="button input-box">
                                                            <input type="submit" value="Submit" />
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
            {/* <div className='contt'>
                <div className="containerLog2">
                    <div className="row">
                        <div className="col col-5" style={{ width: '50%', height: '50%' }}>
                            <div className="cover" >
                                <div className="" style={{ backgroundImage: `url(${imgFond})`, backgroundSize: 'cover', width: '100%', height: '100%' }} >
                                    <div className="" style={{ width: '100%', height: '100%' }}>
                                        <div className=''><img src={logo} style={{ width: '100%', height: '100%' }} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ width: '50%', height: '50%' }}>
                            <div className="forms">
                                <div className="form-content">
                                    <div className="login-form" style={{ float: 'right' }}>
                                        <div className="title" style={{ paddingLeft: '30px' }}>Register</div>
                                        <form action="#">
                                            <div className="input-boxes">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="input-box">
                                                            <i className="fas fa-envelope"></i>
                                                            <input type="text" placeholder="Enter your email" required />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="input-box">
                                                            <i className="fas fa-lock"></i>
                                                            <input type="password" placeholder="Enter your password" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-box">
                                                    <i className="fas fa-lock"></i>
                                                    <input type="password" placeholder="Enter your password" required />
                                                </div>
                                                <div className="input-box">
                                                    <i className="fas fa-lock"></i>
                                                    <input type="password" placeholder="Enter your password" required />
                                                </div>
                                                <div className="input-box">
                                                    <i className="fas fa-lock"></i>
                                                    <input type="password" placeholder="Enter your password" required />
                                                </div>
                                                <div className="button input-box">
                                                    <input type="submit" value="Submit" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='conttt'>
                <div className="containerLog2">
                    <div className="cover2">
                        <div className="front2" style={{ backgroundImage: `url(${imgFond})`, backgroundSize: 'cover' }}>
                            <div className="text2">
                                <div className='imgs'><img src={logo} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="forms2">
                        <div className="form-content">
                            <div className="login-form2" style={{ float: 'right' }}>
                                <div className="title2" style={{ paddingLeft: '30px' }}>Register</div>
                                <form action="#">
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter your email" required />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter your password" required />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter your password" required />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter your password" required />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter your password" required />
                                        </div>
                                        <div className="button input-box">
                                            <input type="submit" value="Submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
