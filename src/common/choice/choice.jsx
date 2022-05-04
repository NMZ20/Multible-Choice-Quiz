import React, { Component } from "react";

class Choice extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        className="choice"
        onClick={() =>
          this.props.onAnswer(this.props.answer, this.props.isCorrect)
        }
      >
        {this.props.answer}
      </div>
    );
  }
}

export default Choice;
