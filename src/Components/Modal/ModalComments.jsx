import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Index'
import { ModelComments } from '../Model/ModelComments'
import { ModelPublications } from '../Model/ModelPublications'

export const ModalComments = ({ isOpen, onClose, _id, idUser, image, userImage, user, empress, location, phone, description, time, updateFavorite }) => {
    const navigate = useNavigate();
    const [comments, setCommemts] = useState([{}]);
    const [functionExecuted, setFunctionExecuted] = useState(false);
    const { dataUser } = useContext(AuthContext);

    const getComments = async () => {
        try {
            if (!functionExecuted) {
                const { data } = await axios(`http://localhost:3200/comment/getComments/${_id}`);
                setCommemts(data.comments);
                setFunctionExecuted(true);
            }
            setFunctionExecuted(false);
        } catch (e) {
            console.log(e);
        }
    }

    const addComent = async () => {
        try {
            let datos = {
                user: dataUser.id,
                description: document.getElementById('textarea').value,
                time: '',
                publication: _id
            }
            const { data } = await axios.post(`http://localhost:3200/comment/add`, datos);
            document.getElementById('textarea').value = '';
            getComments();
        } catch (e) {
            console.log(e);
        }
    }

    const updateData = async () => {
        try {
            getComments();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Modal show={isOpen} onShow={getComments} className="custom-modal" size='lg'>
                <Modal.Header className='text-black' style={{backgroundColor: '#c8ced4'}}>
                    <Modal.Title className=''>Commets</Modal.Title>
                    <button onClick={onClose} type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className='text-black'>&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body className='text-white' style={{backgroundColor: '#c8ced4'}}>
                    <ModelPublications
                        id={_id}
                        image={image}
                        idUser={idUser}
                        userImage={userImage}
                        user={user}
                        empress={empress}
                        location={location}
                        phone={phone}
                        description={description}
                        time={time}
                        type={'Comment'}
                        updateFav={updateFavorite}
                    ></ModelPublications>
                    {
                        comments.map(({ _id, user, description, time, publication }, i) => {
                            return (
                                <div key={i}>
                                    <ModelComments
                                        onClose={onClose}
                                        _id={_id}
                                        id={_id}
                                        idUser={user?._id}
                                        user={user?.name}
                                        description={description}
                                        time={time}
                                        image={user?.image}
                                        update={updateData}
                                        type={'publication'}
                                    ></ModelComments>
                                </div>
                            )
                        })
                    }
                </Modal.Body>
                <Modal.Footer className='text-white' style={{ display: 'flex', justifyContent: 'center' }}>
                    <form style={{ width: '95%' }}>
                        <div class="form-group">
                            <textarea className="textarea" id="textarea" placeholder='Write a comment' style={{backgroundColor: '#c8ced4'}} required />
                        </div>
                        <button type='button' onClick={() => addComent()} className='btn' style={{ position: 'absolute', bottom: '1.5rem', right: '3rem' }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16" style={{ fill: 'black' }}>
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                            </svg>
                        </button>
                    </form>
                </Modal.Footer>
            </Modal>
        </>
    )
}