import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ModelAdminForum } from '../../Components/Model/ModelAdminForum'

export const ForumView = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([{}]);
    const [tableQuestions, setTableQuestions] = useState([{}]);
    const [search, setSearch] = useState('');

    const getQuestions = async () => {
        try {
            const { data } = await axios('http://localhost:3200/question/getByReports');
            setQuestions(data.questions);
            setTableQuestions(data.questions)
        } catch (e) {
            console.log(e);
        }
    }

    const updateData = async () => {
        try {
            getQuestions();
        } catch (e) {
            console.log(e);
        }
    }

    const handleSearh = (e) => {
        setSearch(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (searchTerm) => {
        var resultSearch = tableQuestions.filter((elemento) => {
            if (elemento.question.toString().toLowerCase().includes(searchTerm.toLowerCase()))
                return elemento
        })
        setQuestions(resultSearch)
    }

    useEffect(() => {
        getQuestions()
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
                                    <h1 className='text-white tx1' style={{ fontSize: '2.5rem' }}>VIEW QUESTIONS</h1>
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
                                        placeholder="Search in KNL Practices"
                                        value={search}
                                        onChange={handleSearh}
                                    />
                                </div>
                            </div>
                        </center>
                    </div>
                    {
                        questions.map(({ _id, user, question, description, time, reports }, index) => {
                            return (
                                <div key={index}>
                                    <ModelAdminForum
                                        _id={_id}
                                        user={user?.name}
                                        question={question}
                                        description={description}
                                        time={time}
                                        update={updateData}
                                        reports={reports}
                                    ></ModelAdminForum>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
