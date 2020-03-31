import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import * as TimerState from "./TimerState";


//build start button, complete and pause button 
class TimerButton extends Component{

//constructor method to create timer buttons

constructor(){
    super();

    this.getButton = this.getButton.bind(this);
}
//function to determine which button to dislplay
getButton(){
    if(this.props.TimerState ===TimerState.NOT_SET)
    return(<Button id= "start-button" variant="success" onClick={this.props.startTimer}>Start</Button>);
    
    if(this.props.TimerState === TimerState.RUNNING)
   return (<Button id= "pause-button" variant="danger" onClick={this.props.stopTimer}>Pause</Button>);
   
    if(this.props.TimerState === TimerState.COMPLETE)
    return (<Button id= "reset-button" variant= "primary" onClick={this.props.stopTimer}>Reset</Button>);
    }

//function to display a message to ask if task is complete


render(){

return(
<div className= "row" id="timer button">
    {this.getButton()}
</div>
);
}
}
export default TimerButton