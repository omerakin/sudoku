import React from 'react';
import Square from './Square';

export class Row extends React.Component {
  render() {
    return (
      <tr key={this.props.rowIndex}>
        {this.props.row.map(renderSquare.bind(this, this.props.rowIndex))}
      </tr>
    );
  };
}

const renderSquare = (rowIndex, val, colIndex) => {
  return (
    <Square
      key={colIndex}
      row={rowIndex}
      col={colIndex}
      val={val}/>
  );
};
