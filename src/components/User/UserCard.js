import React, { Component } from "react";
import UserMgr from "../../modules/UserMgr";
import "../Timer/Timer.css"


class UserCard extends Component {
  state = {
    FirstName: "",
    LastName: "",
    Email: "",
    loadingStatus: true,
    user: {}
  };

     
  /* render user card */

  componentDidMount() {
    UserMgr.getOneUser().then(user => {
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
          <div className="user-card">
          <div className="card-content">
            <h5>Name: <span >{this.state.user.FirstName}{this.state.user.LastName}</span></h5>
            <p>Email: {this.state.user.Email}</p>
        
          </div>
        </div>
       </section>
      </>
    );
  }
}
export default UserCard;