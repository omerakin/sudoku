import React from 'react';
import {Row} from '../components/Row';
import { connect } from 'react-redux';

class Board extends React.Component {
  render() {
    console.log('board render...');
    return (
      <table>
				<tbody>
					{this.props.board.map(renderRow)}
				</tbody>
			</table>
    );
  }
};

const renderRow = (row, rowIndex) => {
  return (
    <Row
      key={rowIndex}
      row={row}
      rowIndex={rowIndex}/>
  );
};

function mapStateToProps(state) {
  return {
    board: state.board
  };
}

export default connect(mapStateToProps)(Board);
