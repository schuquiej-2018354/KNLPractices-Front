import React from 'react'

export const Favorite = () => {
    return (
        <>
            <div className="row">
                <div className="col-8">
                    <input className='form-control' type="text" name="" id="inputFav" placeholder='Search' />
                </div>
                <div className="col">
                    <button className='btn btn-primary'>Click</button>
                </div>
            </div>
            <div className="card" style={{ height: '88vh' }}>
                <h2 className='text-center'>FAVORITES</h2>
            </div>
        </>
    )
}
