import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Modal, ModalFooter } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
            onClose();
            getQuestions();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header className='bg2 text-white'>
                    <Modal.Title className=''>New Question</Modal.Title>
                    <button onClick={onClose} type='button' className='btn' data-dismiss='modal' aria-label='Close'>
                        <span className='text-white' aria-hidden='true'>
                            &times;
                        </span>
                    </button>
                </Modal.Header>
                <Modal.Body className='bg2 text-white'>
                    <form action='#' encType='multipart/form-data'>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor='inputName'>
                                Question
                            </label>
                            <input className='form-control bg6' style={{ borderColor: '#263340' }} type='text' id='inputName' placeholder='Enter your question' name='question' onChange={formForumHandleChange} required />
                        </div>
                        <div>
                            <div className='row'>
                                <div className="form-group">
                                    <textarea name='description' className="textarea" id="description" rows="3" placeholder='Write a question' onChange={formForumHandleChange}></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='bg2 text-white'>
                    <div className='reg_btn'>
                        <button className='btn btn-primary' type='button' onClick={(e) => save(e)}>
                            Post
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};
