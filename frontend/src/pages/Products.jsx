import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Offcanvas,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function FOO() {
  const [filters, setFilters] = useState({
    category: "",
    material: "",
    priceRange: "",
  });
  const [sortBy, setSortBy] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("La respuesta no contiene productos:", data);
        }
      })
      .catch((error) => console.error("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, []);

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

  const filteredProducts = products
    .filter((product) => {
      // Filtro por categoría
      if (
        filters.category &&
        product.category?.toLowerCase() !== filters.category.toLowerCase()
      ) {
        return false;
      }

      // Filtro por material
      if (
        filters.material &&
        product.material?.toLowerCase() !== filters.material.toLowerCase()
      ) {
        return false;
      }

      // Filtro por rango de precio
      if (filters.priceRange) {
        const price = parseFloat(product.price);
        if (
          (filters.priceRange === "under50" && price >= 50) ||
          (filters.priceRange === "50to100" && (price < 50 || price > 100)) ||
          (filters.priceRange === "over100" && price <= 100)
        ) {
          return false;
        }
      }

      return true; // Pasó todos los filtros
    })
    .sort((a, b) => {
      // Ordenar productos según la selección
      if (sortBy === "priceLowToHigh") return a.price - b.price;
      if (sortBy === "priceHighToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <WhatsAppButton />

      <main className="flex-grow-1 py-5">
        <Container>
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

          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <Spinner />
            </div>
          ) : (
            <Row>
              {filteredProducts.map((product) => (
                <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
                  <Card className="border-0">
                    <Card.Img
                      variant="top"
                      src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
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
          )}
        </Container>
      </main>

      {/* Offcanvas para los filtros */}
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
