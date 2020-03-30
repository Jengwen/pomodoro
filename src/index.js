import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import TimeClock from './components/TimeClock';



ReactDOM.render(
  <Router>
    <TimeClock />
  </Router>
  , document.getElementById('root'))
