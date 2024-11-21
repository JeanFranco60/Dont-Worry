import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="text-center text-md-start">
          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-3">Sobre Nosotros</h5>
            <p className="small">
              Creamos collares únicos para el hombre moderno y sofisticado.
            </p>
          </Col>
          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-dark text-decoration-none">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark text-decoration-none">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark text-decoration-none">
                  Contacto
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-3">Contacto</h5>
            <p className="small mb-0">Email: info@dontworry.com</p>
            <p className="small">Teléfono: (+598) 99-789-800</p>
          </Col>
          <Col xs={12} md={3}>
            <h5 className="text-uppercase fw-bold mb-3">Síguenos</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-dark" aria-label="Facebook">
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com/dontuworry222/"
                className="text-dark"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-dark" aria-label="TikTok">
                <FaTiktok size={24} />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center small mb-0">
          © 2024{" "}
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Don't U Worry
          </Link>
          . Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
