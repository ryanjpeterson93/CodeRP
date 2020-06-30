import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, } from "react-bootstrap"
import Container from 'react-bootstrap/Container'

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, passwordConfirmation, } = this.state;

    return (
      <Container>
        <h1>Register</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              label="Email"
              required
              autoFocus
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
            <Form.Control
              label="Password"
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
            <Form.Control
              label="Password Confirmation"
              required
              name='passwordConfirmation'
              value={passwordConfirmation}
              placeholder='Password Confirmation'
              type='password'
              onChange={this.handleChange}
            />
            <Button primary type='submit'>Submit</Button>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}