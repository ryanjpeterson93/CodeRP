import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Projects = () => (
  <>
  <div className="projHeader">
    <h1> Projects are right here </h1>
    <p> And here is some information about what my projects are about </p>
  </div>
  <div className="cardDiv">
    <Container fluid>
      <Row xs={1} sm={2} md={2} lg={3} xl={3}>
        <Col>
          <Card className="projectCard">
            <Card.Body>
              <Card.Title>Home Inventory</Card.Title>
              <Card.Img
                src="/home_inv.png"
                alt="Image Not Found"
              />
              <Card.Text>
                (Desktop Only) Description of the project.
              </Card.Text>
              <Button className="projButton" variant="outline-dark" href="https://home-inventory-2020.herokuapp.com/" target="_blank">Visit Site</Button>
              <Button className="projButton" variant="outline-dark" href="https://github.com/ryanjpeterson93/My-Home-Inventory">Github</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="projectCard">
            <Card.Body>
              <Card.Title>React Jeopardy</Card.Title>
              <Card.Img
                src="/react_jeo.png"
                alt="Image Not Found"
              />
              <Card.Text>
              (Desktop Only) Description of the project.
              </Card.Text>
              <Button className="projButton" variant="outline-dark" href="https://jeopardy-react11.herokuapp.com/" target="_blank">Visit Site</Button>
              <Button className="projButton" variant="outline-dark" href="https://github.com/ryanjpeterson93/React-Jeopardy">Github</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="projectCard">
            <Card.Body>
              <Card.Title>Title of Project</Card.Title>
              <Card.Img
                src="/black.jpg"
                alt="Image Not Found"
              />
              <Card.Text>
                Description of the project.
              </Card.Text>
              <Button className="projButton" variant="outline-dark" href="#">View Project</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="projectCard">
            <Card.Body>
              <Card.Title>Title of Project</Card.Title>
              <Card.Img
                src="/black.jpg"
                alt="Image Not Found"
              />
              <Card.Text>
                Description of the project.
              </Card.Text>
              <Button className="projButton" variant="outline-dark" href="#">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  </>
)

export default Projects;