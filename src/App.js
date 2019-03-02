import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import GameContainer from "./components/GameContainer";

class App extends Component {
  state = {
    message: "LET'S GO!",
    score: 0
  };

  handleLoss = () => {
    this.setState({
      message:"YOU LOSE, LOSER!",
      score:0
    })
    this.render();
  };

  handleGoodClick = () => {
    this.setState({
      score:this.state.score + 1,
      message: "Good Guess!"

    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>Clicky Game!</span>
          <div>{this.state.message}</div>
          <div>{this.state.score}</div>
        </header>
        <GameContainer
          handleGoodClick={this.handleGoodClick}
          handleLoss={this.handleLoss}
        />
      </div>
    );
  }
}

export default App;
