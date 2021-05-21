import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter(prop) {
  const { step } = prop;
  const [value, setValue] = useState(10);
  function functionDec() {
    value > 0 ?
    setValue(value - step) :
    setValue(0);
  }
  function functionInc() {
    setValue(value + step);
  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={functionDec}>-</button>
      <button onClick={functionInc}>+</button>
    </div>
  );
}

Counter.propTypes = {
  step: PropTypes.number,
};
Counter.defaultProps = {
  step: 1,
};

export default Counter;