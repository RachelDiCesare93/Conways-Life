import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './About.css';


class About extends Component {
  render() {
    return (
    <div className = "about-page">
    <div className = "Game-Link">
    <Link to="/">Game</Link>
    </div>
     <div className="About">
        <h3>About</h3>
        <p>Conway's Game of Life is an imaginary cellular automation made by the british mathematician
            John Horton Conway in 1970.This is a zero-player game, meaning its evolution is determined by its initial state
            ,requiring no further input.The reason it is called a game is because people who play the game can set
            it up in different ways to make it do different things.It is on the of the first ever simulation games that
            represent things that happen in real life.</p>
      </div>
    </div>
    );
  }
}

export default About;
