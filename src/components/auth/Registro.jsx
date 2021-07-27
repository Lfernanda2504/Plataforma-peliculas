import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "../../hook/useForm";
import { useDispatch } from "react-redux";
import { registroUsuario} from "../../actions/action";
import { Link } from "react-router-dom";

const Registro = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    nombre: "",
    email: "",
    password: ""
  });

  const { nombre, email, password} = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    console.log(email, password, nombre);
    dispatch(registroUsuario(email, password, nombre));
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
          <Link to="/auth/login"  className="link"> Estoy registrado</Link>
        </Form>
      </Container>
    </div>
  );
};

export default Registro;
