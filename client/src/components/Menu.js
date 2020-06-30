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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Navbar.Brand href="/">
                <img
                  src='/coderp_trans.png'
                  width="50px"
                  alt="Code RP"
                />
              </Navbar.Brand> */}
              <Nav.Link className="linkStyle" href="/home">Home</Nav.Link>
              <Nav.Link className="linkStyle" href="/about">About Me</Nav.Link>
              <Nav.Link className="linkStyle" href="/projects">Projects</Nav.Link>
              <Nav.Link className="linkStyle" href="/contact">Contact Me</Nav.Link>
              {this.rightNavItems()}
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