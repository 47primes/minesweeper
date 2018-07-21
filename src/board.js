import React, { Component } from 'react';
import BoardHeader from './board_header';
import Cell from './cell';

class Board extends Component {
  render() {
    const cells = [];
    for (let x=0; x<this.props.rows; x++) {
      let children = [];
      for (let y=0; y<this.props.cols; y++) {
        children.push(<Cell {...this.props} />);
      }
      cells.push(<div className="board-row">{children}</div>);
    }

    return(
      <BoardHeader {...{...this.props, children: cells}} />
    );
  }
}

export default Board;
