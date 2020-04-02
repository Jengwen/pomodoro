import React, { Component } from "react";
import {Button} from "react-bootstrap";
import "../Timer/Timer.css";


class TaskComplete extends Component{
    
    //function to play audio at completeion of timer
    componentDidMount() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }

    render(){
   //return message to ask if task is complete and then save either as complete or incomplete     

    return (
        <div id="task-complete">
            <p>Is Your Task Complete?</p>
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