import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link, } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <h1>Contact Me</h1>
            <p>
              Seriously, contact me and give me a job.
          </p>
          </Container>
        </Jumbotron>
         Get ahold of me <Link to="/contact/form"> here</Link>
      </>
    )
  }
}

export default Contact