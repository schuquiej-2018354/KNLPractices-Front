import React, { useEffect, useState } from 'react'
import { Favorite } from '../Components/Favorite/Favorite'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import { Navbar } from '../Components/Navbar/Navbar'
import { ModalAddForum } from '../Components/Modal/ModalAddForum'
import axios from 'axios'
import { ModelForum } from '../Components/Model/ModelForum'
import { ModalForumanswers } from '../Components/Modal/ModalForumanswers'

export const ForumPage = () => {

    const [showModalAddForum, setShowModalAddForum] = useState(false);
    const [ showModalResponses, setShowModalResponses ] = useState(false);
    const [questions, setQuestions] = useState([{}]);
    const [ dataForum, setDataForum ] = useState({});


    const handleOpenModalAddForum = () => {
        setShowModalAddForum(true); 
    }
    const handleCloseModalAddForum = () => {
        setShowModalAddForum(false);
    }

    const handleOpenModalResponses = (id, user, description, time) => {
        setShowModalResponses(true);
        let datos = {
            id: id,
            user: user,
            description: description,
            time: time
        }
        setDataForum(datos);    
    }
    const handleCloseModalResponses = () => {
        setShowModalResponses(false);
    }

    const getQuestions = async () => {
        try {
            const { data } = await axios('http://localhost:3200/question/get');
            setQuestions(data.questions);
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
            <div className='containerP'>
                <div className='t i' style={{ width: '20%' }}>
                    <Sidebar />
                </div>
                <div className='overflow-auto scroll-invisible-container' style={{ maxHeight: 'calc(110vh - 100px)', width: '57%', marginRight: '1rem'}}>
                    <button className='btn bg1 col-12' onClick={handleOpenModalAddForum}>ADD QUESTION</button>
                    {
                        questions.map(({ _id, user, question, description, time }, index) => {
                            return (
                                    <div key={index}>
                                        <ModelForum
                                            id={_id}
                                            user={user?.name}
                                            question={question}
                                            description={description}
                                            time={time}
                                        ></ModelForum>
                                        <button className='btnComent bx' style={{width: '100%'}} onClick={()=>handleOpenModalResponses(_id, user?.name, description, time)}>View Responses</button>
                                    </div>
                            )
                        })
                    }
                </div>
                <div className='t i' style={{ width: '20%', marginLeft:'1rem' }}>
                    <Favorite />
                </div>
            </div >
            <ModalAddForum isOpen={showModalAddForum} onClose={handleCloseModalAddForum} getQuestions={getQuestions}></ModalAddForum>
            <ModalForumanswers 
                isOpen={showModalResponses} 
                onClose={handleCloseModalResponses}
                _id={dataForum.id}
                user={dataForum.user}
                description={dataForum.description}
                time={dataForum.time}
            ></ModalForumanswers>
        </>
    )
}
