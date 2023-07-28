import React, { useEffect } from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { AuthContext } from '../../Index'
import { useContext } from 'react'
import axios from 'axios'

export const ModalUserPage = ({ isOpen, onClose }) => {

    const { dataUser } = useContext(AuthContext);
    const [image, setImage] = useState('');
    const [isLoadingImage, setIsLoadingImage] = useState(true);
    const [career, setCareer] = useState('')

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

    const getCareer = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/user/getById/${dataUser.id}`)
            setCareer(data.message.career.name)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getImage(),
            getCareer()
    }, [dataUser.image])

    if (!isOpen) {
        return null
    }

    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header className='bg2 text-white'>
                    <Modal.Title className=''>Information</Modal.Title>
                    <button onClick={onClose} type='button' className='btn' data-dismiss='modal' aria-label='Close'>
                        <span className='text-white' aria-hidden='true'>
                            &times;
                        </span>
                    </button>
                </Modal.Header>
                <Modal.Body className='bg2 text-white'>
                    <div className='card1-info1'>
                        <div>
                            <div className='dxx card1-avatar1'>
                                <img src={image} alt='User' />
                            </div>
                            <br />
                            <div className='row'>
                                <div className='col'>
                                    <span>
                                        <b>Name:</b>
                                    </span>
                                    <input type='text' className='form-control' defaultValue={dataUser.name} readOnly />
                                </div>
                                <div className='col'>
                                    <span>
                                        <b>Surname:</b>
                                    </span>
                                    <input type='text' className='form-control' defaultValue={dataUser.surname} readOnly />
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col'>
                                    <span>
                                        <b>User Name:</b>
                                    </span>
                                    <input type='text' className='form-control' defaultValue={dataUser.username} readOnly />
                                </div>
                                <div className='col'>
                                    <span>
                                        <b>Career:</b>
                                    </span>
                                    <input type='text' className='form-control' defaultValue={career} readOnly />
                                </div>
                            </div>
                            <hr />
                            <label htmlFor='Name'>
                                <b>Email:</b>
                            </label>
                            <input type='email' className='form-control' defaultValue={dataUser.email} readOnly />
                            <hr />
                            <label htmlFor='Name'>
                                <b>Phone:</b>
                            </label>
                            <br />
                            <input type='number' className='form-control' defaultValue={dataUser.phone} readOnly />
                            <br />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
