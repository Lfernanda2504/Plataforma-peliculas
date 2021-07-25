import React from "react";
import { Container, Image, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image
              src="https://i.ibb.co/17THYrN/logo-peliculas.png"
              alt="logo"
              className="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/Peliculas">Todas </Link>
            <Nav.Link>Mas valoradas</Nav.Link>
            <Nav.Link>Menos valoradas</Nav.Link>
            <Link className="nav-link" to="/Peliculas">Agregar pelicula </Link>
          </Nav>
          <Link className="nav-link" to="/Registro">
            <Button className="btn-primary m-3">Crear cuenta</Button>
          </Link>
          <Link className="nav-link" to="/Login">
            <Button className="btn-primary"> Acceder</Button>
          </Link>
          </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default NavBar;
