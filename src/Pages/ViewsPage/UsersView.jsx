import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ModelTableUser } from '../../Components/Model/ModelTableUser'

export const UsersView = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([{}])

    const getUsers = async () => {
        try {
            const { data } = await axios('http://localhost:3200/user/get')
            setUsers(data.users)
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getUsers, [])

    return (
        <>
            <Navbar />
            <div className="containerP">
                <div className="t i" style={{ width: '20%' }}>
                    <Sidebar />
                </div>
                <div className="t overflow-auto scroll-invisible-container" style={{ maxHeight: 'calc(110vh - 100px)', width: '75%', marginRight: '1rem' }}>
                    <nav className='navbar navbar-expand-lg '>
                        <div className='container-fluid'>
                            <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
                                <h1 className='text-white tx1' style={{ fontSize: '2.5rem' }}>VIEW USERS</h1>
                            </div>
                        </div>
                    </nav>
                    <section className=''>
                        <div className='row justify-content-center'>
                            <div className='col-8'>
                                <div className='card bg1 bx'>
                                    <div className='card-body p-0'>
                                        <div className='table-responsive table-scroll' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '25rem' }}>
                                            <table className='table text-white'>
                                                <thead className='' style={{ backgroundColor: '#333' }}>
                                                    <tr>
                                                        <th scope='col' className='text-white'>Name</th>
                                                        <th scope='col' className='text-white'>Surname</th>
                                                        <th scope='col' className='text-white'>Email</th>
                                                        <th scope='col' className='text-white'>Username</th>
                                                        <th scope='col' className='text-white'>Phone</th>
                                                        <th scope='col' className='text-white'>Career</th>
                                                        <th scope='col' className='text-white'>Role</th>
                                                        <th scope='col' className='text-white'>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        users.map(({_id, name, surname, email, username, phone, career, role}, i) => {
                                                            return(
                                                                <tr key={i}>
                                                                    <ModelTableUser
                                                                    name={name}
                                                                    surname={surname}
                                                                    email={email}
                                                                    username={username}
                                                                    phone={phone}
                                                                    career={career}
                                                                    role={role}
                                                                    ></ModelTableUser>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </div>
            </div>
        </>
    )
}
