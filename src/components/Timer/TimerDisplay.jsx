import React from 'react';


// deal with missing 0 on less than 10 values
const leftPad = (val)=>{
    if (val <10) return `0${val}`;
    return `${val}`;
}
//build timer with props from timer input
const TimerDisplay = (props) => (

        <div >
        <h2 className="text-center">{`${leftPad(props.currentTime.get('hours'))}: ${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}</h2>
    </div>
);

export default TimerDisplay;