import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import {Outlet} from "react-router-dom"
import Footer from './components/Footer'
import { useAuth0 } from "@auth0/auth0-react";
import Login from './components/Login';

function App() {
  const { isAuthenticated } = useAuth0()
  if (!isAuthenticated) {
    return <Login/>
  }
  return (
    <>  
    <NavBar/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
