import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import axios from 'axios';
import { ModelAdminPubli } from '../../Components/Model/ModelAdminPubli';
import { useNavigate } from 'react-router-dom';

export const PubliView = () => {
    const navigate = useNavigate();
    const [publication, setPublication] = useState([{}]);
    const [tablePublication, setTablePublication] = useState([{}])
    const [search, setSearch] = useState('')

    const getPublicationsAll = async () => {
        try {
            const { data } = await axios('http://localhost:3200/publication/get');
            setPublication(data.publications);
            setTablePublication(data.publications)
        } catch (e) {
            console.log(e);
        }
    }

    const updateData = async () => {
        try {
            getPublicationsAll();
        } catch (e) {
            console.log(e);
        }
    }

    const handleSearh = (e) => {
        setSearch(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (searchTerm) => {
        var resultSearch = tablePublication.filter((elemento) => {
            if (elemento.empress.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                elemento.location.toString().toLowerCase().includes(searchTerm.toLowerCase()))
                return elemento
        })
        setPublication(resultSearch)
    }

    useEffect(() => {
        getPublicationsAll()
    }, []);

    return (
        <>
            <Navbar />
            <div className="containerP">
                <div className="i" style={{ width: '20%' }}>
                    <Sidebar />
                </div>
                <div className="overflow-auto scroll-invisible-container" style={{ maxHeight: 'calc(110vh - 100px)', width: '70%', marginRight: '1rem', marginLeft: '4rem' }}>
                    <div className="add-question-container">
                        <button className='btn btn-danger' onClick={() => navigate('/admin')}>Exit</button>
                        <nav className='navbar navbar-expand-lg '>
                            <div className='container-fluid'>
                                <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
                                    <h1 className='text-white tx1' style={{ fontSize: '2.5rem' }}>VIEW PUBLICATIONS</h1>
                                </div>
                            </div>
                        </nav>
                        <center>
                            <div className="col-8">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg6" style={{ backgroundColor: '#5D6D7E' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ fill: 'white' }}>
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </span>
                                    <input
                                        className="form-control ip2"
                                        type="text"
                                        name=""
                                        id="inputFav"
                                        placeholder="Search Publication"
                                        value={search}
                                        onChange={handleSearh}
                                    />
                                </div>
                            </div>
                        </center>
                    </div>
                    {
                        publication.map(({ _id, user, image, empress, location, phone, description, time, career }, i) => {
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
                                        career={career?.name}
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
