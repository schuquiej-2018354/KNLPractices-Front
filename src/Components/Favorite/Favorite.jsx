import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ModelFavorite } from '../Model/ModelFavorite';

export const Favorite = () => {
    const [fav, setFav] = useState([{}]);

    const getFavorites = async () => {
        try {
            const { data } = await axios('http://localhost:3200/favorite/get/64b3380672c4340db65ee5e3');
            setFav(data.favorites);
        } catch (e) {
            console.log(e);
        }
    };

    const updateData = async () => {
        try {
            getFavorites();
        } catch (e) {
            console.log(e);
        }
    };

    const addFavorite = async (publication) => {
        try {
            console.log('si');
            let datos = {
                owner: '64b3380672c4340db65ee5e3',
                publication: publication
            };
            const { data } = await axios.post('http://localhost:3200/favorite/add', datos);
            updateData(); // Llamamos a la función updateData para actualizar los favoritos después de agregar uno nuevo
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <>
            <div className='divFav' style={{ width: '90%' }}>
                <div className='row' style={{ marginBottom: '25px' }}>
                    <div className='searchFav col'>
                        <input className=' form-control bg6' type='text' name='' id='inputFav' placeholder='Search' style={{ borderColor: '#263340', width: '80%' }} />
                        <button className='btn btn-primary'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='overflow-auto scroll-invisible-container' style={{ height: '88vh', maxHeight: 'calc(110vh - 100px)', overflowY: 'auto', scrollbarWidth: 'thin' }}>
                    <h2 className='text-center text-white'>FAVORITES</h2>
                    {
                        fav.map(({ _id, owner, publication }, i) => {
                            return (
                                <div key={i}>
                                    <ModelFavorite
                                        _id={_id}
                                        user={owner?.name}
                                        empress={publication?.empress}
                                        location={publication?.location}
                                        phone={publication?.phone}
                                        description={publication?.description}
                                        update={updateData}>

                                    </ModelFavorite>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};
