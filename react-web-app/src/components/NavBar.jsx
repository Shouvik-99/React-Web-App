import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {/* Render custom icon here */}
          <MdAccountCircle className="m-2" size={25} style={{ color: '#000000' }}/>
        </a>
      ));
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container-fluid">
                <Link to="/">
                    <IoHome size={25} style={{ color: '#000000' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> button
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    {/* <MdAccountCircle className="m-2" size={25} /> */}
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">⌮ My Profile ⌮</Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-2"></Dropdown.Item> */}
                            <Dropdown.Item as={Link} to="/login">👀 Log out 👀</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <FaCartShopping className="m-2" size={25}/>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar