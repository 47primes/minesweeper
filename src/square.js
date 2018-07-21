import React, { Component } from 'react';

class Square extends Component {
  covered() {
    return(
      <g>
        <rect width="15" height="15" style={{fill: 'rgb(255,255,255)'}} />
        <g transform="translate(2,2)">
          <rect width="14" height="14" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        <g transform="translate(2,2)">
          <rect width="12" height="12" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(15,0)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(14,1)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(0,15)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(1,14)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(15,1)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(1,15)">
          <rect width="1" height="1" style={{fill: 'rgb(128,128,128)'}} />
        </g>
      </g>
    );
  }

  flag() {
    return(
      <g>
        {this.covered()}
        <g>
          <g transform="translate(7,3)">
            <rect width="2" height="5" style={{fill: 'rgb(255,0,0)'}} />
          </g>
          <g transform="translate(5,4)">
            <rect width="2" height="3" style={{fill: 'rgb(255,0,0)'}} />
          </g>
          <g transform="translate(4,5)">
            <rect width="1" height="1" style={{fill: 'rgb(255,0,0)'}} />
          </g>
          <g transform="translate(8,8)">
            <rect width="1" height="5" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(6,10)">
            <rect width="4" height="3" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(4,11)">
            <rect width="8" height="2" style={{fill: 'rgb(0,0,0)'}} />
          </g>
        </g>
      </g>
    );
  }

  question() {
    return(
      <g>
        {this.covered()}
        <g>
          <g transform="translate(5,4)">
            <rect width="2" height="2" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(6,3)">
            <rect width="4" height="1" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(9,4)">
            <rect width="2" height="3" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(8,7)">
            <rect width="2" height="1" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(7,8)">
            <rect width="2" height="2" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(7,11)">
            <rect width="2" height="2" style={{fill: 'rgb(0,0,0)'}} />
          </g>
        </g>
      </g>
    );
  }

  bomb() {
    return(
      <g>
        <g transform="translate(0,15)">
          <rect width="16" height="1" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        <g transform="translate(15,0)">
          <rect width="1" height="16" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        <g>
          <g transform="translate(3,3)">
            <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(11,3)">
            <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(3,11)">
            <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(11,11)">
            <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(7,1)">
            <rect width="1" height="13" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(1,7)">
            <rect width="13" height="1" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(4,4)">
            <rect width="7" height="7" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(5,3)">
            <rect width="5" height="9" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(3,5)">
            <rect width="9" height="5" style={{fill: 'rgb(0,0,0)'}} />
          </g>
          <g transform="translate(5,5)">
            <rect width="2" height="2" style={{fill: 'rgb(255,255,255)'}} />
          </g>
        </g>
      </g>
    );
  }

  clickedBomb() {
    return(
      <g>
        <rect width="16" height="16" style={{fill: 'rgb(255,0,0)'}} />
        {this.bomb()}
      </g>
    );
  }

  flaggedWrong() {
    return(
      <g>
        <rect width="16" height="16" style={{fill: 'rgb(192,192,192)'}} />
        {this.bomb()};
        <polyline points="2,2 13,13" style={{fill: 'none', stroke:'red', strokeWidth: 1}} />
        <polyline points="2,13 13,2" style={{fill: 'none', stroke:'red', strokeWidth: 1}} />
      </g>
    );
  }

  render() {
    let type;
    if (this.props.type) {
      type = this.props.type;
    } else {
      type = 'covered';
    }

    return(
      <svg width="16" height="16">
        {type && this[type]()}
      </svg>
    );
  }
}

export default Square;
