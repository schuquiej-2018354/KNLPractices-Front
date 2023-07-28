import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { AuthContext } from '../../Index'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export const ModalUpdateProfile = ({ isOpen, onClose }) => {

    const { dataUser, setDataUser } = useContext(AuthContext)
    const { id } = useParams();

    const updateProfile = async () => {
        try {
            let profileUpdated = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value,
                username: document.getElementById('inputUsername').value,
                email: document.getElementById('inputEmail').value,
                phone: document.getElementById('inputPhone').value
            }
            const { data } = await axios.put(`http://localhost:3200/user/update/${dataUser.id}`, profileUpdated)
            Swal.fire({
                icon: 'success',
                title: data.message
            })
            const userData = JSON.parse(localStorage.getItem('userData'));
            userData.name = profileUpdated.name;
            userData.surname = profileUpdated.surname;
            userData.username = profileUpdated.username;
            userData.email = profileUpdated.email;
            userData.phone = profileUpdated.phone;
            localStorage.setItem('userData', JSON.stringify(userData))
            setDataUser(userData)
            onClose();
        } catch (e) {
            console.log(e);
        }
    }

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
                            <div className='row'>
                                <div className='col'>
                                    <span>
                                        <b>Name:</b>
                                    </span>
                                    <input type='text' className='form-control' id='inputName' defaultValue={dataUser.name} required />
                                </div>
                                <div className='col'>
                                    <span>
                                        <b>Surname:</b>
                                    </span>
                                    <input type='text' className='form-control' id='inputSurname' defaultValue={dataUser.surname} required />
                                </div>
                            </div>
                            <hr />
                            <div className='col'>
                                <span>
                                    <b>User Name:</b>
                                </span>
                                <input type='text' className='form-control' id='inputUsername' defaultValue={dataUser.username} required />
                            </div>
                            <hr />
                            <label htmlFor='Name'>
                                <b>Email:</b>
                            </label>
                            <input type='email' className='form-control' id='inputEmail' defaultValue={dataUser.email} required />
                            <hr />
                            <label htmlFor='Name'>
                                <b>Phone:</b>
                            </label>
                            <br />
                            <input type='number' className='form-control' id='inputPhone' defaultValue={dataUser.phone} required />
                            <br />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='bg2 text-white'>
                    <div className='reg_btn'>
                        <button className='btn btn-primary' type='button' onClick={() => updateProfile()}>
                            Update
                        </button>
                    </div>
                </Modal.Footer>
            </Modal >
        </>
    )
}
