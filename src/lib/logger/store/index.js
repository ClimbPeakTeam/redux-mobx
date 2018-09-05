import { createStore } from '../redux';
import reducer from './reducer';

// let store = createStore(reducer);
window._store = store;

// 改写dispatch
let logger = store => dispatch => action => {
  console.log('派发前的状态',store.getState().number);
  dispatch(action);
  console.log('派发前的状态',store.getState().number);
}
// 应用中间件 redux 内部的方法  创建一个新的store
let applyMiddleWare = middleware => createStore => reducer => {
  // 创建一个store
  let store = createStore(reducer);
  let middle = logger(store);
  let dispatch = middle(store.dispatch);
  return {...store, dispatch}
}
// applyMiddleWare 可以返回一个store store中的dispatch方法是logger最后的返回值
let store = applyMiddleWare(logger)(createStore)(reducer);
// 上一步的函数
// let old = store.dispatch;
// // 新函数
// store.dispatch = function(action) {
//   console.log('派发前的状态',store.getState().number);
//   old(action);
//   console.log('派发后的状态',store.getState().number);
// }

export default store;
