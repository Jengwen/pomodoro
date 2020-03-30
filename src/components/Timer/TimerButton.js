import React, { Component } from 'react';
import { getBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils';

//build start button and pause button 
class TimerButton extends Component{

render(){
return(
<div id="start button">
            <button onClick={this.props.startTimer}>Start</button>
                     </div>
);
}}
export default TimerButton