import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './Components/CSS/style.css'
import user from './assets/img/User.png'

export const App = () => {
  return (
    document.body.style = "background-color: #1d2440",
    <>
      <div className='content'>
        <div class="card">
          <div class="card-header">
            <div class="card-avatar">
              <img src={user} alt='User' />
            </div>
          </div>
          <div class="card-info">
            <h2>USERNAME</h2>
            <br />
            <div className='flex-parent jc-center'>
              <button type='submit' className='button1'>Delete picture</button>
              <button type='submit' className='buttonMedio'>Upload photo</button>
            </div>
            <div>
              <br />
              <form action=""></form>
              <div>
                <span className='Label'><b>Name:</b></span>
                <span ><b>Surname:</b></span>
              </div>
              <div className='row'>
                <div className='col'>
                  <input type="text" required/>
                </div>
                <div className='col'>
                  <input type="text" required/>
                </div>
              </div>
              <br />
              <label htmlFor="Name"><b>Career:</b></label>
              <br />
              <input type="text" required/>
              <br />
              <br />
              <label htmlFor="Name"><b>Email:</b></label>
              <br />
              <input type="email" required/>
              <br />
              <br />
              <label htmlFor="Name"><b>Phone:</b></label>
              <br />
              <input type="number" required/>
              <br />
              <br />
              <label htmlFor="Name"><b>Password:</b></label>
              <br />
              <input type="password" required/>
            </div>
            <br />
            <div className='flex-parent jc-center'>
              <button onClick={() => window.location.reload(false)} type='submit' className='btn btn-danger button2'>Exit</button>
              <button onClick={() => window.location.reload(false)} type='submit' className='btn btn-primary button3'>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
