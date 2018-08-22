import * as Types from '../types';

export function add(num) {
  return {type: Types.INCERMENT, num};
}

export function del(num) {
  return {type: Types.DELETE, num};
}
