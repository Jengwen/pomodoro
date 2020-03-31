import React, { Component } from 'react'
import { Form } from "react-bootstrap";

class TaskInput extends Component{
    
    render(){
        return(
        <div>
    <h3>Enter Task</h3>
    <Form>
        <input type= "string" label="Task"></input>
    </Form>
</div>
)}
}
export default TaskInput