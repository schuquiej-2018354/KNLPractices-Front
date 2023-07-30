import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import axios from 'axios';
import { ModelAdminPubli } from '../../Components/Model/ModelAdminPubli';
import { useNavigate } from 'react-router-dom';

export const PubliView = () => {
    const navigate = useNavigate();
    const [publication, setPublication] = useState([{}]);

    const getPublicationsAll = async () => {
        try {
            const { data } = await axios('http://localhost:3200/publication/get');
            setPublication(data.publications);
        } catch (e) {
            console.log(e);
        }
    }

    const updateData = async() => {
        try {
            getPublicationsAll();
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPublicationsAll()
    }, []);
    return (
        <>
            <Navbar />
            <div className="containerP">
                <div className="t i" style={{ width: '20%' }}>
                    <Sidebar />
                </div>
                <div className="t overflow-auto scroll-invisible-container" style={{ maxHeight: 'calc(110vh - 100px)', width: '70%', marginRight: '1rem', marginLeft: '4rem' }}>
                    <div className="add-question-container">
                        <button className='btn btn-danger' onClick={() => navigate('/admin')}>Exit</button>
                        <nav className='navbar navbar-expand-lg '>
                            <div className='container-fluid'>
                                <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
                                    <h1 className='text-white tx1' style={{ fontSize: '2.5rem' }}>VIEW QUESTIONS</h1>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {
                        publication.map(({ _id, user, image, empress, location, phone, description, time }, i) => {
                            return (
                                <div key={i}>
                                    <ModelAdminPubli
                                        _id={_id}
                                        image={image}
                                        user={user?.name}
                                        userImage={user?.image}
                                        empress={empress}
                                        location={location}
                                        phone={phone}
                                        description={description}
                                        time={time}
                                        update={updateData}
                                    ></ModelAdminPubli>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
