import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <BootstrapNavbar
      bg="black"
      expand="lg"
      className="text-center border-bottom"
    >
      <Container>
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-2 text-uppercase text-white"
        >
          Don't U Worry
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end "
        >
          <Nav>
            <Nav.Link
              as={Link}
              to="/"
              className="text-white  hover:underline transition duration-300 ease-in-out"
            >
              INICIO
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              className="text-white  hover:underline transition duration-300 ease-in-out"
            >
              PRODUCTOS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="text-white  hover:underline transition duration-300 ease-in-out"
            >
              SOBRE NOSOTROS
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default NavigationBar;
