import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <BootstrapNavbar bg="light" expand="lg" className="border-bottom">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold">
          Dont't Worry
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#collection">Colección</Nav.Link>
            <Nav.Link href="#about">Nosotros</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default NavigationBar;
