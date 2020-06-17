import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link, } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

class NoMatch extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>NoMatch</h1>
          <p>
            Head on back to where you came from!
            <Link to="/"> Home</Link>
          </p>
        </Container>
      </Jumbotron>
    )
  }
}

export default NoMatch