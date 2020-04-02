import React, { Component } from 'react';
import TaskInput from "../Tasks/TaskInput";
import TimerInput from "../Timer/TimerInput";
import TimerDisplay from "../Timer/TimerDisplay";
import moment from 'moment';
import * as TimerState from "../Timer/TimerState";
import TimerButton from "../Timer/TimerButton";
import TaskComplete from "../Tasks/TaskComplete";
import BreakTimer from "../Timer/BreakTimer";
import TaskMgr from "../../modules/TaskMgr"
import "./Timer.css"

class Timer extends Component {

  //constructor method to set state of time
  constructor(){
    super();

     this.state = {
      currentTime: moment.duration(25, 'minutes'),
      baseTime: moment.duration(25, 'minutes'),
      breakTime: moment.duration(5, 'minutes'),
      TimerState: TimerState.NOT_SET,
      timer: null,
      TaskName: "",
      UserID: null,
      IsComplete: "false",
      loadingStatus: false,
     };                                            
                                        
//bind function to this     
this.setBaseTime= this.setBaseTime.bind(this);
this.startTimer= this.startTimer.bind(this);
this.stopTimer= this.stopTimer.bind(this);
this.reduceTimer= this.reduceTimer.bind(this);  
this.completeTask = this.CompleteTask.bind(this);      
this.completeTask = this.CompleteTask.bind(this);                      
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
//function to stop timer
stopTimer(){
  if (this.state.timer){
    clearInterval (this.state.timer);
  }
  
  this.setState({
    TimerState: TimerState.NOT_SET,
    timer: null,
    currentTime: moment.duration(this.state.baseTime),
  });
}

// function to count down in timer
reduceTimer(){
if(this.state.currentTime.get('hours')=== 0
  && this.state.currentTime.get('minutes')===0
  && this.state.currentTime.get('seconds')===0){
  this.completeTimer();
  return;
}

const newTime = moment.duration(this.state.currentTime);
newTime.subtract(1, 'second');

this.setState({
  currentTime: newTime,
});
}
// function to complete timer
completeTimer() {
  if (this.state.timer){
    clearInterval (this.state.timer);
  }
  this.setState({
    TimerState: TimerState.COMPLETE,
    timer: null,
    });
}
//method to create new incomplete task
IncompleteTask = evt => {
  evt.preventDefault();
  {
    this.setState({ loadingStatus: true });
    const Task = {
      TaskName: this.state.TaskName,
      UserID: this.state.UserID,
      IsComplete: "false"
    };

    // Create the task and redirect user to task list
    TaskMgr.post(Task).then(() => this.props.history.push("/Tasks"));
  }
};

// create completed task
CompleteTask = evt => {
  evt.preventDefault();
  {
    this.setState({ loadingStatus: true });
    const Task = {
      TaskName: this.state.TaskName,
      UserID: this.state.UserID,
      IsComplete: "true"
    };

    // Create the task and redirect user to task list
    TaskMgr.post(Task).then(() => this.props.history.push("/Tasks"));
  }
};

  render() {
    return (
      <div id="main-container">
        <div id="header">
          <h2 className= "text-center">Pomodoro Timer</h2>
          </div>
          <div id="task-input">
            {/*Insert task iput form here*/}
          <TaskInput
          TaskName= {this.state.TaskName}/>
          </div>
          {/*Insert task complete mesasage here when the timerState is complete*/}
          <div>
               {
                 (this.state.TimerState === TimerState.COMPLETE)
                 &&
               ( <TaskComplete
                TimerState= {this.state.TimerState}
                taskComplete = {this.CompleteTask}
                taskIncomplete = {this.IncompleteTask}
                breakTime = {this.state.breakTime}
                TimerState ={this.state.TimerState}
                />)
               }
          </div>
             {/*timer clock goes here */}
            <TimerDisplay 
            currentTime={this.state.currentTime}
            TimerState={this.state.TimerState} />

            {/*timer input goes here */}
            {/*hide timer input while timer is running*/}
            {
              (this.state.TimerState !== TimerState.RUNNING || this.state.TimerState === TimerState.COMPLETE)
               
              &&
              ( <TimerInput 
                baseTime= {this.state.baseTime}
                setBaseTime={this.setBaseTime}
                /> ) 
            }
            {/*Insert Timer button here to start timer*/}        
          <TimerButton 
          startTimer = {this.startTimer} 
          stopTimer = {this.stopTimer}
          TimerState= {this.state.TimerState}/>  
          </div>  
         
      
    )
  }
}

export default Timer