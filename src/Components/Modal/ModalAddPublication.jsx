import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Modal, ModalFooter } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Index';

export const ModalAddPublication = ({ isOpen, onClose, getPublications }) => {
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);
    const [careers, setCareers] = useState([{}]);
    const { dataUser } = useContext(AuthContext)
    const [form, setForm] = useState({
        image: null,
        empress: '',
        location: '',
        phone: '',
        description: '',
        user: '',
        career: ''
    });

    const registerHandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            user: dataUser.id
        });
    };

    const getCarrers = async () => {
        try {
            const { data } = await axios('http://localhost:3200/career/get');
            setCareers(data.careers);
        } catch (e) {
            console.log(e);
        }
    }

    const save = async (e) => {
        try {
            const { data } = await axios.post('http://localhost:3200/publication/add', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            getPublications();
            onClose();
        } catch (e) {
            console.log(e);
        }
    };


    useEffect(() => {
        getCarrers()
    }, [])

    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header className='bg2 text-white'>
                    <Modal.Title className=''>New Post</Modal.Title>
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
                                <div>
                                    <label className='form-label' htmlFor='inputUsername'>
                                        Empresa
                                    </label>
                                    <input className='form-control bg6 ip' style={{ borderColor: '#263340' }} type='text' id='inputUsername' placeholder='Enter your username' name='empress' onChange={registerHandleChange} required />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label className='form-label' htmlFor='inputCareer'>
                                        Career
                                    </label>
                                    <select class='form-control bg6 selectCareer' aria-label='Default select example' name='career' value={form.career} onChange={registerHandleChange}>
                                        <option className='form-control' defaultValue={'Select to career'}>Select to career</option>
                                        {
                                            careers.map(({ _id, name }, i) => {
                                                return (
                                                    <option key={i} value={_id} className='form-control bg5 ip text-white'>
                                                        {name}
                                                    </option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col'>
                                    <div>
                                        <label className='form-label' htmlFor='inputPhone'>
                                            Phone Number
                                        </label>
                                        <input className='form-control input-number ip bg6' style={{ borderColor: '#263340' }} type='number' id='inputPhone' placeholder='Telephone' name='phone' onChange={registerHandleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='form-label' htmlFor='inputEmail'>
                                    Location
                                </label>
                                <textarea className='form-control ip bg6' style={{ borderColor: '#263340' }} type='email' id='inputEmail' placeholder='Location' name='location' onChange={registerHandleChange} required />
                            </div>
                            <div>
                                <label className='form-label' htmlFor='inputDescriptiony'>
                                    Description
                                </label>
                                <textarea className='form-control ip  bg6' style={{ borderColor: '#263340' }} type='number' id='inputDescriptiony' placeholder='Description' name='description' onChange={registerHandleChange} required />
                            </div>
                            <div>
                                <label className='form-label' htmlFor='inputImage'>
                                    Imge
                                </label>
                                <input className='form-control ip bg6' style={{ borderColor: '#263340' }} type='file' id='inputImage' placeholder='Enter your Image' name='image'
                                    onChange={(e) => {
                                        setForm({
                                            ...form,
                                            image: e.target.files[0]
                                        });
                                    }}
                                />
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
