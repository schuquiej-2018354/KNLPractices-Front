import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Favorite } from '../../Components/Favorite/Favorite'
import { Sidebar } from '../../Components/Sidebar/Sidebar'

export const CareerView = () => {
    return (
        <>
            <Navbar />
            <div className="containerP">
                <div className="t i" style={{ width: '20%' }}>
                    <Sidebar />
                </div>
                <div className="overflow-auto scroll-invisible-container" style={{ maxHeight: 'calc(110vh - 100px)', width: '57%', marginRight: '1rem' }}>
                    <section className='intro'>
                        {/* <div className='bg-image h-100' style={{ backgroundColor: '#f5f7fa', marginTop: '1.5rem' }}> */}
                            <div /* className='mask d-flex align-items-center h-100' */>
                                <div /* className='container' */>
                                    <div className='row justify-content-center'>
                                        <div className='col-10'>
                                            <div className='card box-shadow'>
                                                <div className='card-body p-0'>
                                                    <div className='table-responsive table-scroll' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '700px' }}>
                                                        <table className='table table-striped '>
                                                            <thead style={{ backgroundColor: '#8c7c62' }}>
                                                                <tr>
                                                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Name</th>
                                                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>hola</td>
                                                                    <td>hola</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>hola</td>
                                                                    <td>hola</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>hola</td>
                                                                    <td>hola</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </section >
                </div>
                <div className="t i" style={{ width: '20%', marginLeft: '1rem' }}>
                    <Favorite />
                </div>
            </div>
        </>
    )
}
