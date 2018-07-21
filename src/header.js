import React, { Component } from 'react';
import Smiley from './smileys';
import Timer from './timer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.timer = React.createRef();
  }

  resetTimer() {
    this.timer.current.reset();
  }

  render() {
    return(
      <div className="board-header">
        <div className="flag-count">{this.props.flags}</div>
        <Smiley />
        <Timer ref={this.timer} />
      </div>
    );
  }
}

export default Header;
