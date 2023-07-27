import React from 'react'

export const ModelForum = ({ user, question, description, time }) => {
    return (
        <>
            <div className='card bx bg5' style={{ marginTop: '10px' }}>
                <div className='row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative'>
                    <div className='col p-4 d-flex flex-column position-static text-white'>
                        <div className='row'>
                            <div className='col'>
                                <strong className='d-inline-block mb-2 text-primary'>{user}</strong>
                            </div>
                            <div className='col'>
                                <div className='mb-1 text-muted text-end' style={{ marginRight: '1rem' }}>
                                    {time}
                                </div>
                            </div>
                        </div>
                        <h3 className='mb-0'>{question}</h3>
                        <hr />
                        <p className='card-text mb-auto' style={{ marginTop: '2%', marginBottom: '2%' }}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
