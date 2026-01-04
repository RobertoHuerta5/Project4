import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/">AutoIQ</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}
