import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Por favor, completa ambos campos.");
      setShowAlert(true);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tokens`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError("Usuario o contraseña incorrectos.");
        } else {
          setError("Usuario o contraseña incorrectos.");
        }
        setShowAlert(true);
      } else {
        const data = await response.json();
        dispatch(saveToken({ token: `Bearer ${data.token}` }));
      }
    } catch (error) {
      console.error("Error submitting login:", error);
      setError("Error en la conexión. Inténtalo nuevamente.");
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return auth.token === "" ? (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Container className="d-flex justify-content-center align-items-center">
              <img src="duw.svg" alt="DUW Logo" />
            </Container>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h2 className="text-center">Iniciar sesión</h2>
              {showAlert && (
                <Alert
                  variant="warning"
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  {error}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="email"
                  placeholder="Ingresá: user@project.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control
                  type="password"
                  placeholder="Ingresá: 1234"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={loading}>
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
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Login;
