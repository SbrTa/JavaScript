import React from 'react'
import './Game.css'
import Board from './Board/Board'
import { findWinner } from './Board/Winner';

class Game extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xNow: true,
            stepNumber: 0
        }
    }

    
    handleClick(i){
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        
        if(findWinner(squares) || squares[i]){
            return;
        }

        squares[i] = this.state.xNow ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares
            }]),
            xNow: !this.state.xNow,
            stepNumber: history.length
        })
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xNow: (step%2)===0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = findWinner(current.squares);

        const moves = history.map((step,move)=>{
            const desc = move ? 'Go to move '+move : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={ ()=>this.jumpTo(move) }>
                        {desc}
                    </button>
                </li>
            );
        });


        let status = null;
        if(winner){
            status = 'Winner: ' + winner;
        }else{
            status = 'Next player : ' + (this.state.xNow ? 'X':'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i)=>this.handleClick(i)}
                    ></Board>
                </div>

                <div className="game-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>

            </div>
        )
    }
}


export default Game