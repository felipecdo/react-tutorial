import React from 'react';
import { Link } from "react-router-dom";
import './tictactoe.css';
import MyButton from './components/button';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Message extends React.Component {
  render() {
    return <h1> Parabéns {this.props.winner} !!! </h1>
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />);
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function getMessage(winner) {
  if (winner) {
    return <Message winner={winner} />
  }
  return;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      player: 'X',
      stepNumber: 0,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + this.state.player;
    }

    let message = getMessage(winner);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <MyButton color="pink"
            onClick={() => this.jumpTo(move)}>
            {desc}
          </MyButton>
        </li>
      );
    });

    return (
      <div className="game">
        <div>
          <div>{status}</div>
        </div>
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => { this.handleClick(i) }} />
        </div>
        <div className="game-info">
          
          {message}
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();//create a copy

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.player;
    const nextPlayer = (this.state.player === 'X' ? 'O' : 'X')
    this.setState({
      player: nextPlayer,
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
    });
  }
}

// ========================================
function TicTacToe(props) {
  return (
    <div className='content'>
      < Game />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;