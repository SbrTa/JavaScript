import React from 'react'
import './Game.css'
import Board from './Board/Board'

class Game extends React.Component{
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board></Board>
                </div>

                <div className="game-info">
                    <h3>game info</h3>
                </div>

            </div>
        )
    }
}


export default Game