import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import { Outlet } from "react-router-dom"
import Footer from './components/Footer'
import { useAuth0 } from "@auth0/auth0-react";
import Login from './components/Login';
import Swal from 'sweetalert2';

function App() {
  const { user, logout } = useAuth0()
  if ((user && !user.email_verified)) {
    Swal.fire({
      icon: "info",
      title: "Oops..... Invalid credential",
      text: "Foodies tried to login with invalid credential"
  }).then(res => logout())
    return <Login />
  }
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
