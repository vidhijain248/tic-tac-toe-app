// import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import Square from './components/Square';
const initialState=["","","","","","","","",""]
function App() {
  const [gameState,updateGameState]=useState(initialState);
  const [isXChance,updateIsXChance]=useState(false);
  const onSquareClicked=(index)=>{
    let Strings = Array.from(gameState);
    Strings[index]= isXChance?"X":"0";
    updateIsXChance(!isXChance);
    updateGameState(Strings);
    
  }
  const clearGame = () => {
    updateGameState(initialState)
}
useEffect(() => {
    let winner = checkWinner();
    if (winner) {
        clearGame();
        alert(`Ta da ! ${winner} won the Game !`)
    }
}, [gameState])

const checkWinner = () => {
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
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}
  return (
    <div className="app-header">
     <p className="heading-text"> Let's Play</p>
     <div className="row jc-center">
       <Square className="b-bottom-right" state={gameState[0]} onClick={()=>onSquareClicked[0]}></Square>
       <Square className="b-bottom-right" state={gameState[1]} onClick={()=>onSquareClicked[1]}></Square>
       <Square className="b-bottom" state={gameState[2]} onClick={()=>onSquareClicked[2]}></Square>
     </div>
     <div className="row jc-center">
       <Square className="b-bottom-right" state={gameState[3]} onClick={()=>onSquareClicked[3]}></Square>
       <Square className="b-bottom-right" state={gameState[4]} onClick={()=>onSquareClicked[4]}></Square>
       <Square className="b-bottom" state={gameState[5]} onClick={()=>onSquareClicked[5]}></Square>
     </div>
     <div className="row jc-center">
       <Square className="b-right" state={gameState[6]} onClick={()=>onSquareClicked[6]}></Square>
       <Square className="b-right" state={gameState[7]} onClick={()=>onSquareClicked[7]}></Square>
       <Square className="b-left-right" state={gameState[8]} onClick={()=>onSquareClicked[8]}></Square>
     </div>
     <button className='clear-button' onClick={clearGame}>Clear button</button>
    </div>
  );
}

export default App;
