import React, { Component } from 'react';
import local from './local';

class Password extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.password} onChange={() => {}} />
      </div>
    )
  }
}

export default local('password')(Password)
