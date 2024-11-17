import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function SobreNosotros() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <section className="py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <h1 className="display-4 fw-bold mb-3">Sobre Nosotros</h1>
                <p className="lead mb-4">
                  Descubre la historia detrás de DON'T WORRY, tu destino para collares
                  masculinos de alta calidad y diseño único.
                </p>
              </Col>
              <Col lg={6}>
                <img
                  src="/placeholder.svg"
                  alt="Equipo NEXUS"
                  className="img-fluid rounded"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="text-center mb-5">Nuestra Historia</h2>
            <Row>
              <Col lg={8} className="mx-auto">
                <p>
                  Fundada en 2020, NEXUS nació de la pasión por la joyería
                  masculina y el deseo de ofrecer piezas únicas que reflejen la
                  personalidad y el estilo de cada hombre. Nuestro viaje comenzó
                  en un pequeño taller en el corazón de la ciudad, donde cada
                  collar era cuidadosamente elaborado a mano.
                </p>
                <p>
                  Con el tiempo, nuestra dedicación a la calidad y el diseño
                  innovador nos ha permitido crecer y convertirnos en un
                  referente en el mundo de los accesorios masculinos. Hoy, NEXUS
                  es sinónimo de elegancia, originalidad y artesanía
                  excepcional.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-5">Nuestro Equipo</h2>
            <Row>
              {[
                {
                  name: "Carlos Rodríguez",
                  role: "Fundador y Diseñador Principal",
                },
                { name: "Ana Martínez", role: "Directora Creativa" },
                { name: "Luis Morales", role: "Jefe de Producción" },
              ].map((member, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={`/placeholder.svg?text=${member.name}`}
                    />
                    <Card.Body className="text-center">
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Text className="text-muted">
                        {member.role}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="text-center mb-5">Nuestros Valores</h2>
            <Row>
              {[
                {
                  title: "Calidad",
                  description:
                    "Utilizamos solo los mejores materiales y técnicas artesanales.",
                },
                {
                  title: "Innovación",
                  description:
                    "Constantemente buscamos nuevas formas de expresión en nuestros diseños.",
                },
                {
                  title: "Sostenibilidad",
                  description:
                    "Nos comprometemos con prácticas responsables y materiales éticos.",
                },
              ].map((value, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="text-center">
                      <div className="mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          fill="currentColor"
                          className="bi bi-star"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </div>
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text>{value.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
