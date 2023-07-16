import React from 'react'
import imgFond from '../assets/img/logimg.jpg'
import logo from '../assets/img/KNLLogoS.png'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='contt'>
                <div className="containerLog" style={{maxWidth: '850px'}}>
                    <input type="checkbox" id="flip" />
                    <div className="cover" style={{left: '50%'}}>
                        <div className="front" style={{backgroundImage: `url(${imgFond})`, backgroundSize: 'cover'}} >
                            <div className="text">
                            <div className='imgs'><img src={logo}/></div>
                            </div>
                        </div>  
                    </div>
                    <div className="forms">
                        <div className="form-content">
                            <div className="login-form">
                                <div className="title" style={{paddingRight: '310px'}}>Login</div>
                                <br />
                                <form action="#">
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="email" placeholder="Email" required />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Password" required />
                                        </div>
                                        <div className="button input-box">
                                            <input type="submit" value="Login" />
                                        </div>
                                        <div className="text sign-up-text">Don't have an account? <label onClick={() => navigate('/register')}>Sign up</label></div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


