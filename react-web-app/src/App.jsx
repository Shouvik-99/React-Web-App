import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
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
