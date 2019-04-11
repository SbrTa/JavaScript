import React from 'react'
import './Board.css'
import Square from './Square/Square'
import {findWinner} from './Winner'

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xNow: true
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        
        if(findWinner(squares) || squares[i]){
            return;
        }

        squares[i] = this.state.xNow ? 'X' : 'O';
        this.setState({
            squares,
            xNow: !this.state.xNow
        })
    }


    renderSquare(i){
        return <Square 
                    value={this.state.squares[i]}
                    onClick={()=>this.handleClick(i)}>
                </Square>
    }


    render() {
        const winner = findWinner(this.state.squares);
        let status = null;
        if(winner){
            status = 'Winner: ' + winner;
        }else{
            status = 'Next player : ' + (this.state.xNow ? 'X':'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
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
            </div>
            
        )
    }
}

export default Board