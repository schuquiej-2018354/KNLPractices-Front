import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Index'
import { ModelComments } from '../Model/ModelComments'
import { ModelForum } from '../Model/ModelForum'
import { ModelPublications } from '../Model/ModelPublications'

export const ModalForumanswers = ({ isOpen, onClose, _id, user, description, time}) => {
    const [responses, setResponses] = useState([{}]);
    const [functionExecuted, setFunctionExecuted] = useState(false);
    const { dataUser } = useContext(AuthContext);

    const getResponses = async() => {
        try{
            if(!functionExecuted){
                const { data } = await axios(`http://localhost:3200/questionResponse/getByQuestion/${_id}`);
                setResponses(data.responses);
                setFunctionExecuted(true);
            }
            setFunctionExecuted(false)
        }catch(e){
            console.log(e);
        }
    }

    const updateDate = async () =>{
        try {
            getResponses();
        } catch (e) {
            console.log(e);
        }
    }

    const addResponse = async() => {
        try{
            let datos = {
                user: dataUser.id,
                description: document.getElementById('textarea').value,
                time: '',
                question: _id
            }
            const { data } = await axios.post(`http://localhost:3200/questionResponse/add`, datos);
            document.getElementById('textarea').value = '';
            getResponses();
        }catch(e){
            console.log(e);
        }
    }


    return (
        <>
            <Modal show={isOpen} onShow={getResponses} size='lg' className="custom-modal">
                <Modal.Header className='bg2 text-white'>
                    <Modal.Title className=''>Responses</Modal.Title>
                    <button onClick={onClose} type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className='text-white'>&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body className='bg2 text-white'>
                <ModelForum
                    user={user}
                    description={description}
                    time={time}
                ></ModelForum>
                {
                    responses.map(({_id, user, description, time}, i) =>{
                        return(
                                <div key={i}>
                                    <ModelComments
                                        _id={_id}
                                        id={_id}
                                        user={user?.name}
                                        description={description}
                                        time={time}
                                        image={user?.image}
                                        type={'Forum'}
                                        update={updateDate}
                                    ></ModelComments>
                                </div>
                        )
                    })
                }
                </Modal.Body>
                <Modal.Footer className='bg2 text-white' style={{display: 'flex', justifyContent: 'center'}}>
                    <form style={{width: '95%'}}>
                        <div class="form-group">
                            <textarea className="textarea" id="textarea" rows="3" placeholder='Write your response'></textarea>
                        </div>
                        <button type='button' onClick={()=> addResponse()} className='btn' style={{ position: 'absolute', bottom: '1.5rem', right: '3rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16" style={{fill: 'black'}}>
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                            </svg>
                        </button>
                    </form>
                </Modal.Footer>
            </Modal>
        </>
    )
}