import React, { Component } from 'react';
import store from '@/redux'
import * as todoActions from '@/redux/action/todo';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    console.log(this.refInput.value);
    store.dispatch(todoActions.add_todo(this.refInput.value));
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => this.refInput = input} />
        <button onClick={this.handleAdd}>添加</button>
      </div>
    )
  }
}

export default Todo;
