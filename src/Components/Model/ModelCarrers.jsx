import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export const ModelCarrers = ({ id ,name}) => {

    const navigate = useNavigate();

    return (
        <>
            <li onClick={()=> navigate(`/publicacion/${id}`)} className="lih">
                <Dropdown.Item href="#" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table" /></svg>
                    {name}
                </Dropdown.Item>
            </li>
        </>
    );
};
