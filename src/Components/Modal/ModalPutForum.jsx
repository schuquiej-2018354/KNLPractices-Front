import axios from 'axios'
import React from 'react'
import { Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'

export const ModalPutForum = ({ isOpen, onClose, dataUp, id, update }) => {


    const updateQuestion = async () => {
        try {
            let questionUpdate = {
                question: document.getElementById('inputQuestion').value,
                description: document.getElementById('inputDescription').value
            }
            const { data } = await axios.put(`http://localhost:3200/question/update/${id}`, questionUpdate)
            update();
            onClose();
            Swal.fire({
                position: 'bottom-start',
                text: data.message,
                width: '20rem',
                showConfirmButton: false
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header className='text-black'>
                    <Modal.Title className=''>New Question</Modal.Title>
                    <button onClick={onClose} type='button' className='btn' data-dismiss='modal' aria-label='Close'>
                        <span className='text-black' aria-hidden='true'>
                            &times;
                        </span>
                    </button>
                </Modal.Header>
                <Modal.Body className='text-black'>
                    <form action='#' encType='multipart/form-data'>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor='inputName'>
                                Question
                            </label>
                            <input className='form-control ip' style={{ borderColor: '#263340' }} type='text' id='inputQuestion' placeholder='Enter your question' name='question' defaultValue={dataUp.question} />
                        </div>
                        <div>
                            <div className='form-group'>
                                <label className='form-label' htmlFor='inputName'>
                                    Description
                                </label>
                                <textarea name='description' className='textarea ip' id='inputDescription' placeholder='Write a question' defaultValue={dataUp.description}></textarea>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='text-black'>
                    <button className='btn btn-primary' type='button' onClick={() => updateQuestion()}>
                        Update
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
