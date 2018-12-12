import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Rules.css';


class About extends Component {
  render() {
    return (
    <div className = "rules-page">
    <div className = "Game-Link">
    <Link to="/">Game</Link>
    </div>
     <div className = "Rules">
     <h4>Game Rules</h4>
     <ol>
     <li>Any live cell with fewer than two live neighbors dies, as if caused by under population.</li>
     <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
     <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
     <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
     </ol>
     </div>
   </div>
    );
  }
}

export default About;