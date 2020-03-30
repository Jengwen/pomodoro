import React, {Component}from 'react';


class TimerInput extends Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(ev){
const newBaseTime = this.props.baseTime;
if( ev.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hours'), 'hours').add(parseInt(ev.target.value, 10),'hours' );
if(ev.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(ev.target.value, 10), 'minutes')
if(ev.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(ev.target.value, 10), 'seconds')
   
//pass in new BaseTime
this.props.setBaseTime(newBaseTime)
}
                                                                                                                                                                                                                                                                        

    render() {
        return(
    <div>
    <div className = "row">
        <h2>Set Timer</h2>
        </div>
        {/*create input for timer and change the countdown time display on change of input*/}
        <div className="row control-row">
            <div classNmae="form-group">
    <div className= "col-sm-3">
        <label htmlFor="hours">Hours</label>
    </div>
    <div className= "col-sm-9">
       <input id="hours" 
       type = "number"                                                                                                                                                                                     
       defaultValue= {this.props.baseTime.get('hours')}
       onChange={this.handleChange}
       /> 
       </div>
       </div>
       </div>
       <div className="row control-row">
            <div classNmae="form-group">                                
    <div className= "col-sm-3">
        <label htmlFor="minutes">Minutes</label>
    </div>                                                    
    <div className= "col-sm-9">
       <input id="minutes" 
       type = "number" 
       defaultValue= {this.props.baseTime.get('minutes')}
       onChange={this.handleChange}
       /> 
       </div>
       </div>
       </div>
       <div className= "col-sm-3">
        <label htmlFor="seconds">Seconds</label>
    </div>
    <div className= "col-sm-9">
       <input id="seconds"
        type = "number" 
        defaultValue={this.props.baseTime.get('seconds')}
        onChange={this.handleChange}
        /> 
       </div>
       </div>
        )
    }
    }
