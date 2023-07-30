import axios from 'axios'
import React from 'react'
import { Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'

export const ModalPutCareer = ({isOpen, onClose, datos, update}) => {

    const updateCareer = async () => {
        try {
            let updatedCareer ={
                name: document.getElementById('inputName').value
            }
            const { data } = await axios.put(`http://localhost:3200/career/update/${datos.id}`, updatedCareer)
            Swal.fire({
                icon: 'success',
                title: data.message,
            })
            update();
            onClose();
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: e.response.data.message
            })
        }
    }

    if (!isOpen) {
        return null
    }
    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header className='bg2 text-white'>
                    <Modal.Title className=''>Update Carrer</Modal.Title>
                    <button onClick={onClose} type='button' className='btn' data-dismiss='modal' aria-label='Close'>
                        <span className='text-white' aria-hidden='true'>
                            &times;
                        </span>
                    </button>
                </Modal.Header>
                <Modal.Body className='bg2 text-white'>
                    <form action='#'>
                        <label className='form-label' htmlFor='inputName'>Name</label>
                        <input defaultValue={datos.name} className='form-control ip bg6' style={{ borderColor: '#263340' }} type='text' id='inputName' placeholder='Name Career' name='name' required />
                    </form>
                </Modal.Body>
                <Modal.Footer className='bg2 text-white'>
                    <button className='btn btn-primary' type='button' onClick={() => updateCareer()}>
                        Update
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
