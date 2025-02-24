import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import FeaturedCarousel from "../components/FeaturedCarousel";
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
          throw new Error("Error al obtener los productos");
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
        <Navbar />
        <section className="hero-section">
          <Container>
            <div className="hero-content">
              <h1 className="fw-bold mb-3 tracking-widest">Elevá tu Estilo</h1>
              <p className="lead tracking-widest">
                Descubre nuestra colección exclusiva de collares para el hombre
                moderno
              </p>
              <Link
                to="/products"
                className="btn btn-sm btn-outline-light bg-dark text-white border-dark tracking-widest"
              >
                Ver Colección
              </Link>
            </div>
          </Container>
        </section>

        {/* DESTACADOS */}
        <div className="bg-black-400">
          <FeaturedCarousel
            products={products} // Pasar los productos como
          />
        </div>

        {/* Nuestra Historia */}
        <section className="py-5 " id="about">
          <Container>
            <div className="border-dashed border-2 border-black p-4">
              <Row className="align-items-center p-3">
                <Col md={6} className="mb-4 mb-md-0 aboutUs-col">
                  <img
                    src="/img/efimero.jpg"
                    alt="About Us"
                    className="aboutUs-img"
                  />
                </Col>
                <Col md={6} className="aboutUs-text ">
                  <h2 className="mb-4">Nuestra Historia</h2>
                  <p className="">
                    En Dont't Worry, creemos que los accesorios son más que
                    simples complementos. Son una extensión de tu personalidad y
                    estilo.
                  </p>
                  <p className="hidden sm:block">
                    Fundada en 2024, nuestra marca se dedica a crear collares
                    únicos que combinan diseño moderno con artesanía
                    tradicional. Cada pieza está diseñada para el hombre que
                    aprecia la calidad y la distinción.
                  </p>

                  <Link
                    to="/about"
                    className="btn btn-outline-light bg-dark text-white border-dark"
                  >
                    Ver Más
                  </Link>
                </Col>
              </Row>
            </div>
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
