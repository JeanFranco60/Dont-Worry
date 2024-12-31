import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { saveToken } from "../redux/authReducer"; // Asegúrate de importar tu acción correctamente

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Por favor, completa ambos campos.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/validate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorMsg =
          response.status === 401
            ? "Usuario o contraseña incorrectos."
            : "Error al iniciar sesión. Inténtalo nuevamente.";
        throw new Error(errorMsg);
      }

      const data = await response.json();
      dispatch(saveToken({ token: `Bearer ${data.token}` }));
    } catch (error) {
      console.error("Error submitting login:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (auth.token) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div>
            <h2 className="text-center">Iniciar sesión</h2>
            {error && (
              <Alert variant="warning" dismissible onClose={() => setError("")}>
                {error}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Cargando...
                  </>
                ) : (
                  "Ingresar"
                )}
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
