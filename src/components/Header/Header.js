import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './../../images/icon.png'
import './Header.css'
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, singOut } = useAuth();
    const { displayName, email } = user;

    return (

        <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand className="flex items-center text-6xl font-extrabold"><img className="w-16 me-3" src={logo} alt="" /><h3>Cardio Care</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto hstyle">
                        <NavLink to="/home"><span className="text-2xl font-bold mr-4">Home</span></NavLink>
                        <NavLink to="/about"><span className="text-2xl font-bold mr-4">About Us</span></NavLink>
                        <NavLink to="/services"><span className="text-2xl font-bold mr-4">Services</span></NavLink>
                        <NavLink to="gallary"><span className="text-2xl font-bold mr-4">Gallary</span></NavLink>
                        <NavLink to="/contract"><span className="text-2xl font-bold mr-4">Contract</span></NavLink>
                        {!email ? <> <NavLink to="/login"><span className="text-2xl font-bold mr-4">Log In</span></NavLink>
                            <NavLink to="/singup"><span className="text-2xl font-bold mr-4">Sing Up</span></NavLink></> :
                            <>  <p className="pt-2">{displayName}</p>
                                <button onClick={singOut} className="btn btn-primary">Sing out</button>
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;