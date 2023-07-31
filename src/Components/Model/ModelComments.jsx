import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Index";

export const ModelComments = ({ onClose, _id, user, idUser, description, time, image, update, type }) => {

    const [img, setImg] = useState('');
    const navigate = useNavigate();
    const { dataUser } = useContext(AuthContext);

    const getImage = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/user/get-image/${image}`, {
                responseType: 'blob'
            });
            const imageURL = URL.createObjectURL(data);
            setImg(imageURL);
        } catch (e) {
            console.log(e);
        }
    };

    const navigateUserPage = () => {
        if(dataUser.id == idUser){
            navigate(`/user/${idUser}`);
        }else{
            navigate(`/userProfile/${idUser}`);
        }
        onClose();
    }

    const deleteCommet = async (id) => {
        try {
            Swal.fire({
                title: 'Do you want to delete this Comment?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    if (type == 'publication') {
                        const { data } = await axios.delete(`http://localhost:3200/comment/delete/${id}`);
                        update();
                        Swal.fire({
                            position: 'bottom-start',
                            text: data.message,
                            width: '20rem'
                        })
                    } else {
                        const { data } = await axios.delete(`http://localhost:3200/questionResponse/delete/${id}`);
                        update();
                        Swal.fire({
                            position: 'bottom-start',
                            text: data.message,
                            width: '20rem'
                        })
                    }
                }
            });
            update();
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (image === undefined) {
        } else {
            getImage();
        }
    }, [image]);

    return (
        <>
            <div className="d-flex align-items-start" style={{ width: '100%', marginTop: '1rem' }}>
                <img className="rounded-circle" style={{ width: '3rem', height: '3rem', marginTop: '1rem', flex: '0 0 3rem', cursor: 'pointer' }} src={img} onClick={navigateUserPage} />
                <div className="card flex-row bg6 mb-3 comment-container" style={{ marginLeft: '0.5rem' }}>
                    <div className="card-body" style={{ width: '100%' }}>
                        <div className="d-flex justify-content-between">
                            <p style={{ marginRight: '1rem' }}>{user}</p>
                            <small>{time}</small>
                            &ensp;
                            {
                                dataUser.id == idUser ? (
                                    <>
                                        <p className="text-end" onClick={(() => deleteCommet(_id))} style={{ cursor: 'pointer' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16" style={{ fill: 'white' }}>
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                            </svg>
                                        </p>
                                    </>
                                ) : <></>
                            }
                        </div>
                        <p style={{ width: '100%' }}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
