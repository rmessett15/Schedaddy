import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import React from 'react';
import { useState } from 'react'; 


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  // setLoggedIn((jwt) => !jwt);

  const handleMouseEnter = e => {
    e.target.style.background = "grey"
    e.target.style.color = "white"
    e.target.style.borderRadius = "15px"
  }
  const handleMouseLeave = e => {
    e.target.style.background = "inherit"
    e.target.style.color = "inherit"
  }

  return (
    <Navbar className="bg-body-tertiary">
    <Container fluid className='px-4'>
      <Navbar.Brand href="#home">BrandName</Navbar.Brand> 
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
          <Nav.Link href="/schedule" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Schedule+Positions</Nav.Link>
          {/* <Nav.Link href="/schedule">My Schedule</Nav.Link> */}
          <Nav.Link href="/employees" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Employees</Nav.Link>
          {/* If [isAdmin] show, otherwise don't */}
          <Nav.Link href="/account" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Account</Nav.Link>

        </Nav>
        <Nav.Link href="/login">{loggedIn ? 'Login' : 'Logout'}</Nav.Link>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

//   isAdmin ? adminView() : userView();


