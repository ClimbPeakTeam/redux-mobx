import * as Types from './types';

let actions = {
  add(amount) {
    // return {type: Types.ADD, amount};
    return function (dispatch, getState) {
      setTimeout( () => {
        dispatch({type: Types.ADD, amount});
      }, 3000)
    }
  },
  minus(amount) {
    // return {type: Types.MINUS, amount};
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve({type: Types.MINUS, amount});
      }, 3000)
    })
  },
  divis(amount) {
    // return {type: Types.DIVIS, amount};
    return {
      type: Types.DIVIS,
      payload: new Promise( (resolve, reject) => {
        Math.random() > 0.5 ? resolve(amount*2) : reject(amount);
      })
    }
  }
}

export default actions;
