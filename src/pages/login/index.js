import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './index.css';

import lar from '../../assets/images/login.png';

async function loginUser(credentials) {
    const baseApiUrl = "https://localhost:5001/api";
    const authUrl = baseApiUrl + "/authentication/authenticate";
  return fetch(authUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="Login shadow bg-white">
      <img src={lar} width="140" alt="Generic Application" />
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Control
            autoFocus
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={e => setUserName(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        <div className="d-grid">
          <Button type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
