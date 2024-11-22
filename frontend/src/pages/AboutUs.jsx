import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import { FaFingerprint } from "react-icons/fa";
import { FaDove } from "react-icons/fa";
import { FaHatCowboy } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <WhatsAppButton />

      <main className="flex-grow-1 ">
        {/* ¿Quiénes somos?*/}
        <section className="py-5 bg-light ">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="mb-4 mb-lg-0">
                <h1 className="display-4 text-center  fw-bold mb-3">
                  ¿Quiénes somos?
                </h1>
                <p className="lead mb-4">
                  DON'T U WORRY, somos una comunidad que celebra la libertad de
                  vivir sin preocupaciones. Desde acá valoramos la autenticidad
                  y disfrutamos cada momento sin preocuparnos por lo que tenga
                  que decir el mundo
                </p>
              </Col>
              {/* <Col lg={6}>
                <img
                  src="/img/.jpg"
                  alt="Equipo Don't u worry"
                  className="img-fluid rounded"
                />
              </Col> */}
            </Row>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="text-center mb-5">¿Por qué?</h2>
            <Row>
              <Col lg={8} className="mx-auto">
                <p>
                  Necesitamos más personas que se animen a ser ellas mismas.
                  Don't U Worry es un estilo de vida. Nuestra misión es
                  ofrecerles piezas que simbolicen esa libertad, creando un
                  movimiento que celebre vivir sin preocupaciones
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
                  title: "autenticidad",
                  description:
                    "Valoramos la libertad de ser uno mismo y celebramos la autenticidad de cada persona, sin importar lo que el mundo piense.",
                  icon: <FaFingerprint />,
                },
                {
                  title: "Libertad",
                  description:
                    "Creemos en la importancia de vivir sin preocupaciones, disfrutando de la vida sin las ataduras de las expectativas ajenas.",
                  icon: <FaDove />,
                },
                {
                  title: "Estilo personal",
                  description:
                    "Fomentamos que cada individuo exprese su personalidad a través de lo que lleva, con piezas que simbolizan su verdadera esencia..",
                  icon: <FaHatCowboy />,
                },
              ].map((value, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="text-center">
                      <div className="mb-3 fs-3">{value.icon}</div>
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
