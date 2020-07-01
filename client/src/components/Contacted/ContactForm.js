import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from "axios";

class ContactForm extends React.Component {
  state = {
    body: "",
    name: "",
    email: "",
    phone: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      body,
      phone,
      email,
      name,
    } = this.state
    axios
      .post(`/api/contacts?body=${body}&phone=${phone}&email=${email}&name=${name}`, e.data)
      .then((res) => {
        console.log(res);
        this.setState({
          title: "",
          body: "",
          name: "",
          email: "",
          phone: "",
        });
        return
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Thanks for submitting your form!")
    this.props.history.push("/contact");
  };

  render() {
    const {
      body,
      phone,
      email,
      name, } = this.state;
    return (
      <>
        <div className="contactForm">
          <div className="formHeader">
            <h1>Contact Form</h1>
            <p>Send me over a form, I will get back to you ASAP</p>
          </div>
          <br/>
          <Form onSubmit={this.handleSubmit} >
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs={6} controlId="formGridName">
                <Form.Label>Phone #</Form.Label>
                <Form.Control
                  required
                  placeholder="Your Phone #"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row >
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Body</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows="4"
                  placeholder="Text Body"
                  name="body"
                  value={body}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Button type="submit" variant="outline-dark">Submit</Button>
          </Form>
        </div>
      </>
    )
  }
}
export default ContactForm;