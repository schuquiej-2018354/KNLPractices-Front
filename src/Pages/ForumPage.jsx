import React from 'react'
import { Favorite } from '../Components/Favorite/Favorite'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import { Navbar } from '../Components/Navbar/Navbar'

export const ForumPage = () => {
    return (
        <>
            <Navbar />
            <div className='row'>
                <div className='col col-2' style={{ width: '20%' }}>
                    <Sidebar />
                </div>
                <div className='col col-7 overflow-auto scroll-invisible-container' style={{ marginRight: '10px', marginLeft: '10px', maxHeight: 'calc(110vh - 100px)', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#e4e3eb' }}>
                    <button className='btn bg1 col-12'>ADD QUESTION</button>
                    <div className='card bx bg5' style={{ marginBottom: '10px', marginTop: '10px' }}>
                        <div className='row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative'>
                            <div className='col p-4 d-flex flex-column position-static text-white'>
                                <div className='row'>
                                    <div className='col'>
                                        <strong className='d-inline-block mb-2 text-primary'>User</strong>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-1 text-muted text-end' style={{ marginRight: '1rem' }}>
                                            time
                                        </div>
                                    </div>
                                </div>
                                <h3 className='mb-0'>Question</h3>
                                <hr />
                                <p className='card-text mb-auto' style={{ marginTop: '2%', marginBottom: '2%' }}>
                                    Description
                                </p>
                                <button className='btn btn-info col-1'>See</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col t'>
                    <Favorite />
                </div>
            </div >
        </>
    )
}
