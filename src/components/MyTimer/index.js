import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TimerStyles from './TimerStyles.module.css';
import { format, subSeconds, startOfSecond } from 'date-fns';


function MyTimer(prop) {
  const {startTime} = prop; 
  const [SecValue, setSecValue] = useState(startTime);
  const [isRun, setIsRun] = useState(false);


  useEffect(() => {
    if (isRun) {
      const v = setTimeout(() => {
        setSecValue(subSeconds(SecValue, 1));
      }, 1000);
      return () => {
        clearTimeout(v);
      };
    }
  }, [isRun, SecValue]);


  return (
    <div className={TimerStyles.wrapper}>
      <h1 className={TimerStyles.headerStyle}>
        {format(SecValue, 'mm:ss')}
      </h1>
      <button className={isRun ? TimerStyles.btnStop : TimerStyles.btnSrart}
        onClick={() => {
          setIsRun(!isRun);
        }}
      >
        {isRun ? 'stop' : 'start'}
      </button>
      <button className={TimerStyles.btnRes}
        onClick={() => {
            setSecValue(startTime);
        }}
      >
        reset
      </button>
    </div>
  )
};


MyTimer.propTypes = {
    startTime: PropTypes.instanceOf(Date),
  }


MyTimer.defaultProps = {
    startTime: startOfSecond(new Date(0,0,0,0,0,10)),
  }


export default  MyTimer;