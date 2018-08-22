import * as Types from '../types';

const initTodoState = [];

export default function todo(state = initTodoState, action) {
  switch(action.type) {
    case Types.ADD_TODO:
      return [action.content, ...state];
    default:
      return state;
  }
}
