import React from 'react'
import { Dropdown } from 'react-bootstrap'

export const ModelCarrers = ({name}) => {
    return (
        <>
            <li className="lih">
                <Dropdown.Item href="#" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table" /></svg>
                    {name}
                </Dropdown.Item>
            </li>
        </>
    )
}
