import React from 'react'
import './Board.css'
import Square from './Square/Square'
import {findWinner} from './Winner'

class Board extends React.Component {


    renderSquare(i){
        return <Square 
                    value={this.props.squares[i]}
                    onClick={()=>this.props.onClick(i)}>
                </Square>
    }


    render() {
        return (
            <div>
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