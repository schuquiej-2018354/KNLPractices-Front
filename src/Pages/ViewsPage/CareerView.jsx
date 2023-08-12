import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Favorite } from '../../Components/Favorite/Favorite'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import axios from 'axios'
import { ModelTableCareer } from '../../Components/Model/ModelTableCareer'
import Swal from 'sweetalert2'
import { ModalPutCareer } from '../../Components/Modal/ModalUpdate/ModalPutCareer'
import { useNavigate } from 'react-router-dom'

export const CareerView = () => {
    const navigate = useNavigate();
    const [careers, setCareers] = useState([{}]);
    const [datos, setDatos] = useState({});
    const [showPutCareer, setShowPutCareer] = useState(false)
    const [tableCareers, setTableCareers] = useState([{}])
    const [search, setSearch] = useState('')

    const getCareers = async () => {
        try {
            const { data } = await axios('http://localhost:3200/career/get')
            setCareers(data.careers)
            setTableCareers(data.careers)
        } catch (e) {
            console.log(e);
        }
    }

    const deleteCareer = async (id) => {
        try {
            Swal.fire({
                title: 'Do you want to delete this Career?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.delete(`http://localhost:3200/career/delete/${id}`);
                    getCareers();
                    Swal.fire({
                        position: 'bottom-start',
                        text: data.message,
                        width: '20rem',
                        showConfirmButton: false
                    })
                }
            });

        } catch (e) {
            console.log(e);
        }
    }

    const updateData = async () => {
        try {
            getCareers();
        } catch (e) {
            console.log(e);
        }
    }

    const openModalCareer = (id, name) => {
        let datosCareer = {
            id: id,
            name: name
        }
        setDatos(datosCareer);
        setShowPutCareer(true)
    }

    const closeModalCareer = () => {
        setShowPutCareer(false)
    }

    const handleSearh = (e) => {
        setSearch(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (searchTerm) => {
        var resultSearch = tableCareers.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(searchTerm.toLowerCase()))
                return elemento
        })
        setCareers(resultSearch)
    }

    useEffect(() => getCareers, [])

    return (
        <>
            <Navbar />
            <div className="containerP">
                <div className="i" style={{ width: '20%' }}>
                    <Sidebar />
                </div>
                <div className="t overflow-auto scroll-invisible-container" style={{ maxHeight: 'calc(110vh - 100px)', width: '75%', marginRight: '1rem' }}>
                    <button className='btn btn-danger' onClick={() => navigate('/admin')} style={{ marginLeft: '1rem' }}>Exit</button>
                    <nav className='navbar navbar-expand-lg '>
                        <div className='container-fluid'>
                            <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
                                <h1 className='text-white tx1' style={{ fontSize: '2.5rem' }}>VIEW CAREERS</h1>
                            </div>
                        </div>
                    </nav>
                    <center>
                        <div className="col-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text bg6" style={{ backgroundColor: '#5D6D7E' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ fill: 'white' }}>
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </span>
                                <input
                                    className="form-control ip2"
                                    type="text"
                                    name=""
                                    id="inputFav"
                                    placeholder="Search Career"
                                    value={search}
                                    onChange={handleSearh}
                                />
                            </div>
                        </div>
                    </center>
                    <section className=''>
                        <div className='row justify-content-center'>
                            <div className='col-8'>
                                <div className='card bg1 bx'>
                                    <div className='card-body p-0'>
                                        <div className='table-responsive table-scroll' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '25rem' }}>
                                            <table className='table text-white'>
                                                <thead className='' style={{ backgroundColor: '#333' }}>
                                                    <tr>
                                                        <th scope='col' className='text-white'>Name</th>
                                                        <th scope='col' className='text-white'>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        careers.map(({ _id, name }, i) => {
                                                            return (
                                                                <tr key={i} className='text-white'>
                                                                    <ModelTableCareer
                                                                        name={name}
                                                                    ></ModelTableCareer>
                                                                    <td className='text-center align-middle'>
                                                                        <div className='btn-group align-top'>
                                                                            <div className='btn btn-sm btn-primary btn-outline-secondary badge'>
                                                                                <button onClick={() => openModalCareer(_id, name)} className='btn badge' type='button' data-toggle='modal' data-target='#user-form-modal'>
                                                                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi2 bi-pencil-square' viewBox='0 0 16 16'>
                                                                                        <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                                                                                        <path fillRule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />
                                                                                    </svg>
                                                                                </button>
                                                                            </div>
                                                                            <div className='btn btn-sm btn-danger btn-outline-secondary badge'>
                                                                                <button onClick={() => deleteCareer(_id)} className='btn badge' type='button' data-toggle='modal' data-target='#user-form-modal'>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                                                    </svg>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </div>
            </div>
            <ModalPutCareer isOpen={showPutCareer} onClose={closeModalCareer} datos={datos} update={updateData} />
        </>
    )
}
