import React from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Footer } from './Components/Footer/Footer.jsx'
import './Components/CSS/style.css'
import { Sidebar } from './Components/Sidebar/Sidebar.jsx'

export const App = () => {
  return (
    <>
    <Sidebar />
    <Outlet />
    <Footer />
    </>
  )
}
