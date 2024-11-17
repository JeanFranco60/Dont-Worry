import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Offcanvas,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/NavigationBar";

const productsData = [
  {
    id: 1,
    name: "Collar de Cuero Trenzado",
    price: 79.99,
    category: "cuero",
    material: "cuero",
  },
  {
    id: 2,
    name: "Cadena de Plata Fina",
    price: 129.99,
    category: "metal",
    material: "plata",
  },
  {
    id: 3,
    name: "Colgante de Ónix Negro",
    price: 89.99,
    category: "piedra",
    material: "ónix",
  },
  {
    id: 4,
    name: "Collar de Acero Inoxidable",
    price: 69.99,
    category: "metal",
    material: "acero",
  },
  {
    id: 5,
    name: "Gargantilla de Cuero",
    price: 59.99,
    category: "cuero",
    material: "cuero",
  },
  {
    id: 6,
    name: "Collar con Dije de Madera",
    price: 49.99,
    category: "madera",
    material: "madera",
  },
  {
    id: 7,
    name: "Cadena de Oro de 18k",
    price: 299.99,
    category: "metal",
    material: "oro",
  },
  {
    id: 8,
    name: "Collar de Perlas para Hombre",
    price: 159.99,
    category: "piedra",
    material: "perla",
  },
];

export default function FOO() {
  const [filters, setFilters] = useState({
    category: "",
    material: "",
    priceRange: "",
  });
  const [sortBy, setSortBy] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredProducts = productsData
    .filter((product) => {
      return (
        (filters.category === "" || product.category === filters.category) &&
        (filters.material === "" || product.material === filters.material) &&
        (filters.priceRange === "" ||
          (filters.priceRange === "under50" && product.price < 50) ||
          (filters.priceRange === "50to100" &&
            product.price >= 50 &&
            product.price <= 100) ||
          (filters.priceRange === "over100" && product.price > 100))
      );
    })
    .sort((a, b) => {
      if (sortBy === "priceLowToHigh") {
        return a.price - b.price;
      } else if (sortBy === "priceHighToLow") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <Navbar />

      <main className="flex-grow-1 py-5">
        <Container fluid>
          <Row className="mb-4">
            <Col>
              <h1 className="text-center text-uppercase fw-light">
                Colección de Collares
              </h1>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="d-flex justify-content-between align-items-center">
              <Button
                variant="outline-dark"
                className="text-uppercase"
                onClick={() => setShowFilters(true)}
              >
                Filtros
              </Button>
              <Form.Select
                style={{ width: "auto" }}
                onChange={handleSortChange}
                value={sortBy}
                className="border-0 text-uppercase"
              >
                <option value="">Ordenar por</option>
                <option value="priceLowToHigh">Precio: Menor a Mayor</option>
                <option value="priceHighToLow">Precio: Mayor a Menor</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
                <Card className="border-0">
                  <Card.Img
                    variant="top"
                    src={`/placeholder.svg?text=${product.name}`}
                    className="rounded-0"
                  />
                  <Card.Body className="px-0 py-3">
                    <Card.Title className="fs-6 fw-normal">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="fs-6 fw-bold">
                      ${product.price.toFixed(2)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <Offcanvas
        show={showFilters}
        onHide={() => setShowFilters(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-uppercase">Filtros</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="text-uppercase fw-bold">
                Categoría
              </Form.Label>
              <Form.Select
                name="category"
                onChange={handleFilterChange}
                value={filters.category}
                className="border-0 border-bottom rounded-0"
              >
                <option value="">Todas</option>
                <option value="cuero">Cuero</option>
                <option value="metal">Metal</option>
                <option value="piedra">Piedra</option>
                <option value="madera">Madera</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="text-uppercase fw-bold">
                Material
              </Form.Label>
              <Form.Select
                name="material"
                onChange={handleFilterChange}
                value={filters.material}
                className="border-0 border-bottom rounded-0"
              >
                <option value="">Todos</option>
                <option value="cuero">Cuero</option>
                <option value="plata">Plata</option>
                <option value="oro">Oro</option>
                <option value="acero">Acero</option>
                <option value="ónix">Ónix</option>
                <option value="madera">Madera</option>
                <option value="perla">Perla</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="text-uppercase fw-bold">
                Rango de Precio
              </Form.Label>
              <Form.Select
                name="priceRange"
                onChange={handleFilterChange}
                value={filters.priceRange}
                className="border-0 border-bottom rounded-0"
              >
                <option value="">Todos</option>
                <option value="under50">Menos de $50</option>
                <option value="50to100">$50 - $100</option>
                <option value="over100">Más de $100</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>

      {/* <footer className="bg-light py-4">
        <Container>
          <Row className="text-center text-md-start">
            <Col md={3} className="mb-3 mb-md-0">
              <h5 className="text-uppercase fw-bold mb-3">Sobre Nosotros</h5>
              <p className="small">
                Creamos collares únicos para el hombre moderno y sofisticado.
              </p>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <h5 className="text-uppercase fw-bold mb-3">Enlaces Rápidos</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Contacto
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <h5 className="text-uppercase fw-bold mb-3">Contacto</h5>
              <p className="small mb-0">Email: info@nexus.com</p>
              <p className="small">Teléfono: (123) 456-7890</p>
            </Col>
            <Col md={3}>
              <h5 className="text-uppercase fw-bold mb-3">Síguenos</h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#" className="text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="#" className="text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a href="#" className="text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <p className="text-center small mb-0">
            © 2024 NEXUS. Todos los derechos reservados.
          </p>
        </Container>
      </footer> */}
    </div>
  );
}
