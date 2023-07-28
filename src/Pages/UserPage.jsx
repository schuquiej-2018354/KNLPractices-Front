import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Favorite } from '../Components/Favorite/Favorite';
import { ModalUpdateImage } from '../Components/Modal/ModalUpdateImage';
import { ModalUpdateProfile } from '../Components/Modal/ModalUpdateProfile';
import { ModalUserPage } from '../Components/Modal/ModalUserPage';
import { ModelForum } from '../Components/Model/ModelForum';
import { ModelPublications } from '../Components/Model/ModelPublications';
import { Navbar } from '../Components/Navbar/Navbar';
import { SidebarProfile } from '../Components/Sidebar/SidebarProfile';
import { AuthContext } from '../Index';
import portada from '../assets/img/portada.jpg';

export const UserPage = () => {

    const navigate = useNavigate();

    const { dataUser } = useContext(AuthContext);
    const [showModalUpdateIMG, setShowModalUpdateIMG] = useState(false);
    const [showModalDT, setshowModalDT] = useState(false);
    const [shoModalUpdateDT, setShoModalUpdateDT] = useState(false);
    const [publication, setPublication] = useState([{}]);
    const [questions, setQuestions] = useState([{}]);
    const { id } = useParams();

    const [isLoadingImage, setIsLoadingImage] = useState(true);
    const [image, setImage] = useState('')

    const getImage = async () => {
        try {
            if (dataUser.image) {
                const { data } = await axios(`http://localhost:3200/user/get-image/${dataUser.image}`, {
                    responseType: 'blob'
                });
                setImage(URL.createObjectURL(data))
                setIsLoadingImage(false)
            } else {
                setIsLoadingImage(false);
            }
        } catch (e) {
            console.log(e);
            setIsLoadingImage(false);
        }
    }

    const getPublicationsUser = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/publication/getById/${id}`);
            setPublication(data.publications);
        } catch (e) {
            console.log(e);
        }
    }

    const getQuestionsUser = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/question/getById/${id}`);
            setQuestions(data.questions);
        } catch (e) {
            console.log(e);
        }
    }

    const handleOpenModalUpIMG = () => {
        setShowModalUpdateIMG(true);
    };

    const handleCloseModalUpIMG = () => {
        setShowModalUpdateIMG(false);
    };

    const handleOpenModalDT = () => {
        setshowModalDT(true);
    };

    const handleCloseModalDT = () => {
        setshowModalDT(false);
    };

    const handleOpenModalUpdateDT = () => {
        setShoModalUpdateDT(true)
    }

    const handleCloseModalUpdateDT = () => {
        setShoModalUpdateDT(false)
    }

    useEffect(() => {
        getPublicationsUser();
        getImage();
        getQuestionsUser()
    }, [dataUser.image]);

    return (
        <>
            <Navbar />
            <div className='row'>
                <div className='col col-2' style={{ width: '20%' }}>
                    <SidebarProfile />
                </div>
                <div className='divUP t col' style={{ marginRight: '10px', marginLeft: '10px', maxHeight: 'calc(110vh - 100px)', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#e4e3eb' }} >
                    <div className='headUP'>
                        <div className='headUP-sub'>
                            <img src={portada} alt="" />
                        </div>
                        <div className='cont-headUP'>
                            <div className='contHeadUP1'>
                                <div className='headUPIMG'>
                                    <img src={image} alt='' />
                                </div>
                            </div>
                            <div className='contHeadUP2'>
                                <div className='contHeadUP2-text2'>
                                    <h3>@{dataUser.username}</h3>
                                </div>
                                <div className='contHeadUP2-text1'>
                                    <h1>{dataUser.name + ' ' + dataUser.surname}</h1>
                                </div>
                            </div>
                            <div className='contHeadUP3'>
                                <div className='contHeadUP3-BTNS'>
                                    <input type='button' className='btn btn1 ' value='Editar Foto' onClick={handleOpenModalUpIMG} />
                                    <input type='button' className='btn btn2' value='Editar Perfil' onClick={handleOpenModalUpdateDT} />
                                    <input type='button' className='btn btn3' value='...' onClick={handleOpenModalDT} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            publication.map(({ _id, user, image, empress, location, phone, description, time }, index) => {
                                return (
                                    <div key={index}>
                                        <ModelPublications
                                            id={_id}
                                            image={image}
                                            user={user?.name}
                                            empress={empress}
                                            location={location}
                                            phone={phone}
                                            description={description}
                                            time={time}
                                        ></ModelPublications>
                                    </div>
                                )
                            })
                        } {
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
                                        <button className='btnComent bx' style={{ width: '100%' }} onClick={() => handleOpenModalResponses(_id, user?.name, description, time)}>View Responses</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div >
                <div className='col col-2 t' style={{ width: '20%' }}>
                    <Favorite />
                </div>
            </div >
            <ModalUpdateImage isOpen={showModalUpdateIMG} onClose={handleCloseModalUpIMG} getImage={getImage} />
            <ModalUserPage isOpen={showModalDT} onClose={handleCloseModalDT} />
            <ModalUpdateProfile isOpen={shoModalUpdateDT} onClose={handleCloseModalUpdateDT} />
        </>
    );
};
