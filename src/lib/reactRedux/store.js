import { createStore } from 'redux';

const ADD = 'ADD';
const MINUS = 'MINUS';

let initState = {
  number: 100
}

function reducer(state = initState, action) {
  switch(action.type) {
    case ADD:
      return {number: state.number + action.count};
    case MINUS:
      return {number: state.number - action.count};
    default:
      return state;
  }
}

export default createStore(reducer);

