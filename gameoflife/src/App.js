import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Game from './Game';
import About from './About';
import Rules from './Rules';

class App extends Component {
  render() {
    return (
     <div className="App">
        <h1>Conway's Game of Life- Rachel DiCesare</h1>
        <Route exact path="/" render={props => <Link to="/about">About</Link>} />
        ||
        <Route exact path="/" render={props => <Link to="/rules">Rules</Link>} />
        <Route exact path="/" render={props => <Game />} />
        <Route path="/about" render={props => <About />} />
        <Route path="/rules" render={props => <Rules />} />
      </div>
    );
  }
}

export default App;
