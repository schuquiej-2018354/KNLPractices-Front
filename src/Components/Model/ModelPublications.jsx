import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Index';

export const ModelPublications = ({ updateFav, id, idUser, user, userImage, image, empress, location, phone, description, time, career }) => {
    const [img, setImg] = useState('');
    const [imgUser, setImgUser] = useState('');
    const { dataUser } = useContext(AuthContext);
    const navigate = useNavigate();

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
            const { data } = await axios(`http://localhost:3200/user/get-image/${userImage}`, {
                responseType: 'blob'
            });
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
            updateFav();
            Swal.fire({
                icon: 'success',
                title: data.message
            });
        } catch (e) {
            console.log(e);
        }
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
            <div className='card bx bg5'>
                <div className='row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative'>
                    <div className='col p-4 d-flex flex-column position-static text-white'>
                        <div className='row align-items-center'>
                            <div className='col col-1'>
                                <img className="rounded-circle imgProfile" src={imgUser} onClick={() => navigate(`/userProfile/${idUser}`)} />
                            </div>
                            <div className='col'>
                                <strong className='d-inline-block mb-2 text-primary' onClick={() => navigate(`/userProfile/${idUser}`)} style={{ cursor: 'pointer' }} >@{user}</strong>
                            </div>
                            <div className='col'>
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
                                            <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' className='bi bi-bookmark' viewBox='0 0 16 16' style={{ fill: 'white' }}>
                                                <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z' />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className='card-text mb-auto'>
                                    <p className='card-text'>
                                        Telephone:
                                    </p>
                                    &ensp; - {phone}
                                </div>
                                <p className='card-text mb-auto' style={{ marginTop: '2%', marginBottom: '2%' }}>
                                    {description}
                                </p>
                                <div className='card-text mb-auto'>
                                    <p className='card-text'>
                                        Address:
                                    </p>
                                    &ensp; - {location}
                                </div>
                                <p class="card-text text-end text-muted">-{career}</p>
                            </div>
                            <div className='col'>
                                <div className='col-auto d-none d-lg-block'>
                                    <img src={img} alt='' style={{ width: '13.5rem', height: '13.5rem' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
