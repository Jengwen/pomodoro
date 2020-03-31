import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import * as TimerState from "./TimerState";


//build start button and pause button 
class TimerButton extends Component{
//constructor method to

constructor(){
    super();

    this.getButton = this.getButton.bind(this);
}
//function to determine which button to dislplay
getButton(){
    if(this.props.TimerState ===TimerState.NOT_SET)
    return (<Button onClick={this.props.startTimer}>Start</Button>)

    if(this.props.TimerState === TimerState.RUNNING)
    return (<button onClick={this.props.startTimer}>Pause</button>)

    if(this.props.TimerState === TimerState.COMPLETE)
    return (<button onClick={this.props.stopTimer}>End</button>)
}

render(){

return(
<div id="timer button">
    {this.getButton()}
</div>
);
}
}
export default TimerButton