import axios from 'axios'
import React, { useState } from 'react'
import { Modal, ModalHeader } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const ModalAddCareer = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: ''
    })

    const createHandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const create = async () => {
        try {
            const { data } = await axios.post('http://localhost:3200/career/add', form);
            Swal.fire({
                position: 'bottom-start',
                text: data.message,
                width: '20rem'
            });
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
                <Modal.Header className='text-black'>
                    <Modal.Title className=''>Add Carrer</Modal.Title>
                    <button onClick={onClose} type='button' className='btn' data-dismiss='modal' aria-label='Close'>
                        <span className='text-black' aria-hidden='true'>
                            &times;
                        </span>
                    </button>
                </Modal.Header>
                <Modal.Body className='text-black'>
                    <form action='#'>
                        <label className='form-label' htmlFor='inputName'>Name</label>
                        <input className='form-control ip bg6' style={{ borderColor: '#263340' }} type='text' id='inputName' placeholder='Name Career' name='name' onChange={createHandleChange} required />
                    </form>
                </Modal.Body>
                <Modal.Footer className='text-black'>
                    <button className='btn btn-primary' type='button' onClick={(e) => create(e)}>
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
