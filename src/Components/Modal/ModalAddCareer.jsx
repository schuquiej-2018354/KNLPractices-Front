import axios from 'axios'
import React, { useState } from 'react'
import { Modal, ModalHeader } from 'react-bootstrap'

export const ModalAddCareer = ({ isOpen, onClose }) => {

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
            const { data } = await axios.post('http://localhost:3200/career/add', form)
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
                    <Modal.Title className=''>Add Carrer</Modal.Title>
                    <button onClick={onClose} type='button' className='btn' data-dismiss='modal' aria-label='Close'>
                        <span className='text-white' aria-hidden='true'>
                            &times;
                        </span>
                    </button>
                </Modal.Header>
                <Modal.Body className='bg2 text-white'>
                    <form action='#'>
                        <label className='form-label' htmlFor='inputName'>Name</label>
                        <input className='form-control bg6' style={{ borderColor: '#263340' }} type='text' id='inputName' placeholder='Name Career' name='name' onChange={createHandleChange} required />
                    </form>
                </Modal.Body>
                <Modal.Footer className='bg2 text-white'>
                    <button className='btn btn-primary' type='button' onClick={(e) => create(e)}>
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
