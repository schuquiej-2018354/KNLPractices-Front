import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Index';
import { ModelFavorite } from '../Model/ModelFavorite';

export const Favorite = () => {

    const [fav, setFav] = useState([{}]);
    const [tableFav, setTableFav] = useState([{}]);
    const [search, setSearch] = useState('')
    const { dataUser } = useContext(AuthContext);

    const getFavorites = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/favorite/get/${dataUser.id}`);
            setFav(data.favorites);
            setTableFav(data.favorites);
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
    }

    const handleSearh = (e) => {
        setSearch(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (searchTerm) => {
        var resultSearch = tableFav.filter((elemento) => {
            if (elemento.publication.empress.toString().toLowerCase().includes(searchTerm.toLowerCase()))
                return elemento
        })
        setFav(resultSearch)
    }

    useEffect(() => {
        if (dataUser.id) {
            getFavorites()
        }
    }, [dataUser]);

    return (
        <>
            <div className='row' style={{ width: '100%' }}>
                <h1 className='text-center text-white' style={{ fontSize: '2rem' }}>FAVORITES</h1>
                <div className='overflow-auto scroll-invisible-container' style={{ height: '75vh' }}>
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
                                        update={updateData}
                                    ></ModelFavorite>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ marginBottom: '20px', display: 'flex' }} >
                    <div className='col-8' style={{ width: '75%' }}>
                        <input className='form-control bg6' type='text' name='' id='inputFav' placeholder='Search' style={{ borderColor: '#263340' }} value={search} onChange={handleSearh} />
                    </div>
                    <button className='btn btn-primary' style={{ width: '25%' }}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                        </svg>
                    </button>
                    <div className='col' >
                    </div>
                </div>
            </div >
        </>
    );
};

export default Favorite;