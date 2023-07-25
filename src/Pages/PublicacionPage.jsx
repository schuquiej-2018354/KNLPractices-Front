import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import { Favorite } from '../Components/Favorite/Favorite'
import axios from 'axios';
import { ModelPublications } from '../Components/Model/ModelPublications';
import { ModalAddPublication } from '../Components/Modal/ModalAddPublication';
import { ModalComments } from '../Components/Modal/ModalComments';
import { useParams } from 'react-router-dom';

export const PublicacionPage = () => {

    const [publication, setPublication] = useState([{}]);
    const [showModalAddPublication, setShowModalAddPublication] = useState(false);
    const [showModalComments, setShowModalComments] = useState(false);
    const [dataComments, setDataComments] = useState({});
    const [title, setTitle] = useState('');
    const { id } = useParams();

    const handleOpenModal = () => {
        setShowModalAddPublication(true);
    } 
    const handleCloseModal = () => {
        setShowModalAddPublication(false);
    }

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

    const getPublicationsAll = async() =>{
        try{
            const { data } = await axios('http://localhost:3200/publication/get');
            setPublication(data.publications);
            setTitle('All post');
        }catch(e){
            console.log(e);
        }
    }
    
    const getPublicationByCarrer = async()=>{
        try{
            const { data } = await axios(`http://localhost:3200/publication/getByCarrer/${id}`);
            setPublication(data.publications);
            setTitle(data.publications[1].career.name)
        }catch(e){
            console.log(e);
        }
    }
    const getPublications = () => {
        if(id === undefined) {
            getPublicationsAll();
        }else{
            getPublicationByCarrer();
        }
    }



    useEffect(()=> { 
        getPublications() 
    }, [id]);

    return (
        <>
            <div className="row">
                <div className="col col-2" style={{ width: '20%' }}>
                    <Sidebar />
                </div>
                <div className="col col-7 overflow-auto scroll-invisible-container" style={{ marginRight: '10px', marginLeft: '10px', maxHeight: 'calc(110vh - 100px)', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#e4e3eb' }}>
                    <h2 className='text-center text-white t mb-5'>{title}</h2>
                    {
                        publication.map(({_id, user, image, empress, location, phone, description, time}, i) => {
                            return(
                                <>
                                    <div key={i}>
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
                                    <div style={{marginBottom: '1.5rem'}}>
                                        <button onClick={()=>handleOpenModalComment(_id, image, user?.name, empress, location, phone, description, time)}>Show comments</button>
                                    </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="col t">
                    <Favorite />
                </div>
            </div>
            <ModalAddPublication isOpen={showModalAddPublication} onClose={handleCloseModal}></ModalAddPublication>
            <ModalComments 
                isOpen={showModalComments}
                onClose={handleCloseModalComment} 
                id={dataComments.id} 
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
