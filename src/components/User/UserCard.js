import React, { Component } from "react";
import UserMgr from "../../modules/UserMgr";
import { Form } from "react-bootstrap";


class UserCard extends Component {
  state = {
    FirstName: "",
    LastName: "",
    Email: "",
    loadingStatus: true,
    user: {}
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingUser = evt => {
    // prevent page load again
    evt.preventDefault();
    // set loading status
    this.setState({ loadingStatus: true });
    //   build a edited object
    const editedUser = {
      aud: this.state.user.aud,
      id: this.state.user.id,
      name: this.state.name,
      email: this.state.email,
      
    };
    // update database with API put and redirect to user account page
    UserMgr.update(editedUser).then(() =>
      this.props.history.push(`/users`)
    );
  };
  /* render user card */

  componentDidMount() {
    UserMgr.getOne().then(user => {
      console.log(user);
      this.setState({
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        
        user: user
      });
      console.log(user.name);
    });
   
  }

  render() {
    return (
      <>
        <section id="user-account">
          <h3 id= "user-dashboard-header">My Info</h3>
          {/* render form to view user account*/}
          <Form>
            <Form.Group controlId="FirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={this.state.name}
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group controlId="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={this.state.name}
                onChange={this.handleFieldChange}
              />
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={this.state.email}
                onChange={this.handleFieldChange}
              />
            </Form.Group>.Group>
          </Form>
          
       </section>
      </>
    );
  }
}
export default UserCard;