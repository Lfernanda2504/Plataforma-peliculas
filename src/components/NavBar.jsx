import React from "react";
import { Container, Image, Nav, Navbar, InputGroup, Form, Button } from "react-bootstrap";
import { MdSearch } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/action";




  const NavBar = () => {
    const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(startLogout());
  }

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
            <Link className="nav-link" to="/">
              Todas{" "}
            </Link>
            <Link className="nav-link" to="/MasValorado">
              Mas valoradas{" "}
            </Link>
            <Link className="nav-link" to="/MenosValorado">
              Menos valoradas{" "}
            </Link>
            <Link className="nav-link" to="/AddPeliculas">
              Agregar pelicula{" "}
            </Link>
            <Form className="search-form">
              <InputGroup>
                <Form.Control
                  className="search-input"
                  type="text"
                  placeholder="Search..."
                  name="search"
                  autoComplete="off"
                />
                <InputGroup.Prepend>
                  <button className="btn btn-light btn-search">
                  <MdSearch color='black' size='30px' />
                  </button>
                </InputGroup.Prepend>
              </InputGroup>
            </Form>
          </Nav>
          <Button onClick={handleLogout}> Cerrar sesion </Button>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default NavBar;
