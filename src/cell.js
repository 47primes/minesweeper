import React, { Component } from 'react';
import Square from './square';

class Cell extends Component {
  constructor(props) {
    super(props);

    this.armed = false;
    this.questioned = false;
  }

  render() {
    return <div className="cell" onClick={() => this.props.start()}><Square type={this.props.type} /></div>
  }
}

export default Cell;
