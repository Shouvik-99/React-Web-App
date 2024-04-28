import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaGoogle, FaInstagram, FaGithub } from "react-icons/fa";
import { PiFlowerLotusBold } from "react-icons/pi";
import { GiJusticeStar } from "react-icons/gi";

function Footer() {
  return ( 
<div className="container my-5" style={{maxWidth: '100%'}}>
<footer className="text-center text-white" style={{backgroundColor: '#3f51b5'}}>
<div className="container">
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">About us</a>
            </h6>
          </div>
          

          
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Products</a>
            </h6>
          </div>
          

          
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Awards</a>
            </h6>
          </div>
          

          
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Help</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Contact</a>
            </h6>
          </div>
        </div>
      </section>
      <hr className="my-5" />

      
      <section className="mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
            Indulging in flavors that make life delicious.
            </p>
          </div>
        </div>
      </section>
      

      
      <section className="text-center mb-5">
        <a href="" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
          <FaFacebook />
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-twitter"></i>
          <FaTwitter />
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-google"></i>
          <FaGoogle />
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-instagram"></i>
          <FaInstagram />
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
          <FaLinkedinIn />
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-github"></i>
          <FaGithub />
        </a>
      </section>
    </div>
    

    
    <div
         className="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/"
         >spgdfooditems.com</a
        >
    </div>
    
  </footer>
</div>
  )
}

export default Footer