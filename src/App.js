import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ButtonsUp from './components/ButtonsUp';
import Board from './containers/Board';
import ButtonsDown from './components/ButtonsDown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <ButtonsUp />
          <Board />
          <ButtonsDown />
        </div>
      </div>
    );
  }
}

export default App;
