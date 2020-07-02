import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { withRouter, } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Menu extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, } } = this.props;

    if (user) {
      return (
        <Nav>
          <NavDropdown title="Ryan Things" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/contacted-me">Contacts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => handleLogout(this.props.history)}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

  render() {
    return (
      <div className="navDiv">
        <Navbar className="navStyle" collapseOnSelect expand="sm">
          <Navbar.Toggle id="collapseButton" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="collapseNav">
            <Nav className="mr-auto">
              <Nav.Link className="linkStyle" href="/home">Home</Nav.Link>
              <Nav.Link className="linkStyle" href="/about">About Me</Nav.Link>
              <Nav.Link className="linkStyle" href="/projects">Projects</Nav.Link>
              <Nav.Link className="linkStyle" href="/contact">Contact Me</Nav.Link>
              {this.rightNavItems()}
            </Nav>
            <Nav>
              <div id="socialLinks">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ryan.peterson.9678">
                  <img src="/Facebook.png" alt="Facebook" className="mediaMenuIcons" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ryanjpeterson93">
                  <img src="/LinkedIn.png" alt="Github" className="mediaMenuIcons" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rj.pete/?hl=en">
                  <img src="/Github.png" alt="Instagram" className="mediaMenuIcons" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryanpeterson93/">
                  <img src="/Instagram.png" alt="LinkedIn" className="mediaMenuIcons" />
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Menu {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);