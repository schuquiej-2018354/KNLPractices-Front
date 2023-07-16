import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Outlet } from 'react-router-dom'
import { Footer } from './Components/Footer/Footer.jsx'
import { Navbar } from './Components/Navbar/Navbar.jsx'




export const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
