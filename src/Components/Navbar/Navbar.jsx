import React from 'react'
import logo from '../../assets/img/KNLLogo.png'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg3">
                <div className="container-fluid">
                    <a className="navbar-brand text-white tx1" href="#">
                        <img src={logo} alt="" width="30" height="30" className="d-inline-block" />
                            KNL Practices
                    </a>
                </div>
            </nav>
        </>
    )
}
