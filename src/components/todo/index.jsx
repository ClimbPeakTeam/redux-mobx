import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todoActions from '@/redux/action/todo';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    console.log(this.refInput.value);
    this.props.add_todo(this.refInput.value);
    this.refInput.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => this.refInput = input} />
        <button onClick={this.handleAdd}>添加</button>
        {
          this.props.todos.map( (item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </div>
    )
  }
}

export default connect((state) => ({todos: state.todo}), todoActions)(Todo);
