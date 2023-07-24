import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { ModelCarrers } from "../Model/ModelCarrers";

export const DropCarrers = () => {
    const [careers, setCareers] = useState([{}])

    const getCareers = async () => {
        try {
            const { data } = await axios('http://localhost:3200/career/get')
            setCareers(data.careers)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getCareers, [])
    return (
        <>
            <Dropdown className="bg2">
                <Dropdown.Toggle variant="link" id="dropdown-menu" className="text-white bg2" style={{ textDecoration: 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    Careers
                </Dropdown.Toggle>
                <Dropdown.Menu className="bg3">
                    {
                        careers.map(({ _id, name }, i) => {
                            return (
                                <div key={i}>
                                    <ModelCarrers
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
