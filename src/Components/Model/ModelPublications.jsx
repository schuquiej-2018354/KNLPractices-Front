import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Index';
import { ModalPutPublication } from '../Modal/ModalUpdate/ModalPutPublication'

export const ModelPublications = ({ updateFav, id, _id, idUser, user, userImage, image, empress, location, phone, description, time, verified, idCareer, career, update, type }) => {
    const [img, setImg] = useState('');
    const [imgUser, setImgUser] = useState('');
    const { dataUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showModalUpdate, setShowModalUpdate] = useState(false);

    const getImage = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/publication/get-image/${image}`, {
                responseType: 'blob'
            });
            const imageURL = URL.createObjectURL(data);
            setImg(imageURL);
        } catch (e) {
            console.log(e);
        }
    };

    const getUserImage = async () => {
        try {
            /* El segundo parámetro del objeto de configuración 
            se utiliza para especificar que la respuesta debe tratarse como unblob
            ` (objeto binario grande), que se usa comúnmente para manejar archivos binarios 
            como imágenes. */
            const { data } = await axios(`http://localhost:3200/user/get-image/${userImage}`, {
                responseType: 'blob'
            });
            /* Aquí estamos utilizando URL.createObjectURL() para crear un enlace (URL) que representa el contenido binario recibido en la respuesta (data). Esto es necesario para mostrar la imagen en la interfaz de usuario.*/
            const imageURL = URL.createObjectURL(data);
            setImgUser(imageURL);
        } catch (e) {
            console.log(e);
        }
    };

    const addFavorite = async (publication) => {
        try {
            let datos = {
                owner: dataUser.id,
                publication: publication
            };
            const { data } = await axios.post('http://localhost:3200/favorite/add', datos);
            Swal.fire({
                position: 'bottom-start',
                text: data.message,
                width: '20rem',
                showConfirmButton: false
            })
            updateFav();
        } catch (e) {
            console.log(e);
        }
    };

    const navigateUserPage = () => {
        if (dataUser.id == idUser) {
            navigate(`/user/${idUser}`);
        } else {
            navigate(`/userProfile/${idUser}`);
        }
        onClose();
    }

    const deletePublication = async (id) => {
        try {
            Swal.fire({
                title: 'Do you want to delete this publication?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.delete(`http://localhost:3200/publication/delete/${id}`);
                    Swal.fire({
                        position: 'bottom-start',
                        text: data.message,
                        width: '20rem',
                        showConfirmButton: false
                    })
                    update();
                }
            })
        } catch (e) {
            console.log(e);
        }
    }

    const report = (id) => {
        try {
            Swal.fire({
                title: 'Do you want to report this publication?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, report this publication!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.put(`http://localhost:3200/publication/report/${id}`);
                    Swal.fire({
                        position: 'bottom-start',
                        text: data.message,
                        width: '20rem',
                        showConfirmButton: false
                    })
                    update();
                }
            })
        } catch (e) {
            console.log(e);
        }
    }

    const handleOpenModalUp = () => {
        setShowModalUpdate(true);
    };

    const handleCloseModalUp = () => {
        setShowModalUpdate(false);
    };


    useEffect(() => {
        if (image === undefined || userImage === undefined) {
        } else {
            getImage();
            getUserImage();
        }
    }, [image, userImage]);

    return (
        <>
            <div className='card bx' style={{ backgroundColor: '#f8f8f8' }}>
                <div className='row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative'>
                    <div className='col p-4 d-flex flex-column position-static text-black'>
                        <div className='row align-items-center'>
                            <div className='col col-1'>
                                <img className="rounded-circle imgProfile" src={imgUser} onClick={navigateUserPage} />
                            </div>
                            <div className='col'>
                                <strong className='d-inline-block mb-2 text-black' onClick={navigateUserPage} style={{ cursor: 'pointer', marginRight: '1rem' }} >@{user}</strong>
                                {
                                    verified === true ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16" style={{ fill: '#0d6efd' }}>
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                        </svg>
                                    ) : <></>
                                }
                            </div>
                            <div className='col'>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    {
                                        dataUser.id == idUser && type != 'Comment' ? (
                                            <>
                                                <button className="btn" onClick={(() => deletePublication(id))} style={{ cursor: 'pointer', padding: '0' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16" style={{ fill: 'black' }}>
                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                    </svg>
                                                </button>
                                                &ensp;
                                                <button className="btn" onClick={handleOpenModalUp} style={{ cursor: 'pointer', padding: '0' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" style={{ fill: 'black' }}>
                                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                    </svg>
                                                </button>
                                                &ensp;
                                                <br />
                                            </>
                                        ) : <></>
                                    }
                                    <button className='btn' onClick={() => report(id)} style={{ cursor: 'pointer', padding: '0' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16" style={{ fill: 'black' }}>
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className='mb-1 text-muted text-end' style={{ marginRight: '1rem' }}>
                                    {time}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-8'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3 className='mb-0'>{empress}</h3>
                                    </div>
                                    <div className='col text-end'>
                                        <button className='btn' onClick={() => addFavorite(id)}>
                                            <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' className='bi bi-bookmark' viewBox='0 0 16 16' style={{ fill: 'black' }}>
                                                <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z' />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <p className='card-text mb-auto' style={{ marginTop: '2%', marginBottom: '2%' }}>
                                    {description}
                                </p>
                                <hr />
                                <div className='card-text mb-2'>
                                    <p className='card-text'>
                                        Telephone:
                                    </p>
                                    &ensp; - {phone}
                                </div>
                                <div className='card-text mb-auto'>
                                    <p className='card-text'>
                                        Address:
                                    </p>
                                    &ensp; - {location}
                                </div>
                                <p className="card-text text-end text-muted">-{career}</p>
                            </div>
                            <div className='col' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='col-auto d-none d-lg-block' >
                                    <img src={img} alt='' style={{ width: '13rem', height: '13.5rem' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalPutPublication isOpen={showModalUpdate} onClose={handleCloseModalUp} dataPu={{ empress, location, phone, description, career, image, idCareer }} update={update} id={id} />
        </>
    );
};
