import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
export default function NotFound() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 d-flex align-items-center py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center">
              <h1 className="display-1 fw-bold mb-4">404</h1>
              <h2 className="mb-4">Página no encontrada</h2>
              <p className="lead mb-5">
                Lo sentimos, la página que estás buscando no existe o ha sido
                movida.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Button variant="dark" href="/" size="lg">
                  Volver al inicio
                </Button>
                
              </div>
            </Col>
          </Row>
        </Container>
      </main>
          <Footer />
    </div>
  );
}
