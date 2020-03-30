import React, { Component } from 'react'
import { Form } from "react-bootstrap";
import TaskInput from "../Tasks/TaskInput";
import TimerInput from "../Timer/TimerInput";
import TimerDisplay from "../Timer/TimerDisplay";
import moment from 'moment';
import * as TimerState from "../Timer/TimerState";
import TimerButton from "../Timer/TimerButton";

class Timer extends Component {

  //constructor method to set state of time
  constructor(){
    super();
     this.state = {
      currentTime: moment.duration(25, 'minutes'),
      baseTime: moment.duration(25, 'minutes'),
      TimerState: TimerState.NOT_SET,
      timer: null,
     };                                            
                                        
//bind function to this     
this.setBaseTime= this.setBaseTime.bind(this);
this.startTimer= this.startTimer.bind(this);
this.reduceTimer= this.reduceTimer.bind(this);                             
}

 //set the Base Time
setBaseTime(newBaseTime){
this.setState({
baseTime: newBaseTime,
currentTime: newBaseTime,
});
}
// function to start timer and remove input
startTimer(){
  this.setState({
    TimerState: TimerState.RUNNING,
    timer: setInterval(this.reduceTimer, 1000)
  });
}
//function to count down timer
reduceTimer(){
const newTime = moment.duration(this.state.currentTime());
newTime.subtract(1, 'second');
this.setState({
  currentTime: newTime,
})
}

  render() {
    return (
      <div id="main-container">
        <div id="header">
          <h2>Pomodoro Timer</h2>
          </div>
          <div id="task-input">
            {/*Insert task iput form here*/}
          <TaskInput/>
          </div>
          <div className="panel panel-default" id="clock">
            
            {/*timer clock goes here */}
            <TimerDisplay currentTime={this.state.currentTime} />
            {/*timer input goes here */}
            {/*hide timer input while timer is running*/}
            {
              (this.state.TimerState !== TimerState.RUNNING)
              &&
   ( <TimerInput 
    baseTime= {this.state.baseTime}
    setBaseTime={this.setBaseTime}
            /> )
             }
    {/*Insert Timer button here to start timer*/}        
       <TimerButton startTimer = {this.startTimer}/>  
          </div>  
          
      </div>
      
    )
  }
}

export default Timer