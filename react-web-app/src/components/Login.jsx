import React from 'react'
import "../../public/css/Login.css"
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';
import "sweetalert2/src/sweetalert2.scss"
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
}
    from 'mdb-react-ui-kit';
import { IoFastFood } from "react-icons/io5";

function Login() {
    const { loginWithRedirect } = useAuth0();
    Swal.fire({
      title: "Welcome",
      text: "You are just outside of foodies hub",
      imageUrl: "https://img.freepik.com/premium-vector/cute-chef-girl-uniform-character-welcome-food-restaurant-logo-cartoon-art-illustration_56104-1607.jpg",
      timer: 5000
    })
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol sm='6'>
                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                    <IoFastFood size={250} className="mb-5"/>
                        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>🍔Foodies Farm🍔</h3>
                        <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={() => loginWithRedirect()} >Login</MDBBtn>
                        <p className='ms-5'>Don't have an account? <a href="#!" className="link-info" onClick={() => loginWithRedirect()}>Register here</a></p>
                    </div>
                </MDBCol>
                <MDBCol sm='6' className='d-none d-sm-block px-0'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                        alt="Login image" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )

}

export default Login