import * as Types from '../types';

const initCounterState = {
  num: 100
}

export default function counter(state = initCounterState, action) {
  switch(action.type) {
    case Types.INCERMENT:
      return {num: state.num + action.num};
    case Types.DELETE:
      return {num: state.num - action.num};
    default:
      return state;
  }
}
