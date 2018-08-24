import * as Types from './types';

export default function(state = { number: 0}, action) {
  switch(action.type) {
    case Types.ADD:
      return {number: state.number + action.amount};
    case Types.MINUS:
      return {number: state.number - action.amount};
    case Types.DIVIS:
      return {number: state.number * action.payload};
    default:
      return state;
  }
}
