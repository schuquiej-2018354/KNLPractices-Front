import React from 'react'
import imgFond from '../../assets/logimg.jpg'
import logo from '../../assets/KNLLogo.png'

export const LoginPage = () => {
    return (
        <>
            <div class='contt'>
                <div class="containerLog">
                    <input type="checkbox" id="flip" />
                    <div class="cover">
                        <div class="front" style={{backgroundImage: `url(${imgFond})`, backgroundSize: 'cover'}} >

                            <div class="text">
                                <span class="text-1">KNL<br />Practices</span>
                                <img src={logo}/>
                            </div>
                        </div>  
                    </div>
                    <div class="forms">
                        <div class="form-content">
                            <div class="login-form">
                                <div class="title">Login</div>
                                <form action="#">
                                    <div class="input-boxes">
                                        <div class="input-box">
                                            <i class="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter your email" required />
                                        </div>
                                        <div class="input-box">
                                            <i class="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter your password" required />
                                        </div>
                                        <div class="text"><a href="#">Forgot password?</a></div>
                                        <div class="button input-box">
                                            <input type="submit" value="Sumbit" />
                                        </div>
                                        <div class="text sign-up-text">Don't have an account? <label>Sign up</label></div>
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


