import React, { useState } from 'react';
import User from '../../assets/img/User.png'
import { useNavigate } from 'react-router-dom';
import { ModalAddPublication } from '../Modal/ModalAddPublication';

export const Sidebar = () => {
    const navigate = useNavigate();
    const [showModalAddPublication, setShowModalAddPublication] = useState(false);

    const handleOpenModal = () => {
        setShowModalAddPublication(true);
    }
    const handleCloseModal = () => {
        setShowModalAddPublication(false);
    }

    return (
        <>
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg2" style={{ width: '280px' }}>
                <center>
                    <img src={User} alt="KNL" style={{ width: '25%' }} />
                </center>
                <center>
                    <span class="fs-4">Username</span>
                </center>
                <hr />
                <div style={{ height: '70vh' }}>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="#" class="nav-link text-white" aria-current="page">
                                Options
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-white" onClick={() => navigate('/user')}>
                                <svg class="bi me-2" width="16" height="16"><use xlink: href="#home" /></svg>
                                User
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-white">
                                <svg class="bi me-2" width="16" height="16"><use xlink: href="#speedometer2" /></svg>
                                Carrer
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-white">
                                <svg class="bi me-2" width="16" height="16"><use xlink: href="#table" /></svg>
                                Info
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link text-white">
                                <svg class="bi me-2" width="16" height="16"><use xlink: href="#grid" /></svg>
                                Forum
                            </a>
                        </li>
                    </ul>
                    <div className='d-flex justify-content-center'>
                        <button onClick={handleOpenModal} className='btn btn-primary '>Post</button>
                    </div>
                </div>
                <hr />
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>LogOut</strong>
                    </a>
                </div>
            </div>
            <ModalAddPublication isOpen={showModalAddPublication} onClose={handleCloseModal} />
        </>
    );
};

