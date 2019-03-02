import React, { Component } from "react";

class Character extends Component {
  
  render() {
    return (
        <div onClick={this.props.handleOnClick} className="character">
          <img
            alt="https://placehold.it/200"
            src={`./images/${this.props.character}.png`}
            name={this.props.character}
          />
        </div>
    );
  }
}

export default Character;
