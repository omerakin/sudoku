import React from 'react';
import {inputValue} from '../action/index';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    let val = this.props.val;
    this.state = {isFixed: (val ? true : false) };
  }

  handleChange(e) {
    const {row, col} = this.props;
    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const number = parseInt(e.target.value, 10);
    const isDeleted = e.target.value === '';

    if (range.indexOf(number) > -1 || isDeleted) {
      this.props.inputValue(row, col, number);
    }
  }

  render() {
    let index = this.props.index;
    let val = this.props.val;
    return (
      <td key={index}>
        <input
          value={val ? val : ''}
          disabled={this.state.isFixed}
          onChange={this.handleChange}
        />
      </td>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({inputValue: inputValue}, dispatch);
}

export default connect(null, mapDispatchToProps)(Square);
