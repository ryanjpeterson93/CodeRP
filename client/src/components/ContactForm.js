import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { Redirect } from "react-router-dom";
import axios from "axios";

class ContactForm extends React.Component {
  state = {
    title: "",
    body: "",
    photo: "",
    name: "",
    email: "",
    phone: "",
    file: null,
  };



  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onDrop = (files) => {
    console.log('files[0]', files[0])
    this.setState({ file: files[0] })
    alert (`You uploaded ${this.state.file.name}`)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    const { file } = this.state
    console.log('file: submit', file)
    data.append("file", file);
    const {
      title,
      body,
      photo,
      phone,
      email,
      name,
    } = this.state
    axios
      .post(`/api/contacts?title=${title}&body=${body}&photo=${photo}&phone=${phone}&email=${email}&name=${name}`, data)
      .then((res) => {
        console.log(res);
        this.setState({
          title: "",
          body: "",
          photo: "",
          name: "",
          email: "",
          phone: "",
          file: null,
        });
        console.log(file)
        return
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {
      title,
      body,
      photo,
      phone,
      email,
      name, } = this.state;
    return (
      <>
        <h1>Contact Form</h1>
        <div className="">
          <Form onSubmit={this.handleSubmit} >
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
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
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>


            <Dropzone onDrop={this.onDrop} multiple={true}>
              {({ getRootProps, getInputProps }) => (
                <div className="styledDrop">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Button variant="outline-secondary">Click to add a photo</Button>
                  </div>
                </div>
              )}
            </Dropzone>

            <Button type='submit'>Submit</Button>
          </Form>
        </div>
      </>
    )
  }
}
export default ContactForm;