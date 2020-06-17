import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class Projects extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Here are some of my projects</h1>
          <p>
            That are extremely decent.
          </p>
        </Container>
      </Jumbotron>
    )
  }
}

export default Projects