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
        <div>{this.props.n1}</div>
        <button onClick={ () => {
          this.props.del(10);
        }}>-</button>
      </div>
    )
  }
}

// connect 执行时有两个函数 mapStateToProps (映射属性到组件上) mapDispatchToProps(映射状态到属性上)
// 这两个函数的返回值会作为当前组件的属性
let mapStateToProps = (state) => {
  // 参数是state
  return {n1: state.counter.num}
};
let mapDispatchToProps = (dispatch) => {
  // 返回dispatch函数
  return {
    add: (count) => {
      dispatch(action.add(count))
    },
    del: (count) => {
      dispatch(action.del(count))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
