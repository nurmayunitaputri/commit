import React from 'react';
import { useTimer } from 'use-timer';

const   ResendTimer = () => {
    const { time, start, pause, reset, status } = useTimer({
        initialTime: 100,
        timerType: 'DECREMENTAL',
      });
  return (
    <>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
      <p>Elapsed time: {time}</p>
      {status === 'RUNNING' && <p>Running...</p>}
    </>
  );
};
export default ResendTimer;