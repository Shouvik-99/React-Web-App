import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth0 } from "@auth0/auth0-react";
import { RiAdminFill } from "react-icons/ri";
import "../../public/css/CountBag.css";
import { useSelector } from "react-redux";

function NavBar() {
  const { countItems } = useSelector((store) => store.totalSelectedItemsCount);
//   console.log(countItems);
    const { logout } = useAuth0();
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
        >
            {children}
          {/* Render custom icon here */}
          {/* <MdAccountCircle className="m-2" size={25} style={{ color: '#000000' }}/> */}
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
                        <RiAdminFill className="m-2" size={25} style={{ color: '#000000' }}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/form">Add item</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/all-items">Update item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        <MdAccountCircle className="m-2" size={25} style={{ color: '#000000' }}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="my-profile">⌮ My Profile ⌮</Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-2"></Dropdown.Item> */}
                            <Dropdown.Item onClick={() => logout()}>👀 Log out 👀</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
          <i className="badge" value={countItems}>
            <FaCartShopping
              className="m-2"
              style={{ color: "black" }}
              size={25}
            />
          </i>
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