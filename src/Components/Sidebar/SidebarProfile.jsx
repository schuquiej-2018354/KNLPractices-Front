import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Index';
import { DropCarrers } from '../Dropdown/DropCarrers';
import { ModalAddPublication } from '../Modal/ModalAddPublication';

export const SidebarProfile = ({ getPublication }) => {

    const navigate = useNavigate();
    const { dataUser, handleLogout } = useContext(AuthContext);
    const [image, setImage] = useState('')
    const [isLoadingImage, setIsLoadingImage] = useState(true);
    const [showModalAddPublication, setShowModalAddPublication] = useState(false);

    const getImage = async () => {
        try {
            if (dataUser.image) {
                const { data } = await axios(`http://localhost:3200/user/get-image/${dataUser.image}`, {
                    responseType: 'blob'
                });
                setImage(URL.createObjectURL(data))
                setIsLoadingImage(false)
            } else {
                setIsLoadingImage(false);
            }
        } catch (e) {
            console.log(e);
            setIsLoadingImage(false);
        }
    }

    const logOut = () => {
        Swal.fire({
            title: 'Do you want to log out?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Closed session',
                    '',
                    'success',
                );
                localStorage.clear();
                handleLogout();
                navigate('/');
            }
        });
    }

    const handleOpenModal = () => {
        setShowModalAddPublication(true);
    };

    const handleCloseModal = () => {
        setShowModalAddPublication(false);
    };

    useEffect(() => {
        getImage()
    }, [dataUser.image])

    return (
        <>
            <div className='d-flex flex-column flex-shrink-0 p-3 text-black bx' style={{ backgroundColor: '#f8f8f8', height: '100vh' }}>
                <div className='p-3'>
                    <ul className='nav nav-pills flex-column mb-auto' style={{ marginTop: '4rem'}}>
                        {
                            dataUser.role == 'ADMIN' ? (
                                <li className='sb nav-item lih' onClick={() => navigate('/admin')} style={{ cursor: 'pointer' }}>
                                    <div>
                                        <a href='#' className='nav-link text-white' aria-current='page'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-fill-gear" viewBox="0 0 16 16" style={{ fill: 'black' }}>
                                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className='sbText'>Admin</div>
                                </li>
                            ) : <></>
                        }
                        <li className='sb nav-item lih' onClick={() => navigate('/publicacion')} style={{ cursor: 'pointer' }}>
                            <div>
                                <a href='#' className='nav-link text-white' aria-current='page'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-house-door-fill' viewBox='0 0 16 16' style={{ fill: 'black' }}>
                                        <path d='M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z' />
                                    </svg>
                                </a>
                            </div>
                            <div className='sbText'>Home</div>
                        </li>
                        <li className='sb nav-item lih' onClick={() => navigate(`/user/${dataUser.id}`)} style={{ cursor: 'pointer' }}>
                            <div>
                                <a href='#' className='nav-link text-white' aria-current='page'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-person-fill' viewBox='0 0 16 16' style={{ fill: 'black' }}>
                                        <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
                                    </svg>
                                </a>
                            </div>
                            <div className='sbText'>Profile</div>
                        </li>
                        <DropCarrers />
                        <li className='sb nav-item lih' onClick={() => navigate('/forum')} style={{ cursor: 'pointer' }}>
                            <div>
                                <a href='#' className='nav-link text-white' aria-current='page'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-question-circle-fill' viewBox='0 0 16 16' style={{ fill: 'black' }}>
                                        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z' />
                                    </svg>
                                </a>
                            </div>
                            <div className='sbText'>Forum</div>
                        </li>
                        <li className='sb nav-item lih' style={{ cursor: 'pointer' }} onClick={()=> navigate('/info')}>
                            <div>
                                <a href='#' className='nav-link text-white' aria-current='page'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-info-circle-fill' viewBox='0 0 16 16' style={{ fill: 'black' }}>
                                        <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                                    </svg>
                                </a>
                            </div>
                            <div className='sbText'>Info</div>
                        </li>
                    </ul>
                    <div className='d-flex justify-content-center' style={{ marginTop: '2rem' }}>
                        <button onClick={handleOpenModal} className='btnComent '>
                            Post
                        </button>
                    </div>
                </div>
                <div style={{ marginTop: '10rem' }}>
                    <hr />
                    <div className='btnLogOut' onClick={logOut}>
                        <a href='#' className='d-flex align-items-center text-black text-decoration-none' data-bs-toggle='dropdown' aria-expanded='false'>
                            <strong>LogOut</strong>
                        </a>
                    </div>
                </div>
            </div>
            <ModalAddPublication isOpen={showModalAddPublication} onClose={handleCloseModal} getPublications={getPublication} />
        </>
    )
}
