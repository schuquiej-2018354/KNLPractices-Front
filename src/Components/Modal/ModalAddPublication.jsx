import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const ModalAddPublication = ({ isOpen, onClose, update }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        image: null,
        empress: '',
        location: '',
        phone: '',
        description: '',
        user: ''
    })

    const registerHandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            user: '64b3380672c4340db65ee5e3'
        })
    }

    const save = async (e) => {
        try {
            const { data } = await axios.post('http://localhost:3200/publication/add', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (e) {
            console.log(e);
        }
    }

    const get = async (e) => {
        try {

        } catch (e) {
            console.log(e);
        }
    }

    const getUsers = async () => {
        try {
            const { data } = await axios.get('http://localhost:3200/user/get');
            setUser(data.users)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className='text-dark'>New Post</Modal.Title>
                    <button onClick={onClose} type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                <form action='#' encType='multipart/form-data'>
                        <div className='user_details'>
                            <div className='input_box'>
                                <label htmlFor='inputName'>Name</label>
                                <input type='text' id='inputName' placeholder='Enter your name' name='name' onChange={registerHandleChange} required />
                            </div>
                            <div className='input_box'>
                                <label htmlFor='inputUsername'>Empresa</label>
                                <input type='text' id='inputUsername' placeholder='Enter your username' name='empress' onChange={registerHandleChange} required />
                            </div>
                            <div className='input_box'>
                                <label htmlFor='inputEmail'>Location</label>
                                <input type='email' id='inputEmail' placeholder='Enter your email' name='location' onChange={registerHandleChange} required />
                            </div>
                            <div className='input_box'>
                                <label htmlFor='inputPhone'>Phone Number</label>
                                <input type='number' id='inputPhone' placeholder='Enter your number' name='phone' onChange={registerHandleChange} required />
                            </div>
                            <div className='input_box'>
                                <label htmlFor='inputDescriptiony'>Description</label>
                                <input type='number' id='inputDescriptiony' placeholder='Enter your No.Account' name='description' onChange={registerHandleChange} required />
                            </div>
                            <div className='input_box'>
                                <label htmlFor='inputImage'>Imge</label>
                                <input type="file" id='inputImage' placeholder='Enter your Image' name='image' onChange={(e) => {
                                    setForm({
                                        ...form,
                                        image: e.target.files[0]
                                    });
                                }} required />
                            </div>
                        </div>
                        <br />
                        <div className='reg_btn'>
                            <button type='button' onClick={(e) => save(e)} >Add</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}