import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyStopwatch() {
  const {
    seconds,
    minutes,
    start,
  } = useStopwatch({ autoStart: true });

//   console.log("start: ", start);

  return (
    <span>
      <span style={{fontSize: '20px'}}>
        Your Time:&nbsp; 
        <span>{minutes}</span>:<span>{seconds}</span>
      </span>
      {/* <button onClick={start}>Start</button> */}
    </span>
  );
}

export default function App() {
  return (
    <div className="timer">
      <MyStopwatch />
    </div>
  );
}