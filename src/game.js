import React, { Component } from 'react';
import Cell from './cell';
import Header from './header';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.setupGame()};
		this.header = React.createRef();
  }

  setupGame() {
    let rows;
    let cols;
    let flags;
    let mines = 0;
    const board = [];

    switch(this.props.difficulty) {
      case 'intermediate':
        rows = cols = 16;
        flags = 40;
        break;
      case 'expert':
        rows = 16;
        cols = 30;
        flags = 99;
        break;
      default:
        rows = cols = 9
        flags = 10;
    }

    for(let row=0; row<rows; row++) {
      board[row] = [];
      for(let col=0; col<cols; col++) {
        let x = Math.round(Math.random()*(rows - 1));
        let y = Math.round(Math.random()*(cols - 1));
        let armed = (mines < flags && x === row && y === col);
        board[row][col] = <Cell key={row+'.'+col} armed={armed} />;
        if (armed) mines++;
      }
    }

    return {
      rows: rows,
      cols: cols,
      flags: flags,
      mines: mines,
      coveredCells: rows*cols,
      board: board,
      lost: false,
      rowClicked: null,
      colClicked: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.difficulty !== prevProps.difficulty) {
      this.setState({...this.setupGame()});
			this.header.current.resetTimer();
    }
  }

  hasWon() {
    return this.coveredCells === this.mines;
  }

  render() {
    const rows = [];
    for (let row=0; row<this.state.rows; row++) {
      rows.push(<div key={row} className="board-row">{this.state.board[row]}</div>);
    }

    return (
      <div className="text-center">
        <div className="game">
          <div>
						<Header ref={this.header} {...this.state} />
            {rows}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
