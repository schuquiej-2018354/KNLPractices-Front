import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export const ModelAdminPubli = ({ _id, user, userImage, image, empress, location, phone, description, time, career, update }) => {
    const [img, setImg] = useState('');
    const [imgUser, setImgUser] = useState('');

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

    const deletePubli = async (id) => {
        try {
            Swal.fire({
                title: 'Do you want to delete this Publication?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.delete(`http://localhost:3200/publication/delete/${id}`);
                    update();
                    Swal.fire({
                        position: 'bottom-start',
                        text: data.message,
                        width: '20rem'
                    })
                }
            });
        } catch (e) {
            console.log(e);
        }
    }


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
                                <img className="rounded-circle imgProfile" src={imgUser} onClick={() => navigate(`/user/${dataUser.id}`)} />
                            </div>
                            <div className='col'>
                                <strong className='d-inline-block mb-2 text-primary' >@{user}</strong>
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
                                        <button className='btn' onClick={() => deletePubli(_id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16" style={{ fill: 'white' }}>
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
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
                                <p className="card-text text-end text-muted">-{career}</p>
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
            <br />
        </>
    )
}
