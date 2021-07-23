import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "../hook/useForm";
import { useDispatch } from "react-redux";
import { registro } from "../actions/action";

const Registro = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    nombre: "",
    apellido: "",
    email: "",
    password: ""
  });

  const { nombre, apellido, email, password } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    console.log(nombre, apellido, email, password);
    dispatch(registro(nombre, apellido, email, password));
    reset();
  };
  return (
    <div>
      <Container>
        <Form onSubmit={handleRegistro}>          
          <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
               <Form.Control
              type="text"
              name="nombre"
              placeholder="Enter name"
              value={nombre}
              onChange={handleInputChange}
            />          
          </Form.Group>        
          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido</Form.Label>                    
            <Form.Control
              type="text"
              name="apellido"
              placeholder="Enter lastname"
              value={apellido}
              onChange={handleInputChange}
            />          
          </Form.Group>     
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
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

export default Registro;
