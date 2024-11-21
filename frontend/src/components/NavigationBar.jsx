import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <BootstrapNavbar bg="white" expand="lg" className="border-bottom">
      <Container>
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-2 text-uppercase"
        >
          Don't U Worry
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={Link} to="/" className="text-dark">
              INICIO
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="text-dark ">
              PRODUCTOS
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-dark">
              SOBRE NOSOTROS
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default NavigationBar;
