import React from 'react';
import logo from '../logo.svg';

const Header = (props) => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Sudoku App</h2>
    </div>
  );
};

export default Header;
