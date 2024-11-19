import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Offcanvas,
  Spinner, // Agregado para el indicador de carga
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
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado de carga

  // Hacer fetch a la API para obtener los productos
  useEffect(() => {
    fetch("http://localhost:3000/products") // Asegúrate de que esta URL es la correcta
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products); // Asegúrate de que data es un arreglo
        } else {
          console.error("La respuesta no es un arreglo:", data);
        }
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false)); // Setea loading a false después de que los datos se hayan cargado
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

  const filteredProducts = Array.isArray(products)
    ? products
        .filter((product) => {
          return (
            (filters.category === "" ||
              product.category === filters.category) &&
            (filters.material === "" ||
              product.material === filters.material) &&
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
        })
    : []; // Si `products` no es un arreglo, devolvemos un arreglo vacío

  return (
    <div className="d-flex flex-column min-vh-100">
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

          {/* Mostrar un indicador de carga mientras se cargan los productos */}
          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <Spinner animation="border" variant="primary" />
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

      <Offcanvas
        show={showFilters}
        onHide={() => setShowFilters(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-uppercase">Filtros</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>{/* Filtros del formulario */}</Form>
        </Offcanvas.Body>
      </Offcanvas>

      <Footer />
    </div>
  );
}
