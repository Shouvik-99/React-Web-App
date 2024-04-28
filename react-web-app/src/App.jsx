import { useState } from 'react'
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import Body from './components/Body'
import {Outlet} from "react-router-dom"
import Footer from './components/Footer'

function App() {

  return (
    <>  
    <NavBar/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
