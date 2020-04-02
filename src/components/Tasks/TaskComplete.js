import React, { Component } from "react";
import {Button} from "react-bootstrap";
import BreakTimer from "../Timer/BreakTimer";
import moment from 'moment';
import * as TimerState from "../Timer/TimerState";
import "../Timer/Timer.css";


class TaskComplete extends Component{

    //put break timer in state
    constructor(){
        super();
    
         this.state = {
          breakTime: moment.duration(5, 'minutes'),
          TimerState: TimerState.NOT_SET,
          timer: null,
         }
         this.startTimer= this.startTimer.bind(this);
        }
    //function to start timer
    startTimer(){
        this.setState({
          TimerState: TimerState.RUNNING,
          timer: setInterval(this.reduceTimer, 1000)
        });
      }

   

    //function to play audio at completeion of timer
    componentDidMount() {
        //function to play timer 
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
        //start Break Timer
        this.startTimer()
      }

    render(){
   //return message to ask if task is complete and then save either as complete or incomplete     

    return (
        <div id="task-complete">
            <p>Is Your Task Complete?</p>
    {/*5 minute break timer*/}
            <BreakTimer/>

            <Button id="complete-btn"variant="success" onClick={this.props.completeTask}>Yes</Button>
            <Button id= "complete-btn"variant="danger" onClick= {this.props.incompleteTask}>No</Button>
        
        {/*sound alarm at this render*/}
        <div>
        <audio className="audio-element">
          <source src="https://onlineclock.net/audio/options/default.mp3"></source>
        </audio>
      </div>
   </div>
    )  
    
}
}

export default TaskComplete