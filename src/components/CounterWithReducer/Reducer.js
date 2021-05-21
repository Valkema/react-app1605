export default function Reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT': {
        const { value } = state;
  
        return {
          value: value + 1,
        };
      }
      case 'DECREMENT': {
        const { value } = state;
  
        return {
          value: value - 1,
        };
      }
      default:
        return state;
    }
  }