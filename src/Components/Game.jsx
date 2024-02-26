import {React,useState} from 'react'
import Board from './Board'

export default function Game() {
    const [history,setHistory]=useState([{squares:Array(9).fill(null)}])
    const [currentMove,setCurrentMove]=useState(0)
    const xisNext=currentMove%2===0
    const currentSquares=history[currentMove];
    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    function jumpto(move){
        setCurrentMove(move)
            }
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
                <li key={move}>
                <button key={move} onClick={() => jumpto(move)}>{desc}</button>
                </li>
            )
        })




  return (
    <div className="game">
        <div className="game-board">
        <Board isXNext={xisNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>

        </div>
      
    </div>
  )
}
