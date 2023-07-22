import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal, ModalFooter } from 'react-bootstrap'
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
                        <div>
                            <div>
                                <label className='form-label' htmlFor='inputName'>Name</label>
                                <input className='form-control' type='text' id='inputName' placeholder='Enter your name' name='name' onChange={registerHandleChange} required />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label className='form-label' htmlFor='inputUsername'>Empresa</label>
                                        <input className='form-control' type='text' id='inputUsername' placeholder='Enter your username' name='empress' onChange={registerHandleChange} required />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label className='form-label' htmlFor='inputPhone'>Phone Number</label>
                                        <input className='form-control input-number' type='number' id='inputPhone' placeholder='Telephone' name='phone' onChange={registerHandleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='form-label' htmlFor='inputEmail'>Location</label>
                                <textarea className='form-control' type='email' id='inputEmail' placeholder='Location' name='location' onChange={registerHandleChange} required />
                            </div>
                            <div>
                                <label className='form-label' htmlFor='inputDescriptiony'>Description</label>
                                <textarea className='form-control' type='number' id='inputDescriptiony' placeholder='Description' name='description' onChange={registerHandleChange} required />
                            </div>
                            <div>
                                <label className='form-label' htmlFor='inputImage'>Imge</label>
                                <input className='form-control' type="file" id='inputImage' placeholder='Enter your Image' name='image' onChange={(e) => {
                                    setForm({
                                        ...form,
                                        image: e.target.files[0]
                                    });
                                }} required />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className='reg_btn'>
                        <button className='btn btn-success' type='button' onClick={(e) => save(e)} >Add</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}