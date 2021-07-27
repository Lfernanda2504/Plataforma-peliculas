import React from "react";
import { useForm } from "../hook/useForm";
import { useDispatch } from "react-redux";
import { Form, Container, Button } from "react-bootstrap";
import { registrarPelicula, listarPeliculas} from "../actions/action";
import { useEffect } from "react";
import ListarPeliculas from './ListarPeliculas';


const Peliculas = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listarPeliculas());
    }, [])

  const [formValues, handleInputChange, reset] = useForm(
    { 
      id:'',
      nombrePelicula: '',
      year: '',
      genre: '',
      director: ''
  });


  const {id, nombrePelicula, year, genre, director } = formValues;

  const handleRegistroPeliculas = (e) => {
    e.preventDefault();
    console.log(id, nombrePelicula, year, genre, director);
    dispatch(registrarPelicula(id,nombrePelicula, year, genre, director));
    reset();
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleRegistroPeliculas}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Identificación</Form.Label>
            <Form.Control
              type="text"
              name="id"
              placeholder="Enter identificacion"
              value={id}
              onChange={handleInputChange}
              
            />
                      
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre Pelicula</Form.Label>
            <Form.Control
              type="text"
              name="nombrePelicula"
              placeholder="Enter name"
              value={nombrePelicula}
              onChange={handleInputChange}
              
            />
                      
          </Form.Group>
                  
          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Año</Form.Label>                    
            <Form.Control
              type="number"
              name="year"
              placeholder="Enter year"
              value={year}
              onChange={handleInputChange}
             
            />
                      
          </Form.Group>
               
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Genero</Form.Label>
            <Form.Control
              type="text"
              name="genre"
              placeholder="Enter genre "
              value={genre}
              onChange={handleInputChange}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Director</Form.Label>
            <Form.Control
              type="text"
              name="director"
              placeholder="Enter Director"
              value={director}
              onChange={handleInputChange}
              
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
        <ListarPeliculas />
      </Container>
    </div>
  );
};

export default Peliculas;
