import * as Types from './types';

export default function(state={number:100}, action) {
  switch(action.type) {
    case Types.INCREMENT:
      return {number: state.number + action.amount};
    case Types.DECREMENT:
      return {number: state.number - action.amount};
    default:
      return state;
  }
}
