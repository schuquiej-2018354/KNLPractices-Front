import axios from 'axios';
import { Modal } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const ModalPutPublication = ({ isOpen, onClose, id, dataPu, update }) => {
    const [career, setCareer] = useState([{}])

    const getCareers = async (e) => {
        try {
            const { data } = await axios('http://localhost:3200/career/get');
            setCareer(data.careers);
        } catch (e) {
            console.log(e);
        }
    };

    const updatePublication = async () => {
        try {
            const formData = new FormData();
            console.log(document.getElementById('inputCareer').value);
            formData.append('empress', document.getElementById('inputEmpress').value);
            formData.append('career', document.getElementById('inputCareer').value);
            formData.append('phone', document.getElementById('inputPhone').value);
            formData.append('location', document.getElementById('inpurtLocation').value);
            formData.append('description', document.getElementById('inputDescription').value);
            const selectedImage = document.getElementById('inputImage').files[0];
            if (selectedImage) {
                formData.append('image', selectedImage);
            }
            const { data } = await axios.put(`http://localhost:3200/publication/updatePu/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            Swal.fire({
                position: 'bottom-start',
                text: data.message,
                width: '20rem',
                showConfirmButton: false
            })
            update();
            onClose();
        } catch (e) {
            console.log(e);
            Swal.fire({
                position: 'bottom-start',
                text: data.message,
                width: '20rem'
            })
        }
    }

    useEffect(() => {
        getCareers()
    }, [dataPu])

    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header className='text-black'>
                    <Modal.Title className=''>Update Publication</Modal.Title>
                    <button onClick={onClose} type='button' className='btn' data-dismiss='modal' aria-label='Close'>
                        <span className='text-black' aria-hidden='true'>
                            &times;
                        </span>
                    </button>
                </Modal.Header>
                <Modal.Body className='text-black'>
                    <form action='#' encType='multipart/form-data'>
                        <div>
                            <div>
                                <div>
                                    <label className='form-label' htmlFor='inputUsername'>
                                        Empresa
                                    </label>
                                    <input className='form-control ip' style={{ borderColor: '#263340' }} type='text' id='inputEmpress' defaultValue={dataPu.empress} placeholder='Enter your username' name='empress' required />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label className='form-label' htmlFor='inputCareer'>
                                        Career
                                    </label>
                                    <select className='form-control ip selectCareer' aria-label='Default select example' name='career' id='inputCareer'  >
                                        <option className='form-control' value={dataPu.idCareer} >{dataPu.career}</option>
                                        {
                                            career.map(({ _id, name }, i) => {
                                                return (
                                                    <option key={i} value={_id} className='form-control bg5 ip text-white' >
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
                                        <input className='form-control input-number ip' style={{ borderColor: '#263340' }} type='number' id='inputPhone' defaultValue={dataPu.phone} placeholder='Telephone' name='phone' required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='form-label' htmlFor='inputEmail'>
                                    Location
                                </label>
                                <textarea className='form-control ip' style={{ borderColor: '#263340' }} type='email' id='inpurtLocation' defaultValue={dataPu.location} placeholder='Location' name='location' required />
                            </div>
                            <div>
                                <label className='form-label' htmlFor='inputDescriptiony'>
                                    Description
                                </label>
                                <textarea className='form-control ip' style={{ borderColor: '#263340' }} type='number' id='inputDescription' defaultValue={dataPu.description} placeholder='Description' name='description' required />
                            </div>
                            <div>
                                <label className='form-label' htmlFor='inputImage'>
                                    Imge
                                </label>
                                <input className='form-control ip' style={{ borderColor: '#263340' }} type='file' id='inputImage' placeholder='Enter your Image' name='image' />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='text-black'>
                    <div className='reg_btn'>
                        <button className='btn btn-primary' type='button' onClick={updatePublication}>
                            Update
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
