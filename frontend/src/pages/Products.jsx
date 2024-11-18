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
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

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
    >
      <Navbar />
      <WhatsAppButton />

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

      <Footer />
    </div>
  );
}
