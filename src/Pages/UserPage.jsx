import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalUpdateImage } from '../Components/Modal/ModalUpdateImage';
import { AuthContext } from '../Index';
import Background from '../assets/img/fondoLogin.png';
import user from '../assets/img/User.png'

export const UserPage = () => {
    const navigate = useNavigate();

    const { dataUser, userLogged, setDataUser } = useContext(AuthContext);
    const [showModalUpdateIMG, setShowModalUpdateIMG] = useState(false);
    const [isLoadingImage, setIsLoadingImage] = useState(true);
    const [image, setImage] = useState('')

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

    const handleOpenModal = () => {
        setShowModalUpdateIMG(true);
    };

    const handleCloseModal = () => {
        setShowModalUpdateIMG(false);
    };

    useEffect(() => {
        getImage()
    }, [dataUser.image])

    return (
        <>
            <div style={{ backgroundImage: `url(${Background})`, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', padding: '30px' }}>
                <div className='card1 card col-5' style={{ alignItems: 'center' }}>
                    <div className='card1-avatar1'>
                        <img src={image} alt='User' />
                    </div>
                    <br />
                    <div>
                        <button type='button' onClick={handleOpenModal}>
                            updateImg
                        </button>
                    </div>
                    <div className='card1-info1'>
                        <h2>{dataUser.username}</h2>
                        <div>
                            <br />
                            <form action=''></form>
                            <div className='row'>
                                <div className='col'>
                                    <span>
                                        <b>Name:</b>
                                    </span>
                                    <input type='text' className='form-control' defaultValue={dataUser.name} required />
                                </div>
                                <div className='col'>
                                    <span>
                                        <b>Surname:</b>
                                    </span>
                                    <input type='text' className='form-control' defaultValue={dataUser.surname} required />
                                </div>
                            </div>
                            <br />
                            <label htmlFor='Name'>
                                <b>Career:</b>
                            </label>
                            <br />
                            <input type='text' className='form-control' defaultValue={dataUser.career} required />
                            <br />
                            <label htmlFor='Name'>
                                <b>Email:</b>
                            </label>
                            <br />
                            <input type='email' className='form-control' defaultValue={dataUser.email} required />
                            <br />
                            <label htmlFor='Name'>
                                <b>Phone:</b>
                            </label>
                            <br />
                            <input type='number' className='form-control' defaultValue={dataUser.phone} required />
                            <br />
                        </div>
                        <br />
                        <div className='flex-parent jc-center'>
                            <button onClick={() => navigate('/')} type='submit' className='btn btn-danger'>
                                Exit
                            </button>
                            &ensp;
                            <button type='submit' className='btn btn-primary'>
                                Save
                            </button>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <ModalUpdateImage isOpen={showModalUpdateIMG} onClose={handleCloseModal} getImage={getImage} />
        </>
    );
};
