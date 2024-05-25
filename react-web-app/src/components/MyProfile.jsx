import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage
} from 'mdb-react-ui-kit';
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';
import Loader from './Loader';
import '../../public/css/Swal.css' 

export default function MyProfileComponent() {
    const { user, logout, isAuthenticated, isLoading } = useAuth0()
    const AUTH0_KEY = 'auth0';
    const domain = import.meta.env.VITE_REACT_WEB_APP_DOMAIN;
    const clientId = import.meta.env.VITE_REACT_WEB_APP_CLIENT_ID;
    const handleOnclick = () => {
        if (user.sub.includes(AUTH0_KEY)) {
            Swal.fire({
                title: 'Are you sure, you want to change the login password',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: 'No',
                customClass: {
                  actions: 'my-actions',
                  cancelButton: 'order-1 right-gap',
                  confirmButton: 'order-2',
                  denyButton: 'order-3',
                },
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://${domain}/dbconnections/change_password`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json", "Accept": "application/json" },
                        body: JSON.stringify({
                            client_id: `${clientId}`,
                            email: `${user.email}`,
                            connection: 'Username-Password-Authentication',
                        })
                    }).then((res) => Swal.fire({
                        icon: "success",
                        title: "Password reset email sent",
                        text: "We have fired a passowrd reset mail to you inbox, please login with new credential"
                    })).then(res => logout())
                } else if (result.isDenied) {
                  Swal.fire('Sorry password update declined', '', 'info')
                }
              })
        } else {
            Swal.fire({
                icon: "info",
                title: "Forbidden....",
                text: "Can't change password for social media Logged in users"
            })
        }
    }
    if (isLoading && !isAuthenticated) {
        return (<Loader/>)
    }
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src={user.picture}
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p style={{ fontFamily: "gwen", fontWeight: 'bold' }}>Hello Foodie {user.sub.includes(AUTH0_KEY) ? user.nickname : user.name}</p>
                                <p className="text-muted mb-4" style={{ fontFamily: "cursive" }}>Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-primary" onClick={handleOnclick}>🔐Update Passkey🔐</button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody className='text-center'>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText style={{ fontFamily: "gwen", fontWeight: 'bold' }}>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted" style={{ fontFamily: "cursive" }}>{user.sub.includes(AUTH0_KEY) ? user.nickname : user.name}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText style={{ fontFamily: "gwen", fontWeight: 'bold' }}>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted" style={{ fontFamily: "cursive" }}>{user.email}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText style={{ fontFamily: "gwen", fontWeight: 'bold' }}>Contact</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted" style={{ fontFamily: "inherit" }}>(097) 234-5678</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText style={{ fontFamily: "gwen", fontWeight: 'bold' }}>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted" style={{ fontFamily: "cursive" }}>Bay Area, San Francisco, CA</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <button type="button" className="btn btn-success" style={{ marginTop: 45 }}>Edit Profile</button>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}