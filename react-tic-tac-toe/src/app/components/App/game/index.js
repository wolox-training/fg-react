import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';

import Board from '../board';
import { calculateWinner } from '../helpers';
import { changeSquare, changeStep } from '../../../redux/actions/game';

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
    const history = this.state.history.slice(0, this.props.stepNumber + 1);
    const current = history[this.props.stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.props.changeSquare(history.length);
    this.setState({
      history: history.concat([
        {
          squares
        }
      ])
    });
  };

  jumpTo(step) {
    this.props.changeStep(step);
  }

  render() {
    if (localStorage.getItem('token')) {
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
    return <Redirect to="/login" />;
  }
}

Game.propTypes = {
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool,
  changeSquare: PropTypes.func,
  changeStep: PropTypes.func
};

const mapStateToProps = state => ({
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext
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
