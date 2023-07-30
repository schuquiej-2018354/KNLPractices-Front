import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

export const ModelFavorite = ({ _id, empress, location, phone, update }) => {

    const deleteFav = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:3200/favorite/delete/${id}`);
            update();
            Swal.fire({
                icon: 'success',
                title: data.message
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className='d-flex justify-content-center '>
                <div className='card bx text-white bg5 mb-3' style={{ width: '95%' }}>
                    <div className='card-header d-flex justify-content-between '>
                        <div className=''>
                            <h5 style={{ marginTop: '7%' }}>{empress}</h5>
                        </div>
                        <div className=''>
                            <button className='btn' onClick={() => deleteFav(_id)}>
                                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' className='bi bi-bookmark' viewBox='0 0 16 16' style={{ fill: 'white' }}>
                                    <path d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z' />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='card-text'>
                            Telefono: {phone}
                            <p className='card-text'>Direccion: {location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
