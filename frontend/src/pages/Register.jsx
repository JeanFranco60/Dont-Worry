import Footer from "../components/Footer";
import NavBar from "../components/NavigationBar";

import React, { useState } from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register-page">
      <NavBar />
      <Container className="login-container">
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center py-5"
            lg={6}
          >
            <img
              src="logostarcats.svg"
              width={400}
              height={400}
              alt="StarCats Logo"
            />
          </Col>
          <Col className="py-5">
            <div className="form-wrapper w-75">
              <h2 className="text-center pb-2">Registrate</h2>
              <Form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-2"
              >
                <Form.Control
                  type="text"
                  placeholder="Ingresá tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-pill p-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Ingresá tu apellido"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="rounded-pill p-2"
                />
                <Form.Control
                  type="email"
                  placeholder="Ingresá un correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-pill p-2"
                />
                <Form.Control
                  type="password"
                  placeholder="Ingresá una contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-pill p-2"
                />
                <Button type="submit" className="rounded-pill">
                  Registrarse
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
