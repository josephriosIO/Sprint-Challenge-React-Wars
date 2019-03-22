import React, { Component } from "react";
import "./StarWars.css";
import anime from "animejs";

class StarWarsCard extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { birth_year, name } = this.props.characters;
    return (
      <div className="card-container">
        <div
          onClick={this.handleClick}
          className={`front card ${this.state.isFlipped ? "hide" : null}`}
        >
          {name}
        </div>

        <div
          onClick={this.handleClick}
          className={`hide card ${this.state.isFlipped ? "show back" : null}`}
        >{`${name} was born on the year ${birth_year}.`}</div>
      </div>
    );
  }
}

export default StarWarsCard;
