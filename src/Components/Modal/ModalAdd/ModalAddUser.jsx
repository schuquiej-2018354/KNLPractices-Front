import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export const ModalAddUser = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [career, setCareer] = useState([{}]);
    const [form, setForm] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        career: ''
    })

    const registerHandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const register = async (e) => {
        try {
            const { data } = await axios.post('http://localhost:3200/user/add', form);
            Swal.fire({
                icon: 'success',
                title: data.message
            });
            onClose();
            navigate('/users')
        } catch (e) {
            console.log(e);
        }
    };

    const getCareers = async (e) => {
        try {
            const { data } = await axios('http://localhost:3200/career/get');
            setCareer(data.careers);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => getCareers, []);
    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header className='bg2 text-white'>
                    <Modal.Title className=''>Add User</Modal.Title>
                    <button onClick={onClose} type='button' className='btn' data-dismiss='modal' aria-label='Close'>
                        <span className='text-white' aria-hidden='true'>
                            &times;
                        </span>
                    </button>
                </Modal.Header>
                <Modal.Body className='bg2 text-white'>
                    <form id='formm'>
                        <div className='user_details'>
                            <div className='row'>
                                <div className="col">
                                    <label className='form-label' htmlFor='inputName'>Name</label>
                                    <input style={{ borderColor: '#263340' }} className='form-control ip bg6' type='text' id='inputName' placeholder='Enter your name' name='name' onChange={registerHandleChange} required />
                                </div>
                                <div className="col">
                                    <label className='form-label' htmlFor='inputSurname'>Surname</label>
                                    <input style={{ borderColor: '#263340' }} className='form-control ip bg6' type='text' id='inputSurname' placeholder='Enter your name' name='surname' onChange={registerHandleChange} required />
                                </div>
                            </div>
                            <div className='input_box'>
                                <label className='form-label' htmlFor='inputUsername'>Username</label>
                                <input style={{ borderColor: '#263340' }} className='form-control ip bg6' type='text' id='inputUsername' placeholder='Enter your username' name='username' onChange={registerHandleChange} required />
                            </div>
                            <div className='input_box'>
                                <label className='form-label' htmlFor='inputEmail'>Email</label>
                                <input style={{ borderColor: '#263340' }} className='form-control ip bg6' type='email' id='inputEmail' placeholder='Enter your email' name='email' onChange={registerHandleChange} required />
                            </div>
                            <div className='input_box'>
                                <label className='form-label' htmlFor='inputPhone'>Phone Number</label>
                                <input style={{ borderColor: '#263340' }} className='form-control ip bg6' type='number' id='inputPhone' placeholder='Enter your number' name='phone' onChange={registerHandleChange} required />
                            </div>
                            <div className='input_box'>
                                <label className='form-label' htmlFor='inputPass'>Password</label>
                                <input style={{ borderColor: '#263340' }} className='form-control ip bg6' type='password' id='inputPass' placeholder='Enter your password' name='password' onChange={registerHandleChange} required />
                            </div>
                            <div className='input-box'>
                                <label className='form-label' htmlFor='inputPass'>Career</label>
                                <select style={{ borderColor: '#263340' }} className='form-select ip bg6' aria-label='Default select example' name='career' value={form.career} onChange={registerHandleChange}>
                                    <option defaultValue={'Select to career'}>Select to career</option>
                                    {
                                        career.map(({ _id, name }, i) => {
                                            return (
                                                <option key={i} value={_id} className=''>
                                                    {name}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            <div className='input_box' style={{ width: '100%' }}>
                                <label className='form-label' htmlFor='inputRole'>Role</label>
                                <select style={{ borderColor: '#263340' }} className='form-select ip bg6' aria-label='Default select example' id='inputRole' placeholder='Select to role' name='role' onChange={registerHandleChange}>
                                    <option selected>Select to role</option>
                                    <option value='ADMIN'>Admin</option>
                                    <option value='USER'>User</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='bg2 text-white'>
                    <button className='btn btn-primary' type='button' onClick={() => register()}>
                        Create
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
