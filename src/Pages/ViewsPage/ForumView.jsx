import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ModelAdminForum } from '../../Components/Model/ModelAdminForum'

export const ForumView = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([{}]);


    const getQuestions = async () => {
        try {
            const { data } = await axios('http://localhost:3200/question/get');
            setQuestions(data.questions);
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

    useEffect(() => {
        getQuestions()
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
                        questions.map(({ _id, user, question, description, time }, index) => {
                            return (
                                <div key={index}>
                                    <ModelAdminForum
                                        _id={_id}
                                        user={user?.name}
                                        question={question}
                                        description={description}
                                        time={time}
                                        update={updateData}
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
