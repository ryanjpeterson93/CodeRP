import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class AboutMe extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Here is some really cool things about me</h1>
          <p>
            I am really interesting, i swear
          </p>
        </Container>
      </Jumbotron>
    )
  }
}

export default AboutMe