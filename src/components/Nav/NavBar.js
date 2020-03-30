  
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
  // create Nav Bar to select full task list or user info

  render() {
    return (
      <header className="media">
        <div className="media-body">
         
<Navbar id= "nav"  expand="lg">
            <Navbar.Brand id= "nav" href="/home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link href="/Tasks">My Tasks</Nav.Link>
                <Nav.Link href="/User">My Info</Nav.Link>
                              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

export default withRouter(NavBar);