import React, { Component } from 'react';

class Smiley extends Component {
  render() {
    return(
      <svg width="24" height="24">
        <rect width="24" height="24" style={{fill: 'rgb(255,255,255)'}} />
        <g transform="translate(2,2)">
          <rect width="22" height="22" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        <g transform="translate(2,2)">
          <rect width="20" height="20" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(23,0)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(22,1)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(0,23)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(1,22)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(23,1)">
          <rect width="1" height="1" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        <g transform="translate(1,23)">
          <rect width="1" height="1" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        {/* Smiley Face */}
        <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1" fill="yellow" />
        <g transform="translate(9,8)">
          <rect width="2" height="2" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(13,8)">
          <rect width="2" height="2" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(10,15)">
          <rect width="4" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(9,14)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(8,13)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(14,14)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(15,13)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
      </svg>
    );
  }
}

class Clicked extends Component {
  render() {
    return(
      <svg width="24" height="24">
        <rect width="24" height="24" style={{fill: 'rgb(192,192,192)'}} />
        <g transform="translate(2,2)">
          <rect width="22" height="22" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        <g transform="translate(3,3)">
          <rect width="20" height="20" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(23,0)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(22,1)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(0,23)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(1,22)">
          <rect width="1" height="1" style={{fill: 'rgb(192,192,192)'}} />
        </g>
        <g transform="translate(23,1)">
          <rect width="1" height="1" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        <g transform="translate(1,23)">
          <rect width="1" height="1" style={{fill: 'rgb(128,128,128)'}} />
        </g>
        {/* Smiley Face */}
        <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1" fill="yellow" />
        <g transform="translate(9,8)">
          <rect width="2" height="2" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(13,8)">
          <rect width="2" height="2" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(10,15)">
          <rect width="4" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(9,14)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(8,13)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(14,14)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
        <g transform="translate(15,13)">
          <rect width="1" height="1" style={{fill: 'rgb(0,0,0)'}} />
        </g>
      </svg>
    );
  }
}

export default Smiley;

export {
  Clicked,
};
