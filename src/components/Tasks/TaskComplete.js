import React, { Component } from "react"
import {Button} from "react-bootstrap"

class TaskComplete extends Component{

//method to mark a task complete
markComplete(){

}

    render(){
    return (
        <div>
            <p>Is Your Task Complete?</p>
            <Button variant="successs" OnClick={this.markComplete()}>Yes</Button>
            <Button variant="danger">No</Button>
        </div>
    )

        }
    
}
// message to display at end of timer to mark a task complete

export default TaskComplete