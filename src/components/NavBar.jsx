import React from "react";
import { Container, Image, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src="https://i.ibb.co/17THYrN/logo-peliculas.png"
              alt="logo"
              className="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Todas </Link>
            <Link className="nav-link" to="/MasValorado">Mas valoradas </Link>
            <Link className="nav-link" to="/MenosValorado">Menos valoradas </Link>
            <Link className="nav-link" to="/AddPeliculas">Agregar pelicula </Link>
          </Nav>
          </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default NavBar;
