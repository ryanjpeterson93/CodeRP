import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link, } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

class Home extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Home Page</h1>
          <p>
            We are gonna land right here.
          </p>
        </Container>
      </Jumbotron>
    )
  }
}

export default Home