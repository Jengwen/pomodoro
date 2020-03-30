import React, { Component } from 'react'
import NavBar from "./Nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import {withRouter} from 'react-router-dom';

class TimeClock extends Component {
  
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }
}
export default withRouter(TimeClock);