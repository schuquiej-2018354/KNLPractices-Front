import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import { Favorite } from '../Components/Favorite/Favorite'
import axios from 'axios';
import { ModelPublications } from '../Components/Model/ModelPublications';
import { ModalAddPublication } from '../Components/Modal/ModalAddPublication';

export const PublicacionPage = () => {

    const [publication, setPublication] = useState([{}]);
    const [showModalAddPublication, setShowModalAddPublication] = useState(false);

    const handleOpenModal = () => {
        setShowModalAddPublication(true);
    } 
    const handleCloseModal = () => {
        setShowModalAddPublication(false);
    }

    const getPublications = async() =>{
        try{
            const { data } = await axios('http://localhost:3200/publication/get');
            setPublication(data.publications);
        }catch(e){
            console.log(e);
        }
    }


    useEffect(()=> { 
        getPublications() 
    }, []);

    return (
        <>
            <div className="row">
                <div className="col col-2" style={{ width: '20%' }}>
                    <Sidebar />
                </div>
                <div className="col col-7 overflow-auto" style={{ marginRight: '10px', marginLeft: '10px', maxHeight: 'calc(110vh - 100px)', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#e4e3eb' }}>
                    <h2 className='text-center'>Informatica</h2>
                    <div>
                        <button onClick={handleOpenModal} className='btn btn-primary '>Publicar</button>
                    </div>
                    {
                        publication.map(({_id, user, image, empress, location, phone, description, time}, i) => {
                            return(
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
                            </div>
                            )
                        })
                    }
                </div>
                <div className="col t">
                    <Favorite />
                </div>
            </div>
            <ModalAddPublication isOpen={showModalAddPublication} onClose={handleCloseModal}></ModalAddPublication>
        </>
    )
}
