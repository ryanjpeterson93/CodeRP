import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { HomeInv, ReactJeo, CardViews, EduStation, CodeRPSite } from './images/ProjectImages'

const Projects = () => (
  <>
    <div id="projHeader">
      <h3> Projects</h3>
      <p> Here are a handful of projects I have worked on. Projects will continue to be added regularly and modified. Check back later to see additions and modifications. </p>
    </div>
    <div id="cardDiv">
      <Container fluid>
        <Row xs={1} sm={2} md={2} lg={3} xl={3}>
          <Col>
            <Card className="projectCard">
              <Card.Body>
                <Card.Title>Home Inventory</Card.Title>
                <Card.Img
                  src={HomeInv}
                  alt="Image Not Found"
                >
                </Card.Img>
                <Card.Text>
                (Desktop)
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
                  src={ReactJeo}
                  alt="Image Not Found"
                />
                <Card.Text>
                (Desktop)
                </Card.Text>
                <Button className="projButton" variant="outline-dark" href="https://jeopardy-react11.herokuapp.com/" target="_blank">Visit Site</Button>
                <Button className="projButton" variant="outline-dark" href="https://github.com/ryanjpeterson93/React-Jeopardy">Github</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="projectCard">
              <Card.Body>
                <Card.Title>Miss Beth's Creativity Kits</Card.Title>
                <Card.Img
                  src={EduStation}
                  alt="Image Not Found"
                />
                <Card.Text>
                (Desktop / Mobile)
                </Card.Text>
                <Button className="projButton" variant="outline-dark" href="https://github.com/ryanjpeterson93/Education-Station">Github</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="projectCard">
              <Card.Body>
                <Card.Title>Card Views</Card.Title>
                <Card.Img
                  src={CardViews}
                  alt="Image Not Found"
                />
                <Card.Text>
                (Desktop / Mobile)
                </Card.Text>
                <Button className="projButton" variant="outline-dark" href="https://github.com/ryanjpeterson93/Card-Views">Github</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="projectCard">
              <Card.Body>
                <Card.Title>Portfolio Site</Card.Title>
                <Card.Img
                  src={CodeRPSite}
                  alt="Image Not Found"
                />
                <Card.Text>
                (Desktop / Mobile)
                </Card.Text>
                <Button className="projButton" variant="outline-dark" href="https://github.com/ryanjpeterson93/CodeRP">Github</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </>
)

export default Projects;