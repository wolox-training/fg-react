import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from '../board';
import { calculateWinner } from '../helpers';
import { changeSquare, changeStep } from '../../../redux/actions';

import styles from './styles.scss';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ]
    };
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(prevState => ({
      history: history.concat([
        {
          squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !prevState.xIsNext
    }));
  };

  jumpTo(step) {
    this.props.changeStep(step);
  }

  render() {
    const history = this.state.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : `Go to game start`;
      return (
        <li key={step}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className={styles.game}>
        <div>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool,
  changeSquare: PropTypes.func,
  changeStep: PropTypes.func
};

const mapStateToProps = state => ({
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});

const mapDispatchToProps = dispatch => ({
  changeSquare: stepNumber => {
    dispatch(changeSquare(stepNumber));
  },
  changeStep: step => {
    dispatch(changeStep(step));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
