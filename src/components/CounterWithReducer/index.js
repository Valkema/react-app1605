import React, { useReducer } from 'react';
import Reducer from './Reducer.js';

function Counter() {
  const initialState = { value: 10 };

  const [state, dispatch] = useReducer(Reducer, initialState);

  function functionDec() {
    dispatch({
      state,
      type: 'DECREMENT',
    });
  }
  function functionInc() {
    dispatch({
      state,
      type: 'INCREMENT',
    });
  }
  return (
    <div>
      <h1>{state.value}</h1>
      <button onClick={functionDec}>-</button>
      <button onClick={functionInc}>+</button>
    </div>
  );
}

export default Counter;