import React, { useState } from 'react'


export const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive);
        document.querySelector("body").classList.toggle("active");
    };
    return (
        <>
            <div className={`wrapper ${isActive ? 'active' : ''}`}>
                <div className="section">
                    <div className="top_navbar bg2">
                        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </a>
                        </div>
                        <h1 className='text-white'>"El Trabajo Bien Hecho"</h1>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        <h3>Anamika Roy</h3>
                        <p>Designer</p>
                    </div>
                    <ul>
                        <li>
                            <a href="#" className="active">
                                <span className="icon"><i className="fas fa-home"></i></span>
                                <span className="item">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-desktop"></i></span>
                                <span className="item">My Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-user-friends"></i></span>
                                <span className="item">People</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-tachometer-alt"></i></span>
                                <span className="item">Perfomance</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-database"></i></span>
                                <span className="item">Development</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-chart-line"></i></span>
                                <span className="item">Reports</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-user-shield"></i></span>
                                <span className="item">Admin</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><i className="fas fa-cog"></i></span>
                                <span className="item">Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
