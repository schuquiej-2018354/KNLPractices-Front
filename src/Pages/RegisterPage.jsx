import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imgFond from '../assets/img/register.png'
import logo from '../assets/img/KNLLogo.png'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [career, setCareer] = useState([{}])
    const [form, setForm] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        career: ''
    })

    const getCareers = async (e) => {
        try {
            const { data } = await axios('http://localhost:3200/career/get')
            setCareer(data.careers)
        } catch (e) {
            console.log(e);
        }
    }

    const registerHandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const register = async (e) => {
        try {
            const { data } = await axios.post('http://localhost:3200/user/add', form)
            Swal.fire({
                icon: 'success',
                title: data.message
            })
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => getCareers, [])

    return (
        <>
            <div className='contt'>
                <div className="containerLog" style={{ maxWidth: '1000px' }}>
                    <div className="row">
                        <div className="col">
                            <div className="cover" style={{ right: '50%' }}>
                                <div className="front" style={{ backgroundImage: `url(${imgFond})`, backgroundSize: 'cover' }} >
                                    <div className="text" >
                                        <div className='imgs'><img src={logo} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="forms" style={{ left: '50%', width: '10%' }}>
                                <div className="form-content">
                                    <div className="login-form">
                                        <div className="title" style={{ paddingRight: '360px' }}>Register</div>
                                        <form>
                                            <div className="input-boxes">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="input-box">
                                                            <input type="text" placeholder="Name" onChange={registerHandleChange} name='name' required />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="input-box">
                                                            <input type="text" placeholder="Surname" onChange={registerHandleChange} name='surname' required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-box">
                                                    <input type="text" placeholder="Username" onChange={registerHandleChange} name='username' required />
                                                </div>
                                                <div className="input-box">
                                                    <input type="email" placeholder="username@gmail.com" onChange={registerHandleChange} name='email' required />
                                                </div>
                                                <div className="input-box">
                                                    <input className='input-number' type="number" min="8" max="8" placeholder="1234-5678" onChange={registerHandleChange} name='phone' required />
                                                </div>
                                                <div className="input-box mb-3">
                                                    <input type="password" placeholder="Password" onChange={registerHandleChange} name='password' required />
                                                </div>
                                                <div className="input-box">
                                                    <select class="form-select" aria-label="Default select example" name="career" value={form.career} onChange={registerHandleChange}>
                                                        <option defaultValue={'Select to career'}>Select to career</option>
                                                        {
                                                            career.map(({ _id, name }, i) => {
                                                                return (
                                                                    <option key={i} value={_id} className=''>{name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="button input-box">
                                                            <input onClick={() => navigate('/login')} type="submit" value="Exit" />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="button input-box">
                                                            <input onClick={() => register()} type="button" value="SignUp" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
