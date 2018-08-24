import React, { Component } from 'react';

export default class Detail extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.id}
        {/* {this.props.location.state.username} */}
      </div>
    )
  }
}
