import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/products`
        );
        if (!response.ok) {
          throw new Error("Errorr al obtener los productos");
        }
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) {
    return (
      <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <WhatsAppButton />

      <main>
        <section className="py-5 text-center bg-black text-white position-relative">
          <div className="free-shipping-carousel">
            <div className="text-wrapper">
              <span>- Envío Gratis -</span>
              <span>- Envío Gratis -</span>
              <span>- Envío Gratis -</span>
              <span>- Envío Gratis -</span>
              <span>- Prueba deployment -</span>
              <span>- Envío Gratis -</span>
              <span>- Envío Gratis -</span>
              <span>- Envío Gratis -</span>
              <span>- Envío Gratis -</span>
              <span>- Envío Gratis -</span>
            </div>
          </div>

          <Navbar />
          <Container>
            <h1 className="display-4 fw-bold mb-3 mt-5">Elevá tu Estilo</h1>
            <p className="lead mb-4">
              Descubre nuestra colección exclusiva de collares para el hombre
              moderno
            </p>
            <Link
              to="/products"
              className="btn btn-lg btn-outline-light bg-dark text-white border-dark"
            >
              Ver Colección
            </Link>
          </Container>
        </section>

        {/* DESTACADOS */}
        <section className="py-5" id="featured">
          <Container>
            <h2 className="text-center mb-5">Destacados</h2>
            <Row>
              {loading
                ? "Cargando..."
                : products.map((product) => (
                    <Col key={product.id} md={6} lg={4} className="mb-4">
                      <Card className="h-100 border-0 shadow-sm medium-card">
                        <Card.Img
                          variant="top"
                          src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
                        />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text className="text-muted">
                            ${product.price}
                          </Card.Text>
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

        {/* Nuestra Historia */}
        <section className="py-5 bg-light" id="about">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0 aboutUs-col">
                <img
                  src="/img/efimero.jpg"
                  alt="About Us"
                  className="aboutUs-img"
                />
              </Col>
              <Col md={6} className="aboutUs-text">
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

                <Link
                  to="/about"
                  className="btn btn-outline-light bg-dark text-white border-dark"
                >
                  Ver Más
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Nuestra Colección */}
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

        {/* Lista VIP */}
        <section className="py-5 bg-black text-white" id="newsletter">
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
