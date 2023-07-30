import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Favorite } from '../Components/Favorite/Favorite';
import { ModelPublications } from '../Components/Model/ModelPublications';
import { ModalComments } from '../Components/Modal/ModalComments';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../Components/Sidebar/Sidebar';
import { Navbar } from '../Components/Navbar/Navbar';
import { AuthContext } from '../Index';

export const PublicacionPage = () => {
    const [publication, setPublication] = useState([{}]);
    const [showModalComments, setShowModalComments] = useState(false);
    const [dataComments, setDataComments] = useState({});
    const [title, setTitle] = useState('');
    const { id } = useParams();
    const { dataUser } = useContext(AuthContext)

    const handleOpenModalComment = (id, image, user, empress, location, phone, description, time) => {
        setShowModalComments(true);
        let datos = {
            id: id,
            image: image,
            user: user,
            empress: empress,
            location: location,
            phone: phone,
            description: description,
            time: time
        }
        setDataComments(datos);
    }
    const handleCloseModalComment = () => {
        setShowModalComments(false);
    }

    const getPublicationsAll = async () => {
        try {
            const { data } = await axios('http://localhost:3200/publication/get');
            setPublication(data.publications);
            setTitle('All post');
        } catch (e) {
            console.log(e);
        }
    }

    const getPublicationByCarrer = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/publication/getByCarrer/${id}`);
            setPublication(data.publications);
            setTitle(data.publications[1].career.name)
        } catch (e) {
            console.log(e);
        }
    }

    const getPublications = () => {
        if (id === undefined) {
            getPublicationsAll();
        } else {
            getPublicationByCarrer();
        }
    }

    useEffect(() => {
        getPublications()
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="containerP">
                <div className="t i" style={{ width: '20%' }}>
                    <Sidebar getPublication={getPublications}></Sidebar>
                </div>
                <div className="overflow-auto scroll-invisible-container" style={{ maxHeight: 'calc(110vh - 100px)', width: '57%', marginRight: '1rem' }}>
                    <div className="add-question-container">
                        <h2 className='text-center text-white mb-3'>{title}</h2>
                            <center>
                                <div className="col-8">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg6" style={{ borderColor: '#263340' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ fill: 'white' }}>
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </span>
                                        <input
                                            className="form-control bg6"
                                            type="text"
                                            name=""
                                            id="inputFav"
                                            placeholder="Search in KNL Practices"
                                            style={{ borderColor: '#263340' }}
                                        />
                                    </div>
                                </div>
                            </center>
                    </div>
                    {
                        publication.map(({ _id, user, image, empress, location, phone, description, time }, i) => {
                            return (
                                <div key={i}>
                                    <ModelPublications
                                        id={_id}
                                        image={image}
                                        user={user?.name}
                                        userImage={user?.image}
                                        empress={empress}
                                        location={location}
                                        phone={phone}
                                        description={description}
                                        time={time}
                                    ></ModelPublications>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <button className='btnComent bx' onClick={() => handleOpenModalComment(_id, image, user?.name, empress, location, phone, description, time)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                                            </svg>
                                            Show comments
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="t i" style={{ width: '20%', marginLeft: '1rem' }}>
                    <Favorite />
                </div>
            </div>
            <ModalComments
                isOpen={showModalComments}
                onClose={handleCloseModalComment}
                _id={dataComments.id}
                image={dataComments.image}
                user={dataComments.user}
                empress={dataComments.empress}
                location={dataComments.location}
                phone={dataComments.phone}
                description={dataComments.description}
                time={dataComments.time}
            ></ModalComments>
        </>
    )
}
