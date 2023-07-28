import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Index';
import { Modal } from 'react-bootstrap';

export const ModalUpdateImage = ({ isOpen, onClose, getImage }) => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const { dataUser, setDataUser } = useContext(AuthContext)

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const updateImage = async () => {
        try {
            const formData = new FormData();
            formData.append('image', selectedImage);
            const { data } = await axios.put(`http://localhost:3200/user/update-image/${dataUser.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log(data.message.image);
            const userData = JSON.parse(localStorage.getItem('userData'));
            userData.image = data.message.image
            localStorage.setItem('userData', JSON.stringify(userData))
            setDataUser(userData);
            getImage();
            onClose();
        } catch (e) {
            console.log(e);
        }
    };

    if (!isOpen) {
        return null
    }

    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header className='bg2 text-white'>
                    <Modal.Title className=''>Update</Modal.Title>
                    <button onClick={onClose} type='button' className='btn' data-dismiss='modal' aria-label='Close'>
                        <span className='text-white' aria-hidden='true'>
                            &times;
                        </span>
                    </button>
                </Modal.Header>
                <Modal.Body className='bg2 text-white'>
                    <form action='#' encType='multipart/form-data'>
                        <div>
                            <div>
                                <label className='form-label' htmlFor='inputImage'>
                                    Image
                                </label>
                                <input className='form-control bg6' style={{ borderColor: '#263340' }} type='file' id='inputImage' placeholder='Enter your Image' name='image' onChange={handleImageChange} />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='bg2 text-white'>
                    <div className='reg_btn'>
                        <button className='btn btn-primary' type='button' onClick={updateImage}>
                            Update
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}
