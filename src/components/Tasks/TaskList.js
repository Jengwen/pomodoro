import React, { Component } from 'react'
import "../Timer/Timer.css"
import TaskMgr from "../../modules/TaskMgr"

class TaskList extends Component{
    //define what this component needs to render
  state = {
    tasks: []
  };
  componentDidMount() {
    console.log("Task LIST: ComponentDidMount");
    //getAll tasks from Task Manager and hang on to that data; put it in state
    TaskMgr.getAllTasks().then(tasks => {
      this.setState({
        tasks: tasks
      });
    });
}

    render(){
        //return list of tasks
     return (   
<>
  <section className="task-list">
    <div className="tasks">
      <h3>All Tasks</h3>
      {this.state.tasks.map(singleTask =>
        //list of tasks 
        <ul>
          <li>{singleTask.TaskName}</li>
        </ul>
        ) 
      }
    </div>
  </section>
</>
);
}
}
export default TaskList