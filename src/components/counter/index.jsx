import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '@/redux/action/counter';

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.add(10);
        }}>+</button>
        <div>{this.props.num}</div>
        <button onClick={ () => {
          this.props.del(10);
        }}>-</button>
      </div>
    )
  }
}

// connect 执行时有两个函数 mapStateToProps (映射属性到组件上) mapDispatchToProps(映射状态到属性上)
// 这两个函数的返回值会作为当前组件的属性
// let mapStateToProps = (state) => {
//   // 参数是state
//   // return {n1: state.counter.num}
//   return {...state.counter};       // {...state.counter}  ===> {num: 100}
// };
// let mapDispatchToProps = (dispatch) => {
//   // 返回dispatch函数
//   return {
//     add: (count) => {
//       dispatch(action.add(count))
//     },
//     del: (count) => {
//       dispatch(action.del(count))
//     }
//   }
// }
//  (state) => ({...state.counter})  ===>  上面的 mapStateToProps
//  connect 中的mapDispatchToProps可以传入actionCreator对象

// redux 用以下函数包装
// let bindActionCreators = (actions) => {
//   // 传入一个action进行包装 返回一个函数 mapDispathToProps
//   return (dispatch) => {
//     let obj = {};
//     for(let key in actions) {
//       // add del
//       obj[key] = (...args) => {
//         dispatch(actions[key](...args));
//       }
//     }
//     return obj;
//   }
// }
//  bindActionCreators(action) ==> mapDispatchToProps
export default connect((state) => ({...state.counter}), action)(Counter);

