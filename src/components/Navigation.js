//https://medium.com/swlh/responsive-navbar-using-react-bootstrap-5e0e0bd33bd6
import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => (
    <>
    <Navbar collapseOnSelect fixed='top' expand='sm' big='dark' variang='dark'>
        <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='response-navbar-nav'>
                <Nav>
                    <Nav.link href='/'>About</Nav.link>
                    <Nav.link href='/projects'>Projects</Nav.link>
                    <Nav.link href='/skills'>Skills</Nav.link>
                    <Nav.link href='/contact'>Contact</Nav.link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
)

export default Navigation()
