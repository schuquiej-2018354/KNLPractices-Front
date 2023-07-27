import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import { Navbar } from '../Components/Navbar/Navbar'
import { Favorite } from '../Components/Favorite/Favorite'
import Users from '../assets/img/Users.jpeg'
import Career from '../assets/img/career.jpg'
import Publication from '../assets/img/publication.jpg'
import Forum from '../assets/img/forum.jpg'
import { ModalAddCareer } from '../Components/Modal/ModalAddCareer'

export const AdminPage = () => {
    const navigate = useNavigate();
    const [showModalCareer, setShowModalCareer] = useState(false);

    const openModalCareer = () => {
        setShowModalCareer(true)
    }
    const closeModalCareer = () => {
        setShowModalCareer(false)
    }

    return (
        <>
            <Navbar />
            <div className="containerP">
                <div className="t i" style={{ width: '20%' }}>
                    <Sidebar />
                </div>
                <div className="overflow-auto scroll-invisible-container" style={{ maxHeight: 'calc(110vh - 100px)', width: '57%', marginRight: '1rem' }}>
                    <div className="container py-3">
                        <header>
                            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                                <h1 className="display-4 fw-normal text-white">Options Admin</h1>
                                <p className="fs-5 text-muted">Unique option of the Administrator. Where you can enter the crud of the storage you can edit, delete and add</p>
                            </div>
                        </header>

                        <div className="row row-cols-1 row-cols-md-2 mb-2 text-center">
                            <div className="col">
                                <div className="card mb-4 rounded-3 bx bg5 text-white">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">Users</h4>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <img src={Users} alt="Cellars Image" className='card-img' style={{ width: "20rem", height: "13rem" }} />
                                        </ul>
                                        <div className='row'>
                                            <div className='col'>
                                                <button type="button" className="w-100 btn btn-lg btn-outline-primary" /* onClick={handleOpenModal} */>Add</button>
                                            </div>
                                            <div className='col'>
                                                <button onClick={() => navigate('/profile/viewTypeRoom')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4 rounded-3 bx bg5 text-white">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">Publications</h4>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <img src={Publication} alt="Accounts Image" className="card-img" style={{ width: "20rem", height: "13rem" }} />
                                        </ul>
                                        <button onClick={() => navigate('/profile/viewRooms')} type="button" className="w-100 btn btn-lg btn-outline-success" >View</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mb-4 rounded-3 bx bg5 text-white">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">Careers</h4>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <img src={Career} alt="Clients Image" className="card-img" style={{ width: "20rem", height: "13rem" }} />
                                        </ul>
                                        <div className="row">
                                            <div className="col">
                                                <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={openModalCareer}>Add</button>
                                            </div>
                                            <div className="col">
                                                <button onClick={() => navigate('/careers')} type="button" className="w-100 btn btn-lg btn-outline-success" >View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4 rounded-3 bx bg5 text-white">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">Forum</h4>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <img src={Forum} alt="Cellars Image" className='card-img' style={{ width: "20rem", height: "13rem" }} />
                                        </ul>
                                        <button onClick={() => navigate('/profile/viewEventType')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="t i" style={{ width: '20%', marginLeft: '1rem' }}>
                    <Favorite />
                </div>
            </div>
            <ModalAddCareer isOpen={showModalCareer} onClose={closeModalCareer} />
        </>
    )
}
