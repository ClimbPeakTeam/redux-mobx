import * as Types from '../types';

export function add_todo(content) {
  return {type: Types.ADD_TODO, content};
}

