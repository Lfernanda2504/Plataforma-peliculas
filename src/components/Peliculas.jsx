import React from "react";
import { Form, Container, Button } from "react-bootstrap";

const Peliculas = () => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre Pelicula</Form.Label>
            <Form.Control
              type="text"
              name="nombrePelicula"
              placeholder="Enter name"
              
            />
                      
          </Form.Group>
                  
          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Año</Form.Label>                    
            <Form.Control
              type="number"
              name="year"
              placeholder="Enter year"
             
            />
                      
          </Form.Group>
               
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Genero</Form.Label>
            <Form.Control
              type="text"
              name="genre"
              placeholder="Enter genre "
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Director</Form.Label>
            <Form.Control
              type="text"
              name="director"
              placeholder="Enter Director"
              
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Peliculas;
