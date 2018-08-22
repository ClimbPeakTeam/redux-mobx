import { combineReducers } from 'redux';
import counter from './counter';
import todo from './todo';

// let myCombineReducers = (reducers) => {
//   return () => {
//     let obj = {};
//     for(let key in reducers) {
//       obj[key] =reducers[key](state[key], action)
//     }
//     return obj;
//   }
// }

let reducers = combineReducers({
  counter,
  todo
})

export default reducers;
