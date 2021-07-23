import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "../hook/useForm";
import {useDispatch} from 'react-redux'
import {loginGoogle, login} from '../actions/action'

const Login = () => {

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

  const handleGoogleLogin=()=>{
   dispatch(loginGoogle());
   console.log(dispatch(loginGoogle()))
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
          Iniciar sesion
        </Button>
        <Container className="auth__social-networks">
          <Container
            className="google-btn"
          >
            <Container className="google-icon-wrapper">
              <img className="google-btn" onClick={handleGoogleLogin} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </Container>
          </Container>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
