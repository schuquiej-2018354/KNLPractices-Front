import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { ModelCarrers } from '../Model/ModelCarrers';

export const DropCarrers = () => {
    const [careers, setCareers] = useState([{}]);

    const getCareers = async () => {
        try {
            const { data } = await axios('http://localhost:3200/career/get');
            setCareers(data.careers);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => getCareers, []);
    return (
        <>
            <Dropdown className='sbD nav-item lih' style={{ cursor: 'pointer'}}>
                <Dropdown.Toggle className='sbDP lih' style={{backgroundColor: '#f8f8f8' }}>
                    <a href='#' className='nav-link text-black' aria-current='page' style={{ textDecoration: 'none' }}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-plus-circle-fill' viewBox='0 0 16 16'>
                            <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
                        </svg>
                    </a>
                    <div className='sbText text-black'>Careers</div>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: '#c8ced4'}}>
                    {
                        careers.map(({ _id, name }, i) => {
                            return (
                                <div key={i}>
                                    <ModelCarrers
                                        id={_id}
                                        name={name}
                                    ></ModelCarrers>
                                </div>
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};
