import { createStore } from 'redux';
import ACTION_TYPES from '../actions/actionsType.js';

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.COUNTER_INCREMENT:
      return { value: state.value + 1 };
    case ACTION_TYPES.COUNTER_DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;