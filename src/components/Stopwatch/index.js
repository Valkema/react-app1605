import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, addSeconds, startOfDay } from 'date-fns';
import stopwatch_styles from './Stopwatch.module.css';

function Stopwatch() {
  const [value, setValue] = useState(startOfDay(new Date()));
  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    if (isRun) {
      const v = setTimeout(() => {
        setValue(addSeconds(value, 1));
      }, 1000);
      return () => {
        clearTimeout(v);
      };
    }
  }, [isRun, value]);

  return (
    <div className={stopwatch_styles.wrapper}>
      <h1 className={stopwatch_styles.time_style}>
        {format(value, 'HH:mm:ss')}
      </h1>
      <button
        onClick={() => {
          setIsRun(!isRun);
        }}
      >
        {isRun ? 'stop' : 'start'}
      </button>
      <button
        onClick={() => {
          setValue(startOfDay(new Date()));
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Stopwatch;