import React from 'react'
import logo from '../../assets/img/KNLLogo.png'

export const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-light bg3">
                <div class="container-fluid">
                    <a class="navbar-brand text-white tx1" href="#">
                        <img src={logo} alt="" width="30" height="30" class="d-inline-block" />
                            KNL Practices
                    </a>
                </div>
            </nav>
        </>
    )
}
