import React from 'react'
import { AuthContext } from '../../Index'
import { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ModalPutForum } from '../Modal/ModalPutForum'
import Swal from 'sweetalert2'

export const ModelForum = ({ id, idUser, user, question, description, time, update }) => {

    const { dataUser } = useContext(AuthContext);

    const [showModalUpdate, setShowModalUpdate] = useState(false);

    const deleteQuestion = async (id) => {
        try {
            Swal.fire({
                title: 'Do you want to delete this Holaaa?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.delete(`http://localhost:3200/question/delete/${id}`)
                    update()
                    Swal.fire({
                        position: 'bottom-start',
                        text: data.message,
                        width: '20rem',
                        showConfirmButton: false
                    })
                }
            })
        } catch (e) {
            console.log(e);
        }
    }

    const report = (id) => {
        try{
            Swal.fire({
                title: 'Do you want to report this question?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, report this question!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.put(`http://localhost:3200/question/report/${id}`);
                    Swal.fire({
                        position: 'bottom-start',
                        text: data.message,
                        width: '20rem'
                    })
                    update();
                }
            })
        }catch(e){
            console.log(e);
        }
    }

    const handleOpenModalUp = () => {
        setShowModalUpdate(true);
    };

    const handleCloseModalUp = () => {
        setShowModalUpdate(false);
    };

    return (
        <>
            <div className='card bx' style={{ marginTop: '10px' }}>
                <div className='row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative'>
                    <div className='col p-4 d-flex flex-column position-static text-black'>
                        <div className='row'>
                            <div className='col'>
                                <strong className='d-inline-block mb-2 text-primary'>{user}</strong>
                            </div>
                            <div className='col'>
                                <div className='mb-1 text-muted text-end' style={{ marginRight: '1rem' }}>
                                    {time}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3 className='mb-0'>{question}</h3>
                            </div>
                            <div className="col text-end">
                                {
                                    dataUser.id == idUser ? (
                                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                                            <p className="text-end" onClick={(() => deleteQuestion(id))} style={{ cursor: 'pointer' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16" >
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                </svg>
                                            </p>
                                            &ensp;
                                            <p className="text-end" onClick={handleOpenModalUp} style={{ cursor: 'pointer' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                </svg>
                                            </p>
                                            &ensp;
                                            <p className='text-end' onClick={()=> report(id)} style={{ cursor: 'pointer', padding: '0' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16" style={{fill: 'black'}}>
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                                    </svg>
                                            </p>
                                        </div>
                                    ) : <></>
                                }
                            </div>
                        </div>
                        <hr />
                        <p className='card-text mb-auto' style={{ marginTop: '2%', marginBottom: '2%' }}>
                            {description}
                        </p>
                    </div>
                </div>
            </div >
            <ModalPutForum isOpen={showModalUpdate} onClose={handleCloseModalUp} dataUp={{ question, description }} id={id} update={update} />
        </>
    )
}
