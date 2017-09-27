import React from 'react';
import {solve, check} from '../action/index';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const ButtonsDown = (props) => {
  return (
    <div>
      <button
        className='check'
        onClick={() => {
          props.check();
          //alert('This Sudoku is solvable, keep going !!');
        }}
      >
        Check
      </button>
      <button
        className='solve'
        onClick={() => {props.solve()}}
      >
        Solve
      </button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    solve: solve,
    check: check
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ButtonsDown);
