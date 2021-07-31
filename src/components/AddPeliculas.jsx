import React from "react";
import { useForm } from "../hook/useForm";
import { useDispatch } from "react-redux";
import { Form, Container, Button} from "react-bootstrap";
import { peliculasAction, NuevaCard } from "../actions/crud/actionPeliculas";
//import { useEffect } from "react";
//import ListarPeliculas from "./ListarPeliculas";


const AddPeliculas = () => {
  const dispatch = useDispatch();

  let file = []

  //useEffect(() => {
   // dispatch(listarPeliculas());
 // }, []);

  const [formValues, handleInputChange, reset] = useForm({
    id: "",
    nombrePelicula: "",
    description:"",
    year: "",
    genre: "",
    director: "",
  });

  const { id, nombrePelicula, description, year, genre, director } = formValues;

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      file = e.target.files[0];
      console.log(file);
    }
  }
    const handleNuevaPelicula = (e) => {
      e.preventDefault();
      dispatch(NuevaCard(formValues, file));
      reset();
    }
 

    return (
      <div>
        <Container className="card container text-center">
          <h1>Agregar Nueva pelicula</h1>
          <Form className="card-body" onSubmit={handleNuevaPelicula}>
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
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter description"
                value={description}
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
            <Container>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none'}}
                onChange={handleFileChange}
              />
              <Button className= "btn" onClick={handlePictureClick}>
                <Form.Label>  Subir imagen</Form.Label>
              </Button>
            </Form.Group>
            </Container>
            <Button className="mb-3" onClick={()=> dispatch(peliculasAction())} variant="primary" type="submit" onClick={()=> dispatch(peliculasAction())}>
              Guardar
            </Button>
          </Form>
        </Container>
      </div>
    );
  };

export default AddPeliculas;
