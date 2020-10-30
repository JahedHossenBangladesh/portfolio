import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Headers = () => {
    return (
        <Navbar  className="navbar-right">
        <Navbar.Brand  className='notHover'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"className="navbar-right ml-5" >
          <Nav className="ml-auto " >
        <Link path="/home" className="notHover"><Nav.Link className="ml-5  effect">Home</Nav.Link></Link>    
        <Link path="" className="notHover"> <Nav.Link className=" ml-5 effect">Project</Nav.Link></Link>
        <Link path="" className="notHover"><Nav.Link className="ml-5 effect">Blog</Nav.Link></Link>
        <Link path="" className="notHover" ><Nav.Link  className="ml-5  effect">Cv</Nav.Link></Link>
        <Link path="" className="notHover"><Nav.Link  className=" ml-5 effect">About me</Nav.Link></Link>
         <Link path="" className="notHover"><Nav.Link  className=" ml-5 effect">Contact me</Nav.Link></Link>
         </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
};

export default Headers;