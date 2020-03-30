import React from 'react';
// deal with m,issing 0 on less than 10 values
const leftPad = (val)=>{
    if (val <10) return `0${val}`;
    return `${val}`;
}
//build timer with props from timer
const TimerDisplay = (props) => (
    <div>
        <h2 className="text-center">{`${leftPad(props.currentTime.get('hours'))}: ${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}</h2>
    </div>
);

export default TimerDisplay;