import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <WhatsAppButton/>

      <main>
        <section className="py-5 text-center bg-dark text-white">
          <Container>
            <h1 className="display-4 fw-bold mb-3">Eleva tu Estilo</h1>
            <p className="lead mb-4">
              Descubre nuestra colección exclusiva de collares para el hombre
              moderno
            </p>
            <Link
              to="/products"
              className="btn btn-lg btn-outline-light bg-black text-white border-dark"
            >
              Ver Colección
            </Link>
          </Container>
        </section>

        <section className="py-5" id="featured">
          <Container>
            <h2 className="text-center mb-5">Destacados</h2>
            <Row>
              {[1, 2, 3, 4].map((item) => (
                <Col key={item} md={6} lg={3} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={`/placeholder.svg?text=Collar+${item}`}
                    />
                    <Card.Body>
                      <Card.Title>Collar Moderno {item}</Card.Title>
                      <Card.Text className="text-muted">$99.99</Card.Text>
                      <Button variant="outline-dark" className="w-100">
                        Ver Detalles
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-light" id="about">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0">
                <img
                  src="/placeholder.svg?text=About+Us"
                  alt="About Us"
                  className="img-fluid rounded"
                />
              </Col>
              <Col md={6}>
                <h2 className="mb-4">Nuestra Historia</h2>
                <p className="lead">
                  En Dont't Worry, creemos que los accesorios son más que
                  simples complementos. Son una extensión de tu personalidad y
                  estilo.
                </p>
                <p>
                  Fundada en 2024, nuestra marca se dedica a crear collares
                  únicos que combinan diseño moderno con artesanía tradicional.
                  Cada pieza está diseñada para el hombre que aprecia la calidad
                  y la distinción.
                </p>
                <Button variant="dark">Conoce Más</Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5" id="collection">
          <Container>
            <h2 className="text-center mb-5">Nuestra Colección</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="border-0 text-white">
                  <Card.Img
                    src="/placeholder.svg?text=Minimalista"
                    alt="Colección Minimalista"
                  />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <Card.Title className="h3">Minimalista</Card.Title>
                    <Button variant="outline-light">Explorar</Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="border-0 text-white">
                  <Card.Img
                    src="/placeholder.svg?text=Urbano"
                    alt="Colección Urbana"
                  />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <Card.Title className="h3">Urbano</Card.Title>
                    <Button variant="outline-light">Explorar</Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="border-0 text-white">
                  <Card.Img
                    src="/placeholder.svg?text=Elegante"
                    alt="Colección Elegante"
                  />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <Card.Title className="h3">Elegante</Card.Title>
                    <Button variant="outline-light">Explorar</Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-dark text-white" id="newsletter">
          <Container className="text-center">
            <h2 className="mb-4">Únete a Nuestra Lista VIP</h2>
            <p className="lead mb-4">
              Sé el primero en conocer nuestras nuevas colecciones y ofertas
              exclusivas
            </p>
            <Row className="justify-content-center">
              <Col md={6}>
                <form className="d-flex">
                  <input
                    type="email"
                    className="form-control me-2"
                    placeholder="Tu correo electrónico"
                    aria-label="Email"
                  />
                  <Button variant="outline-light" type="submit">
                    Suscribirse
                  </Button>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
