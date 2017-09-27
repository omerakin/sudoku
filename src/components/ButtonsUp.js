import React from 'react';
import {clear} from '../action/index';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const ButtonsUp = (props) => {
  return (
    <div>
      <button
        className='clear'
        onClick={() => {
          props.clear();
        }}
      >
        ⟲ Clear
      </button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({clear: clear}, dispatch);
}

export default connect(null, mapDispatchToProps)(ButtonsUp);
