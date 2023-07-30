import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export const ModelCarrers = ({ id, name }) => {

    const navigate = useNavigate();

    return (
        <>
            <li onClick={() => navigate(`/publicacion/${id}`)} className="lih2">
                <Dropdown.Item href="#" className="nav-link text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                    &ensp;
                    {name}
                </Dropdown.Item>
            </li>
        </>
    );
};
