import React from 'react';
import './App.css';
import Chessboard from 'chessboardjsx';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {fen: "", score: "", hideScore: true, picked: false}
  }
  componentDidMount() {
    return fetch("chess-positional-trainer/games.json")
    .then((response) => response.json())
      .then((jsonData) => {
        this.setState({games: jsonData.games})
        let random = this.getRandomInt(this.state.games.length)
        this.setState({fen: jsonData.games[random].fen, score:jsonData.games[random].score});
      })
      .catch((error) => {
        console.error(error)
      })
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  evaluateChoice(choice) {
    let tempScore = parseInt(this.state.score)/100
    var answer
    if (tempScore < -0.5) {
       answer = -1
    } else if (tempScore > 0.5) {
      answer = 1
    } else {
      answer = 0
    }
    if (choice === answer) {
      this.setState({picked: true, correct:true})
    }
    else {
      this.setState({picked: true, correct: false})
    }
  }
  render() {
    console.log(this.state.fen)
    return (
      <>
      <h1>CHESS POSITIONAL TRAINER</h1>
      <Chessboard calcWidth={({ screenWidth, screenHeight}) => Math.min(0.6*screenWidth, 450)} position={this.state.fen} draggable={false} orientation = {this.state.fen.split(" ")[1] === 'w' ? 'white' : 'black'}/>
      
      {this.state.picked ? null :
      <>
      <h2>Evaluate the position:</h2>
      <div className="buttons">
        <button className="evalButtons" type="button" onClick={() => {this.evaluateChoice(1)}}>White is stronger</button>
        <button className="evalButtons" type="button" onClick={() => {this.evaluateChoice(0)}}>The position is equal</button>
        <button className="evalButtons" type="button" onClick={() => {this.evaluateChoice(-1)}}>Black is stronger</button>
      </div>
      </>}
      {this.state.picked ? 
      <div>
        <h2>{this.state.correct ? "Correct!" : "Incorrect"}</h2>
        <p id="score">{"Stockfish evaluation: " + parseInt(this.state.score)/100}</p>
        <p>{this.state.fen}</p>
        <button type="button" onClick={() => {let random = this.getRandomInt(this.state.games.length)
          this.setState({picked:false, hideScore: true, fen: this.state.games[random].fen, score:this.state.games[random].score})}}>Next</button>
      </div> : null}
      </>
      );
  }
  
}
export default App;
