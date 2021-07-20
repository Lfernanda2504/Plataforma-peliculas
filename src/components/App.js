import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "../hook/useForm";
import {useDispatch} from 'react-redux'
import {login} from '../actions/action'

const App = () => {

  const  dispatch = useDispatch();


  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  
  const handleLogin=(e)=>{
    e.preventDefault();
   dispatch(login(email, password));
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
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
        <Form.Group
          className="mb-3"
          controlId="formGroupPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" value={password}
          onChange={handleInputChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default App;
