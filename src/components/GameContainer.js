import React, { Component } from "react";
import Character from "./Character";
const images = [
  "butters",
  "cartman",
  "chef",
  "commander",
  "kenny",
  "lemmiwinks",
  "mackey",
  "mrsclaridge",
  "mrstotch",
  "randymarsh",
  "terrance",
  "tweak"
];
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class GameContainer extends Component {

  state = images.map(char=>{
    return {[char]:false}
  })

  handleOnClick = event=>{
    if(this.state[event.target.name]){
      images.map(char=>{
        this.setState({[char]:false})
      });
      this.props.handleLoss();
    }else{
      this.setState({
        [event.target.name]:true
      })
      this.props.handleGoodClick()
      this.render()
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          {shuffle(images).map(char => (
            <Character handleOnClick = {this.handleOnClick} character={char} />
          ))}
        </div>
      </div>
    );
  }
}

export default GameContainer;
