import React, { Component } from 'react'
import { Form } from "react-bootstrap";
import "../Timer/Timer.css"

class TaskInput extends Component{
  //render task input form  
  
    render(){
        return(
        <div id="task-input-form">
    <h3 >Enter Task</h3>
    <Form id="task-from">
      <Form.Group >
    <Form.Label>Task</Form.Label>
    <Form.Control className= "col-sm-3" />
  </Form.Group>
      </Form>
</div>
)}
}
export default TaskInput