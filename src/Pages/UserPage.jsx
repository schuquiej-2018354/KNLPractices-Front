import React from 'react';
import user from '../assets/img/User.png';
import { useNavigate } from 'react-router-dom';
import Background from '../assets/img/fondoLogin.png';
import { useContext } from 'react';
import { AuthContext } from '../Index';
import { useState } from 'react';
import { useEffect } from 'react';

export const UserPage = () => {
    const navigate = useNavigate();

    const { dataUser } = useContext(AuthContext);

    return (
        <>
            <div style={{ backgroundImage: `url(${Background})`, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', padding: '30px' }}>
                <div className='card1 card col-5' style={{ alignItems: 'center' }}>
                    <div className='card1-avatar1'>
                        <img src={user} alt='User' />
                    </div>
                    <div className='card1-info1'>
                        <h2>USERNAME</h2>
                        <br />
                        <div className='flex-parent jc-center'>
                            <button type='submit' className='btn btn-outline-danger'>
                                Delete picture
                            </button>
                            &ensp;
                            <button type='submit' className='btn btn-outline-primary'>
                                Upload photo
                            </button>
                        </div>
                        <div>
                            <br />
                            <form action=''></form>
                            <div className='row'>
                                <div className='col'>
                                    <span>
                                        <b>Name:</b>
                                    </span>
                                    <input type='text' className='form-control' defaultValue={dataUser.name} required />
                                </div>
                                <div className='col'>
                                    <span>
                                        <b>Surname:</b>
                                    </span>
                                    <input type='text' className='form-control' defaultValue={dataUser.surname} required />
                                </div>
                            </div>
                            <br />
                            <label htmlFor='Name'>
                                <b>Career:</b>
                            </label>
                            <br />
                            <input type='text' className='form-control' defaultValue={dataUser.career} required />
                            <br />
                            <label htmlFor='Name'>
                                <b>Email:</b>
                            </label>
                            <br />
                            <input type='email' className='form-control' defaultValue={dataUser.email} required />
                            <br />
                            <label htmlFor='Name'>
                                <b>Phone:</b>
                            </label>
                            <br />
                            <input type='number' className='form-control' defaultValue={dataUser.phone} required />
                            <br />
                        </div>
                        <br />
                        <div className='flex-parent jc-center'>
                            <button onClick={() => navigate('/')} type='submit' className='btn btn-danger'>
                                Exit
                            </button>
                            &ensp;
                            <button type='submit' className='btn btn-primary'>
                                Save
                            </button>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
};
