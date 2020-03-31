import { Route } from "react-router-dom";
import React, { Component } from "react";
import UserCard from "./User/UserCard";
import TaskList from "./Tasks/TaskList";
import Timer from "./Timer/Timer";


class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
       exact path = "/"
       render = {props =>{
         return <Timer {...props} />
       }}
    />
        {/*create route for user information*/}
        <Route
          exact
          path="/User"
          render={props => {
           
              return <UserCard {...props} />;
            }
          }        />
         {/*create route for the complete list of tasks  */} 
        <Route
          exact
          path="/Tasks"
          render={props => {
            return <TaskList {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}
export default ApplicationViews;