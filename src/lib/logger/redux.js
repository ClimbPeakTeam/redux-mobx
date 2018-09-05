let createStore = (reducer) => {
  let state;
  let getState = () => JSON.parse(JSON.stringify(state));
  let listeners = [];
  let dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach( item => item());
  }
  dispatch({});
  let subscribe = (fn) => {
    listeners.push(fn);
    return () => listeners.filter( item => item != fn );
  }
  return {getState, dispatch, subscribe}
}

export { createStore };
