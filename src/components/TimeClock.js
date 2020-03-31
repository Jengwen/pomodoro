import React, { Component } from 'react'
import NavBar from "./Nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import {withRouter} from 'react-router-dom';
import Timer from "./Timer/Timer"

class TimeClock extends Component {
  
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
        <div className="panel panel-default app-content center-block">
        <div className="panel-body">
          <Timer />
        </div>
      </div>
      </>
    )
  }
}
export default withRouter(TimeClock);