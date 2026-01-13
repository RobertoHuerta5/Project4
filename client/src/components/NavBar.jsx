import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/">AutoIQ</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Button className="ms-auto" variant="outline-danger" size="sm" href="/login">Logout</Button>
        </Navbar.Collapse>
    </Navbar>
    )
}
