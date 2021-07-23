import React from "react"; 
import { Container, Image, Nav, Navbar } from "react-bootstrap";



const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
          <Image src="https://i.ibb.co/17THYrN/logo-peliculas.png" alt="logo" className="logo"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Todas</Nav.Link>
            <Nav.Link href="#features">Mas valoradas</Nav.Link>
            <Nav.Link href="#pricing">Menos valoradas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default NavBar;
