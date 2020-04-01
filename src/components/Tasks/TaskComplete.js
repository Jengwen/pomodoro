import React, { Component } from "react";
import {Button} from "react-bootstrap";
import "../Timer/Timer.css";


class TaskComplete extends Component{
    
    


    render(){
   //return message to ask if task is complete and then save either as complete or incomplete     

    return (
        <div id="task-complete">
            <p>Is Your Task Complete?</p>
            <Button id="complete-btn"variant="success" onClick={this.props.completeTask}>Yes</Button>
            <Button id= "complete-btn"variant="danger" onClick= {this.props.incompleteTask}>No</Button>
        </div>
    )
    
        }
    
}
// message to display at end of timer to mark a task complete

export default TaskComplete