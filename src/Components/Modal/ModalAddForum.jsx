import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Modal, ModalFooter } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Index';

export const ModalAddForum = ({ isOpen, onClose, getQuestions }) => {

    const { dataUser } = useContext(AuthContext)
    const [form, setForm] = useState({
        user: '',
        question: '',
        description: ''
    });

    const formForumHandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            user: dataUser.id
        });
    };

    const save = async (e) => {
        try {
            const { data } = await axios.post('http://localhost:3200/question/add', form);
            Swal.fire({
                position: 'bottom-start',
                text: data.message,
                width: '20rem',
                showConfirmButton: false
            })
            onClose();
            getQuestions();
        } catch (e) {
            console.log(e);
        }
    };

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
                            <input className='form-control ip' style={{ borderColor: '#263340' }} type='text' id='inputName' placeholder='Enter your question' name='question' onChange={formForumHandleChange} required />
                        </div>
                        <div>
                            <div className="form-group">
                                <label className='form-label' htmlFor='inputName'>
                                    Description
                                </label>
                                <textarea name='description' className="form-control ip" id="description" placeholder='Write a question' onChange={formForumHandleChange}></textarea>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='text-black'>
                    <button className='btn btn-primary' type='button' onClick={(e) => save(e)}>
                        Post
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
